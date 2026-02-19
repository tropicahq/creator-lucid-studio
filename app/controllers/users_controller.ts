import type { HttpContext } from "@adonisjs/core/http";
import User from "#models/user";
import { idCreateUserValidator } from "#validators/id_validator";

export default class UsersController {
	public async createUserShow({ inertia }: HttpContext) {
		return inertia.render("id/signup");
	}
	public async createUser({ request, response, session }: HttpContext) {
		const payload = await request.validateUsing(idCreateUserValidator);
		try {
			await User.create(payload);
			session.flash("success", "Your new account is pending verification!");
			return response.redirect("/id/login");
		} catch (error) {
			console.error(error);
			session.flash("error", "Failed to create user");
			return response.redirect().back();
		}
	}
}
