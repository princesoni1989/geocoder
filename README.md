# GeoCoder Client Library for Node.js

  This module provides basic geo coding methods. It contains method for calculating 
  distance between the points and checking if distance falls in the rance of point 

## Example

#### ES5 way
```javascript
const GeoCoder = require('geocoder_node');
const coder = new GeoCoder('M')
const {latitude: lat2, longitude: lon2} = testData[0]
const geoObj = {
  lat1: 53.339428,
  lon1: -6.257664,
  lat2: 52.986375,
  lon2: -6.043701
}
const distance = coder.getDistanceBetweenPoints(geoObj)
```
#### ES6 way

```javascript
import GeoCoder from 'geocoder_node';
const coder = new GeoCoder('M')
const geoObj = {
  lat1: 53.339428,
  lon1: -6.257664,
  lat2: 52.986375,
  lon2: -6.043701
}
const distance = coder.getDistanceBetweenPoints(geoObj)
```

## Installation

`npm install geocoder_node  //install locally`

`npm install -g geocoder_node  //install globally`

`npm install geocoder_node --save  //install locally and save to package json`

## Quick Start

#### Methods supported

#####Get distance between points based on unit

```javascript
const distance = coder.getDistanceBetweenPoints(geoObj);

```

#####Get absolute distance between points
```javascript
const distance = coder.getAbsDistance(distance, val);

```
#####Convert to given unit
```javascript
const distance = coder.convertToUnit(unit, distance);

```
#####check if points have distance in the range of input
```javascript
const distance = coder.checkPointsAtDistance(geoObj);

```
## Tests
To run tests type npm test.
To run tests with coverage type npm coverage.

## Contributors

Originally authored by  [@princesoni1989](https://github.com/princesoni1989)

## LICENSE

geocoder_node is released under the ISC License Copyright (c) 2019 Prince Soni

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
