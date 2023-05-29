import { Flex } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import { Item } from "./types";

type CarouselProps = {
  items: Item[]
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <Flex flexWrap="nowrap" overflow="auto" gap={5} m={5}>
      { items.map(item => <ItemCard key={item.id} item={item} />) }
    </Flex>
  )
}
