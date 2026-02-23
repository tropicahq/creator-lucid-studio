import {
	createListCollection,
	useListSelection,
} from "@ark-ui/react/collection";
import { TagsInput, useTagsInput } from "@ark-ui/react/tags-input";
import { Form, Head } from "@inertiajs/react";
import { XIcon } from "lucide-react";
import MainLayout from "~/components/shared/layout/main-layout";
import { Button } from "~/components/ui/button";
import { Field, FieldError } from "~/components/ui/field";
import { Spinner } from "~/components/ui/spinner";
import styles from "~/css/tag-input.module.css";

const nicheCollection = createListCollection({
	items: [
		{
			title: "Tech &amp; AI",
			description: "Latest in technology",
			mdIcon: "memory",
		},
		{
			title: "Lifestyle",
			description: "Daily life &amp; vlogs",
			mdIcon: "favorite",
		},
		{
			title: "Business",
			description: "Entrepreneurship",
			mdIcon: "work",
		},
		{
			title: "Fashion",
			description: "Trends &amp; style",
			mdIcon: "apparel",
		},
		{
			title: "Gaming",
			description: "Streaming &amp; news",
			mdIcon: "sports_esports",
		},
		{
			title: "Education",
			description: "Learning &amp; tutorials",
			mdIcon: "school",
		},
	],
});
const audienceCollection = createListCollection({
	items: [
		{
			value: "Gen Z",
		},
		{
			value: "Entrepreneurs",
		},
		{
			value: "Tech Enthusiasts",
		},
		{
			value: "Parents",
		},
		{
			value: "Creative Professionals",
		},
		{
			value: "Fitness Junkies",
		},
	],
});
export default function Onboard(props: DefaultPageProps) {
	const nicheSelection = useListSelection({ collection: nicheCollection });

	const tagsInput = useTagsInput({
		max: 5,
		maxLength: 20,
		name: "audience",
	});
	const audienceTagsSelection = useListSelection({
		collection: audienceCollection,
		selectionMode: "multiple",
	});
	return (
		<MainLayout {...props}>
			<Head title="Get Started" />
			<Form
				method="post"
				action={"/onboard"}
				disableWhileProcessing
				className="inert:opacity-50 inert:pointer-events-none"
				resetOnSuccess
				options={{ preserveScroll: true }}
			>
				{(form) => (
					<>
						<div className="mx-auto max-w-210 py-12 lg:px-20">
							<div className="mb-11 text-center">
								<h1 className="text-4xl font-black tracking-tight mb-4">
									Complete Your Profile
								</h1>
								<p className="mx-auto max-w-xl text-lg text-slate-600">
									Tell us about your content strategy. Our algorithm uses these
									signals to analyze your content performance and provide
									tailored growth insights.
								</p>
							</div>
							<div className="space-y-10">
								{/*<!-- Section 1: Content Niche -->*/}
								<section className="sm:rounded-xl sm:border border-y border-slate-200  bg-white  py-8 md:px-8 px-5 shadow-sm">
									<div className="flex items-center gap-4 mb-6">
										<span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
											1
										</span>
										<h2 className="text-xl font-bold tracking-tight">
											Content Niche
										</h2>
									</div>
									<p className="mb-6 text-slate-500">
										Select the primary categories for your content. You can
										choose multiple.
									</p>
									<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
										<input
											name="niche"
											type="text"
											hidden
											value={nicheSelection.selectedValues[0]}
										/>
										{nicheCollection.items.map((item) => (
											<NicheCardItem
												onSelect={() => {
													nicheSelection.select(item.title);
												}}
												selected={
													nicheSelection.isSelected(item.title) || undefined
												}
												key={item.title}
												{...item}
											/>
										))}
									</div>
								</section>
								{/*<!-- Section 2: Target Audience -->*/}
								<section className="sm:rounded-xl sm:border border-y border-slate-200  bg-white  py-8 md:px-8 px-5 shadow-sm">
									<div className="flex items-center gap-4 mb-6">
										<span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
											2
										</span>
										<h2 className="text-xl font-bold tracking-tight">
											Target Audience
										</h2>
									</div>
									<p className="mb-6 text-slate-500">
										Who is your content aimed at? Select all that apply or add
										your own.
									</p>
									<div className="flex flex-wrap gap-3 mb-8">
										{audienceCollection.items.map((item, index) => (
											<Button
												key={index}
												variant={
													audienceTagsSelection.isSelected(item.value) ||
													undefined
														? "default"
														: "outline"
												}
												className="data-selected:bg-primary bg-slate-50 data-selected:border-none border border-slate-200  rounded-full px-5 py-2 text-sm shadow-xs transition-all data-selected:hover:bg-primary/90 hover:border-primary flex items-center"
												onClick={() => {
													const isSelected =
														audienceTagsSelection.isSelected(item.value) ||
														undefined;
													if (isSelected) {
														return;
													} else {
														audienceTagsSelection.select(item.value);
														tagsInput.addValue(item.value);
													}
												}}
												data-selected={
													audienceTagsSelection.isSelected(item.value) ||
													undefined
												}
												dangerouslySetInnerHTML={{ __html: item.value }}
											/>
										))}
									</div>
									<Field>
										<TagsInput.RootProvider
											className={styles.Root}
											value={tagsInput}
										>
											<TagsInput.Context>
												{(api) => (
													<>
														<TagsInput.Label className={styles.Label}>
															Other Audience (Optional) Max 5
														</TagsInput.Label>
														<TagsInput.Control className={styles.Control}>
															{api.value.map((value, index) => (
																<TagsInput.Item
																	key={index}
																	index={index}
																	value={value}
																	className={styles.Item}
																>
																	<TagsInput.ItemPreview
																		className={styles.ItemPreview}
																	>
																		<TagsInput.ItemText
																			className={styles.ItemText}
																		>
																			{value}
																		</TagsInput.ItemText>
																		<TagsInput.ItemDeleteTrigger
																			className={styles.ItemDeleteTrigger}
																			onClick={() =>
																				audienceTagsSelection.deselect(value)
																			}
																		>
																			<XIcon />
																		</TagsInput.ItemDeleteTrigger>
																	</TagsInput.ItemPreview>
																	<TagsInput.ItemInput
																		className={styles.ItemInput}
																	/>
																</TagsInput.Item>
															))}
															<TagsInput.Input
																placeholder="e.g Solo travelers in their 30s"
																className={styles.Input}
															/>
															<TagsInput.ClearTrigger
																className={styles.ClearTrigger}
																onClick={() => audienceTagsSelection.clear()}
															>
																<XIcon />
															</TagsInput.ClearTrigger>
														</TagsInput.Control>
													</>
												)}
											</TagsInput.Context>
											<TagsInput.HiddenInput />
										</TagsInput.RootProvider>
										{form.invalid("audience") && (
											<FieldError>{form.errors.audience}</FieldError>
										)}
									</Field>
								</section>
							</div>
						</div>
						{/*<!-- Sticky Footer CTA -->*/}
						<div className="sticky bottom-0 z-50 border-t border-slate-200 bg-white/95  backdrop-blur-sm px-6 py-6">
							<div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
								<div className="flex flex-1 items-center justify-end gap-4">
									<Button
										size={"lg"}
										variant={"outline"}
										type="submit"
										disabled={form.processing}
										className="flex items-center justify-center gap-3  px-8 py-4 text-sm font-black tracking-wide shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all"
										onClick={form.submit}
									>
										{form.processing && <Spinner />}
										<span hidden={form.processing}>Continue</span>
										<span
											hidden={form.processing}
											className="material-symbols-outlined"
										>
											arrow_forward
										</span>
									</Button>
								</div>
							</div>
						</div>
					</>
				)}
			</Form>
		</MainLayout>
	);
}

function NicheCardItem({
	mdIcon,
	title,
	description,
	onSelect,
	selected,
}: {
	mdIcon: string;
	title: string;
	description: string;
	selected?: boolean;
	onSelect: () => void;
}) {
	return (
		<label
			className="group relative flex cursor-pointer flex-col gap-3 rounded-md border border-slate-200 p-5 transition-all hover:border-primary card-selected"
			data-selected={selected}
		>
			<input
				type="checkbox"
				hidden
				checked={selected}
				onChange={() => onSelect()}
			/>
			<span
				className="material-symbols-outlined text-primary text-3xl"
				dangerouslySetInnerHTML={{ __html: mdIcon }}
			/>

			<div>
				<h3 className="font-bold" dangerouslySetInnerHTML={{ __html: title }} />
				<p
					className="text-xs text-slate-500"
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			</div>
			{selected && (
				<div className="absolute top-3 right-3 text-primary">
					<span className="material-symbols-outlined text-lg">
						check_circle
					</span>
				</div>
			)}
		</label>
	);
}
