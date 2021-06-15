import { MigrationInterface, QueryRunner } from 'typeorm';

import personRepository from '../../repository/personRepository';
import roomRepository from '../../repository/roomRepository';

import roomSeed from '../seeds/room';

export class SeedRoom1623709232937 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
