import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1673224908200 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "auth"`);
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS auth.users ( id uuid NOT NULL, email varchar(255) NULL, encrypted_password varchar(255) NULL, email_confirmed_at timestamptz NULL, invited_at timestamptz NULL, confirmation_token varchar(255) NULL, confirmation_sent_at timestamptz NULL, recovery_token varchar(255) NULL, recovery_sent_at timestamptz NULL, email_change_token_new varchar(255) NULL, email_change varchar(255) NULL, email_change_sent_at timestamptz NULL, last_sign_in_at timestamptz NULL, CONSTRAINT users_pkey PRIMARY KEY (id))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Don't run because is created for supabase
    // await queryRunner.query(`DROP TABLE "auth"."users"`);
    //await queryRunner.query(`DROP SCHEMA "auth"`);
  }
}
