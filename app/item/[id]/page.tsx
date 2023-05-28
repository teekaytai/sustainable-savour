
import { SampleItem } from "../../types";
import ItemPage from "./ItemPage";

export default function Item({ params }) {
  const item = SampleItem
  // TODO: :(
  return (
    <ItemPage item={item} />
  )
}