import { resolvePageComponent } from "@adonisjs/inertia/helpers";
import { TuyauProvider } from "@adonisjs/inertia/react";
import { createInertiaApp } from "@inertiajs/react";
import ReactDOMServer from "react-dom/server";
import { client } from "~/lib/client";

export default function render(page: any) {
	return createInertiaApp({
		page,
		render: ReactDOMServer.renderToString,
		resolve: (name) => {
			const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
			const resolvedPage = pages[`./pages/${name}.tsx`];

			// resolvedPage.default.layout =
			// 	resolvedPage.default.layout ||
			// 	(({ key, ...props }: any) => <MainLayout key={key} {...props} />);
			return resolvePageComponent(
				`./pages/${name}.tsx`,
				import.meta.glob("./pages/**/*.tsx", { eager: true }),
			);
		},
		setup: ({ App, props }) => (
			<TuyauProvider client={client}>
				<App {...props} />
			</TuyauProvider>
		),
	});
}
