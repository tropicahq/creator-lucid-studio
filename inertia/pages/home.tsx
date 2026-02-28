import { Head } from "@inertiajs/react";
import MainLayout from "~/components/shared/layout/main-layout";
import type { BreadcrumbItems } from "~/types";

const breadCrumbs: BreadcrumbItems = {
	title: "Dashboard",
	items: [],
};
export default function Home(props: DefaultPageProps) {
	return (
		<MainLayout {...props} breadCrumb={breadCrumbs}>
			<Head title="Home" />
			<div className="flex flex-1 flex-col gap-4">
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
