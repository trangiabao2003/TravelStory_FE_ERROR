import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	// server: {
	// 	allowedHosts: [
	// 		"localhost",
	// 		".lhr.life",
	// 		// Thêm host mà bạn nhận được từ localhost.run
	// 	],
	// },
	server: {
		port: 5173,
	},
});

// ssh -R 80:localhost:3000 nokey@localhost.run
