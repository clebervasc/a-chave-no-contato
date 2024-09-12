import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { Router } from "./Router";
import { Toaster } from 'react-hot-toast';
import { FormProvider } from './components/Form/context';
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <FormProvider>
        <Router />
      </FormProvider>
      <Toaster />
    </HelmetProvider>
  </StrictMode>
);
