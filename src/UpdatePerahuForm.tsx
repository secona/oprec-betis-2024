import { useState } from "react"
import { Perahu } from "./api/perahu/_shared";
import patchEditPerahu from "./api/perahu/patchEditPerahu";

export interface UpdatePerahuFormProps {
  onUpdate?: (p: Perahu) => void;
  close: () => void;
  perahu: Perahu;
}

export default function UpdatePerahuForm({ close, perahu, onUpdate }: UpdatePerahuFormProps) {
  const [loading, setLoading] = useState(false)

  const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    setLoading(true);
    event.preventDefault();

    const data: Record<string, any> = {};
    new FormData(event.currentTarget).forEach((v, k) => {
      const key = k.toString()
      if (perahu[key as keyof Perahu] != v) {
        if (key == "capacity") 
          data[key] = Number(v);
        else
          data[key] = v
      }
    });
    
    patchEditPerahu(perahu.id, data).then(() => {
      onUpdate?.(perahu);
      setLoading(false);
      alert("Sukses update perahu.");
      close();
    })
  };

  return (
    <div className="fixed inset-0 grid place-items-center bg-black bg-opacity-50" onClick={close}>
      <form onClick={e => e.stopPropagation()} className="top-0 left-0 bg-white p-5 rounded-md border-2 border-solid border-black" onSubmit={onSubmit}>
        <table className="border-spacing-x-2 border-separate mb-3">
          <tr>
            <td className="align-top font-bold">NAME</td>
            <td>
              <input
                disabled={loading}
                defaultValue={perahu.name}
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
                defaultValue={perahu.description}
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
                defaultValue={perahu.capacity}
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
                defaultValue={perahu.color}
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
        <div className="flex flex-row justify-center">
          <button className="rounded-md border-2 border-solid border-black mr-2 py-0.5 px-3" type="button" onClick={close}>
            cancel
          </button>
          <button className="rounded-md border-2 border-solid border-black py-0.5 px-3">
            update
          </button>
        </div>
      </form>
    </div>
  )
}
