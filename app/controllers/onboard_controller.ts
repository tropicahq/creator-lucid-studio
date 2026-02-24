import type { HttpContext } from "@adonisjs/core/http";
import env from "#start/env";
import { onboardingValidator } from "#validators/onboarding_validator";

export default class OnboardController {
	async handle({ request, response, session, auth }: HttpContext) {
		const payload = await request.validateUsing(onboardingValidator);
		const user = auth.user;
		await user?.related("profile").updateOrCreate(payload, payload);

		session.flash("success", `Welcome ${env.get("APP_NAME")}!`);
		return response.redirect().toRoute("dashboard");
	}
}
