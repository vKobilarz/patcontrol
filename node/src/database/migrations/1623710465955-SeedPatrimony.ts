import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

import Patrimony from '../../models/Patrimony';
import Person from '../../models/Person';
import Room from '../../models/Room';

export class SeedPatrimony1623710465955 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const patrimonyRepository = getRepository(Patrimony);
    const roomRepository = getRepository(Room);
    const personRepository = getRepository(Person);

    const room: any = await roomRepository.findOne({
      where: { name: 'room01' },
    });

    if (!room) return;

    const personAdmin = await personRepository.findOne({
      where: { email: 'user@admin.com' },
    });

    if (!personAdmin) return;

    const patrimonySeed = [];

    for (let i = 1; i <= 64; i++) {
      const mod16 = i % 16;
      const mod8 = i % 8;

      let patrimony: Patrimony = {
        person_id: personAdmin.id,
      };

      // Add Room
      if (i % 2 === 0) {
        patrimony.room_id = room.id;
      }

      // Add RFID
      if ([0, 3].includes(i % 4)) {
        patrimony.rfid = i.toString();
      }

      // Add Found Date
      if ((mod8 >= 5 && mod8 <= 7) || mod8 === 0) {
        patrimony.last_found_date = new Date();
      }

      // Add Scan Date
      if ((mod16 >= 9 && mod16 <= 16) || mod16 === 0) {
        patrimony.last_scanned_date = new Date();
      }

      // Add Description and Number
      if (i >= 33) {
        patrimony.description = `room${i}`;
        patrimony.number = i.toString();
      }

      patrimonySeed.push(patrimony);
    }

    patrimonyRepository.save(patrimonySeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
