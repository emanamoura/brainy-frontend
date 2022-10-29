import { AppProps } from 'next/app';
import { FC, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import '@/styles/global.css';
import 'react-toastify/dist/ReactToastify.min.css';
import APIContextProvider from '@/contexts/api-context/api-context-provider';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = useRef(new QueryClient()).current;

  return (
    <QueryClientProvider client={queryClient}>
      <APIContextProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </APIContextProvider>
    </QueryClientProvider>
  );
};

export default App;
