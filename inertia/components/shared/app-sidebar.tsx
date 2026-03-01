import { Link } from "@adonisjs/inertia/react";
import { usePage } from "@inertiajs/react";
import { Command } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
} from "~/components/ui/sidebar";
import { navLinks } from "~/lib/nav-links";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

export function AppSidebar() {
	const props = usePage().props;
	const appName = props.appName;
	const user = props.user;
	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
			// {...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							render={(props) => (
								<Link route="dashboard" className={props.className}>
									<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
										<Command className="size-4" />
									</div>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-medium">{appName}</span>
										{/*<span className="truncate text-xs">Enterprise</span>*/}
									</div>
								</Link>
							)}
						/>
					</SidebarMenuItem>
				</SidebarMenu>
				<SidebarSeparator />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={navLinks} />
				{/*
				<NavProjects projects={data.projects} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />*/}
			</SidebarContent>
			<SidebarFooter>
				<SidebarSeparator />
				<NavUser user={user} />
			</SidebarFooter>
		</Sidebar>
	);
}
