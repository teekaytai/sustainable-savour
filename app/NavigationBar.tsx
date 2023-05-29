"use client"

import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import useUserInfo from "./auth/useUserInfo"

export default function NavigationBar() {
  const { isLoading, data } = useUserInfo();

  let topRightDisplay;
  if (isLoading) {
    topRightDisplay = null;
  } else if (data?.userInfo) {
    topRightDisplay = <Text>Logged in as {data?.userInfo['myinfo.name']}</Text>
  } else {
    topRightDisplay = (
      <Link prefetch={false} href={`/auth/auth-url`}>
        <Button colorScheme="green" m={4}>Log in</Button>
      </Link>
    )
  }

  return (
    <Flex p={2} justifyContent="space-between">
      <Flex alignItems="center" gap={3}>
        <Link href="/">
          <Heading m={4}>Sustainable Savour</Heading>
        </Link>
        <Link href="/reserved">
          <Button colorScheme="blue">My Reservations</Button>
        </Link>
      </Flex>

      { topRightDisplay }

    </Flex>
  )
}
