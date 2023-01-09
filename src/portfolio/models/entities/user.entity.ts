import { Column, Entity } from 'typeorm';

@Entity('users', { schema: 'auth', synchronize: false })
export class Users {
  @Column('uuid', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('character varying', {
    name: 'encrypted_password',
    nullable: true,
    length: 255,
  })
  encryptedPassword: string | null;

  @Column('timestamp with time zone', {
    name: 'email_confirmed_at',
    nullable: true,
  })
  emailConfirmedAt: Date | null;

  @Column('timestamp with time zone', { name: 'invited_at', nullable: true })
  invitedAt: Date | null;

  @Column('character varying', {
    name: 'confirmation_token',
    nullable: true,
    length: 255,
  })
  confirmationToken: string | null;

  @Column('timestamp with time zone', {
    name: 'confirmation_sent_at',
    nullable: true,
  })
  confirmationSentAt: Date | null;

  @Column('character varying', {
    name: 'recovery_token',
    nullable: true,
    length: 255,
  })
  recoveryToken: string | null;

  @Column('timestamp with time zone', {
    name: 'recovery_sent_at',
    nullable: true,
  })
  recoverySentAt: Date | null;

  @Column('character varying', {
    name: 'email_change_token_new',
    nullable: true,
    length: 255,
  })
  emailChangeTokenNew: string | null;

  @Column('character varying', {
    name: 'email_change',
    nullable: true,
    length: 255,
  })
  emailChange: string | null;

  @Column('timestamp with time zone', {
    name: 'email_change_sent_at',
    nullable: true,
  })
  emailChangeSentAt: Date | null;

  @Column('timestamp with time zone', {
    name: 'last_sign_in_at',
    nullable: true,
  })
  lastSignInAt: Date | null;

  @Column('timestamp with time zone', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp with time zone', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
