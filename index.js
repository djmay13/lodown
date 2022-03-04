'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Function takes in any value as an argument and returns that value unchanged.
 * @param {Value}: The value to return unchanged
 */
 function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Function takes in a value and returns that value as a string
 * 
 * @param {Value}: The value which to convert to a string
 */
 function typeOf(value) {
    if (typeof value === 'object') {
    
        if (Array.isArray(value)) {
            return 'array';
        }
        if (value === null) {
            return 'null';
        }
        if(value instanceof Date) {
            return 'date'; 
        }
    }
    if (value === 'object') {
        return 'object'
    }
    else {
        return typeof(value);
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Function checks if given array is an array and returns an 
 * empty array if not, checks if given number value is present and a 
 * number and returns the first element of the array if not, and checks 
 * for a given number value and returns first number items.
 * @param {Array}: An array to check for given number
 * @param {Number}: A number value to check for in given array
 */
 function first(array, number) {
    if (Array.isArray(array) === false || number < 0) {
        return [];
    }else if (number === undefined || number === NaN) {
        return array[0];
    }else if (number > array.length) {
     return array;
    } else {
        return array.slice(0,number);
    }
}
module.exports.first = first;

/**
 * last: Function checks if given array is an array and returns an 
 * empty array if not, checks if given number value is present and a 
 * number and returns the first element of the array if not, and checks 
 * for a given number value and returns last number items.
 * @param {Array}: An array to check for given number
 * @param {Number}: A number value to check for in given array
 */
function last(array, number) {
    if (Array.isArray(array) === false || number < 0) {
        return [];
    }else if (number === undefined || number === NaN) {
        return array[array.length-1];
    }else if (number > array.length) {
     return array;
    } else {
        return array.slice(-number);
    }
}
module.exports.last = last;

/**
 * indexOf: Function looks through an array for a given value and returns
 * the index that the value first occurs. If given value is not in the array
 * function returns -1.
 * @param {Array}: An array to iterate through and look for given value
 * @param {Value}: A given value to check for the index of in an array
 */
 function indexOf(array, value) {
    for( var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Function returns true if an array contains a given value and 
 * false if the array does not contain the given value.
 * @param {Array}: An array to check for the given value
 * @param {Value}: A value to check for in the array
 */
 function contains(array, value) {
    //use ternary operator to check if array contains value
        return array.includes(value) ? true : false;
}
module.exports.contains = contains;

/**
 * each: Function loops over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Function returns a new array that does not contain any duplicate elements
 * @param {Array}: An array to check for and remove duplicate elements
 */
 function unique(array) {
    //create output array 
    var uniqueArr = [...new Set(array)]
        return uniqueArr;
}
module.exports.unique = unique;

/**
 * filter: Function passes each element of a given array, it's current index, and the array
 * itself into a given function to test if each is true.
 * @param {Array}: An array to iterate through and pass each element, index of each element,
 * and the array itself into the given function
 * @param {Function}: Function to pass each element of the given array, the current index,
 * and the array itself into to test if true
 */
 function filter(array, func) {
    //create output array 
    var trueArr = [];
    //iterate through array
    for(var i=0; i<array.length; i++) {
    //determine if which elerfememnt in array results to true when passed into func  
        if( func(array[i], i, array) === true) {
    //push values in array that equate to true to output array
        trueArr.push(array[i]);
        }
        }
    //retrun output array
    return trueArr;
}
module.exports.filter = filter;

/**
 * reject: Function passes each element of a given array, it's current index, and the array
 * itself into a given function to test if each is false.
 * @param {Array}: An array to iterate through and pass each element, index of each element,
 * and the array itself into the given function
 * @param {Function}: Function to pass each element of the given array, the current index,
 * and the array itself into to test if false
 */
 function reject(array, func) {
    //create output array
    var falseArr = [];
    //iterate through array
    for(var i=0; i<array.length; i++) {
    //determine if which elememnt in array results to false when passed into func  
            if(func(array[i], i, array) === false) {
    //push values in array that equate to false to output array
            falseArr.push(array[i]);
            }
    //return output array
        }
        return falseArr;
}
module.exports.reject = reject;
    
/**
 * partition: Function passes each element of a given array, it's current index, and the array itself 
 * into a given function and returns an array of sub-arrays of values that returned truthy or falsy
 * @param {Array}: An array that has each of it's elements, the current index of each element and is 
 * itself passed into the given function.
 * @param {Function}: A function. that takes in each element of the array, it's current index, and the 
 * array to test if each results to truthy of falsy.
 */
 function partition(array, func) {
    //create output array for truthy values
       var trueArr = [];
    //create output array for falsy values
       var falseArr = [];
    //iterate through array
        for(var i=0; i<array.length; i++) {
    //determine if values result to falsy and place in falseArr
            if(func(array[i], i, array)===false) {
            falseArr.push(array[i]);
    //if not false place in trueArr
            }else {
                trueArr.push(array[i]);
            }
    //place both sub arrays in an array
          var arr=[trueArr,falseArr];
        }
        return arr;
}
module.exports.partition = partition;    
    
/**
 * map: Function passes an array or object, each of it's elements, and the current index or key into a given 
 * function and stores the returned value of function call into a new array and returns the new array.  
 * @param {Array or Object} collection: An array or object that is passed into the function paramenter along with 
 * each of it's elements, and the current index or key.
 * @param {Function}: A function to pass the collection, each element, and the current index or key into
 */
 function map(collection, func) {
    var mapped = [];
    //determine if collection is an array
    if (Array.isArray(collection)) {
    //iterate through array
        for (var i = 0; i < collection.length; i++) {
    //invoke callback array and pass in the current value of collection, current index, and collection
            var result = func(collection[i], i, collection);
             mapped.push(result); 
        }
     //else it's an object
    } else {
        for (var key in collection) {
            var result = func(collection[key], key, collection);
            mapped.push(result);
        }
    }
    return mapped;

}
module.exports.map = map;
    
/**
 * pluck: Function returns an array of each value of the properties contained in an array of objects
 * @param {Array}: An array of objects
 * @param {Property}: The properties of the given Array of objects
 */
 function pluck(array, property) {
    //create output array
    var arr = [];
    //iterate through array
    for(var i=0; i<array.length; i++) {
    //place property for every element into output array
    arr.push(array[i][property])
    }
    return arr;
    }
module.exports.pluck = pluck;

/**
 * every: Function passes an array or object, each of it's elements, and the current index or key 
 * and returns true if every element results to true or, if no function is provided and each element is truthy,
 * false if one element results to false or not all elements of collection id truthy
 * @param {Array or Object} collection: An array or object to pass into given function
 * @param {Function}: Function that has given collection, each of it's elements, and current index or key which tests
 * if every element is true.
 */
 function every(collection, func) {
    // determine if func is undefined
    if (func === undefined) {
    //determine if input collection is array
    if (Array.isArray(collection)) {
    //iterate through collection
        for (var i = 0; i < collection.length; i++) {
    //if current value is faLsey
            if (!collection[i]) {
                return false;
            }
        }
    //else it's not array
    }else { 
        for (let key in collection) {
            if (!collection[key]) {
                return false;
            }
        }
    }
    //else it is undefined
    //determine if collection is array
    } else { 
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection) === false)
                return false;
            }
        }
    
    }
    return true;
}
module.exports.every = every;

