import { defineConfig, transports } from "@adonisjs/mail";
import env from "#start/env";

const mailConfig = defineConfig({
	default:
		env.get("NODE_ENV") === "development" || env.get("NODE_ENV") === "test"
			? "smtp"
			: "brevo",

	from: {
		address: env.get("MAIL_FROM_ADDRESS"),
		name: env.get("MAIL_FROM_NAME"),
	},

	/**
	 * The mailers object can be used to configure multiple mailers
	 * each using a different transport or same transport with different
	 * options.
	 */
	mailers: {
		smtp: transports.smtp({
			host: env.get("SMTP_HOST"),
			port: parseInt(env.get("SMTP_PORT"), 10),
			/**
			 * Uncomment the auth block if your SMTP
			 * server needs authentication
			 */
			auth: {
				type: "login",
				user: env.get("SMTP_USERNAME"),
				pass: env.get("SMTP_PASSWORD"),
			},
		}),

		mailgun: transports.mailgun({
			key: env.get("MAILGUN_API_KEY"),
			baseUrl: "https://api.mailgun.net/v3",
			domain: env.get("MAILGUN_DOMAIN"),
		}),

		brevo: transports.brevo({
			key: env.get("BREVO_API_KEY"),
			baseUrl: "https://api.brevo.com/v3",
		}),
	},
});

export default mailConfig;

declare module "@adonisjs/mail/types" {
	export interface MailersList extends InferMailers<typeof mailConfig> {}
}
