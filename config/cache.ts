import { defineConfig, drivers, store } from "@adonisjs/cache";
import env from "#start/env";

const cacheConfig = defineConfig({
	default: "default",

	stores: {
		memoryOnly: store().useL1Layer(drivers.memory()),

		default: store()
			.useL1Layer(drivers.memory())

			.useL2Layer(
				drivers.redis({
					connectionName: "main",
				}),
			)

			.useBus(drivers.redisBus({ connectionName: "main" })),
	},
});

export default cacheConfig;

declare module "@adonisjs/cache/types" {
	interface CacheStores extends InferStores<typeof cacheConfig> {}
}
