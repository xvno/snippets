const { getType } = require('./utils');
/**
 *
 * @param  {...any} args array of functions
 */
// fn: wrap returns in []
function compose (fnList, ...args) {
    fnList.reverse();
    let ret;
    return function () {
        return fnList.reduce(function (pre, fn) {
            return fn.call(null, pre);
        }, args)
    }
}

/**
 * Test cas
 */
/*
function a (val) {
    console.log('a');
    return `a(${val})`;
}

function b (val) {
    console.log('b');
    return `b(${val})`;
}

function c(val) {
    console.log('c');
    return `c(${val})`;
}


let fuse = compose([ a, b, c ], 'lollipop');
console.log(fuse())
*/

module.exports = compose;