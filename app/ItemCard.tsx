"use client"

import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text } from "@chakra-ui/react"
import { Item } from "./types"
import Link from "next/link";

type ItemCardProps = {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link href={`/item/${item.id}`}>
      <Card size="sm" minW="3xs" maxW="xs" overflow="hidden" m={3}>
        <Image src={item.image_link} alt={item.description} />
        <CardBody>
          <Stack>
            <Heading size='md'>{item.name}</Heading>
            <Text>{item.description}</Text>
            <Text>{item.start_time} - {item.end_time}</Text>
            <Text color='blue.600' fontSize='lg'>S$ {item.price}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  )
}