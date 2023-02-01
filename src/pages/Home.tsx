import { Product, ProductGrid } from "../components/ProductGrid";

const featuredProducts: Product[] = [
	{
		id: 1,
		name: "Coffee",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 2,
		name: "Glazed Donut",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 3,
		name: "Plain Bagel",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 4,
		name: "Apple Cinnamon Muffin",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 5,
		name: "Iced Coffee",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 6,
		name: "Chocolated Glazed Donut",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 7,
		name: "Cold Brew",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 8,
		name: "Donut Holes",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 9,
		name: "Bacon, Egg & Cheese",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 10,
		name: "Blueberry Muffin",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 11,
		name: "Sausage, Egg & Cheese",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 12,
		name: "Everything Bagel",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 13,
		name: "Americano",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 14,
		name: "Blueberry Bagel",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 15,
		name: "Sourdough Breakfast Sandwich",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
	{
		id: 16,
		name: "Espresso",
		price: "0.00",
		imgSrc: "",
		description: "",
	},
];

export function Home() {
	return <ProductGrid products={featuredProducts} />;
}
