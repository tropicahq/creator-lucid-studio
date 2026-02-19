import { Job } from "adonisjs-jobs";

type PipelineAnalyzeDataPayload = {};

export default class PipelineAnalyzeData extends Job {
	async handle(payload: PipelineAnalyzeDataPayload) {
		this.logger.info("PipelineAnalyzeData job handled");
	}
}
