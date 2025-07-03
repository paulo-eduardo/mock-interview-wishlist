import { Product } from "@/pages";
import Image from "next/image";

import styles from "@/styles/components/ProductCard.module.css";
import { useContext } from "react";
import { WishlistContext } from "@/context/WishlistContext";

export const ProductCard = ({ product }: { product: Product }) => {
  const { items, toggleWishlistItem } = useContext(WishlistContext);
  const wishlisted = items.includes(product.id);
  return (
    <article className={styles.product_card}>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
      />
      <h3>{product.name}</h3>
      <p className={styles.price}>$ {product.price}</p>
      <button onClick={() => toggleWishlistItem(product.id)}>
        {wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </article>
  );
};
