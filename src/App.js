import CoordinateTable from './components/CoordinateTable';
import Map from './components/Map';
import 'leaflet/dist/leaflet.css';
import './App.sass';

function App() {
  return (
    <div className="container">
      <CoordinateTable />
      <Map />
    </div>
  );
}

export default App;
