import { vi, expect, it } from "vitest";
import { getAllStocks } from "./getAllStocks";

it("should fetch data by the search value equals to ssgff and return the expected result", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              {
                ticker: "SSGFF",
                name: "SSGA SPDR ETFS EUR II",
                market: "otc",
                locale: "us",
                type: "ETF",
                active: true,
                currency_name: "USD",
                last_updated_utc: "2023-09-15T10:08:04.318Z",
              },
            ],
          }),
      })
    )
  );

  const result = await getAllStocks("ssgff");
  expect(result).toHaveLength(1);
  expect(result[0].ticker).toBe("SSGFF");
  expect(result[0].name).toBe("SSGA SPDR ETFS EUR II");
  expect(result[0].market).toBe("otc");
  expect(result[0].locale).toBe("us");
  expect(result[0].type).toBe("ETF");
  expect(result[0].active).toBe(true);
  expect(result[0].currency_name).toBe("USD");
  expect(result[0].last_updated_utc).toBe("2023-09-15T10:08:04.318Z");
});
