import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { CreateItemDto } from "./dto/create-item.dto";
import { ItemsService } from "./items.service";
import { Item } from "./interfaces/item.interface";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): object {
    try {
      const response = this.itemsService.findAll();

      return { status: "000", response: [...response] };
    } catch (error) {
      return { status: "091", response: error.message };
    }
  }

  @Get(":id")
  findOne(@Param("id") id) {
    try {
      const response = this.itemsService.findOne(id);
      return { status: "000", response: response };
    } catch (error) {
      return { status: "091", response: error.message };
    }
  }

  @Post()
  createItem(@Body() creatItemDto: CreateItemDto): object {
    return { status: "created!", ...creatItemDto };
  }

  @Delete(":id")
  deleteItem(@Param() params): object {
    return { action: "deleted", status: "000", ...params };
  }

  @Put(":id")
  updateItem(@Body() updateItemDto: CreateItemDto, @Param() param) {
    return { id: param.id, action: "updated", status: "000", ...updateItemDto };
  }
}
