import { Icon } from 'leaflet'
import React, { useState, useEffect } from 'react'
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet'
import marker from '../images/map_marker_icon.svg'
import { useSelector } from 'react-redux'

import { pathConst, markers } from '../helpers/constatns'

const MapComponent = () => {

  const currentPoints = useSelector(state => state.currentRoute.points)
  const currentState = useSelector(state => state.currentRoute)

  const [route, setRoute] = useState([]); // Массив точек polyline
  const [markerPoint, setMarkerPoint] = useState([]); // Массив маркеров

  console.log(currentState.route)

  console.log(Boolean(currentState.route))

  useEffect(() => {
    setRoute(currentState.route);

  }, [currentState.route])



  const greenOptions = { color: 'green' }

  const position = [59.983762, 30.311365]

  const customMarker = new Icon({
    iconUrl: marker,
    iconSize: [100, 100]
  })

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* {currentPoints.map((item, index) => {
        console.log(item[index].info)
      })} */}
      <Marker position={position} icon={customMarker}></Marker>
      <Polyline pathOptions={greenOptions} positions={route} />
    </MapContainer >
  )
}

export default MapComponent