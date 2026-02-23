type DefaultPageProps = {
	flash: { error?: string; success?: string };
	appName: string;
	isOnboarded: boolean;
};

type LayoutProps = DefaultPageProps & {
	children: React.ReactNode;
};
