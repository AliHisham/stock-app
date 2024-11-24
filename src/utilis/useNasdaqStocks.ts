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
  const [error, setError] = useState<string>("");

  const url = import.meta.env.VITE_API_URL;

  const apiKey = import.meta.env.VITE_API_KEY;

  const getAllStocks = async (nextOne: boolean) => {
    setLoading(true);
    if (!nextOne) {
      setStocks([]);
    }
    const __url = nextOne ? next_url : url;

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
          setLoading(false);
          setError("");
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
          setLoading(false);
          if (err && err.status == 429) {
            setError("sorry you have exceeded the rate limit!");
          } else {
            setError("Something went wrong!");
          }
        });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllStocks(false);
  }, [searchValue]);

  useEffect(() => {
    if (!visible) return;
    getAllStocks(true);
  }, [visible]);

  return { stocks, loading, setVisibile, next_url, error };
};

export default useNasdaqStocks;
