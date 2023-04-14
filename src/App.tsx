import React from "react";
import Index from "./routes/Index";
import CoreConcepts from "./routes/CoreConcepts";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const baseURL = "/informatics-and-programming";

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

const App = () => {

	return <RouterProvider router={router} />;
};

export default App;
