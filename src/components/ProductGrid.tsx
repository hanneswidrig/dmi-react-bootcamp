import { Product } from "../mock-data/products";
import { ProductGridItem } from "./ProductGridItem";

export interface ProductGridProps {
	products: Product[];
}

export function ProductGrid(props: ProductGridProps) {
	const { products } = props;

	return (
		<div className="my-8 grid grid-cols-3 gap-4">
			{products.map((product) => (
				<ProductGridItem key={product.productId} product={product} />
			))}
		</div>
	);
}
