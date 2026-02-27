import type { HttpContext } from "@adonisjs/core/http";
import type { NextFn } from "@adonisjs/core/types/http";
import BaseInertiaMiddleware from "@adonisjs/inertia/inertia_middleware";
import env from "#start/env";
import UserTransformer from "#transformers/user_transformer";

export default class InertiaMiddleware extends BaseInertiaMiddleware {
	async share(ctx: HttpContext) {
		/**
		 * The share method is called every time an Inertia page is rendered. In
		 * certain cases, a page may get rendered before the session middleware
		 * or the auth middleware are executed. For example: During a 404 request.
		 *
		 * In that case, we must always assume that HttpContext is not fully hydrated
		 * with all the properties.
		 */
		const { session, auth } = ctx as Partial<HttpContext>;

		/**
		 * Data shared with all Inertia pages. Make sure you are using
		 * transformers for rich data-types like Models.
		 */
		return {
			errors: ctx.inertia.always(this.getValidationErrors(ctx)),
			flash: session?.flashMessages.all(),
			appName: env.get("APP_NAME"),
			isOnboarded: ctx.inertia.always(await this.handleIsOnboarded(ctx)),
			user: ctx.inertia.always(
				auth?.user ? UserTransformer.transform(auth.user) : undefined,
			),
		};
	}

	async handleIsOnboarded(ctx: HttpContext) {
		const auth = ctx.auth.user;
		if (auth) {
			await auth.load("profile");
			return !!auth.profile;
		}
		return false;
	}

	async handle(ctx: HttpContext, next: NextFn) {
		await this.init(ctx);

		const output = await next();
		this.dispose(ctx);

		return output;
	}
}

declare module "@adonisjs/inertia/types" {
	type MiddlewareSharedProps = InferSharedProps<InertiaMiddleware>;
	export interface SharedProps extends MiddlewareSharedProps {}
}
