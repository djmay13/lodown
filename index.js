'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Function takes in any value as an argument and returns that value unchanged.
 * @param {Value}: The value to return unchanged
 * @returns {Value}: Function returns the input value unchanged
 */
 function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Function takes in a value and returns the datatype of the input value as a string
 * @param {Value}: The value to check the datatype of 
 * @returns {Value}: Function returns a string of the dataype of the input value
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
 * first: Function returns the 'first' number of elements determined by input number.
 * @param {Array}: Function takes in array
 * @param {Number}: Function takes in a number that determines how many of the "first" elements to output.
 * @return {Value}: Function returns a number of elements determined by input number  
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
 * last: Function returns the 'last' number of elements determined by input number.
 * @param {Array}: Function takes in an array
 * @param {Number}: Function takes in a number that determines how many of the "last" elements to output.
 * @return {Value}: Function returns a number of elements determined by input number 
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
 * the index at which the value first occurs.
 * @param {Array}: An array to iterate through and look for given value
 * @param {Value}: A given value to check for the index of in an array
 * @return {Number}: Function returns a number that indicates the index of the input value in the input array
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
 * @return {Boolean}: Function returns boolean value dependent on if the input array includes input value
 */
 function contains(array, value) {
    //use ternary operator to check if array contains value
        return array.includes(value) ? true : false;
}
module.exports.contains = contains;

/**
 * each: Function loops over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * @param {Array or Object}: The collection over which to iterate.
 * @param {Function}: The Function to be applied to each value in the 
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
 * @return {Array}: Function returns an array that comntains on the unique values of the input array 
 */
 function unique(array) {
    //create output array 
    var uniqueArr = [...new Set(array)]
        return uniqueArr;
}
module.exports.unique = unique;

/**
 * filter: Function passes each element of a given array into an input function to test which elements evaluate to true.
 * @param {Array}: An array to pass into the given function
 * @param {Function}: Takes in callback function designed to test if individual array element is true
 * @return {Array}: Function returns an array of elements from the input array that evaluted to true
 * when passed through the input function
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
 * reject: Function passes each element of a given array into an input function to test which elements evaluate to false.
 * @param {Array}: An array to pass into the given function
 * @param {Function}: Takes in callback function designed to test if individual array element is false
 * @return {Array}: Function returns an array of elements from the input array that evaluted to false
 * when passed through the input function
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
 * partition: Function passes each element of a given array into a given function and returns an array 
 * of sub-arrays of values that returned truthy or falsy
 * @param {Array}: An array to be passed into the given function.
 * @param {Function}: A function that takes in each element of the array to test if each results to truthy of falsy.
 * @return {Array}: Function returns an array of sub-arrays, one for truthy values and one for falsey falues
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
 * map: Function passes an array or object into a given function and stores the returned value of function call 
 * into a new array 
 * @param {Array or Object} collection: An array or object that is passed into the function paramenter
 * @param {Function}: Takes in callback function designed to be executed on each array element
 * @return {Array}: Function returns a new array with each element being the result of the callback function.
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
 * @return {Array}: Function returns an array of each value of the properties contained in an array of objects
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
 * every: Function passes an array or object into a callback function and returns true if every element results to true 
 * @param {Array or Object}: An array or object to pass into given function
 * @param { Function }: Takes in callback function designed to test if individual array element is true or false
 * @return {Boolean}: Function returns a boolean dependent if every value of a collection evalutes to true when passed through
 * a callback function
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
 * some: Function passes an array or object into a callback function and returns true if at least one element results to true
 * @param {Array or Object}: An array or object to pass into given function
 * @param {Function}: Takes in callback function designed to test if individual array element is true or false
 * @return {Boolean}: Function returns a boolean determined by if any element of the input function evaluates to true
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
 * @param {Array}: Function takes in an array
 * @param {Function}: Takes in a callback function to have the input array passed through
 * @return {Value}: Remaining value after array is passed through callback function 
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
 * @param {...inputs}: One or more objects that will have their elements copied into the returned object
 * @param {Object}: Function returns an object containing all input objects
 */
 function extend(object1, object2, ...inputs) {
    Object.assign(object1, object2, ...inputs);
    return object1
}
module.exports.extend = extend;
    