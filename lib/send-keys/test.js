const cp = require('child_process');
cp.execSync('./test.sh', {stdio: [0, 1, 2]});