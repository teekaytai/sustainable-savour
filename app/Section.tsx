"use client"

import { Heading, Stack } from "@chakra-ui/react";
import Carousel from "./Carousel";
import { Item } from "./types";

type SectionProps = {
  title: string;
  items: Item[];
}

export default function Section({ title, items }: SectionProps) {
  return (
    <>
      <Heading size="lg">{title}</Heading>
      <Carousel items={items} />
    </>
  )
}