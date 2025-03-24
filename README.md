# Cuba GeoData <img src="https://github.com/user-attachments/assets/0bf156a7-152f-4de9-8c6b-954c826f0dbc" alt="React" width="30" height="30">
![NPM Version](https://img.shields.io/npm/v/cuba-geodata?color=blue)
![Static Badge](https://img.shields.io/badge/build-deployed-red)
![GitHub License](https://img.shields.io/github/license/alexdevzz/node-cuba-geodata?color=green)
![GitHub Created At](https://img.shields.io/github/created-at/alexdevzz/node-cuba-geodata?color=darkcyan)
![GitHub top language](https://img.shields.io/github/languages/top/alexdevzz/node-cuba-geodata?color=purple)
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

## Basic Usage

The `getProvinces`, `getCities`, and `getTowns` functions return detailed information about Cuba's provinces, municipalities, and towns, respectively, with options to filter by specific name and control the level of detail of the returned data.

``` typescript
function getProvinces (onlyProvince: string | null = null, depth: 0 | 1 | 2 = 0): provinceType | provinceType[] {
   // function content ...
}

function getCities (onlyCity: string | null = null, depth: 0 | 1 = 0): cityType | cityType[] {
   // function content ...
}

function getTowns (onlyTown: string | null = null): townType | townType[] {
   // function content ...
}
```

### Params

| Parameter      | Type                 | Default Value  | Description                          |
|----------------|----------------------|----------------|--------------------------------------|
| `onlyProvince` | `string \| null`     | `null`         | If a province name is specified (e.g., `La Habana`), returns only data for that province. If `null`, returns all provinces. |
| `depth`        | `0 \| 1 \| 2`        | `0`            | Controls the level of detail of the returned geographic data. For example, for `getProvinces`: <br>• `0`: Basic information only<br>• `1`: Includes municipalities<br>• `2`: Includes municipalities and localities. |

### Return Values

- `getProvinces`:
   - If `onlyProvince` is specified, returns a single `provinceType` object
   - If `onlyProvince` is `null`, returns an array of `provinceType`

- `getCities`:
   - If `onlyCity` is specified, returns a single `cityType` object
   - If `onlyCity` is `null`, returns an array of `cityType`

- `getTowns`:
   - If `onlyTown` is specified, returns a single `townType` object
   - If `onlyTown` is `null`, returns an array of `townType`

***

### Example 1
Get all the provinces of Cuba. Displays all provinces in an array of objects.

``` javascript
import cubaGeoData from 'cuba-geodata'

// get all provinces 
const provinces = cubaGeoData.getProvinces()
console.log(provinces)
```
``` bash
[
  ...
  { name: 'La Habana', description: null },
  { name: 'Mayabeque', description: null },
  { name: 'Matanzas', description: null },
  { name: 'Cienfuegos', description: null },
  { name: 'Villa Clara', description: null },
  ...
]
```

The same applies to municipalities and localities.

``` javascript
import cubaGeoData from 'cuba-geodata'

// get all cities (municipalities) ...
const cities = cubaGeoData.getCities()
console.log(cities)

// get all towns (localities) ...
const towns = cubaGeoData.getTowns()
console.log(towns)
```
``` bash
# cities ...
[
  ...
  { name: 'Fomento', description: null },
  { name: 'Baraguá', description: null },
  { name: 'Primero de Enero', description: null },
  { name: 'Ciro Redondo', description: null },
  { name: 'Camagüey', description: null },
  ...
]

# towns ...
[
  ...
  { name: 'San Cristóbal', description: null },
  { name: 'Vereda Nueva', description: null },
  { name: 'Centro Bahía Honda', description: null },
  { name: 'Cabañas', description: null },
  { name: 'Mariel', description: null },
  ...
]
```

***

### Example 2
Get a province of Cuba given a name (*first param*)

``` javascript
import cubaGeoData from 'cuba-geodata'

// get only one province ...
const province = cubaGeoData.getProvinces('La Habana')
console.log(province)
```
``` bash
{ name: 'La Habana', description: null }
```

The same applies to municipalities and localities.

``` javascript
import cubaGeoData from 'cuba-geodata'

// get only one city (municipality) ...
const city = cubaGeoData.getCities('Boyeros')
console.log(city)

// get only one town (locality) ...
const town = cubaGeoData.getTowns('Fontanar')
console.log(town)
```
``` bash
# city ...
{ name: 'Boyeros', description: null }

# town ...
{ name: 'Fontanar', description: null }
```

***

### Example 3
Get a province of Cuba given a name and depth (*first and second param*)

``` javascript
import cubaGeoData from 'cuba-geodata'

// get only one province with depth = 2 (municipalities and localities) ...
const province = cubaGeoData.getProvinces('La Habana', 2)
console.log(province)
```
``` bash
{
  "name": "La Habana",
  "description": null,
  "cities": [
    ...
    {
      "name": "La Habana Vieja",
      "description": null,
      "towns": [
        ...
        {
          "name": "Plaza Vieja",
          "description": null
        },
        {
          "name": "Plaza de la Catedral",
          "description": null
        },
        ...
    },
    ...
  ]
}
```

The same applies to municipalities but up to depth `1`

``` javascript
import cubaGeoData from 'cuba-geodata'

// get only one city with depth = 1 (localities) ...
const province = cubaGeoData.getProvinces('La Habana', 2)
console.log(province)
```
``` bash
# city ...
{
  "name": "Boyeros",
  "description": null,
  "towns": [
    ...
    {
      "name": "Santiago de las Vegas",
      "description": null
    },
    {
      "name": "Rancho Boyeros",
      "description": null
    },
    ...
  ]
}

```

Regarding the depth at the locations, it is always `0` and is already set to that value by default. The result is the same as that obtained in Example 2 mentioned above.

***

### Example 4
Get the provinces of Cuba without passing any value in the name and given a depth (*first param null and second given*)

``` javascript
import cubaGeoData from 'cuba-geodata'

// get all provinces with depth = 2 (municipalities and localities) ...
const provinces = cubaGeoData.getProvinces(null, 2)
console.log(provinces)
```
``` bash
[
  ...
  {
    name: 'Pinar del Río',
    description: null,
    cities: [
      ...
      {
        name: 'Pinar del Río',
        description: null,
        towns: [
          ...
          {
            name: 'Centro Ciudad',
            description: null
          },
          {
            name: 'La Conchita',
            description: null
          },
          ...
        ]
      },
      ...
    ]
  },
  ...
]
```
The same applies to municipalities, but up to depth '1'.

Regarding localities, the depth is always '0' and is already set to that value by default. The result is the same as that obtained in Example 1 mentioned above.


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
