import { call, put, takeLeading } from 'redux-saga/effects';
import axios from 'axios';
import { getRouteSucces } from '../slices/routeSlice';

function* workGetRouteFetch({ payload }) {
  const { fromLat, fromLng, toLat, toLng } = payload;
  console.log(fromLat);
  const response = yield call(() =>
    axios.get(
      `https://router.project-osrm.org/route/v1/car/${fromLng},${fromLat};${toLng},${toLat}?steps=true&overview=simplified` //из полученных координат формируем запрос на маршрут
    )
  );
  const route = [];
  response.data.routes[0].legs[0].steps.forEach((item) => {
    //формируем массив из точек координат, необходимых для полилинии
    item.intersections.forEach((obj) => route.push(obj.location.reverse()));
  });
  yield put(getRouteSucces(route));
}

function* routeSaga() {
  yield takeLeading('route/getRouteFetch', workGetRouteFetch);
}

export default routeSaga;
