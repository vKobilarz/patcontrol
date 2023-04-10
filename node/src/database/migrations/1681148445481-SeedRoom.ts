import { MigrationInterface, QueryRunner, getRepository } from "typeorm";

import Person from '../../models/Person';
import Room from '../../models/Room';

import roomSeed from '../seeds/room';

export class SeedRoom1681148445481 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const personRepository = getRepository(Person);
        const roomRepository = getRepository(Room);

        const adminPerson: any = await personRepository.findOne({
            where: { email: 'user@admin.com' },
        });

        if (!adminPerson) return;

        const mappedRoomSeed = roomSeed.map(room => ({
            ...room,
            person_id: adminPerson.id,
        }));

        roomRepository.save(mappedRoomSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<void> { }

}
