import Placeholder from "~/assets/placeholder.svg";
import Layout from "./layout";

export default function AuthLayout({ children, ...props }: LayoutProps) {
	return (
		<Layout {...props}>
			<div className="grid min-h-svh lg:grid-cols-2">
				{/**/}
				<div className="flex flex-col gap-4 p-6 md:p-10">{children}</div>
				{/**/}
				<div className="bg-muted relative hidden lg:block">
					<img
						src={Placeholder}
						alt=""
						className="absolute inset-0 h-full w-full object-cover"
					/>
				</div>
			</div>
		</Layout>
	);
}
