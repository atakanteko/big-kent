'use client';

import React from 'react';
import { IAppContext } from './container';

export const AppContext = React.createContext<IAppContext | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const memoizedSettings = React.useMemo(() => ({}), []);
  return (
    <AppContext.Provider value={memoizedSettings}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
