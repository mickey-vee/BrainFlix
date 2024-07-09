/* from array need to get title, channel, image for next videos  */

/* "title": "Beyond the Horizon",
"channel": "Emmett Wilson",
"image": "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image4.jpg", */

import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/ComponentName/Nav/Nav";
import Video from "./components/ComponentName/Video/Video";

ReactDOM.createRoot(document.getElementById("nav")).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("video")).render(
  <React.StrictMode>
    <Video />
  </React.StrictMode>
);
