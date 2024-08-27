import { ResponsiveLine } from '@nivo/line';

interface ChartProps {
  data: [];
}

const DailyTaskChart = ({ data }: ChartProps) => {
  return (
    <section className="daily-chart">
      <div className="daily-chart__wrapper">
        <div className="daily-chart__title">일별 작업량</div>
        <div className="daily-chart__date">8월 1차 (2024-08-01 ~ 2024-08-15)</div>
      </div>
      <ResponsiveLine
        data={data}
        curve="monotoneX"
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        gridXValues={[]}
        pointLabel="data.yFormatted"
        enableArea
        areaOpacity={0.1}
        colors={['#0227bc']}
        defs={[
          {
            id: 'gradient',
            type: 'linearGradient',
            colors: [
              { offset: 0, color: '#37bffd' },
              { offset: 100, color: '#b5d5e4' },
            ],
          },
        ]}
        fill={[
          {
            match: '*',
            id: 'gradient',
          },
        ]}
        useMesh
      />
    </section>
  );
};

export default DailyTaskChart;
