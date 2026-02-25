import mail from "@adonisjs/mail/services/main";
import type {
	MessageBodyTemplates,
	NodeMailerMessage,
} from "@adonisjs/mail/types";
import { Job } from "adonisjs-jobs";

type SendMailQueuePayload = {
	mailerName: string;
	mailMessage: {
		message: NodeMailerMessage;
		views: MessageBodyTemplates;
	};
	config: any;
};

export default class SendMailQueue extends Job {
	async handle(payload: SendMailQueuePayload) {
		await mail
			.use(payload.mailerName as unknown as any)
			.sendCompiled(payload.mailMessage, payload.config);
		this.logger.info("SendMailQueue job handled");
	}
}
