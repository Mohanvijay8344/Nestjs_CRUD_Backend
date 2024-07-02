import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from '../items/interfaces/item.interface';
import { CreateItemDto } from '../items/dto/create-item.dto';
import  DeleteResult from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findById(id).exec();
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  async update(id: string, updateItemDto: CreateItemDto): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true }).exec();
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.itemModel.findByIdAndRemove(id).exec();
  }
}