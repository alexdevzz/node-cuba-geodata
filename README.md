# Cuba GeoData <img src="https://github.com/user-attachments/assets/0bf156a7-152f-4de9-8c6b-954c826f0dbc" alt="React" width="30" height="30">
![NPM Version](https://img.shields.io/npm/v/cuba-geodata?color=blue)
![Static Badge](https://img.shields.io/badge/build-deployed-red)
![GitHub License](https://img.shields.io/github/license/alexdevzz/node-cuba-towns?color=green)
![GitHub Created At](https://img.shields.io/github/created-at/alexdevzz/node-cuba-towns?color=darkcyan)
![GitHub top language](https://img.shields.io/github/languages/top/alexdevzz/node-cuba-towns?color=purple)
![Framework](https://img.shields.io/badge/framework-Node_JS-darkgreen?color=gren)

## Description
This module provides an easy way to access geographic information about Cuba, including provinces, municipalities, and localities, in JSON format. It is ideal for developers who need to integrate geographic data about Cuba into their applications, whether for forms, location selection, or any other related use.

## Features
- **Updated data:** Structured information on all Cuban provinces, municipalities, and towns
- **Easy to use:** Simply install the module and start using the functions to obtain the data you need
- **JSON format:** Data is returned in JSON format, making it easy to integrate into any project
- **Lightweight and efficient:** Designed to be fast and with minimal performance impact
- SOLID methodology principles and node best practices for project structuring
- Easy to use

## Node Dependencies
- better-sqlite3

## Install
1. Before continuing with the installation process you must have `node` installed on your operating system.. If you do not have them, install it.
   
2. Install the module using npm:
   ``` bash
   npm install cuba-geodata
   ```
   
3. Ready !!!

## Basic Use

``` javascript
import cubaGeoData from 'cuba-geodata'

// Get all provinces ...
const provinces = cubaGeoData.getProvinces()
console.log(provinces)
```

## ER Diagram
Here is the Entity-Relationship diagram generated using DBML (Database Markup Language):

<div align="center">
  <img src="https://github.com/user-attachments/assets/185d6c66-b91d-47ef-86ce-f6e951ebb80c" alt="ER Diagram" style="width: 100%;">
</div>


<div align="center">
  
## Contributions
Contributions are welcome! If you find any bugs or have any suggestions for improving the module, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

</div>
