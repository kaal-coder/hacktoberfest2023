import { useState } from "react"

export function Main() {
  const [loading, setLoading] = useState(false)
  const [locationData, setLocationData] = useState(null)
  const [error, setError] = useState(null)
  const [showdetails, setShowDetails] = useState(false)

  const fetchLocationData = async () => {
    // if we use nextjs api routes then
    //   try {
    //     setLoading(true)
    //     setError(null)

    //     const response = await fetch("/api/getLocation")
    //     const data = await response.json()

    //     setLocationData(data)
    //     setLoading(false)
    //   } catch (error) {
    //     console.error("Error fetching location data:", error)
    //     setError("Error fetching location data")
    //     setLoading(false)
    //   }
    // }

    // without api routes
    try {
      setLoading(true)
      setError(null)

      const ipResponse = await fetch("https://api.ipify.org/?format=json")
      const ipData = await ipResponse.json()

      if (!ipData.ip) {
        ipData.ip = "45.125.118.82"
      }
      // console.log(ipData.ip)

      const locationResponse = await fetch(
        `https://ipinfo.io/${ipData.ip}?token=e04620495b5552`
      )

      const locationData = await locationResponse.json()

      setLocationData(locationData)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching location data:", error)
      setError("Error fetching location data")
      setLoading(false)
    }
  }



  return (
    <div className="flex w-[500px] h-[500px] sm:h-screen sm:w-screen items-center justify-center bg-pink-50">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Get your Information
        </h1>

        <button
          className="w-full py-2 rounded-md text-white bg-pink-500 hover:bg-pink-600 transition duration-300"
          onClick={fetchLocationData}
          disabled={loading}>
          {loading ? "Loading..." : "Get Location"}
        </button>

        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        {locationData && !error && (
          <div className="mt-4">
            <h1 className="text-center font-semibold text-xl">
              Your country is {locationData.country} and city is{" "}
              {locationData.city}
            </h1>

            <div className="mt-5">
              {" "}
              <div className="flex justify-center items-center ">
                <button className=" font-semibold px-2 py-1 rounded-md text-white bg-pink-500 hover:bg-pink-600 transition duration-300" onClick={()=> setShowDetails(true)}>
                  Full Details{" "}
                </button>
              </div>
              {showdetails && (<div>
                <p className="text-pink-500">City: {locationData.city}</p>
                <p className="text-pink-500">Country: {locationData.country}</p>
                <p className="text-pink-500">Region: {locationData.region}</p>
                <p className="text-pink-500">Host Name: {locationData.hostname}</p>
                <p className="text-pink-500">Location: {locationData.loc}</p>
                <p className="text-pink-500">Org: {locationData.org}</p>
                <p className="text-pink-500">Postal: {locationData.postal}</p>
                <p className="text-pink-500">Timezone: {locationData.timezone}</p>
              </div>) }
              
              {/* "hostname": "ns2.blss.in.118.125.45.in-addr.arpa",
    "city": "Mumbai",
    "region": "Maharashtra",
    "country": "IN",
    "loc": "19.0728,72.8826",
    "org": "AS132556 Blue Lotus Support Services Pvt Ltd",
    "postal": "400070",
    "timezone": "Asia/Kolkata" */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
