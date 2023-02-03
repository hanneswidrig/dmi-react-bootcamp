import { useNavigate } from "react-router-dom";

import { Product } from "../mock-data/products";

export interface ProductGridItemProps {
	product: Product;
}

export function ProductGridItem({ product }: ProductGridItemProps) {
	const navigate = useNavigate();
	return (
		<div
			className="flex cursor-pointer flex-col rounded bg-stone-100 transition-colors hover:bg-stone-300 hover:shadow"
			onClick={() => navigate(`/menu/${product.id}`)}
		>
			<div className="flex justify-between">
				<div className="select-none p-4 font-semibold">{product.name}</div>
				<div className="select-none p-4 font-bold">{product.price}</div>
			</div>
			<img src={product.imgSrc} alt="product image" />
		</div>
	);
}
