import React from "react";
import ReactDOM from "react-dom";
import Chat from "./Chat";
import { Alert } from "shards-react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const App = () => <Chat/>;

ReactDOM.render(<App />, document.getElementById("app"));

