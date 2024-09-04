# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Show Error
```
Cannot find module 'ajv/dist/compile/codegen'
Require stack:
- E:\xstopwatch\node_modules\ajv-keywords\dist\definitions\typeof.js
- E:\xstopwatch\node_modules\ajv-keywords\dist\keywords\typeof.js
- E:\xstopwatch\node_modules\ajv-keywords\dist\keywords\index.js
- E:\xstopwatch\node_modules\ajv-keywords\dist\index.js
- E:\xstopwatch\node_modules\schema-utils\dist\validate.js
- E:\xstopwatch\node_modules\schema-utils\dist\index.js
- E:\xstopwatch\node_modules\webpack-dev-server\lib\Server.js
- E:\xstopwatch\node_modules\react-scripts\scripts\start.js
```
To fix this issue use
```
npm install --save-dev ajv@^7
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Deploy to Vercel`

XSTOPWATCH [https://xstopwatch-liard.vercel.app/](https://xstopwatch-liard.vercel.app/) to view it in your browser.

This is Simple stopwatch used useState, useRef

- Three useState Minute, Second and isStart
- One useRef for store the timer ID so that it persists across rendering.
- Three function startTimer, StopTimer and ResetTimer
- Start and Stop timer is conditional when isStart useState is start or not using boolean value.