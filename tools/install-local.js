const { exec } = require('child_process');

let package = require('../projects/cyazyx/cx-mat-layout/package.json');

try {
    console.info('\x1b[34m%s\x1b[0m', `Packaging version ${package.version}...`);
    exec('npm run package', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('\x1b[31m%s\x1b[0m', `Packaging ${package.version} Failed!\n${err}`);
            return;
        }

        // the *entire* stdout and stderr (buffered)
        if (stdout) { console.log(stdout); }
        if (stderr) { console.error(stderr); }

        // Commit changes after successful staging
        console.info('\x1b[34m%s\x1b[0m', 'Installing package...');
        exec(
            `npm install dist/cyazyx/cx-mat-layout/cyazyx-cx-mat-layout-${package.version}.tgz`,
            (err, stdout, stderr) => {
                if (err) {
                    // node couldn't execute the command
                    console.log('\x1b[31m%s\x1b[0m', `Installing version ${package.version} Failed!\n${err}`);
                    return;
                }

                // the *entire* stdout and stderr (buffered)
                if (stdout) { console.log(stdout); }
                if (stderr) { console.error(stderr); }
            });
    });
} catch (error) {
    console.log('\x1b[31m%s\x1b[0m', `Packaging version Failed!\n(${error})`);
}