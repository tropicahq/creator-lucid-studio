import { Head } from "@inertiajs/react";
import MainLayout from "~/components/shared/main-layout";

export default function Home(props: DefaultPageProps) {
	return (
		<MainLayout {...props}>
			<Head title="Home" />
			<div>
				<h1>Welcome to {props.appName}</h1>
			</div>
		</MainLayout>
	);
}
