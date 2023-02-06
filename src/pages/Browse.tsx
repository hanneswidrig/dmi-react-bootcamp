import { useParams } from "react-router-dom";

import { ProductGrid } from "../components/ProductGrid";
import { allProducts, ProductType } from "../mock-data/products";

export function Browse() {
	const { type } = useParams<{ type: ProductType }>();
	const filteredProducts = allProducts[type as ProductType];
	return <ProductGrid products={filteredProducts} />;
}
