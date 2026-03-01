import { Link } from "@adonisjs/inertia/react";
import type { TreeCollection } from "@ark-ui/react/collection";
import { CollapsibleRoot } from "@base-ui/react";
import { usePage } from "@inertiajs/react";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
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
	return (
		<SidebarGroup>
			<SidebarGroupLabel className="text-sm">Platform</SidebarGroupLabel>
			<SidebarMenu>
				{items.rootNode.children.map((node, index) => {
					const isCollabsible = items.getNodeChildren(node).length > 0;
					return (
						<SidebarMenuItem key={index}>
							{!isCollabsible && (
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
							)}
							{isCollabsible && (
								<Collapsible
									render={(props) => (
										<>
											<CollapsibleTrigger
												{...props}
												render={(props) => (
													<SidebarMenuButton
														{...props}
														className={cn(
															"data-[state=open]:rotate-90",
															props.className,
															"group flex items-center justify-between p-2 text-md",
														)}
													>
														<div className="flex items-center gap-2">
															{node.icon && <node.icon />}
															<span>{node.label}</span>
														</div>
														<ChevronRight />
														<span className="sr-only">Toggle</span>
													</SidebarMenuButton>
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
								/>
							)}
						</SidebarMenuItem>
					);
				})}
			</SidebarMenu>
		</SidebarGroup>
	);
}
