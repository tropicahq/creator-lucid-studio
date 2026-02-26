/*
|--------------------------------------------------------------------------
| Define HTTP limiters
|--------------------------------------------------------------------------
|
| The "limiter.define" method creates an HTTP middleware to apply rate
| limits on a route or a group of routes. Feel free to define as many
| throttle middleware as needed.
|
*/

import limiter from "@adonisjs/limiter/services/main";
import env from "./env.js";

export const throttle = limiter.define("global", (_ctx) => {
	const isProduction = env.get("NODE_ENV") === "production";
	// ctx.request.matchesRoute("id/");
	return limiter
		.allowRequests(isProduction ? 5 : 100000000000000)
		.every("1 minute");
});
