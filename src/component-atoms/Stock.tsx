import React from "react";

type StockProps = {
  name: string;
  ticker: string;
};

const Stock = ({ name, ticker }: StockProps) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-400 rounded-md p-4 shadow-md w-1/4">
      <p> Name: {name}</p>
      <p> ticker: {ticker}</p>
    </div>
  );
};

export default Stock;
