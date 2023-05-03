import React from 'react';

const Context = React.createContext({
  values: {},
  setValues: (values) => {},
});

const Provider = ({children}) => {
  const [values, setValues] = React.useState({});

  return (
    <Context.Provider value={{values, setValues}}>
      {children}
    </Context.Provider>
  );
}

export const useForm = () => React.useContext(Context);

export default Provider;
