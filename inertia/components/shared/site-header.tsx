import { Link } from "@adonisjs/inertia/react";
import { usePage } from "@inertiajs/react";
import { SidebarIcon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
// import { SearchForm } from "~/components/search-form"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { useSidebar } from "~/components/ui/sidebar";
import { cn, getInitials } from "~/lib/utils";
import type { BreadcrumbItems } from "~/types";
import { Avatar, AvatarFallback } from "../ui/avatar";
import ProfileDropdown from "./dropdown-profile";

export function SiteHeader({ breadCrumb }: { breadCrumb: BreadcrumbItems }) {
	const { toggleSidebar } = useSidebar();
	const user = usePage().props.user;

	return (
		<header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
			<div className="flex h-(--header-height) w-full items-center gap-2 px-4">
				{/*<div className="flex items-center">*/}
				<Button
					className="h-8 w-8"
					variant="ghost"
					size="icon"
					onClick={toggleSidebar}
				>
					<SidebarIcon />
				</Button>
				<Separator orientation="vertical" className="mr-2 h-full" />
				<Breadcrumb className="hidden sm:block">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink
								render={(props) => (
									<Link className={props.className} route="dashboard">
										{__APP_NAME__}
									</Link>
								)}
							/>
						</BreadcrumbItem>
						{breadCrumb.items.length > 0 && <BreadcrumbSeparator />}
						{breadCrumb.items.map((item, index) => (
							<Fragment key={index}>
								<BreadcrumbItem>
									<BreadcrumbLink
										render={(props) => (
											<Link className={props.className} href={item.href}>
												{item.title}
											</Link>
										)}
									/>
								</BreadcrumbItem>
								{index < breadCrumb.items.length - 1 && <BreadcrumbSeparator />}
							</Fragment>
						))}
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{breadCrumb.title}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				{/*</div>*/}
				{/*<SearchForm className="w-full sm:ml-auto sm:w-auto" />*/}
				<div className="flex items-center gap-1.5 w-auto ml-auto">
					<ProfileDropdown
						trigger={(props, _) => (
							<Button
								variant={"ghost"}
								size={"icon"}
								{...props}
								className={cn(props.className, "size-9 rounded-full")}
							>
								<Avatar className={"size-9"}>
									<AvatarFallback>{getInitials(user.fullName)}</AvatarFallback>
								</Avatar>
							</Button>
						)}
					/>
				</div>
			</div>
		</header>
	);
}
