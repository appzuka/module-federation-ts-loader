import * as React from "react";
// import { Button } from "app2";

const RemoteButton = React.lazy(() => import("app2/Button"));

// import("app2/Button").then(m => console.log(m));

// import("app2/Button").then(m => console.log(m))

// console.log(myMethod('blah'));
// console.log(Button)

const App = () => (
  <div>
    <h1>Basic Host-Remote x</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export  { App };
