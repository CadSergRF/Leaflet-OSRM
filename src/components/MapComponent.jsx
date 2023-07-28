import React from 'react'
import { MapContainer, Polyline, TileLayer, ZoomControl } from 'react-leaflet'
import { useSelector } from 'react-redux'
import AutoZoom from './AutoZoom'
import CustomMarker from './CustomMarker'

const MapComponent = () => {

  const currentPoints = useSelector(state => state.currentRoute.points) // Маркеры
  const currentStateRoute = useSelector(state => state.currentRoute.route) // Маршрут
  const markerArr = currentPoints.map(item => item.geotag) // Координаты маркеров

  const greenOptions = { color: 'green' } // Стиль отрисовки маршрута
  const position = [59.983762, 30.311365] // Начальные координаты центра отрисовки карты

  return (
    <MapContainer bounds={markerArr} center={position} zoom={13} scrollWheelZoom={true} zoomControl={false} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentPoints.map((item, index) => (
        <CustomMarker key={index} item={item} index={index} />
      ))}
      <Polyline pathOptions={greenOptions} positions={currentStateRoute} />
      <ZoomControl position='bottomright' />
      <AutoZoom bounds={markerArr} />
    </MapContainer >
  )
}

export default MapComponent