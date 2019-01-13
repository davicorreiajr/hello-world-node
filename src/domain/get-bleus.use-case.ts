import { Service } from 'typedi';
import { BleusRepository } from '../data';

@Service()
export class GetBleusUseCase {

  constructor(
    private repository: BleusRepository
  ) {}

  execute(id: number) {
    return this.repository.getOne(id);
  }
}
