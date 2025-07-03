import { WishlistContext } from "@/context/WishlistContext";
import { useContext } from "react";

export const Header = () => {
  const { items } = useContext(WishlistContext);

  return <h3>Wishlist ({items.length})</h3>;
};
