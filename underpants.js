// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) ==> 5
*   _.identity({a: "b"}) ==> {a: "b"}
*/

_.identity = function(value){
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    // returns the type of value as a string
    // test if value is array
    if (Array.isArray(value)){return 'array';}
    // test if value is null
    else if (value === null){return 'null';}
    // test if value is an object
    else if (typeof value === 'object'){return 'object';}
    // test for remaining data types using typeof
    else if (typeof value === 'string'){return 'string';}
    else if (typeof value === 'undefined'){return 'undefined';}
    else if (typeof value === 'number'){return 'number';}
    else if (typeof value === 'boolean'){return 'boolean';}
    else {return 'function';}
}



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
I: takes an array and a number 
O: returns the first <number> items of <array>. If array is not an array, return []
C: if no number is given, return 1st element of array
E: if number is negative, return []. If number is greater than array.length return whole array.
*/
_.first = function(array, number){
    // create empty variable for array to return
    var result = [];
    // if array in not an array return []
    if (!Array.isArray(array)){return [];}
    // if number is not given or not a number, return the 1st element in <array>
    else if (number === undefined || !typeof number === 'number'){return array[0];}
    // if number is negtive, return empty array
    else if (number < 0){return [];}
    // if number is larger than the length of array, return whole array
    else if (number > array.length){return array;}
    // else return the first <number> of items of the array
    // iterate over number list
    // push elements to result array
    else {for (let i = 0; i < number; i++){
        result.push(array[i]);
    }}
    return result;
}




