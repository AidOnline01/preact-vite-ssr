import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

export { PageContextProvider };
export { usePageContext };

const Context = createContext(undefined);

function PageContextProvider({ pageContext, children }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
