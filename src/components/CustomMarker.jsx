import React from 'react'
import { Icon } from 'leaflet'
import marker from '../images/map_marker_icon.svg'
import { Marker, Popup } from 'react-leaflet'

const CustomMarker = ({ item, index, map, isActive }) => {

  const customIcon = new Icon({
    iconUrl: marker,
    iconSize: [32, 32]
  })

  return (
    <Marker key={index} position={item.geotag} icon={customIcon}>
      <Popup>{`Точка ${index + 1}`}</Popup>
    </Marker>
  )
}

export default CustomMarker