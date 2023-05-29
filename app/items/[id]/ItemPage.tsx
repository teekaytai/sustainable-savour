"use client"

import { Heading, Text, Image, Stack, Button, Center, useToast } from "@chakra-ui/react"
import { Item } from "../../types"
import useUserInfo from "@/app/auth/useUserInfo"

type ItemPageProps = {
  item: Item,
  itemId: string
}

export default function ItemPage({ item, itemId }: ItemPageProps) {
  const toast = useToast();
  const { data } = useUserInfo();

  const handleReserve = () => {
    const userId = data?.sub
    if (!userId) {
      return toast({
        title: "Error: Not logged in",
        description: "Please login first",
        status: "error"
      })
    }

    toast({
      title: "Reserving your item...",
      description: "Sit tight!"
    })

    fetch('/api/reservations', {
      method: "POST",
      body: JSON.stringify({
        user_id: userId,
        item_id: parseInt(itemId)
      })
    })
    .then(() => {
      toast({
        title: "Item reserved",
        description: "Please remember to collect your food at the specified time and location (payment on delivery)! Enjoy your food :)",
        status: "success"
      })
    })
  }
  return (
    <Center
      flexDirection="column"
      justifyContent="space-between"
      alignItems="stretch"
      margin="auto"
      maxW={600}
    >
      <Stack>
        <Image borderRadius="lg" src={item.image_link ?? ''} alt={item.description ?? ''} />
        <Heading size='md'>{item.name}</Heading>
        <Text>{item.description}</Text>
        <Text>{item.start_time} - {item.end_time}</Text>
        <Text color='blue.600' fontSize='lg'>S$ {item.price}</Text>
        <Text>{item.location}</Text>
      </Stack>
      <Button colorScheme="green" onClick={handleReserve}>Reserve</Button>
    </Center>
  )
}