import { createContext, useRef } from 'react';

export const FormContext = createContext<any>(null);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <FormContext.Provider value={{ formRef }}>
      {children}
    </FormContext.Provider>
  );
};