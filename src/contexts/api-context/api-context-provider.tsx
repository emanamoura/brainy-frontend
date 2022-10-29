import { useMemo, useState } from 'react';

import BrainyClient from '@/services/brainy-client/brainy-client';
import { FCC } from '@/types/react';

import APIContext, { APIContextValue } from './api-context';

const APIContextProvider: FCC = ({ children }) => {
  const [brainyClient, setBrainyClient] = useState<BrainyClient>(() => new BrainyClient());
  const api = useMemo<APIContextValue>(() => ({ brainy: brainyClient, setBrainy: setBrainyClient }), [brainyClient]);
  return <APIContext.Provider value={api}>{children}</APIContext.Provider>;
};

export default APIContextProvider;
