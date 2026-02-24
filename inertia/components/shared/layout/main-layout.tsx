import { Link, usePage } from "@inertiajs/react";
import { ChartColumnStacked } from "lucide-react";
import Profile from "#models/profile";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { cn, getInitials } from "~/lib/utils";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "../../ui/navigation-menu";
import ProfileDropdown from "../dropdown-profile";
import Layout from "./layout";

export default function MainLayout({ children, ...props }: LayoutProps) {
	return (
		<Layout {...props}>
			<div className="flex min-h-full flex-col">
				<Header isOnboarding={props.isOnboarded} />
				<main className="flex flex-1 flex-col px-2 py-px">
					<div className="mx-auto flex w-full grow flex-col items-stretch rounded-lg bg-weaker shadow-xs ring-1 ring-[#E6E7E9]">
						{children}
					</div>
				</main>
				<footer>{/*<p>&copy; {new Date().getFullYear()} Inertia</p>*/}</footer>
			</div>
		</Layout>
	);
}

function Header({ isOnboarding }: { isOnboarding: boolean }) {
	const page = usePage();
	const { user } = page.props;
	return (
		<header className="bg-card sticky top-0 z-50">
			<div>
				<div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6">
					{/**/}
					<div className="flex items-center gap-4">
						<a href="/#">
							<div className="flex items-center">
								{/*Logo Icon*/}
								<span className="ml-2.5 hidden text-xl font-semibold sm:block">
									Creator Lucid
								</span>
							</div>
						</a>
					</div>
					{/**/}
					<div className="flex items-center gap-1.5">
						<ProfileDropdown
							trigger={(props, _) => (
								<Button
									variant={"ghost"}
									size={"icon"}
									{...props}
									className={cn(props.className, "size-9 rounded-full")}
								>
									<Avatar className={"size-9"}>
										<AvatarFallback>
											{getInitials(user.fullName)}
										</AvatarFallback>
									</Avatar>
								</Button>
							)}
						/>
					</div>
				</div>
			</div>
			<div className="border-t" hidden={!isOnboarding}>
				<div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-1.5 sm:px-6">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink
									render={(props, _) => (
										<Link className={props.className} href={"/"}>
											{" "}
											<ChartColumnStacked /> Dashboard
										</Link>
									)}
								/>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</header>
	);
}
