import type { JSONDataTypes } from "@adonisjs/core/types/transformers";
import type { Data } from "@generated/data";
import type { PropsWithChildren } from "react";

type DefaultPageProps = {
	flash: { error?: string; success?: string };
	appName: string;
	isOnboarded: boolean;
};

type LayoutProps = DefaultPageProps & {
	children: React.ReactNode;
	breadcrump: BreadcrumbItems;
};

interface BreadcrumbItem {
	title: string;
	href: string;
}

interface BreadcrumbItems {
	title: string;
	items: BreadcrumbItem[];
}

type InertiaProps<T extends JSONDataTypes = {}> = PropsWithChildren<
	Data.SharedProps & T
>;
