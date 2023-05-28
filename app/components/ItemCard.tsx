"use client"

import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text } from "@chakra-ui/react"
import { Item } from "../types"

type ItemCardProps = {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Card maxW='sm' overflow="hidden">
      <Image
        src={item.image_link}
        alt={item.description}
      />
      <CardBody>
        <Stack>
          <Heading size='md'>{item.name}</Heading>
          <Text>{item.description}</Text>
          <Text color='blue.600' fontSize='2xl'>S$ {item.price}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}