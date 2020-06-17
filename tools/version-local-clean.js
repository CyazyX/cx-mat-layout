const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');

let package = require('../package.json');

const file = resolve(__dirname, '..', 'package.json');

try {
    package.dependencies["@cyazyx/cx-mat-layout"] = "";
    const relativePath = relative(resolve(__dirname, '..'), file);
    console.info(
        '\x1b[34m%s\x1b[0m', `Writting version local ${package.dependencies["@cyazyx/cx-mat-layout"]} to empty in ${relativePath}`);
    writeFileSync(file, `${JSON.stringify(package, null, 2)}\n`, { encoding: 'utf-8' });
    console.log('\x1b[32m%s\x1b[0m', 'Updating package dependency succefful.');
} catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Updating package dependency Failed!');
}