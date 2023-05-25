const colors = require("colors");


const color = colors.setTheme({
    done: 'green',
    error: 'red',
    warning: 'yellow'
});

module.exports = {
    color
}