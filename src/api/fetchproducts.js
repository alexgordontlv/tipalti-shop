import axios from "axios";

const fetchProductsApi = async () => {
  let error = null;
  let data = null;
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    data = res.data;
    return [data, error];
  } catch (err) {
    error = err;
    return [data, error];
  }
};

export default fetchProductsApi;
