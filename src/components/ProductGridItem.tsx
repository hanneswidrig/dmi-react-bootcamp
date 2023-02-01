import { Product } from "./ProductGrid";

export interface ProductGridItemProps {
	product: Product;
}

export function ProductGridItem({ product }: ProductGridItemProps) {
	return (
		<div className="flex rounded-lg bg-gray-100">
			<div className="p-4">{product.name}</div>
		</div>
	);
}
