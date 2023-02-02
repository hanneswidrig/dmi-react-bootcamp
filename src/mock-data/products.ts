import { v4 } from "uuid";

export type ProductType =
	| "featured"
	| "coffee"
	| "donuts"
	| "bagels"
	| "muffins"
	| "sandwiches";

export interface Product {
	productId: string;
	name: string;
	price: string;
	imgSrc: string;
}

const coffeeProducts: Product[] = [
	{
		productId: v4(),
		name: "Black Coffee",
		price: "$3.99",
		imgSrc: "/product-photos/black-coffee.jpg",
	},
	{
		productId: v4(),
		name: "Iced Coffee",
		price: "$3.99",
		imgSrc: "/product-photos/iced-coffee.jpg",
	},
	{
		productId: v4(),
		name: "Cold Brew",
		price: "$3.99",
		imgSrc: "/product-photos/cold-brew.jpg",
	},
	{
		productId: v4(),
		name: "Americano",
		price: "$2.99",
		imgSrc: "/product-photos/americano.jpg",
	},
	{
		productId: v4(),
		name: "Cappuccino",
		price: "$4.99",
		imgSrc: "/product-photos/cappuccino.jpg",
	},
	{
		productId: v4(),
		name: "Espresso",
		price: "$2.99",
		imgSrc: "/product-photos/espresso.jpg",
	},
];

const donutProducts: Product[] = [
	{
		productId: v4(),
		name: "Glazed Donut",
		price: "$0.99",
		imgSrc: "/product-photos/glazed-donut.jpg",
	},
	{
		productId: v4(),
		name: "Chocolate Donut",
		price: "$0.99",
		imgSrc: "/product-photos/chocolate-glazed-donut.jpg",
	},
	{
		productId: v4(),
		name: "Donut Holes",
		price: "$0.99",
		imgSrc: "/product-photos/donut-holes.jpg",
	},
];

const bagelProducts: Product[] = [
	{
		productId: v4(),
		name: "Plain Bagel",
		price: "$1.99",
		imgSrc: "/product-photos/plain-bagel.jpg",
	},
	{
		productId: v4(),
		name: "Everything Bagel",
		price: "$1.99",
		imgSrc: "/product-photos/everything-bagel.jpg",
	},
	{
		productId: v4(),
		name: "Blueberry Bagel",
		price: "$1.99",
		imgSrc: "/product-photos/blueberry-bagel.jpg",
	},
];

const muffinProducts: Product[] = [
	{
		productId: v4(),
		name: "Apple Cinnamon Muffin",
		price: "$3.99",
		imgSrc: "/product-photos/apple-cinnamon-muffin.jpg",
	},
	{
		productId: v4(),
		name: "Blueberry Muffin",
		price: "$3.99",
		imgSrc: "/product-photos/blueberry-muffin.jpg",
	},
	{
		productId: v4(),
		name: "Banana Nut Muffin",
		price: "$3.99",
		imgSrc: "/product-photos/banana-nut-muffin.jpg",
	},
];

const sandwichProducts: Product[] = [
	{
		productId: v4(),
		name: "Bacon, Egg & Cheese",
		price: "$3.99",
		imgSrc: "/product-photos/bacon-egg-cheese.jpg",
	},
	{
		productId: v4(),
		name: "Sausage, Egg & Cheese",
		price: "$3.99",
		imgSrc: "/product-photos/sausage-egg-cheese.jpg",
	},
	{
		productId: v4(),
		name: "Sourdough Sandwich",
		price: "$3.99",
		imgSrc: "/product-photos/sourdough-sandwich.jpg",
	},
];

export const allProducts: Record<ProductType, Product[]> = {
	featured: [
		...coffeeProducts.slice(0, 2),
		...donutProducts.slice(0, 2),
		...bagelProducts.slice(0, 2),
		...muffinProducts.slice(0, 2),
		...sandwichProducts.slice(0, 2),
	],
	coffee: structuredClone(coffeeProducts),
	donuts: structuredClone(donutProducts),
	bagels: structuredClone(bagelProducts),
	muffins: structuredClone(muffinProducts),
	sandwiches: structuredClone(sandwichProducts),
};
