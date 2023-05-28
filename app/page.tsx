"use client"

import Section from "./components/Section";
import { SampleItem } from "./types";

export default function Home() {
  return (
    <>
      <Section title="Recommended for you" items={[SampleItem, SampleItem]} />
      <Section title="For lunch" items={[SampleItem, SampleItem]} />
      <Section title="For dinner" items={[SampleItem, SampleItem]} />
    </>
  )
}
