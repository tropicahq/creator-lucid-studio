import { errors as authErrors } from "@adonisjs/auth";
import { ExceptionHandler, type HttpContext } from "@adonisjs/core/http";
import app from "@adonisjs/core/services/app";
import type {
	StatusPageRange,
	StatusPageRenderer,
} from "@adonisjs/core/types/http";
import { errors } from "@adonisjs/limiter";

export default class HttpExceptionHandler extends ExceptionHandler {
	/**
	 * In debug mode, the exception handler will display verbose errors
	 * with pretty printed stack traces.
	 */
	protected debug = !app.inProduction;

	/**
	 * Status pages are used to display a custom HTML pages for certain error
	 * codes. You might want to enable them in production only, but feel
	 * free to enable them in development as well.
	 */
	protected renderStatusPages = app.inProduction;

	/**
	 * Status pages is a collection of error code range and a callback
	 * to return the HTML contents to send as a response.
	 */
	protected statusPages: Record<StatusPageRange, StatusPageRenderer> = {
		"404": (error, { inertia }) =>
			inertia.render("errors/not_found", { error }),
		"500..599": (error, { inertia }) =>
			inertia.render("errors/server_error", { error }),
	};

	/**
	 * The method is used for handling errors and returning
	 * response to the client
	 */
	async handle(error: unknown, ctx: HttpContext) {
		if (
			error instanceof errors.E_TOO_MANY_REQUESTS &&
			ctx.request.header("x-inertia")
		) {
			const message = error.getResponseMessage(ctx);
			const headers = error.getDefaultHeaders();
			ctx.session.flash("error", message);
			Object.keys(headers).forEach((header) => {
				ctx.response.header(header, headers[header]);
			});

			// return ctx.response.status(error.status).send(message);
			return ctx.response.redirect().back();
		}
		if (
			error instanceof authErrors.E_INVALID_CREDENTIALS ||
			error instanceof authErrors.E_UNAUTHORIZED_ACCESS
		) {
			const message = error.getResponseMessage(error, ctx);
			// const headers = error.
			ctx.session.flash("error", message);

			// return ctx.response.status(error.status).send(message);
			return ctx.response.redirect().toRoute("login");
		}
		return super.handle(error, ctx);
	}

	/**
	 * The method is used to report error to the logging service or
	 * the a third party error monitoring service.
	 *
	 * @note You should not attempt to send a response from this method.
	 */
	async report(error: unknown, ctx: HttpContext) {
		return super.report(error, ctx);
	}
}
