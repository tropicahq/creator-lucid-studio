import cache from "@adonisjs/cache/services/main";
import type { HttpContext } from "@adonisjs/core/http";
import hash from "@adonisjs/core/services/hash";
import type { NextFn } from "@adonisjs/core/types/http";
import redis from "@adonisjs/redis/services/main";

export default class VerifyPasswordResetTokenMiddleware {
	async handle(ctx: HttpContext, next: NextFn) {
		/**
		 * Middleware logic goes here (before the next call)
		 */
		const token = ctx.request.input("token");
		const email = ctx.request.input("email");

		if (!token && !email) {
			ctx.session.flash("error", "Invalid expired reset token or email");
			return ctx.response.redirect().status(301).toRoute("forgot-password");
		}
		const hashedResetToken = await redis.get(`reset_token:${email}`);

		if (!hashedResetToken) {
			ctx.session.flash("error", "Invalid or expired reset token");
			return ctx.response.redirect().status(301).toRoute("forgot-password");
		}
		const validToken = await cache.getOrSet({
			key: `cache:reset_token:${token}`,
			factory: async () => {
				return await hash.use("scrypt").verify(hashedResetToken, token);
			},
			ttl: "1m",
		});

		// const validToken = await hash.use("scrypt").verify(hashedResetToken, token);
		if (!validToken) {
			ctx.session.flash("error", "Invalid or expired reset token");
			return ctx.response.status(301).redirect().toRoute("forgot-password");
		}
		/**
		 * Call next method in the pipeline and return its output
		 */
		ctx.inertia.share({ email });
		const output = await next();
		return output;
	}
}
