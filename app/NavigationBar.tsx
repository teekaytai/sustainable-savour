"use client"

import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import useUserInfo from "./auth/useUserInfo"

export default function NavigationBar() {
  const { isLoading, isLoggedIn, data } = useUserInfo();
  console.log(data)

  let topRightDisplay;
  if (isLoading) {
    topRightDisplay = null;
  } else if (data?.userInfo) {
    topRightDisplay = <Text>Logged in as {data?.userInfo['myinfo.name']}</Text>
  } else {
    topRightDisplay = (
      <Link prefetch={false} href={`/auth/auth-url`}>
        <Button colorScheme="green">Log in</Button>
      </Link>
    )
  }

  return (
    <Flex p={2} justifyContent="space-between">
      <Flex alignItems="center" gap={3}>
        <Heading>Sustainable Savour</Heading>
        <Link href="/"></Link>
        <Link href="/reserved">My Reservations</Link>
      </Flex>

      { topRightDisplay }

    </Flex>
  )
}