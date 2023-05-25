const {color} =  require('./colors')
const argv = require('yargs')
                .option('b', {
                    alias:'base',
                    type: 'number',
                    description: 'Base to print de multiply table',
                    demandOption: true,
                })
                .option('r',{
                    alias:'range',
                    type:'number',
                    description: 'Range is the how many times multiply the base by the index',
                    default: '10'
                })
                .option('l', {
                    alias:'list',
                    description: 'print the table in the console',
                    type: 'boolean',
                    default: false,
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'base need to be a number'.error
                    } else if (isNaN(argv.r)){
                        throw 'range need should be a number'.error
                    }
                    return true
                })
                .argv;

module.exports = {
    argv
}