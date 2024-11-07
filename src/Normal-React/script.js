const Heading = React.createElement("h1", {
    id: "title",
    className: "heading",
    style: {
        color: "pink"
    }
}, "Hello World from React");

const Paragraph = React.createElement("p", {
    className: "intro"
}, "This is a simple React page with multiple elements.");

const Image = React.createElement("img", {
    src: "https://picsum.photos/200",
    alt: "Placeholder Image",
    style: {
        borderRadius: "8px"
    }
});

const Button = React.createElement("button", {
    onClick: () => alert("Button clicked!"),
    style: {
        backgroundColor: "lightblue",
        padding: "10px 20px",
        margin: "10px",
        borderRadius: "5px",
        cursor: "pointer"
    }
}, "Click Me!");

//heading, paragraph, image, button if we make array or pass like with array it will get as a array only in childer of div.container as a react props
const Container = React.createElement("div", {
    className: "container",
    style: {
        backgroundColor: "lightgray",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }

},
    Heading,
    Paragraph,
    Image,
    Button
);

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(Container);
