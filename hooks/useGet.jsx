import { useEffect, useState } from "react";

const common = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return { loading, setLoading, error, setError };
};

export const useGet = (url, config, initialValue) => {
  const { loading, setLoading, error, setError } = common();
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    axios({ ...config, url })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((_error) => {
        setError(true);
      });
    return () => { };
  }, [url]);
  return {
    loading,
    error,
    data,
  };
};

export const useGetStore = (service, dispatch, action) => {
  const { loading, setLoading, error, setError } = common();
  useEffect(() => {
    service()
      .then(({ data }) => {
        dispatch(action(data));
        setLoading(false);
      })
      .catch((_error) => setError(true));
    return () => { };
  }, [service, action]);
  return { loading, error };
};
