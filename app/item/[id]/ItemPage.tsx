"use client"

import { Heading, Text, Image, Stack, Button } from "@chakra-ui/react"
import { Item } from "../../types"

type ItemPageProps = {
  item: Item
}

export default function ItemPage({ item }: ItemPageProps) {
  return (
    <Stack justifyContent="space-between">
      <Stack>
        <Image borderRadius="lg" src={item.image_link} alt={item.description} />
        <Heading size='md'>{item.name}</Heading>
        <Text>{item.description}</Text>
        <Text>{item.start_time} - {item.end_time}</Text>
        <Text color='blue.600' fontSize='lg'>S$ {item.price}</Text>
        <Text>{item.location}</Text>
      </Stack>
      <Button colorScheme="green">Reserve</Button>
    </Stack>
  )
}