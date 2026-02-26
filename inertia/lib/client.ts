import { createTuyau } from "@tuyau/core/client";
import { registry } from "../../.adonisjs/client/registry";

export const client = createTuyau({
	baseUrl: "/",
	registry,
});

export const urlFor = client.urlFor;