/**
 * some: Function passes an array or object, each of it's elements, and the current index or key 
 * and returns true if at least one element results to true or, if no function is provided and one element is truthy,
 * false if all elements result to false or not all elements of collection are truthy
 * @param {Array or Object} collection: An array or object to pass into given function
 * @param {Function}: Function that has given collection, each of it's elements, and current index or key which tests
 * if any element is true.
 */
 function some(collection, func) {
    // determine if func is undefined
    if (func === undefined) {
        //determine if input collection is array
        if (Array.isArray(collection)) {
        //iterate through collection
            for (var i = 0; i < collection.length; i++) {
        //if current value is faLsey
                if (!collection[i]) {
                    return false;
                }
            }
        }
        //determine if collection is array
        } else { 
            if (Array.isArray(collection)) {
                for (let i = 0; i < collection.length; i++) {
                    if (func(collection[i], i, collection) === true)
                    return true;
                }   if (func(collection[i], i, collection) === false)
                    return false;
            }
        }
        return true;
}
module.exports.some = some;

/**
 * reduce: Function executes given function on each element of the array, in order, passing in the return value from the 
 * preceding element. The final result is a single value. The first time that the function is run there is no 'return value'. 
 * The seed will be used as the initial value.
 */
 function reduce(array, func, seed) {
    //create accumulator value
    let accumulator; 
    //determine if seed was not passed in
    if (seed === undefined) {
        accumulator = array[0];
    //continue to nex element and iterate through array
        for ( var i = 1; i < array.length; i++) {
            accumulator = func(accumulator, array[i], i, array)
        }
    //else seed was passed in
    }else {
        accumulator = seed;
        for (let i = 0; i < array.length; i++) {
            accumulator = func(accumulator, array[i], i, array)
        }
    }
        return accumulator;
}
module.exports.reduce = reduce;

/**
 * extend: Function copies the elements from one or more given objects in the order they are given to a single given object.
 * and returns that array.
 * @param {Object}: Object into which any given object will be copied
 * @param {...inputs} objects: One or more objects that will have their elements copied into the returned object
 */
 function extend(object1, object2, ...inputs) {
    Object.assign(object1, object2, ...inputs);
    return object1
}
module.exports.extend = extend;
    