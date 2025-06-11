import { MigrationInterface, QueryRunner } from 'typeorm';

export class addOwershipTypes1749671466174 implements MigrationInterface {
  name = 'addOwershipTypes1749671466174';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."proyects_owner_ship_enum" AS ENUM('OWNED', 'EXTERNAL')`,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" ADD "owner_ship" "public"."proyects_owner_ship_enum" NOT NULL DEFAULT 'OWNED'`,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" ALTER COLUMN "types" DROP DEFAULT`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "proyects" ALTER COLUMN "types" SET DEFAULT '{}'`,
    );
    await queryRunner.query(`ALTER TABLE "proyects" DROP COLUMN "owner_ship"`);
    await queryRunner.query(`DROP TYPE "public"."proyects_owner_ship_enum"`);
  }
}
