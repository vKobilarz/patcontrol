import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

import Person from '../../models/Person';

import personSeed from '../seeds/person';

export class SeedPerson1623709047333 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const personRepository = getRepository(Person);

    personRepository.save(personSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
