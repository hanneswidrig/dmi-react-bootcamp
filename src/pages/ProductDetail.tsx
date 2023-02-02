import { useParams } from "react-router-dom";

export function ProductDetail() {
	const { productId = "" } = useParams<{ productId: string }>();
	return <div>{productId}</div>;
}
