import { MigrationInterface, QueryRunner } from 'typeorm';

export class apikey1673655510877 implements MigrationInterface {
  name = 'apikey1673655510877';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_info" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid NOT NULL, CONSTRAINT "REL_59c55ac40f267d450246040899" UNIQUE ("user_id"), CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "portfolios" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_info_id" integer NOT NULL, CONSTRAINT "REL_d880066fd64e4e8f9672fa4636" UNIQUE ("user_info_id"), CONSTRAINT "PK_488aa6e9b219d1d9087126871ae" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."api_keys_user_apikey_enum" AS ENUM('app', 'user')`,
    );
    await queryRunner.query(
      `CREATE TABLE "api_keys" ("id" SERIAL NOT NULL, "prefix" character varying(60) NOT NULL, "name" character varying(120) NOT NULL, "api_key" character varying(120) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "expire_at" TIMESTAMP NOT NULL, "last_used_at" TIMESTAMP NOT NULL, "user_apikey" "public"."api_keys_user_apikey_enum" NOT NULL, "user_info_id" integer NOT NULL, CONSTRAINT "PK_5c8a79801b44bd27b79228e1dad" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_6f6105c8efe05b310d046cbdb3" ON "api_keys" ("prefix") `,
    );
    await queryRunner.query(
      `ALTER TABLE "user_info" ADD CONSTRAINT "FK_59c55ac40f267d450246040899e" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "portfolios" ADD CONSTRAINT "FK_d880066fd64e4e8f9672fa4636a" FOREIGN KEY ("user_info_id") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "api_keys" ADD CONSTRAINT "FK_42ce9ffe3d4fc37824da7a53b60" FOREIGN KEY ("user_info_id") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "api_keys" DROP CONSTRAINT "FK_42ce9ffe3d4fc37824da7a53b60"`,
    );
    await queryRunner.query(
      `ALTER TABLE "portfolios" DROP CONSTRAINT "FK_d880066fd64e4e8f9672fa4636a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_info" DROP CONSTRAINT "FK_59c55ac40f267d450246040899e"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6f6105c8efe05b310d046cbdb3"`,
    );
    await queryRunner.query(`DROP TABLE "api_keys"`);
    await queryRunner.query(`DROP TYPE "public"."api_keys_user_apikey_enum"`);
    await queryRunner.query(`DROP TABLE "portfolios"`);
    await queryRunner.query(`DROP TABLE "user_info"`);
  }
}
