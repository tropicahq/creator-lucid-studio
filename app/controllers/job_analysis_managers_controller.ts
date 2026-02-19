import type { HttpContext } from "@adonisjs/core/http";
import { Effect } from "effect";

export default class JobAnalysisManagersController {
	public async creatJob({}: HttpContext) {
		const program = Effect.gen(function* () {
			return "Create Job Analysis Again";
		});
		return await Effect.runPromise(program);
	}
}
