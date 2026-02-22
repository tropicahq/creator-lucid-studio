import { Head, Link, useForm } from "@inertiajs/react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
import AuthLayout from "~/components/shared/layout/auth-layout";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ButtonGroup } from "~/components/ui/button-group";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Spinner } from "~/components/ui/spinner";
import { cn } from "~/lib/utils";

const Sigin = (props: DefaultPageProps) => {
	return (
		<AuthLayout {...props}>
			<Head title="Sig in" />
			<div className="flex flex-1 md:items-center justify-center">
				<div className="w-full max-w-md">
					<SiginForm noValidate={true} />
				</div>
			</div>
		</AuthLayout>
	);
};
// Sigin.layout = ({ key, ...props }: any) => <AuthLayout key={key} {...props} />;

export default Sigin;

function SiginForm({ className, ...props }: React.ComponentProps<"form">) {
	const [showPassword, setShowPassword] = useState(false);
	const form = useForm({
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		form.clearErrors();
		form.post("/id/login", {
			preserveScroll: true,
			onSuccess: (x) => {
				// form.reset();
			},
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={cn("flex flex-col gap-6", className)}
			{...props}
		>
			<FieldGroup className="gap-5">
				<div className="flex gap-1">
					<h1 className="text-2xl font-semibold">Sign in</h1>
				</div>
				<Field>
					<FieldLabel htmlFor="email">Email</FieldLabel>
					<Input
						id="email"
						disabled={form.processing}
						type="email"
						onChange={(e) => form.setData("email", e.target.value)}
						placeholder="Your email address"
						required
					/>
					{form.errors.email && <FieldError>{form.errors.email}</FieldError>}
				</Field>
				<Field>
					<div className="flex justify-between items-center w-full">
						<FieldLabel htmlFor="password">Password</FieldLabel>
						<Link
							href={"/id/reset-password"}
							className={cn(
								"text-muted-foreground text-left text-sm leading-normal font-normale",
								"mt-0",
								"hover:text-primary hover:underline hover:underline-offset-4",
							)}
						>
							Forgot your password?
						</Link>
					</div>

					<ButtonGroup>
						<Input
							id="password"
							disabled={form.processing}
							onChange={(e) => form.setData("password", e.target.value)}
							type={showPassword ? "text" : "password"}
							placeholder="Your password"
							required
						/>
						<Button
							className={"h-auto"}
							size={"sm"}
							variant={"outline"}
							type="button"
							onClick={() => setShowPassword(!showPassword)}
						>
							{" "}
							{showPassword ? <EyeIcon /> : <EyeClosedIcon />}
						</Button>
					</ButtonGroup>
					{form.errors.password && (
						<FieldError>{form.errors.password}</FieldError>
					)}
					<FieldDescription>
						Must be at least 8 characters long.
					</FieldDescription>
				</Field>

				<Field>
					<Button
						disabled={form.processing}
						size={"lg"}
						className={"text-white"}
						type="submit"
					>
						{form.processing && <Spinner />}
						<span className="text-[16px] font-medium" hidden={form.processing}>
							Sign in
						</span>
					</Button>
				</Field>
				<FieldSeparator>OR</FieldSeparator>
				<Field>
					<FieldLabel>
						<Badge variant="secondary" className="ml-auto">
							Coming Soon
						</Badge>
					</FieldLabel>
					<Button
						variant="outline"
						size={"lg"}
						disabled={form.processing}
						className={"gap-3"}
						type="button"
					>
						<svg
							fill="none"
							height={15}
							viewBox="0 0 16 16"
							width={15}
							xmlns="http://www.w3.org/2000/svg"
							className="ak-AuthButtonIcon"
						>
							<g>
								<path
									d="M15.83 8.18C15.83 7.65333 15.7833 7.15333 15.7033 6.66667H8.17V9.67333H12.4833C12.29 10.66 11.7233 11.4933 10.8833 12.06V14.06H13.4567C14.9633 12.6667 15.83 10.6133 15.83 8.18Z"
									fill="#4285F4"
								/>
								<path
									d="M8.17 16C10.33 16 12.1367 15.28 13.4567 14.06L10.8833 12.06C10.1633 12.54 9.25 12.8333 8.17 12.8333C6.08334 12.8333 4.31667 11.4267 3.68334 9.52667H1.03V11.5867C2.34334 14.2 5.04334 16 8.17 16Z"
									fill="#34A853"
								/>
								<path
									d="M3.68334 9.52667C3.51667 9.04667 3.43 8.53333 3.43 8C3.43 7.46667 3.52334 6.95334 3.68334 6.47334V4.41334H1.03C0.483335 5.49334 0.170002 6.70667 0.170002 8C0.170002 9.29333 0.483335 10.5067 1.03 11.5867L3.68334 9.52667Z"
									fill="#FBBC05"
								/>
								<path
									d="M8.17 3.16667C9.35 3.16667 10.4033 3.57334 11.2367 4.36667L13.5167 2.08667C12.1367 0.793334 10.33 0 8.17 0C5.04334 0 2.34334 1.8 1.03 4.41334L3.68334 6.47334C4.31667 4.57334 6.08334 3.16667 8.17 3.16667Z"
									fill="#EA4335"
								/>
							</g>
						</svg>

						<span className="text-[16px] font-medium">
							Continue with Google
						</span>
					</Button>
					<FieldDescription className="px-6 text-center">
						Don&apos;t have an account?{" "}
						<Link href="/id/signup" className="text-primary">
							Create account
						</Link>
					</FieldDescription>
				</Field>
			</FieldGroup>
		</form>
	);
}
