const heading = React.createElement("h1", {}, "Namaste React!!");
const parent = React.createElement("div", { id: 'parent' }, React.createElement("div", { id: 'child' }, React.createElement("h1", {}, 'This is an H1 tag!!')))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
