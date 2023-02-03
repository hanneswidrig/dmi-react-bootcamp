/** @type {import('prettier').Options} */
module.exports = {
	tabWidth: 4,
	useTabs: true,
	printWidth: 120,
	bracketSameLine: true,
	plugins: [require("prettier-plugin-tailwindcss")],
};
