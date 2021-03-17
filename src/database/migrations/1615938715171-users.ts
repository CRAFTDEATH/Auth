import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class users1615938715171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'mail',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'roles_id',
                    type: 'integer',
                    unsigned: true
                },
                {
                    name: 'status',
                    type: 'enum',
                    enum: ['activated', 'disabled'],
                    default: '"disabled"'
                },
            ],
            foreignKeys: [
                {
                    name: 'roles_id',
                    columnNames: ['roles_id'],
                    referencedTableName: 'roles',
                    referencedColumnNames: ['id']
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropTable('users')
    }

}
