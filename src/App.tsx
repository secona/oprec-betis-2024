import { useState } from "react";
import BeliPerahuForm from "./BeliPerahuForm";
import Perahu from "./Perahu";
import getDaftarPerahu from "./api/perahu/getDaftarPerahu";
import { Perahu as PerahuType } from "./api/perahu/_shared";
import useAPI from "./api/useAPI";
import UpdatePerahuForm from "./UpdatePerahuForm";

function App() {
  const { data, loading, refetch } = useAPI(getDaftarPerahu);
  const [editing, setEditing] = useState<null | PerahuType>(null);

  return (
    <main>
      <BeliPerahuForm onCreate={() => refetch()} />
      {editing != null && (
        <UpdatePerahuForm onUpdate={refetch} perahu={editing} close={() => setEditing(null)} />
      )}
      {loading
        ? <h1>Loading...</h1>
        : (
          <div className="flex flex-wrap gap-2">
            {data && data.daftarPerahu.map(perahu => (
              <Perahu
                edit={perahu => setEditing(perahu)}
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
