import { MigrationInterface, QueryRunner } from 'typeorm';

export class aboutInProfile1674852142339 implements MigrationInterface {
  name = 'aboutInProfile1674852142339';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "profiles" ADD "about_me" text`);
    await queryRunner.query(
      `ALTER TABLE "profiles" ADD "job_position" character varying(255)`,
    );
    await queryRunner.query(
      `ALTER TABLE "profiles" ADD "image_url" character varying(255)`,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" DROP CONSTRAINT "FK_ed0c2e746b6833f5f8cb1b7a38c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" ALTER COLUMN "portfolio_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" ADD CONSTRAINT "FK_ed0c2e746b6833f5f8cb1b7a38c" FOREIGN KEY ("portfolio_id") REFERENCES "portfolios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "proyects" DROP CONSTRAINT "FK_ed0c2e746b6833f5f8cb1b7a38c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" ALTER COLUMN "portfolio_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "proyects" ADD CONSTRAINT "FK_ed0c2e746b6833f5f8cb1b7a38c" FOREIGN KEY ("portfolio_id") REFERENCES "portfolios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "image_url"`);
    await queryRunner.query(
      `ALTER TABLE "profiles" DROP COLUMN "job_position"`,
    );
    await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "about_me"`);
  }
}
