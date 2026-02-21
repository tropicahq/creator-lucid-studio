/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import "../css/app.css";
import { resolvePageComponent } from "@adonisjs/inertia/helpers";
import { createInertiaApp } from "@inertiajs/react";
import { hydrateRoot } from "react-dom/client";
import MainLayout from "~/components/shared/main-layout";

// import.meta.glob(["../../resources/assets/**"]);
const appName = import.meta.env.VITE_APP_NAME || "AdonisJS";

createInertiaApp({
	progress: { color: "#5468FF" },

	title: (title) => `${title} > ${appName}`,

	resolve: async (name) => {
		const page = await resolvePageComponent(
			`../pages/${name}.tsx`,
			import.meta.glob("../pages/**/*.tsx"),
		);

		// page.default.layout =
		// 	page.default.layout ||
		// 	(({ key, props }: any) => {
		// 		console.log(props);
		// 		return <MainLayout children={props} {...props} />;
		// 	});
		return page;
	},

	setup({ el, App, props }) {
		hydrateRoot(el, <App {...props} />);
	},
});
