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
    <main className="flex flex-col items-center gap-10 p-5">
      <BeliPerahuForm onCreate={() => refetch()} />
      {editing != null && (
        <UpdatePerahuForm onUpdate={refetch} perahu={editing} close={() => setEditing(null)} />
      )}
      {loading
        ? <h1>Loading...</h1>
        : (
          <div className="max-w-screen-xl flex flex-wrap gap-2 justify-center">
            {data &&
              data
                .daftarPerahu
                .map(perahu => (
                  <Perahu
                    edit={perahu => setEditing(perahu)}
                    key={perahu.id}
                    perahu={perahu}
                    onSail={refetch}
                    onDelete={refetch}
                  />
                ))
            }
          </div>
        )
      }
    </main>
  )
}

export default App
