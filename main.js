import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';
import { add } from 'ol/coordinate';
import {Style, Fill, Stroke} from 'ol/style';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


function addCqlLayer(){
  var area=document.getElementById("area").value; 
  var CQLFilter='Estado'+ area;
}

new Map({
  target: 'map-container',
  layers: [
    /*new ol.layer.Tile({
      source: new ol.source.OSM()
    }),*/
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: './data/estados.geojson',
      }),
    }),
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: 'http://localhost:8081/geoserver/Prueba1/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Prueba1%3Apueblonahuatl&maxFeatures=50&outputFormat=application%2Fjson',
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([-100, 23.9]),
    zoom: 5,
  }),
});

