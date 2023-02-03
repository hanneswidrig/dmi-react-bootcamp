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
		imgSrc: "/images/black-coffee.jpg",
	},
	{
		productId: v4(),
		name: "Iced Coffee",
		price: "$3.99",
		imgSrc: "/images/iced-coffee.jpg",
	},
	{
		productId: v4(),
		name: "Cold Brew",
		price: "$3.99",
		imgSrc: "/images/cold-brew.jpg",
	},
	{
		productId: v4(),
		name: "Americano",
		price: "$2.99",
		imgSrc: "/images/americano.jpg",
	},
	{
		productId: v4(),
		name: "Cappuccino",
		price: "$4.99",
		imgSrc: "/images/cappuccino.jpg",
	},
	{
		productId: v4(),
		name: "Espresso",
		price: "$2.99",
		imgSrc: "/images/espresso.jpg",
	},
];

const donutProducts: Product[] = [
	{
		productId: v4(),
		name: "Glazed Donut",
		price: "$0.99",
		imgSrc: "/images/glazed-donut.jpg",
	},
	{
		productId: v4(),
		name: "Chocolate Donut",
		price: "$0.99",
		imgSrc: "/images/chocolate-glazed-donut.jpg",
	},
	{
		productId: v4(),
		name: "Donut Holes",
		price: "$0.99",
		imgSrc: "/images/donut-holes.jpg",
	},
	{
		productId: v4(),
		name: "Cake Donut",
		price: "$0.99",
		imgSrc: "/images/cake-donut.jpg",
	},
	{
		productId: v4(),
		name: "Cider Donut",
		price: "$0.99",
		imgSrc: "/images/cider-donut.jpg",
	},
	{
		productId: v4(),
		name: "Boston Creme Donut",
		price: "$0.99",
		imgSrc: "/images/boston-creme-donut.jpg",
	},
];

const bagelProducts: Product[] = [
	{
		productId: v4(),
		name: "Plain Bagel",
		price: "$1.99",
		imgSrc: "/images/plain-bagel.jpg",
	},
	{
		productId: v4(),
		name: "Everything Bagel",
		price: "$1.99",
		imgSrc: "/images/everything-bagel.jpg",
	},
	{
		productId: v4(),
		name: "Blueberry Bagel",
		price: "$1.99",
		imgSrc: "/images/blueberry-bagel.jpg",
	},
	{
		productId: v4(),
		name: "Chocolate Chip Bagel",
		price: "$1.99",
		imgSrc: "/images/chocolate-chip-bagel.jpg",
	},
	{
		productId: v4(),
		name: "French Toast Bagel",
		price: "$1.99",
		imgSrc: "/images/french-toast-bagel.jpg",
	},
	{
		productId: v4(),
		name: "Multigrain Bagel",
		price: "$2.49",
		imgSrc: "/images/multigrain-bagel.jpg",
	},
];

const muffinProducts: Product[] = [
	{
		productId: v4(),
		name: "Apple Cinnamon Muffin",
		price: "$2.99",
		imgSrc: "/images/apple-cinnamon-muffin.jpg",
	},
	{
		productId: v4(),
		name: "Blueberry Muffin",
		price: "$2.99",
		imgSrc: "/images/blueberry-muffin.jpg",
	},
	{
		productId: v4(),
		name: "Banana Nut Muffin",
		price: "$2.99",
		imgSrc: "/images/banana-nut-muffin.jpg",
	},
	{
		productId: v4(),
		name: "Chocolate Chip Muffin",
		price: "$2.99",
		imgSrc: "/images/chocolate-chip-muffin.jpg",
	},
	{
		productId: v4(),
		name: "Lemon Poppy Muffin",
		price: "$2.99",
		imgSrc: "/images/lemon-poppy-seed-muffin.jpg",
	},
	{
		productId: v4(),
		name: "Pumpkin Muffin",
		price: "$2.99",
		imgSrc: "/images/pumpkin-muffin.jpg",
	},
];

const sandwichProducts: Product[] = [
	{
		productId: v4(),
		name: "Bacon, Egg & Cheese",
		price: "$3.99",
		imgSrc: "/images/bacon-egg-cheese.jpg",
	},
	{
		productId: v4(),
		name: "Sausage, Egg & Cheese",
		price: "$3.99",
		imgSrc: "/images/sausage-egg-cheese.jpg",
	},
	{
		productId: v4(),
		name: "Sourdough Sandwich",
		price: "$3.99",
		imgSrc: "/images/sourdough-sandwich.jpg",
	},
	{
		productId: v4(),
		name: "Fried Egg Sandwich",
		price: "$3.99",
		imgSrc: "/images/fried-egg-sandwich.jpg",
	},
	{
		productId: v4(),
		name: "Grilled Cheese",
		price: "$3.99",
		imgSrc: "/images/grilled-cheese-sandwich.jpg",
	},
	{
		productId: v4(),
		name: "Blueberry Waffle",
		price: "$6.99",
		imgSrc: "/images/blueberry-waffle-sandwich.jpg",
	},
];

export const allProducts: Record<ProductType, Product[]> = {
	featured: [
		...coffeeProducts.slice(1, 3),
		...donutProducts.slice(1, 2),
		...bagelProducts.slice(2, 3),
		...muffinProducts.slice(1, 2),
		...sandwichProducts.slice(3, 4),
	],
	coffee: structuredClone(coffeeProducts),
	donuts: structuredClone(donutProducts),
	bagels: structuredClone(bagelProducts),
	muffins: structuredClone(muffinProducts),
	sandwiches: structuredClone(sandwichProducts),
};
