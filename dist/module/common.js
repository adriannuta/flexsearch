export function is_string(a){return"string"==typeof a}export function is_array(a){return a.constructor===Array}export function is_function(a){return"function"==typeof a}export function is_object(a){return"object"==typeof a}export function is_undefined(a){return"undefined"==typeof a}export function get_keys(a){return Object.keys(a)}export function create_object_array(a){const b=Array(a);for(let c=0;c<a;c++)b[c]=create_object();return b}export function create_object(){return Object.create(null)}export function replace(a,b){for(let c=0,d=b.length;c<d;c+=2)a=a.replace(b[c],b[c+1]);return a}export function regex(a){return new RegExp(a,"g")}export function collapse(a){let b="",c="";for(let d,e=0,f=a.length;e<f;e++)(d=a[e])!==c&&(b+=c=d);return b}