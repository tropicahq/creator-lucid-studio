/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from "@adonisjs/core/services/router";
import transmit from "@adonisjs/transmit/services/main";
import { middleware } from "./kernel.js";
import { throttle } from "./limiter.js";

// import * as devalue from "devalue";
// const _JobAnalysisManagersController = import("#controllers/job_analysis_managers_controller");

const UsersController = () => import("#controllers/users_controller");
const AuthController = () => import("#controllers/auth_controller");

const HealthChecksController = () =>
	import("#controllers/health_checks_controller");
// openapi.registerRoutes();
const OnboardController = () => import("#controllers/onboard_controller");

router.get("/health", [HealthChecksController]);
transmit.registerRoutes((route) => {
	// Ensure you are authenticated to register your client
	if (route.getPattern() === "__transmit/events") {
		route.middleware(middleware.auth());
		return;
	}

	// Add a throttle middleware to other transmit routes
	route.use(throttle);
});

router.jobs();
router
	.group(() => {
		router.on("/signup").renderInertia("id/signup").as("signup");
		router.post("/signup", [UsersController, "createUser"]);
		// .middleware(throttle);
		router
			.on("/login")
			.renderInertia("id/login")
			.as("login")
			.middleware(middleware.guest());
		router
			.post("/login", [AuthController, "login"])
			.middleware([middleware.guest()])
			.middleware(throttle);

		router
			.on("/forgot-password")
			.renderInertia("id/forgot-password")
			.as("forgot-password")
			.middleware(middleware.guest());
		router
			.post("/forgot-password", [AuthController, "forgotPassword"])
			.middleware([middleware.guest()])
			.middleware(throttle);

		router
			.post("/logout", [AuthController, "logout"])
			.as("logout")
			.middleware([throttle, middleware.auth()]);
	})
	.prefix("id");
router
	.group(() => {
		router.on("/onboard").renderInertia("onboard/index").as("profile.onboard");
		router.post("/onboard", [OnboardController]).middleware(throttle);
	})
	.middleware([middleware.auth()]);
router
	.group(() => {
		router.on("/").renderInertia("home").as("dashboard");
	})
	.middleware([middleware.auth(), middleware.ensureOnboardPass()]);

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
