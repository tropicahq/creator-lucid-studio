import type {
	ComponentRenderFn,
	HTMLProps,
	NavigationMenuLinkState,
} from "@base-ui/react";
import { Form, usePage } from "@inertiajs/react";
import { LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { getInitials } from "~/lib/utils";

type Props = {
	trigger:
		| React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
		| ComponentRenderFn<HTMLProps<any>, NavigationMenuLinkState>
		| undefined;
	defaultOpen?: boolean;
	align?: "start" | "center" | "end";
};

const ProfileDropdown = ({ trigger, defaultOpen, align = "end" }: Props) => {
	const page = usePage();
	const user = page.props.user;
	return (
		<DropdownMenu defaultOpen={defaultOpen}>
			<DropdownMenuTrigger render={trigger} />
			<DropdownMenuContent className="w-80" align={align || "end"}>
				<DropdownMenuGroup>
					<DropdownMenuLabel className="flex items-center gap-4 px-4 py-2.5 font-normal">
						<div className="relative">
							<Avatar className="size-10">
								{/*<AvatarImage
												src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png"
												alt="John Doe"
											/>*/}
								<AvatarFallback>{getInitials(user.fullName)}</AvatarFallback>
							</Avatar>
							<span className="ring-card absolute right-0 bottom-0 block size-2 rounded-full bg-green-600 ring-2" />
						</div>
						<div className="flex flex-1 flex-col items-start">
							<span className="text-foreground text-lg font-semibold">
								{user.fullName}
							</span>
							<span className="text-muted-foreground text-base">
								{user.email}
							</span>
						</div>
					</DropdownMenuLabel>
				</DropdownMenuGroup>

				{/*<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem className="px-4 py-2.5 text-base">
						<UserIcon className="text-foreground size-5" />
						<span>My account</span>
					</DropdownMenuItem>
					<DropdownMenuItem className="px-4 py-2.5 text-base">
						<SettingsIcon className="text-foreground size-5" />
						<span>Settings</span>
					</DropdownMenuItem>
					<DropdownMenuItem className="px-4 py-2.5 text-base">
						<CreditCardIcon className="text-foreground size-5" />
						<span>Billing</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />*/}
				{/*
				<DropdownMenuGroup>
					<DropdownMenuItem className="px-4 py-2.5 text-base">
						<UsersIcon className="text-foreground size-5" />
						<span>Manage team</span>
					</DropdownMenuItem>
					<DropdownMenuItem className="px-4 py-2.5 text-base">
						<SquarePenIcon className="text-foreground size-5" />
						<span>Customization</span>
					</DropdownMenuItem>
					<DropdownMenuItem className="px-4 py-2.5 text-base">
						<CirclePlusIcon className="text-foreground size-5" />
						<span>Add team account</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />*/}

				<Form
					disableWhileProcessing
					className="inert:opacity-50 inert:pointer-events-none"
					options={{ preserveScroll: true }}
					method="post"
					action="/id/logout"
				>
					{({ processing, submit }) => (
						<DropdownMenuItem
							variant="destructive"
							className="px-4 py-2.5 text-base"
							disabled={processing}
							onClick={() => submit()}
						>
							<LogOutIcon className="size-5" />
							<span>Logout</span>
						</DropdownMenuItem>
					)}
				</Form>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ProfileDropdown;
