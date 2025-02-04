import React from "react";
import useInfiniteScroll from "./useInfiniteScroll";

const ScollingPage = () => {
  const { items, loading } = useInfiniteScroll();

  return (
    <div>
      <h2>Infinite Scroll Example</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {loading && <p>Loading more...</p>}
    </div>
  );
};
    
export default ScollingPage;
