import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    return () => {};
  }, [url]);
  return {
    loading,
    error,
    data,
  };
};

export const useGetStore = (
  service,
  action,
  stateSelector = (state) => state
) => {
  const { loading, setLoading, error, setError } = common();
  const dispatch = useDispatch();
  useEffect(() => {
    service()
      .then((res) => {
        dispatch(action(res.data));
        setLoading(false);
      })
      .catch((_error) => {
        setError(true);
      });
    return () => {};
  }, [service, action]);
  const data = useSelector((state) => stateSelector(state));
  return { loading, error, data };
};
