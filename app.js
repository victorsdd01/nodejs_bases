const {multiply} = require("./helpers/multiply");
const {argv} = require("./config/yargs");
const {color} = require("./config/colors")


multiply(argv.b,argv.r, argv.l)
    .then( value => console.log(value))
    .catch(err => console.log("something wrong".error));

