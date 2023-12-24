import { Perahu as PerahuType } from "./api/perahu/_shared"

export interface PerahuProps {
  perahu: PerahuType
}

export default function Perahu({ perahu }: PerahuProps) {
  return (
    <div className="rounded-md border-2 border-solid border-black py-3 px-4 w-96">
      <table className="border-spacing-x-2 border-separate">
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
          <td>{perahu.color}</td>
        </tr>
        <tr>
          <td className="align-top font-bold">SAILING</td>
          <td>{perahu.is_sailing.toString()}</td>
        </tr>
      </table>
    </div>
  )
}
