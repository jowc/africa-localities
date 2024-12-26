# Express Open Source Project

## Project Description
The "African Localities" open-source project is a platform designed to catalog and manage location names across Africa. It allows users to add, update, and retrieve location details based on a hierarchical structure of country, state, and city. This initiative aims to provide a comprehensive and accessible database of African localities for developers, researchers, and organizations.

### Key Objectives:
- Build a community-driven repository of African localities.
- Provide a RESTful API for developers to integrate African locality data into their applications.
- Foster collaboration by enabling users to contribute new locations or improve existing data.

### Use Cases:
1. Developers needing accurate location data for African regions.
2. Organizations working on logistics, e-commerce, or mapping applications in Africa.
3. Researchers requiring structured data on African localities.

## Overview
This project is an open-source application built using [Express.js](https://expressjs.com/) and an in-memeroy data storage, a fast and minimalist web framework for Node.js. It serves as a foundation for creating scalable and robust web applications, providing a flexible structure and support for middleware.

## Features
- **RESTful API**: Fully-featured API for interacting with the application.
- **Modular Design**: Easy-to-maintain structure.
- **Error Handling**: Centralized error handling and customizable error responses.
- **Environment Configuration**: Configurable environment variables using `dotenv`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jowc/africa-localities.git
   cd africa-localities
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=3000
     ```

## How to add to or view localities
- Navigate to data-access -> models -> localities.model.ts // view expected structure
- Navigate to data-access -> store -> localities.store.ts   // update or copy localities for your personal use
    This is what the interface is like and we expect every city to have all the properties except for country and states that may not have a zip code.
```bash
export interface LocalityInterface {
  name: string;
  zipCode: string; // empty string for country or state
  latitude: number;
  longitude: number;
  isCountry: boolean; // true if locality is country
  isState: boolean; // true if locality is state
  isCity: boolean; // true if locality is city
  alias: string[]; // other legal names for locality. e.g. FCT, Federal Capital Territory
  children: LocalityInterface[];
}
```
- Add your locality to the array using the LocalitiesInterface.
```bash
{
    name: "nigeria",
    zipCode: "", // empty string for country or state
    latitude: 9.082,
    longitude: 8.6753,
    isCountry: true, // set to true if its a country
    isState: false,
    isCity: false,
    children: [
      {
        name: "lagos",
        zipCode: "",
        latitude: 6.5244,
        longitude: 3.3792,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [],
      },
      {
        name: "abuja",
        zipCode: "",
        latitude: 9.0579,
        longitude: 7.4951,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [
          {
            name: "gwarinpa",
            zipCode: "900108",
            latitude: 9.1167,
            longitude: 7.4951,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
          },
        ]
      }
    ]
}
```

## How to add to or view localities
- Navigate to data-access -> store -> localities.store.ts
- Navigate to data-access -> models -> localities.model.ts
    This is what the interface is like and we expect every city to have all the properties except for country and states that may not have a zip code.
```bash
export interface LocalitiesInterface {
  name: string
  zipCode: string
  latitude: number
  longitude: number
  isCountry: boolean
  isState: boolean
  isCity: boolean
  children: LocalitiesInterface[]
}
```
- Add your locality to the array using the LocalitiesInterface.
```bash
{
    name: "nigeria",
    zipCode: "", // empty for country
    latitude: 9.082,
    longitude: 8.6753,
    isCountry: true, // set to true if its a country
    isState: false,
    isCity: false,
    children: [
      {
        name: "lagos",
        zipCode: "",
        latitude: 6.5244,
        longitude: 3.3792,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [],
      },
      {
        name: "abuja",
        zipCode: "",
        latitude: 9.0579,
        longitude: 7.4951,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [
          {
            name: "gwarinpa",
            zipCode: "900108",
            latitude: 9.1167,
            longitude: 7.4951,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
          },
        ]
      }
    ]
}
```

## Usage

### Running the Server

Start the development server:
```bash
npm run dev
```

Start the build compilation:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

The application will run on [http://localhost:3000](http://localhost:3000) by default.

### Testing

Run the test suite:
```bash
npm test
```

## Project Structure
```
├── src
│   ├── data-access
|           |-- models
|           |-- services
|           |-- store
|
│   ├── utils
│    
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- Open-source community for their inspiration and support.
