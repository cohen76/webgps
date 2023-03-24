import { useEffect, useState } from 'react'

async function getCurrentPosition(options?: PositionOptions): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options))
}

export default function useGelocationPosition(options?: PositionOptions) {
  const [position, setPosition] = useState<GeolocationPosition>()
  const [error, setError] = useState<GeolocationPositionError>()
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      setPosition,
      setError,
      options,
    )
    return () => navigator.geolocation.clearWatch(watchId)
  }, [])
  return { position, error }
}
