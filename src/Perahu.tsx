import { Perahu as PerahuType } from "./api/perahu/_shared"
import deleteJualPerahu from "./api/perahu/deleteJualPerahu";
import patchBerlayarPerahu from "./api/perahu/patchBerlayarPerahu";

export interface PerahuProps {
  edit: (perahu: PerahuType) => void;
  perahu: PerahuType;
  onSail?: () => void;
  onDelete?: () => void;
}

export default function Perahu({ perahu, edit, onSail, onDelete }: PerahuProps) {
  return (
    <div className="rounded-md border-2 border-solid border-black py-3 px-4 w-96">
      <table className="border-spacing-x-2 border-separate mb-3">
        <tr>
          <td className="align-top font-bold">NAME</td>
          <td>{perahu.name}</td>
        </tr>
        <tr>
          <td className="align-top font-bold">DESCRIPTION</td>
          <td>{perahu.description}</td>
        </tr>
        <tr>
          <td className="align-top font-bold">CAPACITY</td>
          <td>{perahu.capacity}</td>
        </tr>
        <tr>
          <td className="align-top font-bold">COLOR</td>
          <td>{perahu.color.charAt(0).toUpperCase() + perahu.color.slice(1).toLowerCase()}</td>
        </tr>
        <tr>
          <td className="align-top font-bold">STATUS</td>
          <td>{perahu.is_sailing ? "Sailing" : "Not Sailing"}</td>
        </tr>
      </table>
      <div className="flex flex-row justify-center gap-2">
        <button
          className="rounded-md border-2 border-solid border-black px-3 py-0.5"
          onClick={() => patchBerlayarPerahu(perahu.id).then(onSail)}
        >
          berlayar
        </button>
        <button
          className="rounded-md border-2 border-solid border-black px-3 py-0.5"
          onClick={() => edit(perahu)}
        >
          edit
        </button>
        <button
          className="rounded-md border-2 border-solid border-black px-3 py-0.5"
          onClick={() => deleteJualPerahu(perahu.id).then(onDelete)}
        >
          jual
        </button>
      </div>
    </div>
  )
}
