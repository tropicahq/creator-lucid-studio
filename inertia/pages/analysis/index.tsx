import MainLayout from "~/components/shared/layout/main-layout";
import { urlFor } from "~/lib/client";
import type { BreadcrumbItems, DefaultPageProps } from "~/types";

interface AnalysisProps extends DefaultPageProps {}

const breadCrumbs: BreadcrumbItems = {
	title: "Analysis",
	items: [],
};
export default function Analysis(props: AnalysisProps) {
	return (
		<MainLayout {...props} breadCrumb={breadCrumbs}>
			<div>Analysis</div>
		</MainLayout>
	);
}
