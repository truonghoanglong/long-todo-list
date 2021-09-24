import React from 'react';

import './App.css';
import List from './Components/List'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component {
  
  render() {
    
   
    return(
      <>
        <div className="app">
          <List/> 
        </div>   
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />


      </>
        
    )
    

  }
}
export default App;
