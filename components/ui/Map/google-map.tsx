import React, { useEffect, useRef } from 'react'
import addMarker from './addMarker'

const DEFAULT_ZOOM = 18

const GoogleMap = ({
  locations,
  className,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>
  className?: string
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: locations[0],
        zoom: DEFAULT_ZOOM,
      })

      // Displays single markers on map when called
      addMarker({ locations, map })
    }
  }, [location, ref])

  return (
    <div
      ref={ref}
      style={{ width: '100%', height: '100%', minHeight: '240px' }}
    />
  )
}

export default GoogleMap
