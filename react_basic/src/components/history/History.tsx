import { Typography } from "@mui/material";


function History() {
  return (
    <div>
      <Typography sx={{ marginBottom: 2 }}>
        <h1>Defination</h1>
        React is a popular JavaScript library for building user interfaces
        (UIs). It's particularly well-suited for creating single-page
        applications (SPAs) and mobile applications. Here's a breakdown of its
        <h2>What is React?</h2>
        1. Component-Based:- React allows developers to break down complex UIs
        into smaller, reusable pieces called components. This promotes code
        organization and maintainability
        <br />
        2. Declarative:- Instead of directly manipulating the DOM (Document
        Object Model), you describe how the UI should look based on the
        application's state. React then efficiently updates the DOM to match
        that description.<br></br>
        3. Virtual DOM:- React uses a virtual DOM, which is a lightweight
        in-memory representation of the actual DOM. This allows React to
        optimize updates and improve performance by minimizing direct DOM
        manipulations.<br></br>
        4. History of React:- React was developed by Jordan Walke, a software
        engineer at Facebook. <br />
        * It was first used internally at Facebook in 2011 to improve the
        performance of their news feed.
        <br />
        * React was open-sourced in 2013, quickly gaining popularity among
        developers.
        <br />
        * Since then, it has undergone significant evolution, with key
        milestones <br />
        * including:- <br />
        * The introduction of the virtual DOM. <br />
        * The Fiber architecture, which improved React's rendering capabilities.
        <br />
        * The introduction of React Hooks, which enabled functional components
        to use state and other React features.
        <br />
        5. Installation Steps:- The most common way to start a new React project
        is using Create React App.
        <br />
        <h3>Here's a simplified</h3>
        1. Install Node.js and npm (Node Package Manager):- <br />
        *Ensure you have Node.js and npm installed on your system. You can
        download them from the official Node.js website. <br />
        2. Create a new React app:- Open your terminal or command prompt.
        <br />
        * Run the following command:- `npx create-react-app my-app` (replace
        "my-app" with your desired project name)
        <br />
        * This command will set up a new React project with all the necessary
        dependencies.
        <br />
        3. Navigate to your project directory:- `cd my-app`
        <br />
        4. Start the development server:- `npm start` * This will launch a
        development server, and your React app will open in your web browser.
        <br />
        **Key points about the installation:- <br />
        * `create-react-app` handles the complex configuration of Webpack and
        Babel, allowing you to focus on writing React code.
        <br />
        *`npx` is a tool that comes with npm and allows you to execute npm
        packages without installing them globally. I hope this helps!
      </Typography>
    </div>
  );
}

export default History;
