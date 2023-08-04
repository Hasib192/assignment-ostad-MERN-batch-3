import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/css/style.css"
import {Provider} from "react-redux"
import StateStore from "./Redux/Store/StateStore.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={StateStore}>
          <App />
      </Provider>
  </React.StrictMode>,
)
