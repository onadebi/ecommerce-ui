import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.scss";
import AppRouter from "./app/routes/AppRouter";
import {HelmetProvider} from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <RouterProvider router={AppRouter} />
      </div>
    </HelmetProvider>
  );
}

export default App;
