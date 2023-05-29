import Section from "./Section";

export default async function Home() {
  const items = await fetch(new URL('/api/items', process.env.API_URL)).then(res => res.json())

  return (
    <>
      <Section title="Recommended for you" items={items} />
    </>
  )
}
