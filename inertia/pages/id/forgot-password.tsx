import { Head, Link, useForm } from "@inertiajs/react";
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
	const form = useForm({
		email: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		form.clearErrors();
		form.post("/id/forgot-password", {
			preserveScroll: true,
			onSuccess: (x) => {
				const error = !!x.props.flash?.error;
				if (!error) form.reset();
			},
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={cn("flex flex-col gap-6", className)}
			autoComplete="off"
			{...props}
		>
			<FieldGroup
				data-invalid={form.hasErrors}
				className="gap-5 data-[invalid=true]:gap-4"
			>
				<div className="flex gap-1">
					<h1 className="text-2xl font-semibold">Forgot Password</h1>
				</div>
				<Field data-invalid={!!form.errors.email}>
					<FieldLabel htmlFor="email">Email address</FieldLabel>
					<FieldDescription>
						Enter the email associated with your account and we’ll send you
						password reset instructions
					</FieldDescription>
					<Input
						id="email"
						disabled={form.processing}
						type="email"
						aria-invalid={!!form.errors.email}
						value={form.data.email}
						onChange={(e) => form.setData("email", e.target.value)}
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
						<span className="text-[16px] font-medium" hidden={form.processing}>
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
		</form>
	);
}
