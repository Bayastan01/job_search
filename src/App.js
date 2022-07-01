import Navbars from './components/Navbars/Navbars'
import React from 'react';

import { BrowserRouter } from "react-router-dom";
export const SearchContext = React.createContext({}); 

function App() {
  const [search,setSearch] = React.useState('')

  return (
       <>
    <SearchContext.Provider value={{search,setSearch}}>

       <BrowserRouter>
         <Navbars/>
       </BrowserRouter>
      </SearchContext.Provider>

       </>
  );
}

export default App;
