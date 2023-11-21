'use client'

import React from 'react'
import MapWrapper from './map-wrapper'
import GoogleMap from './google-map'

export const LOCATIONS = [{ lat: 36.8913, lng: 30.63244 }]

const Map = () => {
  return (
    <MapWrapper>
      <GoogleMap locations={LOCATIONS} />
    </MapWrapper>
  )
}

export default Map
