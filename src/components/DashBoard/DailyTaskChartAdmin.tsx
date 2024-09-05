import { ResponsiveBar } from '@nivo/bar';

interface ChartProps {
  data: [];
}

const DailyTaskChartAdmin = ({ data }: ChartProps) => {
  return (
    <div className="dailyChartWrapper">
      <div className="dailyChartWrapper__info">
        <div className="dailyChartWrapper__info__title">금일 작업량</div>
        <div className="dailyChartWrapper__info__wrapper">
          <div className="dailyChartWrapper__info__wrapper__count">562</div>
          <div className="dailyChartWrapper__info__wrapper__eve">전일대비</div>
          <div className="dailyChartWrapper__info__wrapper__plusCount">+12</div>
          <div className="dailyChartWrapper__info__wrapper__percentage">12.3%</div>
        </div>
      </div>
      <div style={{ width: '321px', height: '228px' }}>
        <ResponsiveBar
          data={data}
          keys={['before4', 'before3', 'before2', 'before1', 'today']}
          indexBy="date"
          margin={{ top: 30, right: 22, bottom: 30, left: 40 }}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          padding={0.8}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
          }}
          axisLeft={{
            tickValues: [200, 500, 1000],
          }}
          labelSkipWidth={12}
          labelSkipHeight={-1}
          labelTextColor={{
            from: 'color',
            modifiers: [['opacity', 1]],
          }}
          colors={({ index }) => {
            return index === data.length - 1 ? '#83C5C1' : '#006597';
          }}
        />
      </div>
    </div>
  );
};

export default DailyTaskChartAdmin;
