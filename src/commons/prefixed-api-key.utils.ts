import { randomBytes } from 'node:crypto';
import { promisify } from 'node:util';
import bs58 from 'bs58';
import { padStart } from 'lodash';
import { compare, hash } from 'bcrypt';

export const hashLongToken = (longToken: string) => hash(longToken, 12);

export interface GenerateAPIKeyOptions {
  keyPrefix: string;
  shortTokenPrefix?: string;
  shortTokenLength?: number;
  longTokenLength?: number;
}

export const generateAPIKey = async ({
  keyPrefix,
  shortTokenPrefix = '',
  shortTokenLength = 12,
  longTokenLength = 32,
}: GenerateAPIKeyOptions) => {
  if (!keyPrefix) return {};

  const generatedRandomBytes = promisify(randomBytes);
  const [shortTokenBytes, longTokenBytes] = await Promise.all([
    // you need ~0.732 * length bytes, but it's fine to have more bytes
    generatedRandomBytes(shortTokenLength),
    generatedRandomBytes(longTokenLength),
  ]);

  let shortToken = padStart(
    bs58.encode(shortTokenBytes),
    shortTokenLength,
    '0',
  ).slice(0, shortTokenLength);

  const longToken = padStart(
    bs58.encode(longTokenBytes),
    longTokenLength,
    '0',
  ).slice(0, longTokenLength);

  const longTokenHash = await hashLongToken(longToken);

  shortToken = (shortTokenPrefix + shortToken).slice(0, shortTokenLength);

  const token = `${keyPrefix}_${shortToken}_${longToken}`;

  return { shortToken, longToken, longTokenHash, token };
};

export const extractLongToken = (token: string) =>
  token.split('_').slice(-1)?.[0];

export const extractShortToken = (token: string) => token.split('_')?.[1];

export const extractLongTokenHash = (token: string) =>
  hashLongToken(extractLongToken(token));

export const getTokenComponents = async (token: string) => ({
  longToken: extractLongToken(token),
  shortToken: extractShortToken(token),
  longTokenHash: await hashLongToken(extractLongToken(token)),
  token,
});

export const checkAPIKey = async (
  token: string,
  expectedLongTokenHash: string,
) => compare(extractLongToken(token), expectedLongTokenHash);
