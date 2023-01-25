import React from "react";

const useTimeout = (delay=2000) => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let timer = setTimeout(() => {
      setReady(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return {ready};
};

export default useTimeout;
