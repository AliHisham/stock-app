type StockProps = {
  name: string;
  ticker: string;
};

const Stock = ({ name, ticker }: StockProps) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-100  dark:bg-gray-800 rounded-md p-4 shadow-md w-full md:w-[300px] h-[100px] md:h-[120px] font-semibold dark:text-white  ">
      <p title={name} className="">
        <span className="text-xs text-ellipsis font-normal dark:text-gray-300">
          {" "}
          Name:
        </span>{" "}
        {name && name.length > 50 ? name.slice(0, 50) + "..." : name}
      </p>
      <p>
        {" "}
        <span className="text-xs font-normal dark:text-gray-300">
          Ticker:
        </span>{" "}
        {ticker}
      </p>
    </div>
  );
};

export default Stock;
