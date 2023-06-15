import React from 'react';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

export default function YMap() {

  return (
    <YMaps>
      <Map
        width='100%'
        height='20rem'
        defaultState={{
          center: [55.711437, 37.798727],
          zoom: 16,
          behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"],
        }}
      >
        <Placemark geometry={[55.711437, 37.798727]} />
        <ZoomControl options={{ size: 'small', position: { bottom: 100, right: 10 } }} />
      </Map>
    </YMaps>
  )
}