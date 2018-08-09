# React Star Rating Lite

React Circle Blink is a simple blink component for [react](https://facebook.github.io/react/) code.

![alt text](https://raw.githubusercontent.com/ami1906/react-circle-blink/master/public/fade.png)
![alt text](https://raw.githubusercontent.com/ami1906/react-circle-blink/master/public/fill.png)

## Installation

You can install react-circle-blink component using the npm package manager:
```
npm install --save react-circle-blink
```

### Dependencies

The react-circle-blink component peer depends on the [React](https://facebook.github.io/react/) and [StyledComponents](https://www.styled-components.com/)library.

You can install React and related dependencies using npm too:
```
npm install --save react
npm install --save styled-components
```

## How to Use

1.) Require the `react-circle-blink` Component
```
var CircleBlink = require('react-circle-blink');
```

2.) Start using it
```
<CircleBlink/>
```

## Features

* Set color of the star using `color` property.
```
<CircleBlink color="red"/>
```
Any color code can be provided. If not specified, the value will be defaulted to 'orange'.

* Can increase/decrease the size of the stars using `weight` property. weight is measured in px.
```
<CircleBlink weight="24"/>
```
If weight it not specified, the value will be defaulted to 30px
