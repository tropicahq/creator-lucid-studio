// import { ToastContainer, toast } from "react-toastify/unstyled";
import { Portal } from "@ark-ui/react/portal";
import { createToaster, Toast, Toaster } from "@ark-ui/react/toast";
import { XIcon } from "lucide-react";
import { useEffect } from "react";

const toaster = createToaster({
	placement: "top-end",
	overlap: true,
	gap: 16,
});

export default function Layout({ children, flashMessage }: LayoutProps) {
	useEffect(() => {
		if (flashMessage.success) {
			// toast(flashMessage.success, {
			// 	type: "success",
			// 	autoClose: 4000,
			// 	position: "top-right",
			// 	theme: "dark",
			// 	draggable: false,
			// 	pauseOnHover: false,
			// });
			queueMicrotask(() => {
				toaster.create({
					type: "info",
					title: "Notification",
					description: flashMessage.success ?? "",
				});
			});
		} else if (flashMessage.error) {
			queueMicrotask(() => {
				toaster.create({
					type: "info",
					title: "Notification",
					description: flashMessage.error ?? "",
				});
			});
			// toast(flashMessage.error, {
			// 	type: "error",
			// 	autoClose: 4000,
			// 	position: "top-right",
			// 	theme: "dark",
			// 	draggable: false,
			// 	pauseOnHover: false,
			// });
		}
	}, [flashMessage]);
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
