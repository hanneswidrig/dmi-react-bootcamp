import { ProductGrid } from "../components/ProductGrid";
import { allProducts } from "../mock-data/products";

export function Home() {
	return <ProductGrid products={allProducts.featured} />;
}
