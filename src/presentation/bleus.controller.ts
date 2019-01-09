import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

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
  post(@Body() bleus: any) {
    return 'Saving bleus...';
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() bleus: any) {
    return 'Updating a bleus...';
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return 'Removing bleus...';
  }
}
