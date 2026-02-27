import inertia from "@adonisjs/inertia/vite";
import adonisjs from "@adonisjs/vite/client";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		inertia({ ssr: { enabled: true, entrypoint: "inertia/ssr.tsx" } }),
		react(),
		adonisjs({
			entrypoints: ["inertia/app.tsx"],
			reload: ["resources/views/**/*.edge"],
		}),
		tailwindcss(),
	],

	/**
	 * Define aliases for importing modules from
	 * your frontend code
	 */
	resolve: {
		alias: {
			"~/": `${import.meta.dirname}/inertia/`,
			"~registry": `${import.meta.dirname}/.adonisjs/client/registry.ts`,
		},
	},
	define: {
		__APP_NAME__: JSON.stringify(process.env.APP_NAME),
		__APP_URL__: JSON.stringify(process.env.APP_URL),
	},
});
