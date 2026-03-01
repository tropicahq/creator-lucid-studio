import { createTreeCollection } from "@ark-ui/react/collection";
import {
	ChartColumn,
	CircleSmall,
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
				icon: ChartColumn,
				children: [
					{
						href: urlFor("analysis.index"),
						label: "All Analysis",
						icon: CircleSmall,
						children: [],
					},
					{
						label: "New Analysis",
						href: urlFor("analysis.create.show"),
						icon: CircleSmall,
						children: [],
					},
				],
			},
		],
	},
	nodeToValue: (node) => node.label,
});
