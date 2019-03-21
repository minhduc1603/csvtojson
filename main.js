const toJson = require('./csvToJson');
if(process.argv[2] === undefined) {
    console.log('Please, enter with a CSV file')
} else {
    toJson(process.argv[2])
}
