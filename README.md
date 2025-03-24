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

La funciones `getProvinces`, `getCities` y `getTowns` obtienen información detallada sobre las provincias, municipios y localidades de Cuba respectivamente, con opciones para filtrar por provincia específica y controlar el nivel de detalle de los datos devueltos.

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

| Parámetro      | Tipo             | Valor por defecto | Descripción |
|----------------|------------------|-------------------|-------------|
| `onlyProvince` | `string \| null` | `null`            | Si se especifica un nombre de provincia (ej: `La Habana`), devuelve solo los datos de esa provincia. Si es `null`, devuelve todas las provincias. |
| `depth`        | `0 \| 1 \| 2`    | `0`               | Controla el nivel de detalle de los datos geográficos devueltos. Por ejemplo para `getProvinces`: <br>• `0`: Solo información básica<br>• `1`: Incluye municipios<br>• `2`: Incluye municipios y localidades. |


***

### Example 1
Obtener todas las provincias de Cuba. Muestra todas las provincias en un arrays de objetos

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

Lo mismo se aplica para los municipios y localidades

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
Obtener una pronvica de Cuba dado su nombre (*primer parametro*)

``` javascript
import cubaGeoData from 'cuba-geodata'

// get only one province ...
const province = cubaGeoData.getProvinces('La Habana')
console.log(province)
```
``` bash
{ name: 'La Habana', description: null }
```

Lo mismo se aplica para los municipios y localidades

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
Obtener una pronvica de Cuba dado su nombre y una profundidad (*primer y segundo parametro*)

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

Lo mismo se aplica para los municipios pero hasta la profundidad `1`

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

Con respecto a la profundidad en las localidades simpre es `0` y ya se encuentra estabacida por defecto en ese valor. El resultado es lo mismo que se obtuvo el ejemplo 2 mencionado anteriormente

***

### Example 4
Obtener las pronvicas de Cuba sin pasar ningun valor en el nombre y dada una profundidad (*primer parametro nulo y segundo activo*)

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
Lo mismo se aplica para los municipios pero hasta la profundidad `1`

Con respecto a la profundidad en las localidades simpre es `0` y ya se encuentra estabacida por defecto en ese valor. El resultado es lo mismo que se obtuvo el ejemplo 1 mencionado anteriormente


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
