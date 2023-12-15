import { AxiosResponse } from "axios";
import React from "react";

export default function useAPI<T extends object>(
  fn: () => Promise<AxiosResponse<T, any>>
) {
  const [data, setData] = React.useState<T>()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fn().then(d => {
      setData(d.data)
      setLoading(false)
    })
  }, []);

  return { data, loading }
}
