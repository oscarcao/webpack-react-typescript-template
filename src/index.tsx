import * as ReactDOM from "react-dom";

import MyComponent from "./components/component";

const App = () => (
    <>
        <h1>My App</h1>
        <p>This is a barebones Webpack/React/Typescript template.</p>
        <p><strong>Note:</strong> Babel is not included in this template. If you use any packages that require transpiling to ES5. You'll need to setup the Babel loader. Instructions can be found in the <a href="https://github.com/babel/babel-loader" rel="noopener noreferrer" target="_blank">Babel loader GitHub repo</a>.</p>
        <MyComponent />
    </>
);

const rootComponent = App();
const reactDomContainer = document.getElementById("react-dom-container");
ReactDOM.render(rootComponent, reactDomContainer);
