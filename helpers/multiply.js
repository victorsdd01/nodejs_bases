const fs = require('fs');
const { color } = require('../config/colors');


const outputPath = "./output"
let output = "";
const multiply = async (number, range, list) => {

    try { 

        for (let index = 1; index <= range; index++){
            output += `${number} x ${index} = ${ number * index}\n`
        }
        fs.writeFile(`${outputPath}/table-${number}.txt`, output, (err) => {
            if (err){
                throw err;
            }
        })
        
        if(list){
            console.log(output.done);
        }
        return `table-${number}.txt created`.done;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    multiply
}