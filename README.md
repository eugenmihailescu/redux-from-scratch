# redux-from-scratch
Sample application that implements Redux principles without using Redux library (see the [redux-from-scratch](https://github.com/eugenmihailescu/redux-from-scratch/tree/redux-from-scratch) branch).

It was created as part of my training on Redux principles. It followed the [Dan Abramov](https://twitter.com/dan_abramov)'s [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) online course which I regard it as essential if you are serious in understanding Redux.

As DEV dependencies requires mostly [Babel](https://babeljs.io) CLI/Node/Core/preset-env libraries (since it's writen using [ES6](http://es6-features.org/#Constants)+ syntax), optionally ESLint and react-scripts. It was created really from scratch, no [CRA](https://github.com/facebook/create-react-app) this time :-)

Obviously it requires both react and react-dom, since it's a React dependent app.

All you need is NodeJS preinstalled then a simple `npm install` followed by `npm run start` should be enough to start the application.

@update: the [master](https://github.com/eugenmihailescu/redux-from-scratch) branch contains the version which uses the Redux and React-Redux libraries. The transition from "[my Redux](https://github.com/eugenmihailescu/redux-from-scratch/tree/redux-from-scratch/src/lib)" (thanks to Dan's step-by-step guide) to the public React Redux libraries was just like a breeze. Now Redux makes more sense than ever.