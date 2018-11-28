"use strict";

module.exports = {
    extends: [
        "xadillax-style"
    ],
    parserOptions: {
        ecmaVersion: 8
    },
    rules: {
        "space-before-function-paren": [ "error", {
            anonymous: "never",
            named: "never",
            asyncArrow: "always"
        }]
    }
};
