import axios from "axios"
import { Perahu } from "./_shared"

export interface PatchEditPerahuBody {
  name?: string,
  description?: string,
  capacity?: number,
  color?: string,
}

export interface PatchEditPerahuResponse {
  message: string,
  statusCode: number,
  status: "FAILED" | "SUCCESS",
  jumlahPerahu: number,
  daftarPerahu: Perahu[]
}

export default function patchEditPerahu(idPerahu: string, body: PatchEditPerahuBody) {
  return axios.patch<PatchEditPerahuResponse>(
    `https://oprec-betis-be.up.railway.app/perahu/${idPerahu}`,
    body,
    {
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      }
    }
  )
}
