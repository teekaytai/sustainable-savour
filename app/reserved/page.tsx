"use client"

import { Heading } from "@chakra-ui/react";
import useUserInfo from "../auth/useUserInfo";

export default function Reservations() {
  const { data } = useUserInfo()

  const userId = data?.sub
  // TODO: ping the my reservations API

  return (
    <>
      <Heading size="lg">My Reservations</Heading>
    </>
  )
}