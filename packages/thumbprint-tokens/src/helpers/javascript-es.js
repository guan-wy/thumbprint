const { camelCase, isNumber } = require('lodash');

module.exports = [
    {
        name: 'formatValue',
        value: ({ value }) => {
            const { web: webValue } = value;

            if (isNumber(webValue)) {
                return webValue;
            }

            return `"${webValue}"`;
        },
    },
    { name: 'formatId', value: ({ id }) => camelCase(`tp-${id}`) },
];
