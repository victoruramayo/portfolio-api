import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTypeProject1683935136672 implements MigrationInterface {
  name = 'AddTypeProject1683935136672';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."proyects_types_enum" AS ENUM('Web', 'Android', 'iOS', 'Mobile', 'Multi Platform', 'Front End', 'Back End')`,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" ADD "types" "public"."proyects_types_enum" array NOT NULL DEFAULT '{}' `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "proyects" DROP COLUMN "types"`);
    await queryRunner.query(`DROP TYPE "public"."proyects_types_enum"`);
  }
}
