# Getting started

In the project directory, run:

### `yarn install` or (not-preffered) `npm install`

To install all packages and dependencies

### `yarn start` or (not-preffered) `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test` or (not-preffered) `npm test`

Launches the test runner in the interactive watch mode.\

# Running Project in a Docker Container

This guide will walk you through the process of containerizing and running this project using Docker.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your machine.

## Step 1: Clone the Project

Clone the React project from the repository:

```bash
git clone https://github.com/emeraldkwekowe/emerald-news-app.git
```

## Step 2: Build the Docker Image

Open a terminal and navigate to the project root directory (or simply open the project in an IDE with inbuilt terminal support). Run the following command to build the Docker image:

```bash
docker build -t emerald-news-app .
```

## Step 3: Run the Docker Container

After building the image, you can run the Docker container using the following command:

```bash
docker run -it --rm -p 3001:3000 emerald-news-app
```

This command maps port 3001 on your host machine to port 3000 on the Docker container. Please configure your host machine port as needed to ensure the port is forwarded correctly.

## Step 4: Access the Application

Visit `http://localhost:3001` in your web browser to access the test submission.

---

This documentation provides a step-by-step guide for running the test submission in a Docker container. Kindly note that this project uses yarn.

# Other commands

### `yarn run build` or (not-preffered) `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
