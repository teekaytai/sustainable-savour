"use client"

import { Card, CardBody, Stack, Heading, Image, Text } from "@chakra-ui/react"
import { Item } from "./types"
import Link from "next/link";

type ItemCardProps = {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link href={`/items/${item.id}`} prefetch={false}>
      <Card size="sm" minW="3xs" maxW="xs" overflow="hidden">
        <Image src={item.image_link ?? ''} alt={item.description ?? ''} />
        <CardBody>
          <Stack>
            <Heading size='md'>{item.name}</Heading>
            <Text>{item.description}</Text>
            <Text>{new Date(item.start_time).toLocaleString().replace(/\s/g, ' ')} - {new Date(item.end_time).toLocaleString().replace(/\s/g, ' ')}</Text>
            <Text color='blue.600' fontSize='lg'>S$ {item.price.toFixed(2)}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  )
}
