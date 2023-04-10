import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export class CreatePatrimonyTable1681148332832 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'patrimony',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'number',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'rfid',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'last_scanned_date',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'last_found_date',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'person_id',
                        type: 'uuid',
                    },
                    {
                        name: 'room_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            'patrimony',
            new TableForeignKey({
                name: 'fk_patrimony_room',
                columnNames: ['room_id'],
                referencedTableName: 'room',
                referencedColumnNames: ['id'],
            })
        );

        await queryRunner.createForeignKey(
            'patrimony',
            new TableForeignKey({
                name: 'fk_patrimony_person',
                columnNames: ['person_id'],
                referencedTableName: 'person',
                referencedColumnNames: ['id'],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('patrimony');
    }

}
