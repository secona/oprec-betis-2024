import axios from "axios"
import { Perahu } from "./_shared"

export interface PatchBerlayarPerahuResponse {
  message: string,
  statusCode: number,
  status: "FAILED" | "SUCCESS",
  jumlahPerahu: number,
  daftarPerahu: Perahu[]
}

export default function patchBerlayarPerahu(idPerahu: string) {
  return axios.patch<PatchBerlayarPerahuResponse>(
    `https://oprec-betis-be.up.railway.app/perahu/${idPerahu}/berlayar`,
    {},
    {
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      }
    }
  )
}
