import React from "react";
// Routes:
import Index from "./routes/Index";
import Newcomming from "./routes/Newcomming";
import AlgorithmicsI from "./routes/AlgorithmicsI";
// React Router:
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Base URL for GH-Pages:
const baseURL = "/informatics-and-programming";

// Router config:
const router = createBrowserRouter([
	{
		path: baseURL + "/",
		element: <Index />
	},
	{
		path: baseURL + "/un-nuevo-comienzo",
		element: <Newcomming />
	},
	{
		path: baseURL + "/algoritmia/1",
		element: <AlgorithmicsI />
	}
]);

// App component:
const App = () => {

	return <RouterProvider router={router} />;
};

export default App;
