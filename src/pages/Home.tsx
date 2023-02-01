import { Product, ProductGrid } from "../components/ProductGrid";

const featuredProducts: Product[] = [
	{ id: 1, name: "Jacket" },
	{ id: 2, name: "Sweatpants" },
	{ id: 3, name: "Gym Bag" },
	{ id: 4, name: "Pencil Case" },
	{ id: 5, name: "Laptop Bag" },
	{ id: 6, name: "Handwarmer" },
	{ id: 7, name: "Mousepad" },
	{ id: 8, name: "Monitor" },
];

export function Home() {
	return <ProductGrid products={featuredProducts} />;
}
