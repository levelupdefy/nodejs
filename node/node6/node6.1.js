const url = require('url');

const add = "https://google.com/valorant.htm?year=2022&month=aug"
const url_parse = url.parse(add, true);

const hostname = url_parse.host
const pathname = url_parse.path
const search = url_parse.search
const query_data = url_parse.query

console.log(hostname);
console.log(pathname);
console.log(search);
console.log(query_data);
console.log(query_data.month);
