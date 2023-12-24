import BeliPerahuForm from "./BeliPerahuForm"
import Perahu from "./Perahu"
import getDaftarPerahu from "./api/perahu/getDaftarPerahu"
import useAPI from "./api/useAPI"

function App() {
  const { data, loading, refetch } = useAPI(getDaftarPerahu)

  return (
    <main>
      <BeliPerahuForm onCreate={() => refetch()} />
      {loading
        ? <h1>Loading...</h1>
        : (
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
    </main>
  )
}

export default App
