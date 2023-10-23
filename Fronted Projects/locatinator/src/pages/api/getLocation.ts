import type { NextApiRequest, NextApiResponse } from "next";


type ResponseData = {
  ip: string
  hostname: string
  city: string
  region: string
  country: string
  loc: string
  org: string
  postal: string
  timezone: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const ipResponse = await fetch("https://api.ipify.org/?format=json")
    const ipData = await ipResponse.json()

    if (!ipData.ip) {
      throw new Error("IP data not found")
        
    }

    const locationResponse = await fetch(
      `https://ipinfo.io/${ipData.ip}?token=${process.env.IP_TOKEN}`
    )
    
    // for local testing only
    // const locationResponse = await fetch(
    //   `https://ipinfo.io/45.125.118.82?token=e04620495b5552`
    // )


    const locationData = await locationResponse.json()

    res.status(200).json(locationData)
  } catch (error) {
     console.error("Error:", error)
    res.status(500).json({ message: "Error fetching location data" })
  }
}