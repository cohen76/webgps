import useGelocationPosition from "@/hooks/useGelocationPosition"

export default function GpsView() {
 const { position, error } = useGelocationPosition({ timeout: 1000 })
 if (error) {
   return (
    <div className="text-red-800">
      <span>{error.message}</span>
    </div>
   )
  }
  if (position) {
    return (
      <div className="flex flex-row space-x-4">
        <div className="flex flex-col">
          <span>accuracy:</span>
          <span>altitude:</span>
          <span>altitudeAccuracy:</span>
          <span>heading:</span>
          <span>latitude:</span>
          <span>longitude:</span>
          <span>speed:</span>
          <span>timestamp:</span>
        </div>
        <div className="flex flex-col">
          <span>{position.coords.accuracy}</span>
          <span>{position.coords.altitude ?? "null"}</span>
          <span>{position.coords.altitudeAccuracy ?? "null"}</span>
          <span>{position.coords.heading ?? "null"}</span>
          <span>{position.coords.latitude}</span>
          <span>{position.coords.longitude}</span>
          <span>{position.coords.speed ?? "null"}</span>
          <span>{position.timestamp}</span>
        </div>
      </div>
    )
  }
  return <div>Loading...</div>
}
