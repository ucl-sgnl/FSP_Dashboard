import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const LineChart = ({ data, maxYear, enlarger = false, isDashboard = false, TLE = false, years2019_2023 = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  // filter the nivo data to only be below the maxYear, not for TLE data
  if (!TLE) {
    data = data.map((d) => {
      return {
        id: d.id,
        color: d.color,
        data: d.data.filter((d) => d.x <= `${maxYear}-01-01`),
      };
    });
  }

  console.log(data)
  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      enableArea={true}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={
        TLE ? { type: "linear", min: "auto", max: "auto", stacked: true, reverse: false} : { type: "time", format: '%Y-%m-%d', precision: 'day', max: `${maxYear}-12-12`}
      }
      xFormat={ TLE ? " >-.2f" : "time:%Y-%m-%d"}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={TLE ? null : {
        format: '%Y',
        tickValues: 'every 10 years',
        legendOffset: -12,
    }}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickValues: 10,
        tickCount: isDashboard ? 10 : 5, // added
        tickPadding: 5,
        tickRotation: 40,
        legend: isDashboard ? undefined : "transportation", // added
        legendOffset: 36,
        legendPosition: "middle"
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count", // added
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;