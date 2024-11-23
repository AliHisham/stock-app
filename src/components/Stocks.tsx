import { useRef, useCallback } from "react";

import useNasdaqStocks from "../utilis/useNasdaqStocks";
import Stock from "../component-atoms/Stock";

const Stocks = () => {
  const { stocks, loading, setVisibile } = useNasdaqStocks();

  const observer = useRef<IntersectionObserver | null>(null);

  const lastTickerElement = useCallback(
    (node: any) => {
      if (loading) return;

      if (observer.current) observer.current?.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting) {
          setVisibile(true);
        }
      });

      if (node) observer.current.observe(node);
    },

    [loading]
  );

  return (
    <div className="flex flex-wrap p-4 gap-3 justify-center">
      {stocks &&
        stocks.length &&
        stocks.map((stock, index) => {
          if (index + 1 == stocks.length) {
            return (
              <div key={index} ref={lastTickerElement}>
                <Stock name={stock.name} ticker={stock.ticker} />
              </div>
            );
          } else {
            return (
              <Stock key={index} name={stock.name} ticker={stock.ticker} />
            );
          }
        })}
    </div>
  );
};

export default Stocks;
