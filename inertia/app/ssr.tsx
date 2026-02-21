import { createInertiaApp } from "@inertiajs/react";
import ReactDOMServer from "react-dom/server";
import MainLayout from "~/components/shared/main-layout";

export default function render(page: any) {
	return createInertiaApp({
		page,
		render: ReactDOMServer.renderToString,
		resolve: (name) => {
			const pages = import.meta.glob("../pages/**/*.tsx", { eager: true });
			const resolvedPage = pages[`../pages/${name}.tsx`];
			// resolvedPage.default.layout =
			// 	resolvedPage.default.layout ||
			// 	(({ key, ...props }: any) => <MainLayout key={key} {...props} />);
			return resolvedPage;
		},
		setup: ({ App, props }) => <App {...props} />,
	});
}
