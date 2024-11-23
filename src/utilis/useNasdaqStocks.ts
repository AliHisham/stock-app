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
  const [visible, setVisibile] = useState(false);

  const [url, setUrl] = useState<string>(
    "https://api.polygon.io/v3/reference/tickers"
  );

  const apiKey = "FxQAWoJ4AUby70HhdoMB_LUTI849nAEW";

  const getAllStocks = () => {
    if (url) {
      console.log(url, "url--1");
      console.log(visible, "visible--1");
      axios({
        method: "GET",
        url: url,
        params: {
          apiKey: apiKey,
          limit: 70,
          active: true,
        },
      })
        .then((res) => {
          const { results, next_url } = res.data;
          setStocks((prev) => [...prev, ...results]);
          if (next_url) {
            setUrl(next_url);
          } else {
            setUrl("");
          }
          setVisibile(false);
        })
        .catch((err) => {
          console.log(err, "logging for now!");
        });
    }
  };

  useEffect(() => {
    setLoading(true);
    getAllStocks();
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    getAllStocks();
  }, [visible]);

  return { stocks, loading, setVisibile };
};

export default useNasdaqStocks;
