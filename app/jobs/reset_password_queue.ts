import mail from "@adonisjs/mail/services/main";
import redis from "@adonisjs/redis/services/main";
import { Job } from "adonisjs-jobs";
import ResetPasswordEmailNotification from "#mails/reset_password_email_notification";

type ResetPasswordQueuePayload = {
	hashedToken: string;
	resetToken: string;
	email: string;
};

export default class ResetPasswordQueue extends Job {
	async handle(payload: ResetPasswordQueuePayload) {
		await redis.set(
			`reset_token:${payload.email}`,
			payload.hashedToken,
			"EX",
			60 * 10,
		);

		await mail.sendLater(
			new ResetPasswordEmailNotification({
				userEmail: payload.email,
				resetToken: payload.resetToken,
			}),
		);

		this.logger.info("ResetPasswordMail job handled", payload);
	}
}
