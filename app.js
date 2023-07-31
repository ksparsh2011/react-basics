const heading1 = React.createElement(
  "h1",
  {},
  "hello world I'm called inside nested div"
);

const heading2 = React.createElement("h2", {}, "hello world I'm here too!");
let final = [heading1, heading2]

const parent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement("div", { id: "Child" }, final)
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
