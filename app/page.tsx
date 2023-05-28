"use client"

import Section from "./Section";
import { SampleItem } from "./types";

const sampleItems = [SampleItem, SampleItem, SampleItem, SampleItem, SampleItem, SampleItem];

export default function Home() {
  return (
    <>
      <Section title="Recommended for you" items={sampleItems} />
      <Section title="For lunch" items={sampleItems} />
      <Section title="For dinner" items={sampleItems} />
    </>
  )
}
