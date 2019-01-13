import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { Bleus } from '../data';
import { CreateBleusUseCase, GetAllBleusUseCase, GetBleusUseCase, UpdateBleusUseCase, DeleteBleusUseCase } from '../domain';

@JsonController('/bleus')
export class BleusController {

  constructor(
    private createBleusUseCase: CreateBleusUseCase,
    private getAllBleusUseCase: GetAllBleusUseCase,
    private getBleusUseCase: GetBleusUseCase,
    private updateBleusUseCase: UpdateBleusUseCase,
    private deleteBleusUseCase: DeleteBleusUseCase
  ) {}

  @Get()
  getAll() {
    return this.getAllBleusUseCase.execute();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.getBleusUseCase.execute(id);
  }

  @Post()
  post(@Body() bleus: Bleus) {
    const { name, email } = bleus;
    return this.createBleusUseCase.execute(name, email);
  }

  @Put()
  put(@Body() bleus: Bleus) {
    return this.updateBleusUseCase.execute(bleus);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.deleteBleusUseCase.execute(id);
  }
}
