import type { HttpContext } from "@adonisjs/core/http";
import type { NextFn } from "@adonisjs/core/types/http";

export default class EnsureOnboardPassMiddleware {
	async handle(ctx: HttpContext, next: NextFn) {
		console.log("Bullshit");
		/**
		 * Middleware logic goes here (before the next call)
		 */
		const user = ctx.auth.user;
		console.log("User", user);
		if (user) {
			await user.load("profile");
			ctx.logger.debug("Profile", user.profile);
			if (!user.profile) {
				console.log("PAP HERE");
				return ctx.response.redirect().status(301).toRoute("profile.onboard");
			}
		}
		/**
		 * Call next method in the pipeline and return its output
		 */
		// const output = await next();
		return next();
	}
}
