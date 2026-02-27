import { createTuyau } from "@tuyau/core/client";
import { registry } from "../../.adonisjs/client/registry";

export const client = createTuyau({
	baseUrl: "/",
	registry,
	hooks: {
		beforeRequest: [
			async (request) => {
				request.headers.set("X-Idempotency-Key", crypto.randomUUID());
			},
		],
	},
});

export const urlFor = client.urlFor;
