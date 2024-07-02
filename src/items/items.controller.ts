import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemsService } from './item.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
     this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Item {
     this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() item: Item) {
    this.itemsService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() item: Item) {
    this.itemsService.update(id, item);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.itemsService.delete(id);
  }
}
