import type { HttpContext } from "@adonisjs/core/http";
import { onboardingValidator } from "#validators/onboarding_validator";

export default class OnboardController {
	async handle({ request, response, session }: HttpContext) {
		const payload = await request.validateUsing(onboardingValidator);
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
		console.log(payload);
		return response.redirect().back();
	}
}
