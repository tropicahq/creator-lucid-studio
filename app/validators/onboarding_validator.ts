import vine, { SimpleMessagesProvider } from "@vinejs/vine";

export const onboardingValidator = vine.compile(
	vine.object({
		// primaryNiche: vine.string().trim().min(2).max(100),
		primaryNiche: vine.string().trim(),
		audienceSegments: vine.string().trim(),
		socialBio: vine.string().trim(),
	}),
);

onboardingValidator.messagesProvider = new SimpleMessagesProvider(
	{
		"primaryNiche.required": "You must select at least one {{field}}",
		"audienceSegments.required": "You must select at least one {{field}}",
	},
	{
		primaryNiche: "Primary niche",
		audienceSegments: "Target audience",
		socialBio: "Social bio",
	},
);
