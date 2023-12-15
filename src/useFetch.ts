import React from "react";

export default function useFetch(input: RequestInfo | URL, init?: RequestInit | undefined) {
  const [data, setData] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch(input, {
      ...init,
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        ...init?.headers,
      }
    })
      .then(res => res.json())
      .then(d => {
        setData(d)
        setLoading(false)
      })
  }, []);

  return { data, loading }
}
