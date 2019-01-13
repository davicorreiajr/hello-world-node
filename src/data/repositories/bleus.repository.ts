import { Service } from 'typedi';
import { getConnection, Repository } from 'typeorm';
import { Bleus } from '../entities';

@Service()
export class BleusRepository {
  private repository: Repository<Bleus>;

  constructor() {
    this.repository = getConnection().getRepository(Bleus);
  }

  async create(name: string, email: string): Promise<Bleus> {
    const bleus = new Bleus();
    bleus.email = email;
    bleus.name = name;
    return await this.repository.save(bleus);
  }
}
