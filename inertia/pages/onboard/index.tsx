import { Head } from "@inertiajs/react";
import { CheckCircle2, CheckCircleIcon, MemoryStickIcon } from "lucide-react";
import MainLayout from "~/components/shared/main-layout";

export default function Onboard(props: DefaultPageProps) {
	return (
		<MainLayout {...props}>
			<Head title="Get Started" />
			<div className="mx-auto max-w-210 py-px">
				<div className="mb-11 mt-4 text-center">
					<h1 className="text-4xl font-black tracking-tight mb-4">
						Complete Your Profile
					</h1>
					<p className="mx-auto max-w-xl text-lg text-slate-600">
						Tell us about your content strategy. Our algorithm uses these
						signals to analyze your content performance and provide tailored
						growth insights.
					</p>
				</div>
				<div className="space-y-10" />
				{/*<!-- Section 1: Content Niche -->*/}
				<section className="rounded-xl border border-slate-200  bg-white  py-8 md:px-8 px-5 shadow-sm">
					<div className="flex items-center gap-4 mb-6">
						<span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
							1
						</span>
						<h2 className="text-xl font-bold tracking-tight">Content Niche</h2>
					</div>
					<p className="mb-6 text-slate-500">
						Select the primary categories for your content. You can choose
						multiple.
					</p>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
						{/*<!-- Card 1 (Active/Selected Example) -->*/}
						<div className="card-selected group relative flex cursor-pointer flex-col gap-3 rounded-xl border border-slate-200 p-5 transition-all hover:border-primary">
							<span className="material-symbols-outlined text-primary text-3xl">
								memory
							</span>
							<div>
								<h3 className="font-bold">Tech &amp; AI</h3>
								<p className="text-xs text-slate-500">Latest in technology</p>
							</div>
							<div className="absolute top-3 right-3 text-primary">
								<span className="material-symbols-outlined text-lg">
									check_circle
								</span>
							</div>
						</div>
						{/*<!-- Card 2 -->*/}
						<div className="group relative flex cursor-pointer flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transition-all hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-800">
							<span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-3xl">
								favorite
							</span>
							<div>
								<h3 className="font-bold">Lifestyle</h3>
								<p className="text-xs text-slate-500">Daily life &amp; vlogs</p>
							</div>
						</div>
						{/*<!-- Card 3 -->*/}
						<div className="group relative flex cursor-pointer flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transition-all hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-800">
							<span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-3xl">
								work
							</span>
							<div>
								<h3 className="font-bold">Business</h3>
								<p className="text-xs text-slate-500">Entrepreneurship</p>
							</div>
						</div>
						{/*<!-- Card 4 -->*/}
						<div className="group relative flex cursor-pointer flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transition-all hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-800">
							<span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-3xl">
								apparel
							</span>
							<div>
								<h3 className="font-bold">Fashion</h3>
								<p className="text-xs text-slate-500">Trends &amp; style</p>
							</div>
						</div>
						{/*<!-- Card 5 -->*/}
						<div className="group relative flex cursor-pointer flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transition-all hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-800">
							<span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-3xl">
								sports_esports
							</span>
							<div>
								<h3 className="font-bold">Gaming</h3>
								<p className="text-xs text-slate-500">Streaming &amp; news</p>
							</div>
						</div>
						{/*<!-- Card 6 -->*/}
						<div className="group relative flex cursor-pointer flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transition-all hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-800">
							<span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-3xl">
								school
							</span>
							<div>
								<h3 className="font-bold">Education</h3>
								<p className="text-xs text-slate-500">
									Learning &amp; tutorials
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</MainLayout>
	);
}
