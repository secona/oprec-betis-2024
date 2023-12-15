import getDaftarPerahu from "./api/perahu/getDaftarPerahu"
import useAPI from "./api/useAPI"

function App() {
  const { data, loading } = useAPI(getDaftarPerahu)

  if (loading) return <h1>Loading...</h1>

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}

export default App
