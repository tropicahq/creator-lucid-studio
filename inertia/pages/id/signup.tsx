import { Head, Link, useForm } from "@inertiajs/react";
import { EyeClosedIcon, EyeIcon, GalleryVerticalEnd } from "lucide-react";
import { useState } from "react";
import AuthLayout from "~/components/shared/auth-layout";
import { Button } from "~/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "~/components/ui/input-group";
import { Spinner } from "~/components/ui/spinner";
import { cn } from "~/lib/utils";

const Signup = (props: DefaultPageProps) => {
	return (
		<AuthLayout {...props}>
			<Head title="Signup" />
			<div className="flex flex-1 md:items-center justify-center">
				<div className="w-full max-w-md">
					<SignupForm noValidate={true} />
				</div>
			</div>
		</AuthLayout>
	);
};

export default Signup;

function SignupForm({ className, ...props }: React.ComponentProps<"form">) {
	const [showPassword, setShowPassword] = useState(false);
	const form = useForm({
		email: "",
		password: "",
		fullName: "",
		userName: "",
	});
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		form.clearErrors();
		form.post("/id/signup", {
			preserveScroll: true,
			onSuccess: () => {
				form.reset();
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
					<h1 className="text-2xl font-semibold">Sign up</h1>
					{/*<p className="text-muted-foreground text-sm text-balance">
						Fill in the form below to create your account
					</p>*/}
				</div>
				<div className="grid grid-cols-2 gap-4">
					<Field>
						<FieldLabel htmlFor="name">Full name</FieldLabel>
						<Input
							id="name"
							disabled={form.processing}
							type="text"
							onChange={(e) => form.setData("fullName", e.target.value)}
							placeholder="Your full name"
							required
						/>
						{form.errors.fullName && (
							<FieldError>{form.errors.fullName}</FieldError>
						)}
					</Field>
					<Field>
						<FieldLabel htmlFor="user_name">User name</FieldLabel>
						<Input
							id="user_name"
							type="text"
							disabled={form.processing}
							onChange={(e) => form.setData("userName", e.target.value)}
							placeholder="Your user name"
							required
						/>
						{form.errors.userName && (
							<FieldError>{form.errors.userName}</FieldError>
						)}
					</Field>
				</div>
				<Field>
					<FieldLabel htmlFor="email">Email</FieldLabel>
					<Input
						id="email"
						type="email"
						disabled={form.processing}
						onChange={(e) => form.setData("email", e.target.value)}
						placeholder="Your email address"
						required
					/>
					{form.errors.email && <FieldError>{form.errors.email}</FieldError>}
					{/*<FieldDescription>
						We&apos;ll use this to contact you. We will not share your email
						with anyone else.
					</FieldDescription>*/}
				</Field>
				<Field>
					<FieldLabel htmlFor="password">Password</FieldLabel>
					<InputGroup>
						<InputGroupInput
							id="password"
							disabled={form.processing}
							type={showPassword ? "text" : "password"}
							onChange={(e) => form.setData("password", e.target.value)}
							placeholder="Your password"
							required
						/>
						<InputGroupAddon align={"inline-end"}>
							<InputGroupButton
								size={"sm"}
								onClick={() => setShowPassword(!showPassword)}
							>
								{" "}
								{showPassword ? <EyeIcon /> : <EyeClosedIcon />}
							</InputGroupButton>
						</InputGroupAddon>
					</InputGroup>
					{form.errors.password && (
						<FieldError>{form.errors.password}</FieldError>
					)}
					<FieldDescription>
						Must be at least 8 characters long.
					</FieldDescription>
				</Field>
				{/*<Field>
					<FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
					<Input id="confirm-password" type="password" required />
					<FieldDescription>Please confirm your password.</FieldDescription>
				</Field>*/}
				<Field>
					<Button
						disabled={form.processing}
						size={"lg"}
						className={"text-white"}
						type="submit"
					>
						{form.processing && <Spinner />}
						<span className="text-[16px] font-medium" hidden={form.processing}>
							Create Account
						</span>
					</Button>
				</Field>
				<FieldSeparator>OR</FieldSeparator>
				<Field>
					<Button
						disabled={form.processing}
						variant="outline"
						size={"lg"}
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
									data-darkreader-inline-fill=""
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
						Already have an account?{" "}
						<Link href="/id/login" className="text-primary">
							Sign in
						</Link>
					</FieldDescription>
				</Field>
			</FieldGroup>
		</form>
	);
}
