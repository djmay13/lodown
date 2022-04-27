'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Function takes in any value as an argument and returns that value unchanged.
 * @param {Any Value}: The value to return unchanged
 * @returns {Any Value}: Function returns the input value unchanged
 */
_.identity = function(val){
//return input unchanged
    return val
}
module.exports.identity = identity;

/**
 * typeOf: Function takes in a value and returns the datatype of the input value as a string
 * @param {Any Value}: The value to check the datatype of 
 * @returns {String}: Function returns a string of the dataype of the input value
 */
_.typeOf = function(val){
//return 'array' if value is an array
    if (Array.isArray(val)) {
        return 'array';
//return 'null' if value is null
    }if (val === null) {
        return 'null';
//return 'date' if value is an instance of a date
    }if(val instanceof Date) {
        return 'date'; 
//return the data type of value
    }else{
        return typeof(val);
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Function returns the first number of elements determined by input number.
 * @param {Array}: Function takes in an array
 * @param {Number}: Function takes in a number that determines how many elements of the array to output in ascending order.
 * @return {Value}: Function returns a number of elements determined by input number  
 */
_.first = function(arr, num){
//if array is not array return empty array
    if(!Array.isArray(arr)|| num <= 0){
        return [];
//if num is not given or NaN, return first element of array
    }else if(num === undefined || num === NaN){
        return arr[0];
//if num is greater than array length, return array
    }else if(num > arr.length){
        return arr;
//return number of elements from array specified by num input
    }else{
        return arr.slice(0, num);
    }
}
module.exports.first = first;

/**
 * last: Function returns the last number of elements determined by input number.
 * @param {Array}: Function takes in an array
 * @param {Number}: Function takes in a number that determines how many elements of the array to output in descending order.
 * @return {Value}: Function returns a number of elements determined by input number 
 */
_.last = function(arr, num){
//if array is not array return empty array
    if(!Array.isArray(arr)|| num <= 0){
        return [];
//if num is not given or NaN, return first element of array
    }else if(num === undefined || num === NaN){
        return arr[arr.length-1];
//if num is greater than array length, return array
    }else if(num > arr.length){
        return arr;
//return number of elements from array specified by num input
    }else{
        return arr.slice(-num);
    }
}
module.exports.last = last;

/**
 * indexOf: Function looks through an array for a given value and returns
 * the index at which the value first occurs.
 * @param {Array}: An array to iterate through and look for a given value
 * @param {Any Value}: A given value to check for the index of in an array
 * @return {Number}: Function returns a number that indicates the index of the input value in the input array
 */
_.indexOf = function(arr, val){
//iterate through array
    for(let i=0; i<arr.length; i++){
//determine if value is at current index
        if(val === arr[i]){
//if true return index
            return i;
        }
    }
//if val is not in array return -1
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Function returns true if an array contains a given value and 
 * false if the array does not contain the given value.
 * @param {Array}: An array to check for the given value
 * @param {Any Value}: A value to check for in the array
 * @return {Boolean}: Function returns boolean value dependent on if the input array includes input value
 */
_.contains = function(arr, val){
//create output variable
let valExists = false;
//loop through array
    for(let i=0; i<arr.length; i++){
//use ternary operator to check if array contains value
        val === arr[i] ? valExists = true : valExists
    }
    return valExists
}
module.exports.contains = contains;

/**
 * each: Function loops over a collection and applies a function to each value in the collection.
 * @param {Collection}: A collection over which to iterate.
 * @param {Function}: The Function to be applied to each value in the 
 * collection
 */
_.each = function(collect, func){
//determine if collect is an array
    if(Array.isArray(collect)){
//if true iterate through array
        for(let i = 0; i < collect.length; i++){
//pass current element, index, and array into func
             func(collect[i], i, collect);
        }
//else coll is an object
    }else{
//iterate through object
        for(let key in collect){
//pass current key, key, and object into func
             func(collect[key], key, collect);
        }
    }
}
module.exports.each = each;

/**
 * unique: Function returns a new array of only unique elements
 * @param {Array}: An array to check for and remove duplicate elements
 * @return {Array}: An array that contains only the unique values of the input array 
 */
_.unique = function(arr){
//create output variable
    let output = [];
//iterate through array
    for(let i=0; i<arr.length; i++){
//determine if arr contains duplicates
        if(output.indexOf(arr[i]) === -1){
//push unique elements to output array
            output.push(arr[i])
        }
    }
        return output;
}
module.exports.unique = unique;

/**
 * filter: Function passes each element of a given array into an input function, and 
 * and returns an array of the elements that evaluate to true.
 * @param {Array}: An array to test each element against the input function
 * @param {Function}: Function to test each element of the input array
 * @return {Array}: Function returns an array of elements from the input array that evaluted to true
 * when passed through the input function
 */
_.filter = function(arr, func){
//create output variable
    let output = [];
        for(let i=0; i<arr.length; i++){
//pass current element, index, and array into func
            if(func(arr[i], i, arr)){
//if true push to output
                output.push(arr[i])
            }
    }
        return output;
}
module.exports.filter = filter;

/**
 * reject: Function passes each element of a given array into an input function to test which elements evaluate to false.
 * @param {Array}: An array to pass into the given function
 * @param {Function}: Function to test each array element against
 * @return {Array}: Function returns an array of elements from the input array that evaluted to false
 * when passed through the input function
 */
_.reject = function(arr, func){
//create output variable
    let output = [];
        for(let i=0; i<arr.length; i++){
//pass current element, index, and array into func
            if(!func(arr[i], i, arr)){
//if false push to output
                output.push(arr[i])
            }
        }
        return output;
}
module.exports.reject = reject;
    
/**
 * partition: Function passes each element of an array into a function and returns an array 
 * of sub-arrays of values that returned truthy or falsy
 * @param {Array}: An array to pass each element into a given function.
 * @param {Function}: A function that tests each element of an array for truthy or falsey values
 * @return {Array}: Function returns an array of sub-arrays, one for truthy values and one for falsey values
 */
_.partition = function(array, func){
//create output array for truthy values
   let trueArr = [];
//create output array for falsy values
   let falseArr = [];
//iterate through array
    for(let i=0; i<array.length; i++){
//determine if values result to falsy and place in falseArr
        if(!func(array[i], i, array)){
        falseArr.push(array[i]);
//if not false place in trueArr
        }else{
            trueArr.push(array[i]);
        }
//place both sub arrays in an array
      var arr=[trueArr,falseArr];
    }
    return arr;
}
module.exports.partition = partition;    
    
/**
 * map: Function passes a collection into a given function and stores the returned values of function call 
 * into a new array 
 * @param {Collection}: An array or object that is passed into the given function
 * @param {Function}: Function to be performed on each value of a collection
 * @return {Array}: Function returns a new array of elements that are the result of the given function performed.
 */
_.map = function(collect, func){
//create output array
    let mapped = [];
//determine if collect is an array
    if(Array.isArray(collect)){
//if true iterate through array
        for(let i = 0; i < collect.length; i++){
            mapped.push(func(collect[i], i, collect));
        }
//else collect is an object
    }else{
//iterate through object
        for(let key in collect){
            mapped.push(func(collect[key], key, collect));
        }
    }
    return mapped;
}
module.exports.map = map;
    
/**
 * pluck: Function returns an array of each value of the properties contained in an array of objects
 * @param {Array}: An array of objects
 * @param {Property}: The properties of the given array of objects
 * @return {Array}: Function returns an array of each value of the properties contained in an array of objects
 */
_.pluck = function(arr, prop){
//return invocation of map on input array
    return _.map(arr, function(element){
//return value at prop input
        return element[prop];
    });
}
module.exports.pluck = pluck;

/**
 * every: Function passes a collection into a function and returns true if every element results to true 
 * @param {Collection}: A collection to pass into given function
 * @param { Function }: Function to test each collection value for true or false
 * @return {Boolean}: Function returns true if every value of a collection evalutes to true when passed through
 * a function or false if any value evaluates to false
 */
_.every = function(collection, func){
// determine if func is undefined
    if (func === undefined){
//determine if input collection is array
        if (Array.isArray(collection)){
//iterate through collection
            for (let i = 0; i < collection.length; i++){
//if current value is faLsey
                if (!collection[i]){
                    return false;
            }
        }
//else it's not array
        }else{ 
            for(let key in collection){
                if(!collection[key]){
                    return false;
                }
            }
        }
    }else { 
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
 * some: Function passes a collection into a function and returns true if at least one element results to true
 * @param {Collection}: A collection to pass into given function
 * @param {Function}: Function to test each collection value for true or false
 * @return {Boolean}: Function returns true if any element of the input function evaluates to true or false otherwise
 */
_.some = function(collection, func){
// determine if func is undefined
    if(func === undefined){
//determine if input collection is array
        if(Array.isArray(collection)){
//iterate through collection
            for(var i = 0; i < collection.length; i++){
//if current value is faLsey
                if(!collection[i]){
                    return false;
                }
            }
        }
    //determine if collection is array
    }else{ 
        if(Array.isArray(collection)) {
            for(let i = 0; i < collection.length; i++) {
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
 * reduce: Function executes given function on each element of the array passing in the return value from the 
 * preceding element. The final result is a single value. The seed will be used as the initial value.
 * @param {Array}: Function takes in an array
 * @param {Function}: Takes in a function to have the input array passed through
 * @return {Value}: Remaining value after array is passed through callback function 
 */
_.reduce = function(arr, func, seed){
//determine if seed was not passed in
    if(seed === undefined){
        seed = arr[0];
//iterate through array starting at 1
        for( var i = 1; i < arr.length; i++){
//pass seed, current element, index, and array to function
            seed = func(seed, arr[i], i, arr)
        }
//else seed was passed in
    }else{
//iterate through array starting at 0
        for(let i = 0; i < arr.length; i++){
//pass seed, current element, index, and array to function
            seed = func(seed, arr[i], i, arr)
        }
    }
    return seed;
}
module.exports.reduce = reduce;

/**
 * extend: Function copies the elements from one or more given objects in the order they are given to a single object.
 * @param {Object}: Object into which other objects will be copied
 * @param {...inputs}: One or more objects that will have their elements copied into the returned object
 * @param {Object}: Function returns an object containing all input objects
 */
_.extend = function(obj1, obj2, ...inputs){
//copy properties from obj2(and any other inputs) to obj1
    Object.assign(obj1, obj2, ...inputs);
        return obj1
}
module.exports.extend = extend;
    