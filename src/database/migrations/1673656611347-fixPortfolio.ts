import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixPortfolio1673656611347 implements MigrationInterface {
  name = 'fixPortfolio1673656611347';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "portfolios" DROP CONSTRAINT "FK_d880066fd64e4e8f9672fa4636a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "portfolios" DROP CONSTRAINT "REL_d880066fd64e4e8f9672fa4636"`,
    );
    await queryRunner.query(
      `ALTER TABLE "portfolios" ADD CONSTRAINT "FK_d880066fd64e4e8f9672fa4636a" FOREIGN KEY ("user_info_id") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "portfolios" DROP CONSTRAINT "FK_d880066fd64e4e8f9672fa4636a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "portfolios" ADD CONSTRAINT "REL_d880066fd64e4e8f9672fa4636" UNIQUE ("user_info_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "portfolios" ADD CONSTRAINT "FK_d880066fd64e4e8f9672fa4636a" FOREIGN KEY ("user_info_id") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
