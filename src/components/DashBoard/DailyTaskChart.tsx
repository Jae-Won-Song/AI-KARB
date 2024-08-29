import { ResponsiveLine } from '@nivo/line';
// import { ReactNode } from "react";

// interface chartProps {
//   data: string[];
// }

const DailyTaskChart = ({ data }) => {
  return (
    <div className="daily-chart">
      <div className="daily-chart__wrapper">
        <div className="daily-chart__title">일별 작업량</div>
        <div className="daily-chart__date">8월 1차 (2024-08-01 ~ 2024-08-15)</div>
      </div>
      <ResponsiveLine
        data={data}
        curve="monotoneX"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        // yScale={{
        //   type: 'linear',
        //   min: 'auto',
        //   max: 'auto',
        //   stacked: true,
        //   reverse: false,
        // }}
        gridXValues={[]}
        // axisTop={null}
        // axisRight={null}
        // colors={{ scheme: 'set1' }}
        // pointSize={10}
        // pointColor="black"
        pointBorderWidth={0}
        // pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabel="data.yFormatted"
        // pointLabelYOffset={-12}
        // enableTouchCrosshair={true}
        useMesh
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default DailyTaskChart;
