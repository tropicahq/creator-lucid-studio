/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from "@adonisjs/core/services/router";
import { middleware } from "./kernel.js";

// import * as devalue from "devalue";
// const _JobAnalysisManagersController = import("#controllers/job_analysis_managers_controller");

const UsersController = () => import("#controllers/users_controller");
const AuthController = () => import("#controllers/auth_controller");

// openapi.registerRoutes();
router.on("/").renderInertia("home");
router.jobs();
router
	.group(() => {
		router.get("/signup", [UsersController, "createUserShow"]);

		router.post("/signup", [UsersController, "createUser"]);
		router
			.get("/login", [AuthController, "loginShow"])
			.middleware([middleware.guest()]);
		router
			.post("/login", [AuthController, "login"])
			.middleware([middleware.guest()]);
	})
	.prefix("id");
// router.post("/create-post-analysis", [
// 	JobAnalysisManagersController,
// 	"creatJob",
// ]);
// router.get("/post-job", async ({ logger }) => {
// 	const flowProducer = new FlowProducer({
// 		connection: config.get("redis.main"),
// 	});

// 	const program = Effect.gen(function* () {
// 		// yield* Effect.all([
// 		// 	flowProducer.add({
// 		// 		name: PipelineAnalyzeData.name,
// 		// 		queueName: "analysis",
// 		// 		data: devalue.stringify({ pipelineId, stage: "analyze-data" }),
// 		// 		children: [
// 		// 			{
// 		// 				name: PipelineGetMedia.name,
// 		// 				queueName: "media-pipeline",
// 		// 				data: devalue.stringify({ pipelineId, stage: "get-posts-media" }),
// 		// 			},
// 		// 		],
// 		// 	}),
// 		// 	flowProducer.add({
// 		// 		name: PipelineGetMedia.name,
// 		// 		queueName: "media-pipeline",
// 		// 		data: devalue.stringify({ pipelineId, stage: "get-posts-media" }),
// 		// 	}),
// 		// ]);
// 		return "Hello";
// 	});
// 	return await Effect.runPromise(program);
// });
// const pipelineId = `pipeline_${Date.now()}`;
// await flowProducer.add({
// 	name: PipelineAnalyzeData.name,
// 	queueName: "analysis",
// 	data: devalue.stringify({ pipelineId, stage: "analyze-data" }),
// 	children: [
// 		{
// 			name: PipelineGetMedia.name,
// 			queueName: "media-pipeline",
// 			data: devalue.stringify({ pipelineId, stage: "get-posts-media" }),
// 		},
// 	],
// });
// await PipelineGetMedia.dispatch({ pipelineId });
