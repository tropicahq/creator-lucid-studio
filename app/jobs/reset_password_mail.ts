import redis from "@adonisjs/redis/services/main";
import { Job } from "adonisjs-jobs";

type ResetPasswordMailPayload = {
	hashedToken: string;
	resetToken: string;
	email: string;
};

export default class ResetPasswordMailQueue extends Job {
	async handle(payload: ResetPasswordMailPayload) {
		this.logger.info("ResetPasswordMail job handled", payload);
	}
}
