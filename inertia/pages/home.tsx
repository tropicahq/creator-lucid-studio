import { Link } from "@adonisjs/inertia/react";
import { Head, usePage } from "@inertiajs/react";
import {
	AlertTriangleIcon,
	InfoIcon,
	ListVideo,
	PlusCircle,
	TrendingUpIcon,
} from "lucide-react";
import {
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from "recharts";
import MainLayout from "~/components/shared/layout/main-layout";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "~/components/ui/card";
import { type ChartConfig, ChartContainer } from "~/components/ui/chart";
import { Label } from "~/components/ui/label";
import type { BreadcrumbItems } from "~/types";

const chartData = [
	{ browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];
const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	safari: {
		label: "Safari",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

const breadCrumbs: BreadcrumbItems = {
	title: "Dashboard",
	items: [],
};
export default function Home(props: DefaultPageProps) {
	const user = usePage().props.user;
	return (
		<MainLayout {...props} breadCrumb={breadCrumbs}>
			<Head title="Home" />
			<div className="flex flex-1 flex-col gap-4">
				<div className="flex md:flex-row flex-col md:items-center w-full gap-2">
					<div className="flex flex-col gap-1 justify-center">
						<h1 className="text-slate-900 text-3xl font-semibold tracking-tight">
							Aggregate Performance Metrics
						</h1>
						<p className="text-slate-500 text-base">
							An analysis overview for your analyzed content
						</p>
					</div>
					<Button
						size={"lg"}
						className={"flex items-center md:ml-auto"}
						render={(props) => (
							<Link className={props.className} route="analysis.create.show">
								<PlusCircle />
								<span>New Analysis</span>
							</Link>
						)}
					/>
				</div>
				<div className="grid auto-rows-min gap-4 md:grid-cols-4">
					{/*<div className="bg-muted/50 aspect-video rounded-xl" />*/}
					<Card size="sm">
						<CardHeader>
							<div className="flex justify-between items-start">
								<div className="size-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
									<ListVideo />
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div>
								<p className="text-slate-500 text-sm font-medium mb-1">
									Total Videos Analyzed
								</p>
								<div className="flex items-baseline gap-2">
									<span className="text-slate-900 text-3xl font-bold">12</span>
									<span className="text-slate-600 text-xs font-medium">
										Videos
									</span>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<p className="text-slate-600 flex items-center gap-2">
								<InfoIcon className="size-4" />
								<span className="text-sm">Lifetime analyzed count</span>
							</p>
						</CardFooter>
					</Card>
					<Card size="sm">
						<CardHeader>
							<ChartContainer
								className="mx-auto aspect-square w-full h-21"
								config={chartConfig}
							>
								<RadialBarChart
									width={20}
									data={chartData}
									startAngle={0}
									endAngle={250}
									innerRadius={80}
									outerRadius={110}
								>
									<PolarGrid
										gridType="circle"
										radialLines={false}
										stroke="none"
										className="first:fill-muted last:fill-background"
										polarRadius={[86, 74]}
									/>
									<RadialBar dataKey="visitors" background cornerRadius={10} />
									<PolarRadiusAxis
										tick={false}
										tickLine={false}
										axisLine={false}
									>
										<Label
											content={({ viewBox }) => {
												if (viewBox && "cx" in viewBox && "cy" in viewBox) {
													return (
														<text
															x={viewBox.cx}
															y={viewBox.cy}
															textAnchor="middle"
															dominantBaseline="middle"
														>
															<tspan
																x={viewBox.cx}
																y={viewBox.cy}
																className="fill-foreground text-4xl font-bold"
															>
																{chartData[0].visitors.toLocaleString()}
															</tspan>
															<tspan
																x={viewBox.cx}
																y={(viewBox.cy || 0) + 24}
																className="fill-muted-foreground"
															>
																Visitors
															</tspan>
														</text>
													);
												}
											}}
										/>
									</PolarRadiusAxis>
								</RadialBarChart>
							</ChartContainer>
						</CardHeader>
						<CardContent>
							<div>
								<p className="text-slate-500 text-sm font-medium mb-1">
									Average Content Score
								</p>
								<div className="flex items-baseline gap-2">
									<span className="text-slate-900 text-3xl font-bold">67</span>
									<span className="text-slate-400 text-xl">/100</span>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<p className="text-slate-600 flex items-center gap-2">
								<span className="text-sm">Avg across all videos</span>
							</p>
						</CardFooter>
					</Card>
					<Card size="sm">
						<CardHeader>
							<div className="flex justify-between items-start">
								<div className="size-10 rounded-md bg-red-50 flex items-center justify-center text-red-500">
									<AlertTriangleIcon />
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div>
								<p className="text-slate-500 text-sm font-medium mb-1">
									Most Common Issue
								</p>
								<span className="text-slate-900 text-2xl font-bold truncate">
									Weak Hook
								</span>
							</div>
						</CardContent>
						<CardFooter>
							<p className="text-slate-600 flex items-center gap-2">
								{/*<InfoIcon className="size-4" />*/}
								<span className="text-sm">Found in 0 of total videos</span>
							</p>
						</CardFooter>
					</Card>
					<Card size="sm">
						<CardHeader>
							<div className="flex justify-between items-start">
								<div className="size-10 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-500">
									<TrendingUpIcon />
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div>
								<p className="text-slate-500 text-sm font-medium mb-1">
									Improvement Trend
								</p>
								<span className="text-slate-900 text-3xl font-bold">+12%</span>
							</div>
						</CardContent>
						<CardFooter>
							<p className="text-slate-600 flex items-center gap-2">
								<span className="text-sm">vs. previous in-branch videos</span>
							</p>
						</CardFooter>
					</Card>
				</div>
				<div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
			</div>
		</MainLayout>
	);
}
