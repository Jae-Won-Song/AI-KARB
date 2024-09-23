import { useEffect, useState } from 'react';
import { fetchAdminDashBoardData } from '../../api/dashboard/dashboardApi';
import { ResponsiveBar } from '@nivo/bar';

const DailyTaskChartAdmin = () => {
  const [chartData, setChartData] = useState([]);
  const [todayCount, setTodayCount] = useState<number | undefined>();
  const [yesterdayCount, setYesterdayCount] = useState<number | undefined>();
  const [change, setChange] = useState<number | undefined>();

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchAdminDashBoardData();
      const dailyWorkList = response.data.data.todayWorkList;

      const recentData = dailyWorkList.map((item: { date: string | number | Date; doneAd: number }, index: number) => {
        const dayValue = index === 4 ? '오늘' : new Date(item.date).getDate().toString();
        return {
          day: dayValue,
          doneAd: Math.round(item.doneAd),
        };
      });

      setChartData(recentData);
      setTodayCount(recentData[4]?.doneAd);
      setYesterdayCount(recentData[3]?.doneAd);
    };

    loadData();
  }, []);

  useEffect(() => {
    if (todayCount !== undefined && yesterdayCount !== undefined) {
      const difference = todayCount - yesterdayCount;
      setChange(difference);
    }
  }, [todayCount, yesterdayCount]);

  const isChangeNegative = change !== undefined && change < 0;

  return (
    <div className="dailyChartWrapper">
      <div className="dailyChartWrapper__info">
        <div className="dailyChartWrapper__info__title">금일 작업량</div>
        <div className="dailyChartWrapper__info__wrapper">
          <div className="dailyChartWrapper__info__wrapper__count">{todayCount}건</div>
          <div className="dailyChartWrapper__info__wrapper__eve">전일대비</div>
          <div
            className="dailyChartWrapper__info__wrapper__plusCount"
            style={{ color: isChangeNegative ? 'red' : '#64ACA7' }}>
            {change !== undefined && (change > 0 ? `+${change}` : change < 0 ? change : '0')}건
          </div>
          <div
            className="dailyChartWrapper__info__wrapper__percentage"
            style={{ color: isChangeNegative ? 'red' : '#64ACA7' }}>
            {change !== undefined &&
              yesterdayCount !== undefined &&
              `${((change / (yesterdayCount || 1)) * 100).toFixed(1)}%`}
          </div>
        </div>
      </div>
      <div style={{ width: '16.198vw', height: '21.111vh' }}>
        <ResponsiveBar
          data={chartData}
          keys={['doneAd']}
          indexBy="day"
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
          colors={({ index }) => (index === 4 ? '#64ACA7' : '#006597')}
          tooltip={({ value }) => (
            <div style={{ padding: '5px', background: '#fff', border: '1px solid #ccc' }}>
              <strong>{value}건</strong>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default DailyTaskChartAdmin;
