import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { Bleus } from './request-schemas';
import { CreateBleusUseCase, GetAllBleusUseCase } from '../domain';

@JsonController('/bleus')
export class BleusController {

  constructor(
    private createBleusUseCase: CreateBleusUseCase,
    private getAllBleusUseCase: GetAllBleusUseCase
  ) {}

  @Get()
  getAll() {
    return this.getAllBleusUseCase.execute();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns bleus #' + id;
  }

  @Post()
  post(@Body() bleus: Bleus) {
    const { name, email } = bleus;
    return this.createBleusUseCase.execute(name, email);
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() bleus: Bleus) {
    return bleus;
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return 'Removing bleus...';
  }
}
