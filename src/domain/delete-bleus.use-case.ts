import { Service } from 'typedi';
import { BleusRepository, Bleus } from '../data';

@Service()
export class DeleteBleusUseCase {

  constructor(
    private repository: BleusRepository
  ) {}

  execute(id: number) {
    return this.repository.delete(id);
  }
}
