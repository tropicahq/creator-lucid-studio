import { usePage } from "@inertiajs/react";
import { AppSidebar } from "~/components/shared/app-sidebar";
import Layout from "~/components/shared/layout/layout";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { cn, getInitials } from "~/lib/utils";
import type { LayoutProps } from "~/types";
import ProfileDropdown from "../dropdown-profile";
import { SiteHeader } from "../site-header";

export default function MainLayout({ children, ...props }: LayoutProps) {
	return (
		<Layout {...props}>
			<div className="[--header-height:calc(--spacing(14))] min-h-full">
				<SidebarProvider className="flex flex-col">
					<SiteHeader breadcrump={props.breadcrump} />
					<div className="flex flex-1">
						<AppSidebar />
						<SidebarInset>
							<main className="flex flex-1 flex-col gap-4 p-4">
								<div className="mx-auto flex w-full grow flex-col items-stretch bg-weaker]">
									{children}
								</div>
							</main>
						</SidebarInset>
					</div>
				</SidebarProvider>
			</div>
		</Layout>
	);
}

function Header({ isOnboarding }: { isOnboarding: boolean }) {
	const page = usePage();
	const { user } = page.props;
	return (
		<header className="bg-card sticky top-0 z-50">
			<div className="border-b">
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
			{/*<div className="border-t" hidden={!isOnboarding}>
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
			</div>*/}
		</header>
	);
}
