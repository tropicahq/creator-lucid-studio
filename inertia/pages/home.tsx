import { Head } from "@inertiajs/react";
import MainLayout from "~/components/shared/layout/main-layout";
import type { BreadcrumbItems } from "~/types";

const breadcrumps: BreadcrumbItems = {
	title: "Home",
	items: [],
};
export default function Home(props: DefaultPageProps) {
	return (
		<MainLayout {...props} breadcrump={breadcrumps}>
			<Head title="Home" />
			<div>
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="bg-muted/50 aspect-video rounded-xl" />
					<div className="bg-muted/50 aspect-video rounded-xl" />
					<div className="bg-muted/50 aspect-video rounded-xl" />
				</div>
				<div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
			</div>
		</MainLayout>
	);
}
