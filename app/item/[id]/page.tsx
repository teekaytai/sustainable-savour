
import { SampleItem } from "../../types";
import ItemPage from "./ItemPage";

type ItemProps = {
  params: Record<string, string>
}

export default function Item({ params }: ItemProps) {
  const id = params.id

  // TODO: ping the item/[id] API
  const item = SampleItem
  return (
    <ItemPage item={item} />
  )
}