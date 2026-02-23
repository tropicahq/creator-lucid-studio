// https://github.com/orgs/adonisjs/discussions/5023
import { Portal } from "@ark-ui/react/portal";
import { createToaster, Toast, Toaster } from "@ark-ui/react/toast";
import { XIcon } from "lucide-react";
import { useEffect } from "react";

const toaster = createToaster({
	placement: "top-end",
	overlap: true,
	gap: 16,
});

export default function BaseLayout({ children, flash }: LayoutProps) {
	useEffect(() => {
		if (flash.success) {
			queueMicrotask(() => {
				toaster.create({
					type: "info",
					title: "Notification",
					description: flash.success ?? "",
				});
			});
		} else if (flash.error) {
			queueMicrotask(() => {
				toaster.create({
					type: "info",
					title: "Notification",
					description: flash.error ?? "",
				});
			});
		}
	}, [flash]);
	return (
		<>
			{children}
			{/*<ToastContainer />*/}
			<Portal>
				<Toaster toaster={toaster}>
					{(toast) => (
						<Toast.Root key={toast.id} className={"toast-root"}>
							<Toast.Title className={"toast-title"}>{toast.title}</Toast.Title>
							<Toast.Description className={"toast-description"}>
								{toast.description}
							</Toast.Description>
							<Toast.CloseTrigger className={"toast-close-trigger"}>
								<XIcon />
							</Toast.CloseTrigger>
						</Toast.Root>
					)}
				</Toaster>
			</Portal>
		</>
	);
}
