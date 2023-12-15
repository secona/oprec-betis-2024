import useFetch from "./useFetch"

function App() {
  const { data, loading } = useFetch("https://oprec-betis-be.up.railway.app/perahu");

  if (loading) return <h1>Loading...</h1>

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}

export default App
