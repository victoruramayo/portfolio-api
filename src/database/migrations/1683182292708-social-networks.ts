import { MigrationInterface, QueryRunner } from 'typeorm';

export class socialNetworks1683182292708 implements MigrationInterface {
  name = 'socialNetworks1683182292708';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."social_networks_type_enum" AS ENUM('Facebook', 'Github', 'LinkedIn', 'Twitter', 'Youtube', 'Twitch', 'Instagram', 'Whatsapp', 'Telegram', 'Other')`,
    );
    await queryRunner.query(
      `CREATE TABLE "social_networks" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "type" "public"."social_networks_type_enum" NOT NULL, "url" character varying(255) NOT NULL, "id_profile" integer, CONSTRAINT "PK_973974c10fd4f3f1625c24178cc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "social_networks" ADD CONSTRAINT "FK_c26a4d543b20e01d33332816909" FOREIGN KEY ("id_profile") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "social_networks" DROP CONSTRAINT "FK_c26a4d543b20e01d33332816909"`,
    );
    await queryRunner.query(`DROP TABLE "social_networks"`);
    await queryRunner.query(`DROP TYPE "public"."social_networks_type_enum"`);
  }
}
