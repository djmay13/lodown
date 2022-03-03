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
 * itself into a given function to test if each is either true or false.
 * @param {Array}: An array to iterate through and pass each element, index of each element,
 * and the array itself into the given function
 * @param {Function}: Function to pass each element of the given array, the current index,
 * and the array itself into to test if true or false
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
    
    
    