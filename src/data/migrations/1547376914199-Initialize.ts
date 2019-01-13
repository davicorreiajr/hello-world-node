import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1547376914199 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "bleus" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" text NOT NULL, CONSTRAINT "PK_ffcbae4355eaac2a3071ac5182c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "bleus"`);
    }

}
