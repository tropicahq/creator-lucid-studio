import type { HttpContext } from "@adonisjs/core/http";
import type { NextFn } from "@adonisjs/core/types/http";

export default class CacheControlMiddleware {
	async handle(ctx: HttpContext, next: NextFn) {
		ctx.response.header("Cache-Control", "no-cache, no-store, must-revalidate");
		ctx.response.header("Pragma", "no-cache");
		ctx.response.header("Expires", "0");
		await next();
		// /**
		//  * Middleware logic goes here (before the next call)
		//  */
		// console.log(ctx)

		// /**
		//  * Call next method in the pipeline and return its output
		//  */
		// const output = await next()
		// return output
	}
}
