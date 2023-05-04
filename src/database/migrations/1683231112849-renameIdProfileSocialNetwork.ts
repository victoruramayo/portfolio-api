import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameIdProfileSocialNetwork1683231112849
  implements MigrationInterface
{
  name = 'RenameIdProfileSocialNetwork1683231112849';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "social_networks" DROP CONSTRAINT "FK_c26a4d543b20e01d33332816909"`,
    );
    await queryRunner.query(
      `ALTER TABLE "social_networks" RENAME COLUMN "id_profile" TO "profile_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "social_networks" ALTER COLUMN "profile_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "social_networks" ADD CONSTRAINT "FK_57a28af33c3388945d9524818c5" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "social_networks" DROP CONSTRAINT "FK_57a28af33c3388945d9524818c5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "social_networks" ALTER COLUMN "profile_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "social_networks" RENAME COLUMN "profile_id" TO "id_profile"`,
    );
    await queryRunner.query(
      `ALTER TABLE "social_networks" ADD CONSTRAINT "FK_c26a4d543b20e01d33332816909" FOREIGN KEY ("id_profile") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
