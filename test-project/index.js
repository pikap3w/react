const main = React.createElement("div", null,
  React.createElement("h1", null, "Hello Dojo!"),
  React.createElement("h2", null, "Things I need to do:"),
  React.createElement("ul", null, 
    React.createElement("li", null, "Learn React"),
    React.createElement("li", null, "Climb Mt. Everest"),
    React.createElement("li", null, "Run a marathon"),
    React.createElement("li", null, "Feed the dogs"),
));
console.log(JSON.stringify(main));

ReactDOM.render(main, document.getElementById("main"));
