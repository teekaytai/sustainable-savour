
import ItemPage from "./ItemPage";

type ItemProps = {
  params: Record<string, string>
}

export default async function Item({ params }: ItemProps) {
  const id = params.id
  const item = await fetch(new URL(`/api/items/${id}`, process.env.API_URL)).then(res => res.json());

  return (
    <ItemPage item={item} itemId={id} />
  )
}