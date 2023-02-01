import { ProductGridItem } from "./ProductGridItem";

export interface Product {
	id: number;
	name: string;
}

export interface ProductGridProps {
	products: Product[];
}

export function ProductGrid(props: ProductGridProps) {
	const { products } = props;

	return (
		<div className="my-8 grid grid-cols-4 gap-4">
			{products.map((product) => (
				<ProductGridItem key={product.id} product={product} />
			))}
		</div>
	);
}
