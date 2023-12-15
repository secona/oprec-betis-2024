import axios from "axios"
import { Perahu } from "./_shared"

export interface GetDetailPerahuResponse {
  message: string,
  statusCode: number,
  status: "FAILED" | "SUCCESS",
  perahu: Perahu,
}

export default function getDetailPerahu(idPerahu: string) {
  return axios.get<GetDetailPerahuResponse>(
    `https://oprec-betis-be.up.railway.app/perahu/${idPerahu}`,
    {
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      }
    }
  )
}
