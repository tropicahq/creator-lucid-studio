import { Job } from "adonisjs-jobs";

type PipelineGetMediaPayload = {
	pipelineId: string;
	stage: string;
};

export default class PipelineGetMedia extends Job {
	async handle(payload: PipelineGetMediaPayload) {
		console.log(12);
		this.logger.info(
			"PipelineGetMedia job handled with pipelineId: %s",
			payload.pipelineId,
		);
	}
	failed(error: Error): Promise<void> | void {
		this.logger.error(`[${PipelineGetMedia.name}]: ` + error.message);
	}
}
