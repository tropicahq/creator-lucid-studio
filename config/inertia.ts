import { defineConfig } from "@adonisjs/inertia";
import type { InferSharedProps } from "@adonisjs/inertia/types";

const inertiaConfig = defineConfig({
	/**
	 * Path to the Edge view that will be used as the root view for Inertia responses
	 */
	rootView: ({ request }) => {
		return request.url().startsWith("/id")
			? "inertia_id_layout"
			: "inertia_layout";
	},

	/**
	 * Data that should be shared with all rendered pages
	 */
	sharedData: {
		flashMessage: (ctx) =>
			ctx.inertia.always(() => ({
				error: ctx.session.flashMessages.get("error"),
				success: ctx.session.flashMessages.get("success"),
			})),
		// user: (ctx) => ctx.inertia.always(() => ctx.auth.user),
	},

	/**
	 * Options for the server-side rendering
	 */
	ssr: {
		enabled: true,
		entrypoint: "inertia/app/ssr.tsx",
	},
});

export default inertiaConfig;

declare module "@adonisjs/inertia/types" {
	export interface SharedProps extends InferSharedProps<typeof inertiaConfig> {}
}
