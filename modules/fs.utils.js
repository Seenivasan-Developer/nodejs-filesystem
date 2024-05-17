const fs = require('node:fs/promises');

async function WriteFileFromName(fileName = "", content = "") {
    return fs.writeFile(`./Files/${fileName}`, content, 'utf8');
}


async function readFileFromDirectory() {
    const files = await fs.readdir('./Files');
    const results=[];
    try {
        for (file of files) {
        const data = await fs.readFile(`./Files/${file}`, "utf8");
        results.push({ fileName: file, data });
    }
}
catch(error){
    results.push({ error });
}
return results;
}

module.exports = {
    WriteFileFromName,
    readFileFromDirectory,
}

