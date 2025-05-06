/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
	theme: {
		fontFamily: {
			display: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#05B6D3",
				secondary: "#EF863E",
			},
			backgroundImage: {
				"login-bg-img":
					"url('https://res.cloudinary.com/dvpkfd90f/image/upload/v1746496362/bg-image_ylfnkw.png')",
				"signup-bg-img":
					"url('https://res.cloudinary.com/dvpkfd90f/image/upload/v1746496361/signup-bg-image_lqswr1.jpg')",
			},
		},
	},
	plugins: [],
};
