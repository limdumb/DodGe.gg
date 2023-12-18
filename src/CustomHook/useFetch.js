import { useEffect, useState } from "react";
import { regionInstance } from "../Function/getGetRegionInstance";

export function useFetch(fetchUrl, region) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const instance = regionInstance(region);

  useEffect(() => {
    const getFetchData = async () => {
      try {
        const response = await instance.get(fetchUrl);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError({
          code: 500,
          message:
            err.message ||
            "[ERROR]: 알수없는 에러가 발생했습니다. 다음에 다시 시도해주세요",
        });
        setLoading(false);
      }
    };

    getFetchData();
  }, [fetchUrl, instance]);

  return { data, isLoading, error };
}
