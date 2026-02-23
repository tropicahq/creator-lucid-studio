import type { HttpContext } from "@adonisjs/core/http";
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
		// try {
		const user = await User.verifyCredentials(payload.email, payload.password);
		if (user) {
			await auth.use("web").login(user);
			return response.redirect().status(301).toRoute("dashboard");
		} else {
			session.flash("error", "Invalid email or password");
			return response.redirect().back();
		}
		// } catch (error) {
		// 	logger.error(error);
		// 	session.flash("error", "An error occurred.");
		// 	return response.redirect("/id/login");
		// }
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
	// public async forgotPassword({ request, response }: HttpContext) {
	//   const { email } = request.only(['email']);
	//   try {
	//     const user = await User.findByOrFail('email', email);
	//     await user.sendResetPasswordEmail();
	//     response.redirect('/id/forgot-password');
	//   } catch (error) {
	//     response.redirect('/id/forgot-password');
	//   }
	// }
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
