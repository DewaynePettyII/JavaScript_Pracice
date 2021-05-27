//A common use of json is to change data from a web server.
//When reciving web data from a web server, the data is allways a string.
//Parse the data with json.parse(), and that data becomes a javascript object.


var object = JSON.parse('{"name": "John", "age": 30, "city": "New York" }')
console.log(object)
console.log(object['name'])
console.log(object.name)