/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
I: takes array and a number
O: else, return the last <number> of items of the array
C: if array is not an array return []. If number isn't given or not a number return the last element of array. 
E: if number is negative, return []. If number is greater than array.length return whole array.
*/
_.last = function(array, number){
    // create empty array for our array elements to return 
    var result;
    // if array is not an array return []
    if (!Array.isArray(array)){return [];}
    // if number is negative return []
    else if (number < 0){return [];}
    // if number is undefined or not a number, return the last element of the array
    else if (number === undefined || !typeof number === 'number'){return array[array.length - 1];}
    // if number is greater than the length of the array return the whole array
    else if (number > array.length){return array;}
    // else, return the last <number> of items of the array
    else { 
        // assign <number> of array elements into result var
        result = (array.slice(array.length - number, array.length));
    }
    return result;
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
I: takes an array and a value
O: returns the index of array that is the 1st occurance of <value>. Returns -1 if input value is not in the array
C: do NOT use [].indexOf()
E: if array has multiple occurances of val, return the index of the first occurance of a found element. If val isn't in the array, return -1
*/
_.indexOf = function(array, value){
    // create empty variable to hold our result value
    var result = 0;
    // iterate over array
    for (let i = 0; i < array.length; i++){
        // if value is in array, return index of 1st occurance 
        if (array[i] === value){
            result = i;
            // return result
            return result;
            // else if value is not in the array, return -1 
        } else {result = -1;}
    }
    return result;
}



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
I: takes an array and a value
O: returns true if array contains value, false if not
C: MUST use ternary operator in implementation
E: if no value is given, return false
*/
_.contains = function(array, value){
    // create var to hold value
    var result = false;
    if (value === undefined){return false;}
    // iterate over array
    for (let i = 0; i < array.length; i++){
        // if array contains input value response return true, false if not
        // use ternary operator
        result = array[i] === value ? true : result;
    }
    return result;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
I: takes a collection and a function
O: if collection is array, call function for each element, index, and collection. If collection is object, call function for each property's values, keys, and collection
C:
E:
*/
_.each = function(collection, func){
    // test if collection is array
    if (Array.isArray(collection)){
        // iterate over array
        for (let i = 0; i < collection.length; i++){
            // call function on elements, index and collection
            func(collection[i], i, collection);
        }
        // else collection is an object
    } else {
        // iterate over keys in object using for in loop
        for (var key in collection){
            // call function on values, its keys, and the collection
            func(collection[key], key, collection);
        }
        }
    }



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
I: takes an array
O: Should return an array with no duplicates
C: must use _.indexOf()
E:
*/            
_.unique = function(array){
    // create new array to return
    var noDups = [];
    // iterate over input array
    for (let i = 0; i < array.length; i++){
        // test if current value is in our noDups array using _.indexOf , if not will result in -1
        // if not present in array, push value into noDups array
        if (_.indexOf(noDups, array[i]) === -1){
            noDups.push(array[i]);
        }
    }
    return noDups;
}                                 




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
I: takes an array and a function
O: returns a new array of elements for which calling <function> returned true
C: The filter() method does not execute the function for empty elements
E: what if function returns something other than true or false?
*/
_.filter = function(array, callback){
    // create new empty array to return 
    var filteredArr = [];
    // iterate over array
    for (let i = 0; i < array.length; i++){
        const currentElement = array[i];
        const testResult = callback(currentElement, i, array);
        // test if calling callback on currentElement results in true
        // if true, push elements to filteredArr
        if (testResult === true){
            filteredArr.push(currentElement);
        }
    }
return filteredArr;
}



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
I: takes an array and a function
O: returns a new array of elements for which calling function returned flase
C:
E:
*/
_.reject = function(array, func){
    // create array to return 
    var rejectArr = [];
    // iterate over input array
    for (let i = 0; i < array.length; i++){
        // create current element variable
        const currentElement = array[i];
        // create test result variable to keep track of reults of calling func on elements, index, array
        const testResult = func(currentElement, i, array);
        // test if calling function on elements results in false
        if (testResult === false){
            // if false, push elements into rejectArr
            rejectArr.push(currentElement);
        }
    }
    return rejectArr;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, index, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
I: takes an input array and a function
O: returns an array that is made up of 2 sub arrays:
        0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
C: 
E: this is going to return an array of arrays
*/
_.partition = function(array, callback){
    // create array to return
    var twoArr = [];
    // iterate over array
    for (let i = 0; i < array.length; i++){
        // create current element var
        var currentElement = array[i];
        // call callback function on all elements, index, array
        var testResult = callback(currentElement, i, array);
        // create two sub arrays, one for falsey values, one for truthy
        var truthy = [];
        var falsey = [];
        // test if testResult value is true or false and push into appropriate sub-array
        if (testResult === true){
            truthy.push(currentElement);
        } else if (testResult === false){falsey.push(currentElement);}
    }
    // push both sub arrays into empty twoArr array
    twoArr.push(truthy, falsey);
    return twoArr;
}


/** _.map
* Arguments:
*   1) A collection (array or object)
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*   _.map(obj, function(value){ return value * 10});  // [10, 20, 30]
I: takes a collection (array or object)
O: if collection is array, call function, return values in new array. If collection is an object, call function, return values in new array.
C:
E:
*/


_.map = function(collection, func){
    // create empty arrays to return
    var arrayOutput = [];
    var objOutput = [];
    // test if collection is array or object
    if (Array.isArray(collection)){
        // iterate over array
        for (let i = 0; i < collection.length; i++){
            const currentElement = collection[i];
            // invoke function on each element, index, and collection
        const testResult = func(currentElement, i, collection);
        arrayOutput.push(testResult);
        }
        return arrayOutput;
        // else collection is an object
    } else {
        // iterate over object keys and values using Object.keys() and .forEach()
        Object.keys(collection).forEach(key => {
            var value = collection[key];
            // call function on value, it's key, collection
            const result = func(value, key, collection);
            // push results to output array
            objOutput.push(result);
        });
        return objOutput;
    }
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
I: takes an array of objects, and a property
O: returns an array containing the value of <property> for every element in <array>
C: must use _.map()
E:
*/
_.pluck = function(array, property){
    // create empty array for values of property for every element in array
    
    // iterate over input array
    for (let i = 0; i < array.length; i++){
        // use _.map() in implementation
        // push values to propValues array
    var propValues = (_.map(array, func(),{return: array[i].property}));
    }
    return propValues;
}




/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
I: takes an input collection, and a function
O: Returns true or false if conditions are met. Test if collection is an array or object
C: If <function> is not provided, return true if every element is truthy, otherwise return false
E: what if function doesn't return boolean? What if <function> is not given?
*/
_.each = function(collection, callback){
    // test if collection is an array using Array.isArray()
    if (Array.isArray(collection)){
        // iterate over collection array
        for (let i = 0; i < collection.length; i++){
            // call function on current element, index, collection
            const currentElement = collection[i];

        }
        
    }
}



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend (equivalent of the Object.assign())
* Arguments:
*   1) An Object (target object)
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/






//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}