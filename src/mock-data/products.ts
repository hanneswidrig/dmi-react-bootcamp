export type ProductType =
	| "featured"
	| "coffee"
	| "donuts"
	| "bagels"
	| "muffins"
	| "sandwiches";

export interface Product {
	id: string;
	name: string;
	price: string;
	imgSrc: string;
}

const coffeeProducts: Product[] = [
	{
		id: "black-coffee",
		name: "Black Coffee",
		price: "$3.99",
		imgSrc: "/images/black-coffee.jpg",
	},
	{
		id: "iced-coffee",
		name: "Iced Coffee",
		price: "$3.99",
		imgSrc: "/images/iced-coffee.jpg",
	},
	{
		id: "cold-brew",
		name: "Cold Brew",
		price: "$3.99",
		imgSrc: "/images/cold-brew.jpg",
	},
	{
		id: "americano",
		name: "Americano",
		price: "$2.99",
		imgSrc: "/images/americano.jpg",
	},
	{
		id: "cappuccino",
		name: "Cappuccino",
		price: "$4.99",
		imgSrc: "/images/cappuccino.jpg",
	},
	{
		id: "espresso",
		name: "Espresso",
		price: "$2.99",
		imgSrc: "/images/espresso.jpg",
	},
];

const donutProducts: Product[] = [
	{
		id: "glazed-donut",
		name: "Glazed Donut",
		price: "$0.99",
		imgSrc: "/images/glazed-donut.jpg",
	},
	{
		id: "chocolate-glazed-donut",
		name: "Chocolate Donut",
		price: "$0.99",
		imgSrc: "/images/chocolate-glazed-donut.jpg",
	},
	{
		id: "donut-holes",
		name: "Donut Holes",
		price: "$0.99",
		imgSrc: "/images/donut-holes.jpg",
	},
	{
		id: "cake-donut",
		name: "Cake Donut",
		price: "$0.99",
		imgSrc: "/images/cake-donut.jpg",
	},
	{
		id: "cider-donut",
		name: "Cider Donut",
		price: "$0.99",
		imgSrc: "/images/cider-donut.jpg",
	},
	{
		id: "boston-creme-donut",
		name: "Boston Creme Donut",
		price: "$0.99",
		imgSrc: "/images/boston-creme-donut.jpg",
	},
];

const bagelProducts: Product[] = [
	{
		id: "plain-bagel",
		name: "Plain Bagel",
		price: "$1.99",
		imgSrc: "/images/plain-bagel.jpg",
	},
	{
		id: "everything-bagel",
		name: "Everything Bagel",
		price: "$1.99",
		imgSrc: "/images/everything-bagel.jpg",
	},
	{
		id: "blueberry-bagel",
		name: "Blueberry Bagel",
		price: "$1.99",
		imgSrc: "/images/blueberry-bagel.jpg",
	},
	{
		id: "chocolate-chip-bagel",
		name: "Chocolate Chip Bagel",
		price: "$1.99",
		imgSrc: "/images/chocolate-chip-bagel.jpg",
	},
	{
		id: "french-toast-bagel",
		name: "French Toast Bagel",
		price: "$1.99",
		imgSrc: "/images/french-toast-bagel.jpg",
	},
	{
		id: "multigrain-bagel",
		name: "Multigrain Bagel",
		price: "$2.49",
		imgSrc: "/images/multigrain-bagel.jpg",
	},
];

const muffinProducts: Product[] = [
	{
		id: "apple-cinnamon-muffin",
		name: "Apple Cinnamon Muffin",
		price: "$2.99",
		imgSrc: "/images/apple-cinnamon-muffin.jpg",
	},
	{
		id: "blueberry-muffin",
		name: "Blueberry Muffin",
		price: "$2.99",
		imgSrc: "/images/blueberry-muffin.jpg",
	},
	{
		id: "banana-nut-muffin",
		name: "Banana Nut Muffin",
		price: "$2.99",
		imgSrc: "/images/banana-nut-muffin.jpg",
	},
	{
		id: "chocolate-chip-muffin",
		name: "Chocolate Chip Muffin",
		price: "$2.99",
		imgSrc: "/images/chocolate-chip-muffin.jpg",
	},
	{
		id: "lemon-poppy-seed-muffin",
		name: "Lemon Poppy Muffin",
		price: "$2.99",
		imgSrc: "/images/lemon-poppy-seed-muffin.jpg",
	},
	{
		id: "pumpkin-muffin",
		name: "Pumpkin Muffin",
		price: "$2.99",
		imgSrc: "/images/pumpkin-muffin.jpg",
	},
];

const sandwichProducts: Product[] = [
	{
		id: "bacon-egg-cheese",
		name: "Bacon, Egg & Cheese",
		price: "$3.99",
		imgSrc: "/images/bacon-egg-cheese.jpg",
	},
	{
		id: "sausage-egg-cheese",
		name: "Sausage, Egg & Cheese",
		price: "$3.99",
		imgSrc: "/images/sausage-egg-cheese.jpg",
	},
	{
		id: "sourdough-sandwich",
		name: "Sourdough Sandwich",
		price: "$3.99",
		imgSrc: "/images/sourdough-sandwich.jpg",
	},
	{
		id: "fried-egg-sandwich",
		name: "Fried Egg Sandwich",
		price: "$3.99",
		imgSrc: "/images/fried-egg-sandwich.jpg",
	},
	{
		id: "grilled-cheese-sandwich",
		name: "Grilled Cheese",
		price: "$3.99",
		imgSrc: "/images/grilled-cheese-sandwich.jpg",
	},
	{
		id: "blueberry-waffle-sandwich",
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

export const productList: Product[] = [
	structuredClone(allProducts.coffee),
	structuredClone(allProducts.donuts),
	structuredClone(allProducts.bagels),
	structuredClone(allProducts.muffins),
	structuredClone(allProducts.sandwiches),
].flat();
