import { Head } from "@inertiajs/react";
import MainLayout from "~/components/shared/layout/main-layout";

export default function Home(props: DefaultPageProps) {
	return (
		<MainLayout {...props}>
			<Head title="Home" />
			<div>
				<h1>Welcome to {props.appName}</h1>
				<p>Come back later, we're working on it!</p>
			</div>
		</MainLayout>
	);
}
