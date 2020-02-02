import { createContext } from "react"; // can take anything(objects, integers, functions)
import SHOP_DATA from "./shop.data";

const CollectionsContext = createContext(SHOP_DATA); // initial value of CollectionContext is SHOP_DATA

export default CollectionsContext;
