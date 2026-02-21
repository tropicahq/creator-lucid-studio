import type { HttpContext } from "@adonisjs/core/http";
import type { NextFn } from "@adonisjs/core/types/http";

export default class EnsureOnboardPassMiddleware {
	async handle(ctx: HttpContext, next: NextFn) {
		/**
		 * Middleware logic goes here (before the next call)
		 */
		const user = await ctx.auth.user;
		if (user) {
			await user.load("profile");
			if (!user.profile) {
				return ctx.response.redirect().status(301).toRoute("profile.onboard");
			}
		}
		/**
		 * Call next method in the pipeline and return its output
		 */
		const output = await next();
		return output;
	}
}
