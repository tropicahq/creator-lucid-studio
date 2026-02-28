import MainLayout from "~/components/shared/layout/main-layout";
import { urlFor } from "~/lib/client";
import type { BreadcrumbItems, DefaultPageProps } from "~/types";

interface CreateAnalysisProps extends DefaultPageProps {}

const breadCrumbs: BreadcrumbItems = {
	title: "Create Analysis",
	items: [
		{
			title: "Analysis",
			href: urlFor("analysis.index"),
		},
	],
};
export default function CreateAnalysis(props: CreateAnalysisProps) {
	return (
		<MainLayout {...props} breadCrumb={breadCrumbs}>
			<div>Create Analysis</div>
		</MainLayout>
	);
}
