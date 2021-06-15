import { MigrationInterface, QueryRunner } from 'typeorm';

import personRepository from '../../repository/personRepository';

import personSeed from '../seeds/person';

export class SeedPerson1623709047333 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    personRepository.save(personSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
