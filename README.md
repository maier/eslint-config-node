Node specific [eslint](https://eslint.org) rule configuration - extends @maier/base

`eslintrc.js` example:

```js
module.exports = {
    root: true,
    extends: [
        '@maier/base',
        '@maier/node'
    ],
    rules: {
        // ...additional project specific rules
    }
};
```
