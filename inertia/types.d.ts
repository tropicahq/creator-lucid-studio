type DefaultPageProps = { flashMessage: { error?: string; success?: string } };

type LayoutProps = DefaultPageProps & {
	children: React.ReactNode;
};
