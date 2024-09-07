
# Project Name

This project is built using **React.js** and includes a variety of tools, libraries, and components to enhance functionality and user experience.

## Installation

To run this project locally, clone the repository and run the following commands:

```bash
git clone https://github.com/your-repo/project-name.git
cd project-name
npm install
npm start
```

## Technologies Used

This project is created with:

- **React** (v18.3.1)
- **Next.js** (v14.2.5)
- **Styled-Components** (v6.1.8)
- **Firebase** (v10.8.0)
- **MUI** (v5.16.6)
- **Framer Motion** (v11.0.3)
- **React Router Dom** (v6.22.3)
- **Redux** (v5.0.1)
- **I18Next** (v23.8.2)

## Project Structure

The project has the following directory structure:

```
build/
public/
src/
  components/
  containers/
  controllers/
  firebase/
  scenes/
  App.js
  index.js
  ...
```

## Styled-Components

This project utilizes **Styled-Components** for CSS-in-JS, allowing you to write CSS styles directly within your JavaScript code, scoped to individual components. For more information, check out the [Styled-Components documentation](https://styled-components.com/docs).

**Example:**

```js
import styled from 'styled-components';

const Button = styled.button`
  background-color: #071952;
  color: white;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: #004a75;
  }
`;
```

## Scripts

- **start**: Runs the app in development mode.
- **build**: Builds the app for production.
- **test**: Runs the test suite.
- **eject**: Removes the single build dependency from your project.


