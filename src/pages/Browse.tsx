import { useParams } from "react-router-dom";

export function Browse() {
	const { type } = useParams<{ type: string }>();
	return <div>{type}</div>;
}
