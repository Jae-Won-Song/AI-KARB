import { ResponsiveLine } from '@nivo/line';

interface chartProps {
  data: [];
}

const DailyTaskChart = ({ data }: chartProps) => {
  return (
    <div className="daily-chart">
      <div className="daily-chart__wrapper">
        <div className="daily-chart__title">일별 작업량</div>
        <div className="daily-chart__date">8월 1차 (2024-08-01 ~ 2024-08-15)</div>
      </div>
      <ResponsiveLine
        data={data}
        colors={{ scheme: 'nivo' }}
        curve="monotoneX"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        gridXValues={[]}
        pointBorderWidth={0}
        pointLabel="data.yFormatted"
        enableArea
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
