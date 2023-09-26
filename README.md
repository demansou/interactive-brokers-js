# Interactive Brokers Client Portal API Wrapper

[![npm version](https://badge.fury.io/js/interactive-brokers-js.svg)](https://badge.fury.io/js/interactive-brokers-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Node.js wrapper for the Interactive Brokers Client Portal API Gateway using the Docker container provided by [voyz](https://github.com/Voyz/ibeam). This package simplifies the process of connecting to and interacting with the Interactive Brokers Client Portal API.

## Installation

You can install this package using npm:

```bash
npm install interactive-brokers-js
```

## Usage

```javascript
import InteractiveBrokersService, { FuturesInfo } from 'interactive-brokers-js';

// Initialize the Interactive Brokers API client
const service = new InteractiveBrokersService("https://localhost:5000/v1/api");

// Connect to the API
const authenticationStatus = await service.getAuthenticationStatus();

if (!authenticationStatus?.authenticated || false) {
  throw Error('IB account was not authenticated.');
}

const { selectedAccount } = await service.getBrokerageAccounts();

// Refer to the IB Client Portal API documentation for the meanings for field numerical values.
const marketData = await service.getMarketData([conId1, conId2], Date.now(), [31, 84, 85, 86, 88 7219, 7635, 7762]);
```

## Configuration

- `baseUrl` By default is https://localhost:5000/v1/api. If your configuration is different, you'll need to find out how to connect to the gateway.

## Features

- Connect to the Interactive Brokers Client Portal API.
- Perform various operations, such as retrieving account information, placing orders, and managing positions.

## Documentation

TODO

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to Interactive Brokers for providing the Client Portal API.
- Thanks to [voyz](https://github.com/Voyz/ibeam) for developing an automated solution to handling the API Gateway.
- Special thanks to the Node.js community for their valuable contributions.

## Contributing

We welcome contributions! Please feel free to submit issues, create pull requests, or share your feedback.
