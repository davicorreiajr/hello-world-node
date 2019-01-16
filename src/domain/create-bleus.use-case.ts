import { Service } from 'typedi';
import {BleusRepository } from '../data';

@Service()
export class CreateBleusUseCase {
  constructor(private repository: BleusRepository) {}

  execute(name: string, email: string) {
    return this.repository.create(name, email);
  }
}
