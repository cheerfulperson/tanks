# Tanki table demo

## Description
Technologies and libraries used: `React`, `SCSS`, `react-query`

Implemented the `VehiclesTable` component and the `Vehicles` view for it, which includes an implementation of the functionality:
 - Pagination with a choice of the number of displayed tanks.
 - Input with a filter on tank names, provided that the names have diacritical marks.
 - The components is covered with unit-tests.

## Running and Building the Project

### Running the Project

1. Clone repo locally

```bash
git clone git@github.com:cheerfulperson/tanks.git
```

2. Install `yarn` if it is not already installed

```bash
npm install --global yarn
```

3. Create an `.env` file with your variables based on the `.env.example` file.

```
VITE_API_URL=https://domain.com
VITE_APPLICATION_ID=application_id
```

4. Install modules:

```bash
yarn
```

5. Start app using:

```bash
yarn dev
```

This command will start the project and run it in the development mode. You should see the application running in your browser at `http://localhost:5173`.

### Building the Project

To build the project for production, use the following command:

```bash
npm run build
```
