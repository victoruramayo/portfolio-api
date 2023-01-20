import { MigrationInterface, QueryRunner } from 'typeorm';

export class public1673721979810 implements MigrationInterface {
  name = 'public1673721979810';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "proyects" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text, "start_date" TIMESTAMP, "end_date" TIMESTAMP, "url" character varying(255), "imagen" character varying(255), "id_profile" integer, CONSTRAINT "PK_b665987521852d1f3d45755ee4f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "profiles" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "names" character varying(255) NOT NULL, "paternal_surname" character varying(255) NOT NULL, "maternal_surname" character varying(255), "brith_day" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid NOT NULL, CONSTRAINT "REL_9e432b7df0d182f8d292902d1a" UNIQUE ("user_id"), CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "portfolios" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "profile_id" integer NOT NULL, CONSTRAINT "PK_488aa6e9b219d1d9087126871ae" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."api_keys_user_apikey_enum" AS ENUM('app', 'user')`,
    );
    await queryRunner.query(
      `CREATE TABLE "api_keys" ("id" SERIAL NOT NULL, "prefix" character varying(60) NOT NULL, "name" character varying(120) NOT NULL, "api_key" character varying(120) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "expire_at" TIMESTAMP, "last_used_at" TIMESTAMP, "user_apikey" "public"."api_keys_user_apikey_enum" NOT NULL, "profile_id" integer NOT NULL, CONSTRAINT "PK_5c8a79801b44bd27b79228e1dad" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_6f6105c8efe05b310d046cbdb3" ON "api_keys" ("prefix") `,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" ADD CONSTRAINT "FK_9f49cde2c57354b8e60c264844e" FOREIGN KEY ("id_profile") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "profiles" ADD CONSTRAINT "FK_9e432b7df0d182f8d292902d1a2" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "portfolios" ADD CONSTRAINT "FK_9177e7fd59af3850578b65239ab" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "api_keys" ADD CONSTRAINT "FK_372edb9df059e676f6d94bd88d5" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "api_keys" DROP CONSTRAINT "FK_372edb9df059e676f6d94bd88d5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "portfolios" DROP CONSTRAINT "FK_9177e7fd59af3850578b65239ab"`,
    );
    await queryRunner.query(
      `ALTER TABLE "profiles" DROP CONSTRAINT "FK_9e432b7df0d182f8d292902d1a2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" DROP CONSTRAINT "FK_9f49cde2c57354b8e60c264844e"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6f6105c8efe05b310d046cbdb3"`,
    );
    await queryRunner.query(`DROP TABLE "api_keys"`);
    await queryRunner.query(`DROP TYPE "public"."api_keys_user_apikey_enum"`);
    await queryRunner.query(`DROP TABLE "portfolios"`);
    await queryRunner.query(`DROP TABLE "profiles"`);
    await queryRunner.query(`DROP TABLE "proyects"`);
  }
}
