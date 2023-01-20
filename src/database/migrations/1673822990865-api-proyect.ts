import { MigrationInterface, QueryRunner } from 'typeorm';

export class apiProyect1673822990865 implements MigrationInterface {
  name = 'apiProyect1673822990865';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "api_keys" ADD "portfolio_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "api_keys" ADD CONSTRAINT "FK_90d38192d11a1d44623ac4d59b0" FOREIGN KEY ("portfolio_id") REFERENCES "portfolios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "api_keys" DROP CONSTRAINT "FK_90d38192d11a1d44623ac4d59b0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "api_keys" DROP COLUMN "portfolio_id"`,
    );
  }
}
