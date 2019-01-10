import { Service } from 'typedi';

@Service()
export class CreateBleusUseCase {

  execute(name: string, email: string) {
    return {
      email,
      name
    };
  }
}
