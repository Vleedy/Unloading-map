import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Polyline, Marker, FeatureGroup } from 'react-leaflet';
import L from 'leaflet';
import marker from '../../assets/img/location.svg';
import 'leaflet/dist/leaflet.css';

const myIcon = new L.Icon({
  //своя иконка маркера
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [32, 45],
});

const Map = () => {
  const { route, activeRow } = useSelector((state) => state.route);
  const defaultPosition = [59.84660399, 30.29496392];
  const groupRef = useRef(null);
  const mapRef = useRef(null);

  const autoZoom = () => {
    const map = mapRef.current;
    const group = groupRef.current;
    map.setMaxZoom(16);
    map.flyToBounds(group.getBounds());
  };

  useEffect(() => {
    if (groupRef.current && mapRef.current) {
      autoZoom();
    }
  }, [activeRow]);

  return (
    <>
      <MapContainer ref={mapRef} center={defaultPosition} zoom={12} className="map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {route && <Polyline pathOptions={{ color: '#9cb11d' }} positions={route} />}
        {activeRow && (
          <FeatureGroup ref={groupRef}>
            <Marker icon={myIcon} position={[activeRow.fromLat, activeRow.fromLng]}></Marker>
            <Marker icon={myIcon} position={[activeRow.toLat, activeRow.toLng]}></Marker>
          </FeatureGroup>
        )}
      </MapContainer>
    </>
  );
};

export default Map;
