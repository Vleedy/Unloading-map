import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import coordinates from './slices/coordinatesSlice';
import route from './slices/routeSlice';
import routeSaga from './sagas/routeSaga';
import thunk from 'redux-thunk';

const saga = createSagaMiddleware();
const store = configureStore({ reducer: { coordinates, route }, middleware: [saga, thunk] });

saga.run(routeSaga);

export default store;
