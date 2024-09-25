# React-TV-Show

React-TV-Show is an application that allows you to search for your favorite movies and provides recommendations based on your searches. It uses Vite for a fast development environment and React for the user interface.

## Features

- Search for movies from a large database.
- Dynamic movie recommendations based on your search.
- Hot Module Replacement (HMR) for a smooth development experience.

## Plugins Used

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.

## Configuration

To use this application, you need to create an account on [TheMovieDatabase](https://www.themoviedb.org/) and obtain an API key. Then, add this key to a `.env` file at the root of the project.

Example `.env` file:

```env
VITE_API_KEY=your_api_key_here
```

## Installation

```bash
git clone https://github.com/your-repository/react-tv-show.git
```

```bash
cd react-tv-show
```

```bash
npm install
```

```bash
npm run dev
```
