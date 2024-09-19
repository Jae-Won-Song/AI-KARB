import { ResponsiveLine, Point } from '@nivo/line';
import tooltip from '../../assets/tooltip.svg';

interface ChartProps {
  data: [];
}

interface ToolTipProps {
  point: Point;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${month}.${day}`;
};

const CustomTooltip = ({ point }: ToolTipProps) => {
  const formattedDate =
    typeof point.data.xFormatted === 'string' ? point.data.xFormatted : point.data.xFormatted.toString();

  return (
    <div className="customToolTip">
      <img src={tooltip} alt="툴팁 이미지" />
      <div className="tooltipContent">
        <div className="tooltipDate">{formatDate(formattedDate)}</div>
        <div className="tooltipValue">{point.data.yFormatted}건</div>
      </div>
    </div>
  );
};

const DailyChart = ({ data }: ChartProps) => {
  return (
    <section className="daily-chart">
      <div className="daily-chart__wrapper">
        <div className="daily-chart__title">일별 작업량</div>
        <div className="daily-chart__date">8월 1차 (2024-08-01 ~ 2024-08-15)</div>
      </div>
      <ResponsiveLine
        data={data}
        curve="monotoneX"
        margin={{ top: 30, right: 30, bottom: 60, left: 30 }}
        gridXValues={[]}
        pointSize={0}
        enableArea
        areaOpacity={0.1}
        axisLeft={{
          tickValues: [0, 50, 100],
        }}
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
        tooltip={CustomTooltip}
      />
    </section>
  );
};

export default DailyChart;
