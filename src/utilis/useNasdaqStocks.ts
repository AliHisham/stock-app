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

const useNasdaqStocks = (searchValue: string) => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);
  const [next_url, setNextUrl] = useState<string>("");
  const [visible, setVisibile] = useState(false);

  const [url, setUrl] = useState<string>(
    "https://api.polygon.io/v3/reference/tickers"
  );

  const apiKey = "FxQAWoJ4AUby70HhdoMB_LUTI849nAEW";

  const getAllStocks = (nextOne: boolean) => {
    if (!nextOne) {
      setStocks([]);
    }

    const __url = nextOne ? next_url : url;
    console.log(__url, "testing testing the url");
    if (__url) {
      axios({
        method: "GET",
        url: __url,
        params: {
          search: searchValue,
          apiKey: apiKey,
          limit: 100,
          active: true,
        },
      })
        .then((res) => {
          const { results, next_url } = res.data;
          if (results && results.length) {
            setStocks((prev) => [...prev, ...results]);
          } else {
            setStocks([]);
          }
          if (next_url) {
            setNextUrl(next_url);
          } else {
            setNextUrl("");
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
    getAllStocks(false);
    setLoading(false);
  }, [searchValue]);

  useEffect(() => {
    if (!visible) return;
    getAllStocks(true);
  }, [visible]);

  return { stocks, loading, setVisibile, next_url };
};

export default useNasdaqStocks;
