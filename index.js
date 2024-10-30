const { exec } = require("child_process");

let commitCount = 1;

setInterval(() => {
  exec(`git add . && git commit -m "commit-${commitCount}" && git push origin main`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    console.log(`Output: ${stdout}`);
    commitCount++; // Increment the commit count after each successful commit
  });
}, 60000);
