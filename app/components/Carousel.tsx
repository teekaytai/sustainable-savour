import { Flex } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import { Item } from "../types";

type CarouselProps = {
  items: Item[]
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <Flex>
      <p>Carousel</p>
      { items.map(item => <ItemCard key={item.id} item={item} />) }
    </Flex>
  )
}