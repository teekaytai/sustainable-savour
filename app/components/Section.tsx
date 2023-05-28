"use client"

import { Heading } from "@chakra-ui/react";
import Carousel from "./Carousel";
import { Item } from "../types";

type SectionProps = {
  title: string;
  items: Item[];
}

export default function Section({ title, items }: SectionProps) {
  return (
    <>
      <Heading>{title}</Heading>
      <Carousel items={items} />
    </>
  )
}