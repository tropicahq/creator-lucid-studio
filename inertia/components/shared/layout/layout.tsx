import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify/unstyled";

export default function Layout({ children, flashMessage }: LayoutProps) {
	useEffect(() => {
		if (flashMessage.success) {
			toast(flashMessage.success, {
				type: "success",
				autoClose: 4000,
				position: "top-right",
				theme: "dark",
				draggable: false,
				pauseOnHover: false,
			});
		} else if (flashMessage.error) {
			toast(flashMessage.error, {
				type: "error",
				autoClose: 4000,
				position: "top-right",
				theme: "dark",
				draggable: false,
				pauseOnHover: false,
			});
		}
	}, [flashMessage]);
	return (
		<>
			{children}
			<ToastContainer />
		</>
	);
}
