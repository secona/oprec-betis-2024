import Perahu from "./Perahu"
import getDaftarPerahu from "./api/perahu/getDaftarPerahu"
import useAPI from "./api/useAPI"

function App() {
  const { data, loading } = useAPI(getDaftarPerahu)

  if (loading) return <h1>Loading...</h1>

  return (
    <div className="flex flex-wrap gap-2">
      {data && data.daftarPerahu.map(perahu => (
        <Perahu
          key={perahu.id}
          perahu={perahu}
        />
      ))}
    </div>
  )
}

export default App
