import { headers } from "next/headers";
import Section from "./Section";

export default async function Home() {
  headers()

  const items = await fetch(new URL('/api/items', process.env.API_URL))
    .then(res => res.json())
    .catch(() => [])

  return (
    <Section title="Recommended for you" items={items} />
  )
}
