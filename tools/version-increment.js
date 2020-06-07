const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');

let package = require('../projects/cyazyx/cx-mat-layout/package.json');

const file = resolve(__dirname, '..', 'projects/cyazyx/cx-mat-layout/package.json');

const version = package.version;
const versionParts = String(version).split('.');
try {
    versionParts[2] = parseInt(versionParts[2]) + 1;
    package.version = versionParts.join('.');
    const relativePath = relative(resolve(__dirname, '..', '..'), file);
    console.info(
        '\x1b[34m%s\x1b[0m', `Writting version increment ${version} to ${package.version} in ${relativePath}`);
    writeFileSync(file, `${JSON.stringify(package, null, 2)}\n`, { encoding: 'utf-8' });
    console.log('\x1b[32m%s\x1b[0m', 'Incrementing version successful');
} catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Incrementing version Failed!');
}