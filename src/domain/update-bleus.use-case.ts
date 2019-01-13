import { Service } from 'typedi';
import { BleusRepository, Bleus } from '../data';

@Service()
export class UpdateBleusUseCase {

  constructor(
    private repository: BleusRepository
  ) {}

  execute(bleus: Bleus) {
    return this.repository.update(bleus);
  }
}
