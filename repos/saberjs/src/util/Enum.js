'use strict';

function constructEnumerable(keys) {
    const ob = {};
    for (const [ind, key] of keys.entries()) {
        if(key === null) continue;
        ob[key] = ind;
        ob[ind] = key;
    }
    return ob;
}

module.exports = { constructEnumerable };