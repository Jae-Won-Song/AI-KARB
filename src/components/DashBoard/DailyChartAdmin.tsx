import { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import worker from '../../assets/Rectangle 34624667.svg';
import compare from '../../assets/Rectangle 34624668.svg';
import arrowDown from '../../assets/arrow-down.svg';

interface DataSet {
  id: string;
  data: Array<{ x: string | number | Date; y: number }>;
}

interface ChartProps {
  data: DataSet[];
}

const DailyChartAdmin = ({ data }: ChartProps) => {
  const baselineData = data.find((d) => d.id === 'baseline');
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const personData = data.find((d) => d.id === selectedPerson);

  const handlePersonChange = (id: string | null) => {
    setSelectedPerson(id);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const chartData = selectedPerson && personData ? [baselineData, personData] : [baselineData];
  const colors = selectedPerson ? ['#83C5C1', '#006597'] : ['#83C5C1'];

  return (
    <section className="daily-chartAdmin">
      <div className="daily-chartAdmin__wrapper">
        <div className="daily-chartAdmin__title">일별 작업량</div>
        <div className="daily-chartAdmin__date">
          8월 1차 (2024-08-01 ~ 2024-08-15)
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
        enableArea
        areaOpacity={0.1}
        colors={colors}
        pointSize={0}
        axisLeft={{
          tickValues: [50, 100, 200],
        }}
        defs={
          selectedPerson
            ? [
                {
                  id: 'gradient',
                  type: 'linearGradient',
                  colors: [
                    { offset: 0, color: '#37bffd' },
                    { offset: 100, color: '#b5d5e4' },
                  ],
                },
              ]
            : []
        }
        fill={
          selectedPerson
            ? [
                {
                  match: '*',
                  id: 'gradient',
                },
              ]
            : []
        }
        useMesh
      />
    </section>
  );
};

export default DailyChartAdmin;
