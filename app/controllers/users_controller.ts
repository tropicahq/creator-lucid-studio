// https://emojicopy.com
import type { HttpContext } from "@adonisjs/core/http";
import User from "#models/user";
import { idCreateUserValidator } from "#validators/id_validator";

export default class UsersController {
	// public async createUserShow({ inertia }: HttpContext) {
	//   return inertia.render("id/signup");
	// }
	public async createUser({ request, response, session }: HttpContext) {
		const payload = await request.validateUsing(idCreateUserValidator);
		try {
			await User.create(payload);
			session.flash("success", "Your new account has been created 🎉!");
			return response.redirect("/id/login");
		} catch (error) {
			console.error(error);
			session.flash("error", "Failed to create user");
			return response.redirect().back();
		}
	}
	public async onboardUser({ request, response, session }: HttpContext) {
		// const payload = await request.validateUsing(idCreateUserValidator);
		// try {
		// 	await User.create(payload);
		// 	session.flash("success", "Your new account has been created 🎉!");
		// 	return response.redirect("/id/login");
		// } catch (error) {
		// 	console.error(error);
		// 	session.flash("error", "Failed to create user");
		// 	return response.redirect().back();
		// }
		session.flash("success", "Nothing here for now!");
		console.log(request.body());
		return response.redirect().back();
	}
}
