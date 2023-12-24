import { useState } from "react"
import postBeliPerahu, { PostBeliPerahuBody, PostBeliPerahuResponse } from "./api/perahu/postBeliPerahu"

export interface BeliPerahuFormProps {
  onCreate?: (d: PostBeliPerahuResponse) => any;
}

export default function BeliPerahuForm({ onCreate }: BeliPerahuFormProps) {
  const [loading, setLoading] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);

    const obj: PostBeliPerahuBody = {
      name: String(data.get("name")),
      description: String(data.get("description")),
      color: String(data.get("color")),
      capacity: Number(data.get("capacity")),
    };

    postBeliPerahu(obj).then(d => {
      onCreate?.(d.data);
      setLoading(false);
      alert("Sukses membeli perahu.");
      (event.target as any).reset();
    });
  }

  return (
    <form
      className="p-3 inline-flex flex-col gap-3 justify-center items-center mx-auto rounded-md border-black border-solid border-2"
      onSubmit={onSubmit}
    >
      <table className="border-spacing-x-2 border-separate">
        <tr>
          <td className="align-top font-bold">NAME</td>
          <td>
            <input
              disabled={loading}
              name="name"
              className="border-b-2 border-solid border-black focus:outline-none"
              required
            />
          </td>
        </tr>
        <tr>
          <td className="align-top font-bold">DESCRIPTION</td>
          <td>
            <input
              disabled={loading}
              name="description"
              className="border-b-2 border-solid border-black focus:outline-none"
              required
            />
          </td>
        </tr>
        <tr>
          <td className="align-top font-bold">CAPACITY</td>
          <td>
            <input
              disabled={loading}
              name="capacity"
              className="border-b-2 border-solid border-black focus:outline-none"
              type="number"
              required
            />
          </td>
        </tr>
        <tr>
          <td className="align-top font-bold">COLOR</td>
          <td>
            <select
              disabled={loading}
              name="color"
              className="w-full focus:outline-none border-b-2 border-solid border-black"
              required
            >
              <option value="RED">Red</option>
              <option value="ORANGE">Orange</option>
              <option value="YELLOW">Yellow</option>
              <option value="GREEN">Green</option>
              <option value="BLUE">Blue</option>
              <option value="INDIGO">Indigo</option>
              <option value="VIOLET">Violet</option>
              <option value="WHITE">White</option>
              <option value="BLACK">Black</option>
            </select>
          </td>
        </tr>
      </table>
      <button className="rounded-md border-2 border-solid border-black py-0.5 px-3">
        beli
      </button>
    </form>
  )
}
