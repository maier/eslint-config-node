// node eslint rule configuration

'use strict';

// NOTE: disable no-sync for command line tools. or any other
//       cases where sync calls would be acceptable/needed.

module.exports = {
    env: {
        es6  : true,
        node : true
    },
    parserOptions: {
        ecmaVersion : 6,
        sourceType  : 'script'
    },
    rules: {
        //
        // nodejs & commonjs
        //
        'callback-return': [
            'error',
            [
                'callback',
                'cb',
                'next'
            ]
        ],
        'global-require'      : 'error',
        'handle-callback-err' : [
            'error',
            '^err(or)?([A-Z]+.*|_[a-z]+.*)?'
        ],
        'max-nested-callbacks': [
            'error',
            { max: 3 }
        ],
        'max-statements': [
            'error',
            { max: 50 },
            { ignoreTopLevelFunctions: true }
        ],
        'no-console'          : 'off',
        'no-extra-parens'     : [
            'error',
            'all',
            {
                conditionalAssign       : true,
                ignoreJSX               : 'none',
                nestedBinaryExpressions : true,
                returnAssign            : false
            }
        ],
        'no-implicit-globals'   : 'off',
        'no-inner-declarations' : 'off',
        'no-magic-numbers'      : 'off',
        'no-mixed-requires'     : [
            'error',
            {
                allowCall : false,
                grouping  : true
            }
        ],
        'no-new-require'           : 'error',
        'no-path-concat'           : 'error',
        'no-process-env'           : 'error',
        'no-process-exit'          : 'error',
        'no-restricted-modules'    : 'error',
        'no-restricted-properties' : [
            'error',
            {
                message  : 'Use third-party module for logging',
                object   : 'console',
                property : 'log'
            },
            {
                message  : 'DEPRECATED (v6.0.0): use third-party module for logging',
                object   : 'util',
                property : 'log'
            },
            {
                message  : 'DEPRECATED (v0.11.3): use third-party module for logging',
                object   : 'util',
                property : 'print'
            },
            {
                message  : 'DEPRECATED (v0.11.3): use third-party module for logging',
                object   : 'util',
                property : 'puts'
            },
            {
                message  : 'DEPRECATED (v0.11.3): use console.error()',
                object   : 'util',
                property : 'debug'
            },
            {
                message  : 'DEPRECATED (v0.11.3): use console.error()',
                object   : 'util',
                property : 'error'
            },
            {
                message  : 'DEPRECATED (v4.0.0): use Array.isArray()',
                object   : 'util',
                property : 'isArray'
            },
            {
                message  : 'DEPRECATED (v4.0.0): use typeof x === "boolean"',
                object   : 'util',
                property : 'isBoolean'
            },
            {
                message  : 'DEPRECATED (v4.0.0): use Buffer.isBuffer()',
                object   : 'util',
                property : 'isBuffer'
            },
            {
                message  : 'DEPRECATED (v4.0.0)',
                object   : 'util',
                property : 'isDate'
            },
            {
                message  : 'DEPRECATED (v4.0.0)',
                object   : 'util',
                property : 'isError'
            },
            {
                message  : 'DEPRECATED (v4.0.0): use typeof x === "function"',
                object   : 'util',
                property : 'isFunction'
            },
            {
                message  : 'DEPRECATED (v4.0.0): use x === null',
                object   : 'util',
                property : 'isNull'
            },
            {
                message  : 'DEPRECATED (v4.0.0)',
                object   : 'util',
                property : 'isNullOrUndefined'
            },
            {
                message  : 'DEPRECATED (v4.0.0): typeof x === "number"',
                object   : 'util',
                property : 'isNumber'
            },
            {
                message  : 'DEPRECATED (v4.0.0): use typeof x === "object"',
                object   : 'util',
                property : 'isObject'
            },
            {
                message  : 'DEPRECATED (v4.0.0)',
                object   : 'util',
                property : 'isPrimitive'
            },
            {
                message  : 'DEPRECATED (v4.0.0)',
                object   : 'util',
                property : 'isRegExp'
            },
            {
                message  : 'DEPRECATED (v4.0.0): use typeof x === "string"',
                object   : 'util',
                property : 'isString'
            },
            {
                message  : 'DEPRECATED (v4.0.0)',
                object   : 'util',
                property : 'isSymbol'
            },
            {
                message  : 'DEPRECATED (v4.0.0): use typeof x === "undefined"',
                object   : 'util',
                property : 'isUndefined'
            }
        ],
        'no-sync': 'error'
    }

};
