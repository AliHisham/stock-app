import axios from "axios";

export const getAllStocks = async (search: string): Promise<any[]> => {
  const url = `https://api.polygon.io/v3/reference/tickers?search=${search}&active=true&apiKey=FxQAWoJ4AUby70HhdoMB_LUTI849nAEW`;
  try {
    const response = await axios({
      method: "GET",
      url: url,
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
