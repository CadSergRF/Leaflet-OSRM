import { Icon } from 'leaflet'
import React, { useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import marker from '../images/map_marker_icon.svg'
import { useSelector } from 'react-redux'

const MapComponent = () => {

  const position = [59.84660399, 30.29496392]

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
      {/* {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customMarker}>
        </Marker>
      ))} */}

    </MapContainer >
  )
}

export default MapComponent