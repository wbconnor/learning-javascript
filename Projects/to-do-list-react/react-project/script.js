const reactContainer = document.getElementById("react");

ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Hello React"
    ),
    reactContainer
  );