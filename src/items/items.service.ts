/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Item } from "./interfaces/item.interface";

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    { id: "22e21e12e", name: "name one", qty: 1, description: "decription" },
    {
      id: "12wdw1w",
      name: "name two",
      qty: 100,
      description: "decription two"
    }
  ];

  findAll(): Item[] {
    // throw new Error("something happend")
    return this.items;
  }

  findOne(id: string): Item {
    const searchResult = this.items.filter((singleItem) => {
      if (singleItem.id === id) {
        return singleItem;
      }
    });

    if (
      searchResult === undefined ||
      (Array.isArray(searchResult) && searchResult.length === 0)
    ) {
      throw new Error("Item does not exist.");
    }

    return searchResult[0];
  }
}
