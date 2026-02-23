import crypto from "node:crypto";
import type { HttpContext } from "@adonisjs/core/http";
import hash from "@adonisjs/core/services/hash";
import redis from "@adonisjs/redis/services/main";
import vine from "@vinejs/vine";
import ResetPasswordMailQueue from "#jobs/reset_password_mail";
import User from "#models/user";
import { idLoginValidator } from "#validators/id_validator";
export default class AuthController {
	// public async loginShow({ inertia }: HttpContext) {
	// 	return inertia.render("id/login");
	// }
	public async login({
		request,
		response,
		session,
		auth,
		logger,
	}: HttpContext) {
		const payload = await request.validateUsing(idLoginValidator);
		const user = await User.verifyCredentials(payload.email, payload.password);
		await auth.use("web").login(user);
		return response.redirect().status(301).toRoute("dashboard");
	}
	// public async signup({ request, response }: HttpContext) {
	//   const { name, email, password } = request.only(['name', 'email', 'password']);
	//   try {
	//     const user = await User.create({
	//       name,
	//       email,
	//       password,
	//     });
	//     await user.generateToken();
	//     response.redirect('/id/dashboard');
	//   } catch (error) {
	//     response.redirect('/id/signup');
	//   }
	// }
	public async logout({ response, session, auth }: HttpContext) {
		await auth.use("web").logout();
		session.clear();
		session.flash("success", "You have been logged out.");
		return response.redirect().toRoute("login");
	}
	public async forgotPassword({
		request,
		response,
		session,
		logger,
	}: HttpContext) {
		// https://sendlayer.com/blog/how-to-implement-password-reset-in-node-js/
		const validation = vine.object({
			email: vine
				.string()
				.trim()
				.email()
				.exists({ column: "email", table: "users", caseInsensitive: true }),
		});
		const { email } = await request.validateUsing(vine.compile(validation));
		try {
			// const user = await User.findByOrFail('email', email);
			await redis.del(`reset_token:${email}`);

			const resetToken = crypto.randomBytes(32).toString("hex");
			const hashedToken = await hash.use("scrypt").make(resetToken);
			// await redis.set(email, crypto.randomBytes(32).toString('hex'), { ttl: 3600 })
			await ResetPasswordMailQueue.dispatch(
				{
					email,
					hashedToken,
					resetToken,
				},
				{ queueName: "default" },
			);

			session.flash("success", "Password reset email sent.");
			return response.redirect("/id/forgot-password");
		} catch (error) {
			logger.error(error);
			session.flash("error", "Unable to perform action.");
			return response.redirect().back();
		}
	}
	// public async resetPassword({ request, response }: HttpContext) {
	//   const { token, password } = request.only(['token', 'password']);
	//   try {
	//     const user = await User.findByOrFail('token', token);
	//     await user.update({
	//       password,
	//       token: null,
	//     });
	//     response.redirect('/id/login');
	//   } catch (error) {
	//     response.redirect('/id/reset-password');
	//   }
}
