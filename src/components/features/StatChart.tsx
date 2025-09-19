import { Bar, BarChart, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { type ChartConfig } from "@/components/ui/chart"
import { type StatChartProps } from "@/types/album.types"

const StatChart = ({ stats }: StatChartProps) => {

    const ratingData = [
        { rating: 1, count: stats?.oneCount },
        { rating: 2, count: stats?.twoCount },
        { rating: 3, count: stats?.threeCount },
        { rating: 4, count: stats?.fourCount },
        { rating: 5, count: stats?.fiveCount },
    ]

    const chartConfig = {
        rating: {
            label: "Rating",
            color: "var(--chart-3)",
        },
    } satisfies ChartConfig

    return(
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={ratingData}>
                <XAxis 
                    dataKey="rating"
                    tickLine={false}
                    tickMargin={4}
                    axisLine={false}
                    fontSize={16}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-rating)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}

export default StatChart