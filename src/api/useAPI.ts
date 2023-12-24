import { AxiosResponse } from "axios";
import React from "react";

export default function useAPI<T extends object>(
  fn: () => Promise<AxiosResponse<T, any>>
) {
  const [data, setData] = React.useState<T>()
  const [loading, setLoading] = React.useState(true)

  const refetch = React.useCallback(() => {
    fn().then(d => {
      setData(d.data);
      setLoading(false);
    });
  }, []);

  React.useEffect(refetch, []);

  return { data, loading, refetch }
}
