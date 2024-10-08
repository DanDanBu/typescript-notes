/* 
    type T1 = SnakeToCamelCase<‘this_is_snake_case’>; // “thisIsSnakeCase”
    type T2 = type T2 = SnakeToCamelCase<‘This_Is_Strange_Case’>; // “thisIsStrangeCase”
    type T3 = SnakeToCamelCase<‘IDontKnowThis’>; // “IDontKnowThis”
*/

// How to complete this?
type SnakeToCamelCase = any;