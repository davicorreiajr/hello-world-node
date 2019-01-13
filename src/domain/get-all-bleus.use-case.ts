import { Service } from 'typedi';
import { BleusRepository } from '../data';

@Service()
export class GetAllBleusUseCase {

  constructor(
    private repository: BleusRepository
  ) {}

  execute() {
    return this.repository.getAll();
  }
}
