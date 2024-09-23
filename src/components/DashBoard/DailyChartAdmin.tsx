import { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { fetchAdminDashBoardData } from '../../api/dashboard/dashboardApi';
import worker from '../../assets/Rectangle 34624667.svg';
import compare from '../../assets/Rectangle 34624668.svg';
import arrowDown from '../../assets/arrow-down.svg';

interface DataSet {
  id: string;
  data: Array<{ x: string | number | Date; y: number }>;
}

const getCurrentCycle = (): { cycle: string; startDate: string; endDate: string } => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day <= 15) {
    return {
      cycle: `${month}월 1차`,
      startDate: `${year}-${month}-01`,
      endDate: `${year}-${month}-15`,
    };
  }
  return {
    cycle: `${month}월 2차`,
    startDate: `${year}-${month}-16`,
    endDate: `${year}-${month}-${new Date(year, month, 0).getDate()}`,
  };
};

const DailyChartAdmin = () => {
  const [data, setData] = useState<DataSet[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { cycle, startDate, endDate } = getCurrentCycle();

  useEffect(() => {
    fetchAdminDashBoardData().then((response) => {
      const avgData = response.data.data.dailyAvgDoneList;
      const formattedData = [
        {
          id: 'baseline',
          data: avgData.map((item: { date: string; avgDoneAd: number }) => ({
            x: item.date,
            y: item.avgDoneAd,
          })),
        },
      ];
      setData(formattedData);
    });
  }, []);

  const baselineData = data.find((d) => d.id === 'baseline');
  const personData = data.find((d) => d.id === selectedPerson);

  const handlePersonChange = (id: string | null) => {
    setSelectedPerson(id);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const chartData = [baselineData, personData].filter((d): d is DataSet => d !== undefined);

  return (
    <section className="daily-chartAdmin">
      <div className="daily-chartAdmin__wrapper">
        <div className="daily-chartAdmin__title">일별 작업량</div>
        <div className="daily-chartAdmin__date">
          {`${cycle} (${startDate} ~ ${endDate})`}
          <div className="daily-chartAdmin__date__legend">
            <div className="dropdown-wrapper">
              <img src={worker} alt="비교 할 작업자" />
              <div className="daily-chartAdmin__date__legend__dropdown" onClick={toggleDropdown}>
                <div className="daily-chartAdmin__date__legend__dropdown__selected">
                  {selectedPerson === null ? '이름' : selectedPerson} <img src={arrowDown} alt="open dropdown" />
                </div>
              </div>
              {isDropdownOpen && (
                <div className="daily-chartAdmin__date__legend__dropdown__options">
                  <div
                    className={`daily-chartAdmin__date__legend__dropdown__option ${selectedPerson === null ? 'selected' : ''}`}
                    onClick={() => handlePersonChange(null)}>
                    이름
                  </div>
                  {data.map(
                    (d) =>
                      d.id !== 'baseline' && (
                        <div
                          key={d.id}
                          className={`daily-chartAdmin__date__legend__dropdown__option ${d.id === selectedPerson ? 'selected' : ''}`}
                          onClick={() => handlePersonChange(d.id)}>
                          {d.id}
                        </div>
                      ),
                  )}
                </div>
              )}
            </div>
            <div className="dropdown-wrapper">
              <img className="taskavr" src={compare} alt="작업 평균값" />
              평균
            </div>
          </div>
        </div>
      </div>

      <ResponsiveLine
        data={chartData}
        curve="monotoneX"
        margin={{ top: 70, right: 30, bottom: 70, left: 30 }}
        gridXValues={[]}
        pointLabel="data.yFormatted"
        enableArea={selectedPerson !== null}
        areaOpacity={0.05}
        colors={({ id }) => (id === selectedPerson ? '#006597' : '#83C5C1')}
        pointSize={0}
        axisLeft={{
          tickValues: [50, 100, 200],
        }}
        useMesh
        tooltip={({ point }) => {
          const date = new Date(point.data.x as string);
          const formattedDate = `${date.getMonth() + 1}. ${date.getDate()}`;

          return (
            <div
              style={{
                background: 'white',
                padding: '9px 12px',
                border: '1px solid #ccc',
              }}>
              <strong>{formattedDate}</strong> <br />
              {Math.round(point.data.y as number)}건
            </div>
          );
        }}
        fill={selectedPerson ? [{ match: { id: selectedPerson }, id: 'gradientA' }] : []}
      />
    </section>
  );
};

export default DailyChartAdmin;
