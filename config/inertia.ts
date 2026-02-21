import { defineConfig } from "@adonisjs/inertia";
import type { InferSharedProps } from "@adonisjs/inertia/types";
import env from "#start/env";

const inertiaConfig = defineConfig({
	/**
	 * Path to the Edge view that will be used as the root view for Inertia responses
	 */
	rootView: (_) => {
		return "inertia_layout";
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
		appName: env.get("APP_NAME"),
		isOnboarded: (ctx) =>
			ctx.inertia.always(async () => {
				const auth = ctx.auth.user;
				if (auth) {
					await auth.load("profile");
					return !!auth.profile;
				}
				return false;
			}),
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
