"use client"

import { Heading, Text } from "@chakra-ui/react";
import { Item } from "../types";
import Carousel from "../Carousel";

type ReservationsListProps = {
  reservations: Item[]
}

export default function ReservationsList({ reservations }: ReservationsListProps) {
  return (
    <>
      <Heading size="lg">My Reservations</Heading>
      { reservations.length === 0 ? <Text>No reservations yet, make one today!</Text> : null }
      <Carousel items={reservations} />
    </>
  )
}