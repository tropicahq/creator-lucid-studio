import mail from "@adonisjs/mail/services/main";
import SendMailQueue from "#jobs/send_mail_queue";

mail.setMessenger((mailer) => ({
	async queue(mailMessage, config) {
		await SendMailQueue.dispatch(
			{
				config,
				mailMessage,
				mailerName: mailer.name,
			},
			{
				queueName: "emails",
				attempts: 10,
				backoff: { type: "exponential", delay: 5000 },
			},
		);
	},
}));
