import { ResponsiveBar } from '@nivo/bar';
import { useState } from 'react';

interface ChartProps {
  data: Array<{ [key: string]: string | number }>;
}

const WorkRateAdmin = ({ data }: ChartProps) => {
  const [selectedBar, setSelectedBar] = useState<{ name: string; progress: number } | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomTooltip = ({ id, value, color, totalWork }: any) => (
    <div
      style={{
        padding: 12,
        color,
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}>
      <strong>
        {totalWork}/{value}
      </strong>{' '}
    </div>
  );

  return (
    <div className="workRateWrapper">
      <div className="workRateWrapper__title">작업자별 진행률</div>
      <div style={{ width: '446px', height: '430px' }}>
        <ResponsiveBar
          data={data}
          keys={['progress']}
          indexBy="name"
          margin={{ top: 10, right: 22, bottom: 30, left: 60 }}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          padding={0.4}
          layout="horizontal"
          colors={({ id, data }) => data.color || '#83C5C1'}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
          }}
          axisLeft={{
            tickSize: 0,
          }}
          axisBottom={null}
          gridYValues={5}
          gridXValues={[]}
          labelSkipWidth={12}
          labelSkipHeight={-1}
          labelTextColor={{
            from: 'color',
            modifiers: [['opacity', 1]],
          }}
          tooltip={CustomTooltip}
        />
      </div>
    </div>
  );
};

export default WorkRateAdmin;
