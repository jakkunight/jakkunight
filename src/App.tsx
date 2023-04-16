import React from "react";
// Routes:
import Index from "./routes/Index";
import Newcomming from "./routes/Newcomming";
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
	}
]);

// App component:
const App = () => {

	return <RouterProvider router={router} />;
};

export default App;
