import { useEffect, useState } from "react";
import axios from "axios";

type Stock = {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  currency_name: string;
  active: boolean;
  primary_exchange: string;
  composite_figi: string;
  share_class_figi: string;
  last_updated_utc: string;
  cik: string;
  type: string;
};

const useNasdaqStocks = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "FxQAWoJ4AUby70HhdoMB_LUTI849nAEW";
  const url = `https://api.polygon.io/v3/reference/tickers`;

  useEffect(() => {
    axios({
      method: "GET",
      url: url,
      params: {
        apiKey: apiKey,
        limit: 100,
        active: true,
      },
    })
      .then((res) => {
        setStocks((prev) => [...prev, ...res.data.results]);
      })
      .catch((err) => {
        console.log(err, "logging for now!");
      });
  }, []);

  return { stocks };
};

export default useNasdaqStocks;
