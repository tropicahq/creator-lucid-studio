import vine from "@vinejs/vine";
export const idCreateUserValidator = vine.compile(
	vine.object({
		fullName: vine.string().trim(),
		userName: vine.string().trim(),
		email: vine
			.string()
			.trim()
			.email()
			.unique({ column: "email", table: "users" }),
		password: vine.string().minLength(8).maxLength(100),
	}),
);
export const idLoginValidator = vine.compile(
	vine.object({
		email: vine
			.string()
			.trim()
			.email()
			.exists({ column: "email", table: "users" }),
		password: vine.string().minLength(8).maxLength(100),
	}),
);
