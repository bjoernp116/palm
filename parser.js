var fs = require("fs")

/* fs.writeFile("example.plm",  function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
 */
var lines
var values = []
var vars = []
var code = " "
fs.readFile("example.plm", "utf8", function (err, data) {
    code = data
    lines = code.split("\n")
    for (var c = 0; c < 10; c++) {
        if (lines[c] !== undefined) {
            if (lines[c].startsWith("ADD")) {
                vars.push(lines[c].split(" ")[1])
                values.push(lines[c].split("\"")[1])

            }//ADD
            if (lines[c].startsWith("PRINT")) {
                for (var i = 0; i < 10; i++) {
                    if (vars[i] == lines[c].split(" ")[1]) {
                        console.log(vars[i] = values[i])
                        break
                    } else {
                        if (lines[c].split(" ")[1].split("\"")[1] !== undefined) {
                            console.log(lines[c].split(" ")[1].split("\"")[1])
                        }
                    }
                }
                //break
            }//PRINT
        }// undefinded
    }//for loop
    console.log(vars + " | " + values)




});
