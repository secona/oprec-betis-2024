import axios from "axios"
import { Perahu } from "./_shared"

export interface DeleteJualPerahuResponse {
  message: string,
  statusCode: number,
  status: "FAILED" | "SUCCESS",
  jumlahPerahu: number,
  daftarPerahu: Perahu[]
}

export default function deleteJualPerahu(idPerahu: string) {
  return axios.delete<DeleteJualPerahuResponse>(
    `https://oprec-betis-be.up.railway.app/perahu/${idPerahu}`,
    {
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      }
    }
  )
}
