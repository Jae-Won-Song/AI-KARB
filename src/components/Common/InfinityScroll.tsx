import { useEffect, useRef, ReactNode } from 'react';

interface InfiniteScrollProps {
  fetchMoreData: () => void;
  hasMore?: boolean;
  isFetched?: boolean;
  setIsFetched?: (state: boolean) => void;
  children: ReactNode;
}

const InfiniteScroll = ({
  fetchMoreData,
  hasMore = true,
  isFetched = true,
  setIsFetched = () => {},
  children,
}: InfiniteScrollProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && isFetched) {
          setIsFetched(false);
          fetchMoreData();
        }
      },
      { threshold: 0.1 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, isFetched, fetchMoreData, setIsFetched]);

  return (
    <div>
      {children}
      <div ref={observerRef} style={{ height: '10px' }} />
    </div>
  );
};

export default InfiniteScroll;
