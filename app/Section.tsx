"use client"

import { Heading } from "@chakra-ui/react";
import Carousel from "./Carousel";
import { Item } from "./types";
import { useEffect, useState } from "react";

type SectionProps = {
  title: string;
}

export default function Section({ title }: SectionProps) {
  const [items, setItems] = useState([])
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await fetch('/api/items')
        const data = await res.json()
        setItems(data)
      } catch {

      }
    }
    getItems()
  }, [])

  return (
    <>
      <Heading size="lg" m={5}>{title}</Heading>
      <Carousel items={items} />
    </>
  )
}
