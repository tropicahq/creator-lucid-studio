import { createTreeCollection } from "@ark-ui/react/collection";
import {
	ChartColumn,
	LayoutDashboard,
	type LucideIcon,
	Plus,
} from "lucide-react";
import { urlFor } from "./client";

export type NavLinksTreeCollection = {
	label: string;
	href?: string;
	icon?: LucideIcon;
	children: NavLinksTreeCollection[];
};
urlFor;
export const navLinks = createTreeCollection<NavLinksTreeCollection>({
	rootNode: {
		label: "root",
		children: [
			{
				label: "Dashboard",
				href: urlFor("dashboard"),
				icon: LayoutDashboard,
				children: [],
			},
			{
				label: "Analysis",
				href: urlFor("analysis.index"),
				icon: ChartColumn,
				children: [
					{
						label: "Run New Analysis",
						href: urlFor("analysis.create.show"),
						icon: Plus,
						children: [],
					},
				],
			},
		],
	},
	nodeToValue: (node) => node.label,
});
