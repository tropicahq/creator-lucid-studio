import { Form, Link } from "@adonisjs/inertia/react";
import { Head } from "@inertiajs/react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import party from "party-js";
import { useState } from "react";
import AuthLayout from "~/components/shared/layout/auth-layout";
import { Button } from "~/components/ui/button";
import { ButtonGroup } from "~/components/ui/button-group";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Spinner } from "~/components/ui/spinner";
import { urlFor } from "~/lib/client";
import { cn } from "~/lib/utils";

const ResetPassword = (props: DefaultPageProps & { email: string }) => {
	return (
		<AuthLayout {...props}>
			<Head title="Sig in" />
			<div className="flex flex-1 md:items-center justify-center">
				<div className="w-full max-w-md">
					<ResetPasswordForm noValidate={true} email={props.email} />
				</div>
			</div>
		</AuthLayout>
	);
};
// ResetPassword.layout = ({ key, ...props }: any) => <AuthLayout key={key} {...props} />;

export default ResetPassword;

function ResetPasswordForm({
	className,
	email,
	...props
}: React.ComponentProps<"form"> & { email: string }) {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<Form
			// onSubmit={handleSubmit}
			className={cn(
				"flex flex-col gap-6 inert:opacity-50 inert:pointer-events-none",
				className,
			)}
			disableWhileProcessing
			resetOnSuccess={false}
			headers={{
				"Cache-Control": "no-cache",
			}}
			// href={urlFor("auth.reset_password", {}, { qs: { email } })}
			route="auth.reset_password"
			method="post"
			autoComplete="off"
			onSuccess={(x) => {
				const error = !!x.props.flash?.error;
				if (!error) {
					party.confetti(document.body, {
						count: 250,
						size: 1.1,
						spread: 70,
						// ... and more!
					});
				}
			}}
			options={{ preserveScroll: true }}
			{...props}
		>
			{(form) => (
				<FieldGroup
					data-invalid={form.hasErrors}
					className="gap-5 data-[invalid=true]:gap-4"
				>
					<div className="flex gap-1">
						<h1 className="text-2xl font-semibold">Reset Password</h1>
					</div>
					<input type="hidden" name="email" value={email} />
					<Field data-invalid={form.invalid("password")}>
						<FieldLabel htmlFor="password">Password</FieldLabel>

						<ButtonGroup aria-invalid={form.invalid("password")}>
							<Input
								id="password"
								// disabled={form.processing}
								name="password"
								// value={form.data.password}
								type={showPassword ? "text" : "password"}
								placeholder="Your password"
								aria-invalid={form.invalid("password")}
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
							<span
								className="text-[16px] font-medium"
								hidden={form.processing}
							>
								{/*Send Password Reset Email*/}
								Submit
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
			)}
		</Form>
	);
}
