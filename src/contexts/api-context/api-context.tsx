import BrainyClient from '@/services/brainy-client/brainy-client';
import { createContext } from '@/utils/contexts';

export interface APIContextValue {
  brainy: BrainyClient;
  setBrainy: (brainyClient: BrainyClient) => void;
}

const APIContext = createContext<APIContextValue>('APIContext');

export default APIContext;
