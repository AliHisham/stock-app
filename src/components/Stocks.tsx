import useNasdaqStocks from "../utilis/useNasdaqStocks";
import Stock from "../component-atoms/Stock";

const Stocks = () => {
  const { stocks } = useNasdaqStocks();
  console.log(stocks, "ali is checking inside the stocks component");
  return (
    <div className="flex flex-wrap p-4 gap-3 justify-center">
      {stocks &&
        stocks.length &&
        stocks.map((stock) => {
          return <Stock name={stock.name} ticker={stock.ticker} />;
        })}
    </div>
  );
};

export default Stocks;
