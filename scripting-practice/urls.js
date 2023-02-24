const fs = require('fs');

const args = process.argv;

for (let i = 2; i < args.length; i++ ) {
    // Readting and outputting file
    fs.readFile(args[i], 'utf-8', (err, data) => {
        if(err){
            console.log(err)
            process.kill(1)
        }

        const dataArr = data.split(/\r?\n/);

        dataArr.forEach(async function(d) {

            const newFileName = new URL(d).host;
            try {
                const foo = await fetch(d); 
                const textData = await foo.text();

                fs.writeFile(`${newFileName}.txt`, textData, 'utf-8', (err) => {
                    if (err) {
                        console.log(`Could not write file ${newFileName}`)
                    } else {
                        console.log(`File "${newFileName}" successfully created!`)
                    }
                })

            } catch(e) {
                console.log(`Could not fetch data for ${d}!`)
            }
        })
      


    })

}


