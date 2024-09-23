import { ResponsiveBar, BarDatum, ComputedDatum } from '@nivo/bar';
import { useState, useEffect, createElement, MouseEvent, useCallback, useMemo } from 'react';
import { animated, to } from '@react-spring/web';
import { useTheme } from '@nivo/core';
import { useTooltip } from '@nivo/tooltip';
import { fetchAdminDashBoardData } from '../../api/dashboard/dashboardApi';

interface CustomBarDatum extends BarDatum {
  name: string;
  progress: number;
  color: string;
  totalWork: number;
}

const BarItem = ({
  bar: { data, ...bar },
  style: { borderColor, height, labelColor, labelOpacity, labelX, labelY, transform, width },

  borderRadius,
  borderWidth,

  label,
  shouldRenderLabel,

  isInteractive,
  onClick,
  onMouseEnter,
  onMouseLeave,

  tooltip,

  isFocusable,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
  const theme = useTheme();
  const { showTooltipFromEvent, hideTooltip } = useTooltip();

  const renderTooltip = useMemo(() => () => createElement(tooltip, { ...bar, ...data }), [tooltip, bar, data]);

  const handleClick = useCallback(
    (event: MouseEvent<SVGRectElement>) => {
      onClick?.({ color: bar.color, ...data }, event);
    },
    [bar, data, onClick],
  );
  const handleTooltip = useCallback(
    (event: MouseEvent<SVGRectElement>) => showTooltipFromEvent(renderTooltip(), event),
    [showTooltipFromEvent, renderTooltip],
  );
  const handleMouseEnter = useCallback(
    (event: MouseEvent<SVGRectElement>) => {
      onMouseEnter?.(data, event);
      showTooltipFromEvent(renderTooltip(), event);
    },
    [data, onMouseEnter, showTooltipFromEvent, renderTooltip],
  );
  const handleMouseLeave = useCallback(
    (event: MouseEvent<SVGRectElement>) => {
      onMouseLeave?.(data, event);
      hideTooltip();
    },
    [data, hideTooltip, onMouseLeave],
  );

  return (
    <animated.g transform={transform}>
      <defs>
        <clipPath id={`round-corner-${label}`}>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#b0cfdc" />
            <stop offset="100%" stopColor="#006597" />
          </linearGradient>
          <animated.rect
            x="10"
            y="0"
            width={to(width, (value) => Math.max(value, 0))}
            height={to(height, (value) => Math.max(value + borderRadius, 0))}
          />
        </clipPath>
      </defs>

      <animated.rect
        width={to(width, (value) => Math.max(value, 0))}
        height={to(height, (value) => Math.max(value, 0))}
        fill="url(#gradient)"
        rx={borderRadius}
        ry={borderRadius}
        strokeWidth={borderWidth}
        stroke={borderColor}
        focusable={isFocusable}
        tabIndex={isFocusable ? 0 : undefined}
        aria-label={ariaLabel ? ariaLabel(data) : undefined}
        aria-labelledby={ariaLabelledBy ? ariaLabelledBy(data) : undefined}
        aria-describedby={ariaDescribedBy ? ariaDescribedBy(data) : undefined}
        onMouseEnter={isInteractive ? handleMouseEnter : undefined}
        onMouseMove={isInteractive ? handleTooltip : undefined}
        onMouseLeave={isInteractive ? handleMouseLeave : undefined}
        onClick={isInteractive ? handleClick : undefined}
      />

      {shouldRenderLabel && (
        <animated.text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          dominantBaseline="central"
          fillOpacity={labelOpacity}
          style={{
            ...theme.labels.text,
            pointerEvents: 'none',
            fill: labelColor,
          }}>
          {label}
        </animated.text>
      )}
    </animated.g>
  );
};

const WorkRateAdmin = () => {
  const [workerList, setWorkerList] = useState<CustomBarDatum[]>([]);

  useEffect(() => {
    fetchAdminDashBoardData()
      .then((response) => {
        const { data } = response.data;

        if (data && data.personalTaskList) {
          const workerData = data.personalTaskList;

          if (Array.isArray(workerData)) {
            const formattedData = workerData.map((worker) => ({
              name: worker.userName,
              progress: worker.doneAd,
              totalWork: worker.totalAd,
              color: worker.userName === '-' ? '#ccc' : '#006597',
            }));
            setWorkerList(formattedData);
          }
        }
      })
      .catch((error) => {
        console.error('데이터 조회 에러:', error);
      });
  }, []);
  console.log('workerList:', workerList);

  const CustomTooltip = ({ data }: ComputedDatum<CustomBarDatum>) => (
    <div
      style={{
        padding: 12,
        color: data.color ?? '#ccc',
        background: '$white',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}>
      <strong>
        {data.progress} / {data.totalWork ?? '0'}건
      </strong>
    </div>
  );

  return (
    <div className="workRateWrapper">
      <div className="workRateWrapper__title">작업자별 진행률</div>
      <div style={{ width: '23.229vw', height: '39.815vh' }}>
        <ResponsiveBar
          data={workerList}
          keys={['progress']}
          indexBy="name"
          margin={{ top: 10, right: 22, bottom: 30, left: 60 }}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          padding={0.85}
          layout="horizontal"
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
          labelSkipWidth={999}
          labelSkipHeight={999}
          labelTextColor={{
            from: 'color',
            modifiers: [['opacity', 1]],
          }}
          tooltip={CustomTooltip}
          barComponent={BarItem}
          borderRadius={12}
        />
      </div>
    </div>
  );
};

export default WorkRateAdmin;
