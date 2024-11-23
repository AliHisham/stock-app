type StockProps = {
  name: string;
  ticker: string;
};

const Stock = ({ name, ticker }: StockProps) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-100  dark:bg-gray-800 rounded-md p-4 shadow-md w-full md:w-[300px] h-[100px] md:h-[200px] font-semibold dark:text-white ">
      <p className="">
        <span className="text-sm font-normal dark:text-gray-300"> Name:</span>{" "}
        {name}
      </p>
      <p>
        {" "}
        <span className="text-sm font-normal dark:text-gray-300">
          Ticker:
        </span>{" "}
        {ticker}
      </p>
    </div>
  );
};

export default Stock;
