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
};
type InertiaProps<T extends JSONDataTypes = {}> = PropsWithChildren<
	Data.SharedProps & T
>;
