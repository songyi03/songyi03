import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';
import type { Middleware, Dispatch, AnyAction } from 'redux';

const useLogger = process.env.NODE_ENV !== 'production';

// 💡 타입 충돌 없이 감싸주는 safeLogger
const safeLogger: Middleware<{}, any, Dispatch<AnyAction>> = store => next => action => {
  return (logger as any)(store)(next)(action);
};

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      useLogger
        ? getDefaultMiddleware().concat(safeLogger)
        : getDefaultMiddleware(),
  });

  return store;
};

export function useStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}
