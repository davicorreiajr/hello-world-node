import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@Controller()
export class BleusController {

    @Get('/bleus')
    getAll() {
       return 'This action returns all bleus';
    }

    @Get('/bleus/:id')
    getOne(@Param('id') id: number) {
       return 'This action returns bleus #' + id;
    }

    @Post('/bleus')
    post(@Body() bleus: any) {
       return 'Saving bleus...';
    }

    @Put('/bleus/:id')
    put(@Param('id') id: number, @Body() bleus: any) {
       return 'Updating a bleus...';
    }

    @Delete('/bleus/:id')
    remove(@Param('id') id: number) {
       return 'Removing bleus...';
    }

}
