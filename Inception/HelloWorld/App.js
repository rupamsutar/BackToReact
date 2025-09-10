import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {
    id: "heading"
}, "Namaste React ! ❤️");

const jsxHeading = <h1>Namaste React using JSX !❤️</h1>

const headingNew = (
    <h1 className='head' tabIndex="5">
        Namaste React using JSX New! ❤️
    </h1>
)

const Title = () => (
    <h1 id="title">This is the Title</h1>
)

//Component Composition
const HeadingComponent = () => (
    <div id='container'>
        <Title />
        <Title></Title>
        {Title()}
        <h2>Namaste React Functional Component ! ❤️</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);