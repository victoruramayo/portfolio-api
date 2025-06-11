import { MigrationInterface, QueryRunner } from 'typeorm';

export class skills1749675845752 implements MigrationInterface {
  name = 'skills1749675845752';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "skills" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "percentage" integer, "profile_id" integer NOT NULL, CONSTRAINT "PK_0d3212120f4ecedf90864d7e298" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" ALTER COLUMN "owner_ship" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "skills" ADD CONSTRAINT "FK_f5144e450e1e3d4cf9ccbf6cece" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "skills" DROP CONSTRAINT "FK_f5144e450e1e3d4cf9ccbf6cece"`,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" ALTER COLUMN "owner_ship" SET DEFAULT 'OWNED'`,
    );
    await queryRunner.query(`DROP TABLE "skills"`);
  }
}
