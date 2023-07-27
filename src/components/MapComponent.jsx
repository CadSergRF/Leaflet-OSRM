import { Icon } from 'leaflet'
import React, { useState } from 'react'
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet'
import marker from '../images/map_marker_icon.svg'
import { useSelector } from 'react-redux'

const MapComponent = () => {

  const [position, setPosition] = useState([59.983762, 30.311365])

  let currentPoints = useSelector(state => state.currentRoute.points)

  let currentState = useSelector(state => state.currentRoute)

  console.log(currentState.route)

  let polyline = currentState.route;

  // if (currentState.points) {
  //   setPosition(currentState.points[0].geotag)
  // }

  const customMarker = new Icon({
    iconUrl: marker,
    iconSize: [40, 40]
  })

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* {currentPoints.map((item, index) => {
        console.log(item[index].info)
      })} */}
      <Polyline pathOptions={{ color: 'red' }} positions={polyline} />
    </MapContainer >
  )
}

export default MapComponent