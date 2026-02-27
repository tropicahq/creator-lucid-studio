// https://github.com/orgs/adonisjs/discussions/5023
import { Portal } from "@ark-ui/react/portal";
import { createToaster, Toast, Toaster } from "@ark-ui/react/toast";
import { router } from "@inertiajs/react";
import { XIcon } from "lucide-react";
import { useEffect } from "react";
import { TooltipProvider } from "~/components/ui/tooltip";

const toaster = createToaster({
	placement: "top-end",
	overlap: true,
	gap: 16,
});
const FlashToastId = Symbol("FlashToastId");
export default function BaseLayout({ children, flash }: LayoutProps) {
	useEffect(() => {
		// console.log(flash);
		if ("success" in flash || "error" in flash) {
			if (flash.success) {
				Promise.resolve().then(() => {
					toaster.create({
						type: "info",
						title: "Notification",
						description: flash.success ?? "",
						id: FlashToastId.toString(),
					});
				});
			} else if (flash.error) {
				Promise.resolve().then(() => {
					toaster.create({
						type: "info",
						title: "Notification",
						description: flash.error ?? "",
						id: FlashToastId.toString(),
					});
				});
			}
		}
		return () => {
			const isToastVisible = toaster.isVisible(FlashToastId.toString());
			if (isToastVisible) {
				Promise.resolve().then(() => {
					toaster.remove(FlashToastId.toString());
				});
			}
		};
	}, [flash]);
	return (
		<TooltipProvider>
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
		</TooltipProvider>
	);
}
