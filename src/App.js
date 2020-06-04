import React, { useReducer, useRef } from 'react';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import ViewPort from './components/ViewPort/ViewPort';
import { initialState, schema } from './Reducer/initialState';
import reducer from './Reducer/reducer';

export const TableContext = React.createContext();
function App() {
  //  checking for render whether to update local or not
  const data = useRef({ value: 0 });
  data.current.value = data.current.value + 1;
  const [tableData, tableDispatch] = useReducer(reducer, initialState);
  let local = tableData;
  // Storing in local Storage if the local storage data is not same as initial state
  if (JSON.stringify(initialState) !== JSON.stringify(local) || data.current.value > 1) {
    localStorage.setItem('data', JSON.stringify(local));
  }
  //  getting the data from local storage if not empty
  if (localStorage.getItem('data') !== null) {
    local = JSON.parse(localStorage.getItem('data'));
  }
  return (
    <main>
      <TableContext.Provider value={{ local, tableDispatch, schema }}>
        <Header />
        <SideBar />
        <ViewPort />
      </TableContext.Provider>
    </main>
  );
}

export default App;
