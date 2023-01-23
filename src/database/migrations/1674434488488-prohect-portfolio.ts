import { MigrationInterface, QueryRunner } from 'typeorm';

export class prohectPortfolio1674434488488 implements MigrationInterface {
  name = 'prohectPortfolio1674434488488';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "proyects" ADD "portfolio_id" integer`,
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
      `ALTER TABLE "proyects" DROP COLUMN "portfolio_id"`,
    );
  }
}
