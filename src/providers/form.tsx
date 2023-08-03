import React from 'react';

const Context = React.createContext({
  values: {},
  setValues: (values:{}) => {},
  appendValues: (values:{}) => {},
});

const Provider = ({children}) => {
  const [values, setValues] = React.useState({});

  const appendValues = (values) => ({
    ...values,
  });

  return (
    <Context.Provider value={{values, setValues, appendValues}}>
      {children}
    </Context.Provider>
  );
}

export const useForm = () => React.useContext(Context);

export default Provider;
