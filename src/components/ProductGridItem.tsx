import { Product } from "./ProductGrid";

export interface ProductGridItemProps {
	product: Product;
}

export function ProductGridItem({ product }: ProductGridItemProps) {
	return (
		<div className="flex cursor-pointer rounded bg-gray-100 transition-colors hover:bg-gray-200 hover:shadow">
			<div className="select-none p-4">{product.name}</div>
		</div>
	);
}
