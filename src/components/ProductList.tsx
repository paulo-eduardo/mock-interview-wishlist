import { Product } from "@/pages";
import { ProductCard } from "./ProductCard";

import styles from "@/styles/components/ProductList.module.css";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <section className={styles.product_grid}>
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
};
