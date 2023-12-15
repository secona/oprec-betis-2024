import axios from "axios"
import { Perahu } from "./_shared"

export interface GetDaftarPerahuResponse {
  message: string,
  statusCode: number,
  status: "FAILED" | "SUCCESS",
  jumlahPerahu: number,
  daftarPerahu: Perahu[]
}

export default function getDaftarPerahu() {
  return axios.get<GetDaftarPerahuResponse>("https://oprec-betis-be.up.railway.app/perahu", {
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    }
  })
}
