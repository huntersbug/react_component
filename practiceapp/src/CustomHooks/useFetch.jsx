import React from "react";

const useFetch = (url) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return data;
};

export default useFetch;
