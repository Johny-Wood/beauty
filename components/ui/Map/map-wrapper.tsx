import React from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'

const MapWrapper = ({ children }: { children: React.ReactNode }) => {
  // Ideally we want the apiKey to be fetch from an environment variable
  // const apiKey = 'yourApiKey'

  // if (!apiKey) {
  //   return <div>Cannot display the map: google maps api key missing</div>
  // }

  // return <Wrapper apiKey={apiKey}>{children}</Wrapper>
  return <Wrapper>{children}</Wrapper>
}

export default MapWrapper
