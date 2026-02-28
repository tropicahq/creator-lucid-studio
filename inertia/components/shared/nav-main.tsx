import { Link } from "@adonisjs/inertia/react";
import type { TreeCollection } from "@ark-ui/react/collection";
import { CollapsibleRoot } from "@base-ui/react";
import { usePage } from "@inertiajs/react";
import { ChevronRight, type LucideIcon } from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "~/components/ui/sidebar";
import type { NavLinksTreeCollection } from "~/lib/nav-links";
import { cn } from "~/lib/utils";

export function NavMain({
	items,
}: {
	items: TreeCollection<NavLinksTreeCollection>;
}) {
	const url = usePage().url;
	return (
		<SidebarGroup>
			<SidebarGroupLabel className="text-sm">Platform</SidebarGroupLabel>
			<SidebarMenu>
				{items.rootNode.children.map((node, index) => (
					<Collapsible
						defaultOpen={true}
						key={index}
						render={(props) => (
							<SidebarMenuItem {...props}>
								<SidebarMenuButton
									// tooltip={node.label}
									className="text-md"
									render={(props) => (
										<Link href={node.href} className={props.className}>
											{node.icon && <node.icon />}
											<span>{node.label}</span>
										</Link>
									)}
								/>
								{items.getNodeChildren(node).length > 0 && (
									<>
										<CollapsibleTrigger
											render={(props) => (
												<SidebarMenuAction
													{...props}
													className={cn(
														"data-[state=open]:rotate-90",
														props.className,
													)}
												>
													<ChevronRight />
													<span className="sr-only">Toggle</span>
												</SidebarMenuAction>
											)}
										/>
										<CollapsibleContent>
											<SidebarMenuSub>
												{items.getNodeChildren(node).map((item) => (
													<SidebarMenuSubItem key={item.label}>
														<SidebarMenuSubButton
															render={(props) => (
																<Link
																	className={props.className}
																	href={item.href}
																>
																	{item.icon && <item.icon />}{" "}
																	<span>{item.label}</span>
																</Link>
															)}
														/>
													</SidebarMenuSubItem>
												))}
											</SidebarMenuSub>
										</CollapsibleContent>
									</>
								)}
							</SidebarMenuItem>
						)}
					/>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
