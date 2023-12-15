import axios from "axios"
import { Perahu } from "./_shared"

export interface PostBeliPerahuBody {
  name: string,
  description: string,
  capacity: number,
  color: string,
}

export interface PostBeliPerahuResponse {
  message: string,
  statusCode: number,
  status: "FAILED" | "SUCCESS",
  perahu: Perahu,
}

export default function postBeliPerahu(body: PostBeliPerahuBody) {
  return axios.post<PostBeliPerahuResponse>(
    `https://oprec-betis-be.up.railway.app/perahu`,
    body,
    {
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    }
  )
}
