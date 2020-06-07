const { exec } = require('child_process');
const { version } = require('../projects/cyazyx/cx-mat-layout/package.json');

try {
    console.info('\x1b[34m%s\x1b[0m', `Staging git commits for version ${version}...`);
    exec('git add .', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('\x1b[31m%s\x1b[0m', `Staging version changes Failed!\n${err}`);
            return;
        }

        // the *entire* stdout and stderr (buffered)
        if (stdout) { console.log(stdout); }
        if (stderr) { console.error(stderr); }

        // Commit changes after successful staging
        console.info('\x1b[34m%s\x1b[0m', 'Committing staged changes attempt...');
        exec(
            `echo Waiting for file tree to refresh... && ping 127.0.0.1 -n 10 > nul && git diff --quiet && ping 127.0.0.1 -n 6 > nul && git diff --staged --quiet && ping 127.0.0.1 -n 6 > nul || git commit -m"Release ${version} Changes Commit"`,
            (err, stdout, stderr) => {
                if (err) {
                    // node couldn't execute the command
                    console.log('\x1b[31m%s\x1b[0m', `Committing version changes Failed!\n${err}`);
                    return;
                }

                // the *entire* stdout and stderr (buffered)
                if (stdout) { console.log(stdout); }
                if (stderr) { console.error(stderr); }
                console.log('\x1b[32m%s\x1b[0m', 'Committing version changes successful');
                console.info('\x1b[34m%s\x1b[0m', 'Attempting to push the committed changes to HEAD...');
                exec(`ping 127.0.0.1 -n 10 > nul && git push origin HEAD`, (err, stdout, stderr) => {
                    if (err) {
                        // node couldn't execute the command
                        console.log('\x1b[31m%s\x1b[0m', `Pushing version changes Failed!\n${err}`);
                        return;
                    }

                    // the *entire* stdout and stderr (buffered)
                    if (stdout) { console.log(stdout); }
                    if (stderr) { console.error(stderr); }
                    console.log('\x1b[32m%s\x1b[0m', 'Pushing version changes successful');
                });
            });
    });
} catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Staging/Committing version changes Failed!');
}