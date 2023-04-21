import React, { Component, ReactNode } from "react";
// Routes:
import Test from "./routes/test";
import Index from "./routes/Index";
import TCL1 from "./routes/the-console-logs/1";
import A1 from "./routes/algoritmia/1";
import A2 from "./routes/algoritmia/2";
// React Router:
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

// Base URL for GH-Pages:
const baseURL = "/jakkunight/#";

// Router config:
class Route {
	path: string = "";
	element: Component | ReactNode = null;
	constructor(path: string, element: Component | ReactNode){
		this.path = path;
		this.element = element;
	}
};

const router = createHashRouter([
	new Route("/test", <Test />),
	new Route("/", <Index />),
	new Route("/the-console-logs/1", <TCL1 />),
	new Route("/algoritmia/1", <A1 />),
	new Route("/algoritmia/2", <A2 />),
	//new Route("", < />),
]);

// App component:
const App = () => {

	return <RouterProvider router={router} />;
};

export default App;
