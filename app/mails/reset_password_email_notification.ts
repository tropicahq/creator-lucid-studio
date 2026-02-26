import { BaseMail } from "@adonisjs/mail";

export default class ResetPasswordEmailNotification extends BaseMail {
	// from = ''
	subject = "Reset Password";

	constructor(private payload: { resetToken: string; userEmail: string }) {
		super();
	}

	/**
	 * The "prepare" method is called automatically when
	 * the email is sent or queued.
	 */
	prepare() {
		this.message
			.to(this.payload.userEmail)
			// .html(
			// 	`<p>Click here to <a href='${env.get("APP_URL")}/id/reset-password?token=${this.payload.resetToken}&email=${this.payload.userEmail}'>reset your password</a></p>`,
			// );
			.htmlView("emails/reset_password_mail", {
				email: this.payload.userEmail,
				token: this.payload.resetToken,
			});
	}
}
