import { ResponsiveBar } from '@nivo/bar';

interface ChartProps {
  data: Array<{ [key: string]: string | number }>;
}

const WorkRateAdmin = ({ data }: ChartProps) => {
  return (
    <div className="workRateWrapper">
      <div className="workRateWrapper__info">
        <div className="workRateWrapper__info__title">작업자별 진행률</div>
        <div className="workRateWrapper__info__wrapper">
          <div className="workRateWrapper__info__wrapper__count">562</div>
          <div className="workRateWrapper__info__wrapper__eve">전일대비</div>
          <div className="workRateWrapper__info__wrapper__plusCount">+12</div>
          <div className="workRateWrapper__info__wrapper__percentage">12.3%</div>
        </div>
      </div>
      <div style={{ width: '321px', height: '228px' }}>
        <ResponsiveBar
          data={data}
          keys={['김지안', '나하윤', '도유준', '민서현', '박서아', '신지윤', '오현서']}
          indexBy="date"
          margin={{ top: 30, right: 22, bottom: 30, left: 40 }}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          padding={0.8}
          layout="horizontal"
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

export default WorkRateAdmin;
