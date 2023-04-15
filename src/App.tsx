import React from "react";
// Routes:
import Index from "./routes/Index";
import CoreConcepts from "./routes/CoreConcepts";
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
		path: baseURL + "/conceptos-basicos",
		element: <CoreConcepts />
	}
]);

// App component:
const App = () => {

	return <RouterProvider router={router} />;
};

export default App;
