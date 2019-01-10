import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { Bleus } from './request-schemas';

@JsonController('/bleus')
export class BleusController {

  @Get()
  getAll() {
    return 'This action returns all bleus';
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns bleus #' + id;
  }

  @Post()
  post(@Body() bleus: Bleus) {
    return bleus;
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
