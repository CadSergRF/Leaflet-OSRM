import { Icon, divIcon, point } from 'leaflet'
import React, { useState } from 'react'
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";
import marker from '../images/map_marker_icon.svg'
import { useSelector } from 'react-redux'

const MapComponent = () => {

  const position = [59.84660399, 30.29496392]
  // const position = [59.84660399, 30.29496392]

  const path = [
    [
      59.983762,
      30.311365
    ],
    [
      59.985265,
      30.311652
    ],
    [
      59.98923,
      30.313126
    ],
    [
      59.99084,
      30.314556
    ],
    [
      59.991367,
      30.315806
    ],
    [
      59.993924,
      30.316646
    ],
    [
      59.995037,
      30.317626
    ],
    [
      59.993707,
      30.319129
    ],
    [
      59.993047,
      30.321298
    ],
    [
      59.992998,
      30.322481
    ],
    [
      59.993823,
      30.323165
    ],
    [
      59.99357,
      30.323673
    ],
    [
      59.993903,
      30.326077
    ],
    [
      59.993736,
      30.326351
    ],
    [
      59.992504,
      30.326383
    ],
    [
      59.992113,
      30.326671
    ],
    [
      59.991701,
      30.330208
    ],
    [
      59.991097,
      30.331773
    ],
    [
      59.991383,
      30.335611
    ],
    [
      59.990134,
      30.337211
    ],
    [
      59.989877,
      30.339271
    ],
    [
      59.986528,
      30.343135
    ],
    [
      59.986036,
      30.345124
    ],
    [
      59.984981,
      30.345867
    ],
    [
      59.984981,
      30.345867
    ]
  ]

  const limeOptions = { color: 'lime' }

  const currentRoute = useSelector(state => state.currentRoute)

  const customMarker = new Icon({
    iconUrl: marker,
    iconSize: [40, 40]
  })

  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentRoute.map((item, index) => {
        console.log(item[index].info)
      })}
      <Polyline pathOptions={{ color: 'red' }} positions={path} />
    </MapContainer >
  )
}

export default MapComponent