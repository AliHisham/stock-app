import { useRef, useCallback, useState } from "react";

import useNasdaqStocks from "../utilis/useNasdaqStocks";
import Stock from "../component-atoms/Stock";
import Loading from "../component-atoms/Loading";
import Header from "../component-atoms/Header";

const Stocks = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const searchDebounce = useRef<any>(null);
  const { stocks, loading, setVisibile, next_url, error } =
    useNasdaqStocks(searchValue);

  const observer = useRef<IntersectionObserver | null>(null);

  const handleSearchValue = (inputValue: string) => {
    clearTimeout(searchDebounce.current);
    searchDebounce.current = setTimeout(() => {
      setSearchValue(inputValue);
    }, 1000);
  };

  const lastTickerElement = useCallback(
    (node: any) => {
      if (loading) return;

      if (observer.current) observer.current?.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting) {
          console.log("visible---intersection");
          setVisibile(true);
        }
      });

      if (node) observer.current.observe(node);
    },

    [next_url]
  );

  return (
    <div className="flex flex-col gap-3 rounded-md">
      <Header handleSearchValue={handleSearchValue} />
      {error && <div>{error}</div>}

      {!error && (
        <div className="flex flex-wrap p-4 gap-3 justify-center">
          {stocks && stocks.length
            ? stocks.map((stock, index) => {
                if (index + 1 == stocks.length) {
                  return (
                    <div key={index} ref={lastTickerElement}>
                      <Stock name={stock.name} ticker={stock.ticker} />
                    </div>
                  );
                } else {
                  return (
                    <Stock
                      key={index}
                      name={stock.name}
                      ticker={stock.ticker}
                    />
                  );
                }
              })
            : null}
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
};

export default Stocks;
