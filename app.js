const {multiply} = require("./helpers/multiply");
const {argv} = require("./config/yargs");


multiply(argv.b,argv.r, argv.l)
    .then( value => console.log(value))
    .catch(err => console.log("something wrong"));

