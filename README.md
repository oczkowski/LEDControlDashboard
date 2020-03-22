# React JS LED Control and Management Panel

## Part (3/3)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intro

This in a repo for a project split into 3 repositories. This repo contains the Front-End application allowing to controll the behaviour of the LEDs. This project was built on react for training purposes. After completing a React course on Udemy I've decided to give react a deeper dive and see if I can persist the kowledge over time.

## Setup

When making this project I assumed that this will be an internal tool for controlling LEDs around my house. This app has no security or authentication system in place so it is fine to run it in either development mode using.

```bash
npm start
```

Or build the project to run it on a server. (Please read the next section before building.)

```bash
npm build
```

The second option will not start a development server for you and will require you to host the files yourself. All files from the build folder must be placed at the root of the server, alternatively you can use [this](https://create-react-app.dev/docs/deployment/) guide in order to change the base path of the application.

## Configuration

In order for the application to work correctly our Front-End API needs to connect to a backend Node server via Sockets.
These are HTTP sockets so there is no need for any custom port/ip configuration.

The default socket URL is `http://localhost`

If you're planning to host the API/Socket server anywhere else other than the device you're hosting the API server on please adjust it before building the React Application.
