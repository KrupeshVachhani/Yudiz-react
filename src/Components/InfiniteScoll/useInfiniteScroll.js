import { useState, useEffect } from "react";
import axios from "axios";

const useInfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      if (!hasMore) return;

      setLoading(true);
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=30&skip=${(page - 1) * 10}`
        );
        setItems((prevItems) => [...prevItems, ...response.data.products]);
        if (response.data.products.length === 0) setHasMore(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchItems();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { items, loading };
};

export default useInfiniteScroll;
