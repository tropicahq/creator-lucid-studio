import { Form, Link } from "@adonisjs/inertia/react";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import AuthLayout from "~/components/shared/layout/auth-layout";
import { Button } from "~/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Spinner } from "~/components/ui/spinner";
import { cn } from "~/lib/utils";

const ForgotPassword = (props: DefaultPageProps) => {
	return (
		<AuthLayout {...props}>
			<Head title="Sig in" />
			<div className="flex flex-1 md:items-center justify-center">
				<div className="w-full max-w-md">
					<ForgotPasswordForm noValidate={true} />
				</div>
			</div>
		</AuthLayout>
	);
};
// ForgotPassword.layout = ({ key, ...props }: any) => <AuthLayout key={key} {...props} />;

export default ForgotPassword;

function ForgotPasswordForm({
	className,
	...props
}: React.ComponentProps<"form">) {
	return (
		<Form
			className={cn(
				"flex flex-col gap-6 inert:opacity-50 inert:pointer-events-none",
				className,
			)}
			disableWhileProcessing
			resetOnSuccess={false}
			headers={{
				"Cache-Control": "no-cache",
			}}
			autoComplete="off"
			route="auth.forgot_password"
			method="post"
			onSuccess={(x) => {
				const _error = !!x.props.flash?.error;
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
						<h1 className="text-2xl font-semibold">Forgot Password</h1>
					</div>
					<Field data-invalid={form.invalid("email")}>
						<FieldLabel htmlFor="email">Email address</FieldLabel>
						<FieldDescription>
							Enter the email associated with your account and we’ll send you
							password reset instructions
						</FieldDescription>
						<Input
							id="email"
							disabled={form.processing}
							type="email"
							aria-invalid={form.invalid("email")}
							name="email"
							placeholder="Your email address"
							required
						/>
						{form.errors.email && <FieldError>{form.errors.email}</FieldError>}
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
