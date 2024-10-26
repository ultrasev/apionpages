const depcheck = require("depcheck");
const { exec } = require("child_process");
const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const options = {
  ignoreBinPackage: false,
  skipMissing: false,
  ignorePatterns: ["dist", "build"],
  parsers: {
    "**/*.js": depcheck.parser.es6,
    "**/*.jsx": depcheck.parser.jsx,
    "**/*.ts": depcheck.parser.typescript,
    "**/*.tsx": depcheck.parser.typescript,
  },
  detectors: [
    depcheck.detector.requireCallExpression,
    depcheck.detector.importDeclaration,
  ],
  specials: [depcheck.special.eslint, depcheck.special.webpack],
};

const packageJson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8")
);

function removeDependency(dep) {
  return new Promise((resolve, reject) => {
    const removeCommand = `pnpm remove ${dep}`;
    console.log(`Executing command: ${removeCommand}`);

    exec(removeCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error removing ${dep}: ${error.message}`);
        reject(error);
      } else if (stderr) {
        console.error(`Stderr when removing ${dep}: ${stderr}`);
        reject(new Error(stderr));
      } else {
        console.log(`Successfully removed ${dep}`);
        console.log(`pnpm output: ${stdout}`);
        resolve();
      }
    });
  });
}

async function removeUnusedDependencies(unusedDeps) {
  for (const dep of unusedDeps) {
    try {
      await removeDependency(dep);
    } catch (error) {
      console.error(`Failed to remove ${dep}. Continuing with next dependency.`);
    }
  }
  console.log("Finished removing unused dependencies.");
}

depcheck(process.cwd(), options, (result) => {
  const allDeps = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };
  const unusedDeps = Object.keys(allDeps).filter(
    (dep) =>
      (result.dependencies.includes(dep) ||
        result.devDependencies.includes(dep)) &&
      !result.using[dep]
  );

  if (unusedDeps.length === 0) {
    console.log("No unused dependencies found.");
    rl.close();
    return;
  }

  console.log("Unused dependencies:", unusedDeps);

  rl.question(
    `Are you sure you want to remove these ${unusedDeps.length} dependencies? (y/n) `,
    (answer) => {
      if (answer.toLowerCase() === "y") {
        removeUnusedDependencies(unusedDeps).then(() => {
          console.log("All operations completed.");
          rl.close();
        });
      } else {
        console.log("Operation cancelled.");
        rl.close();
      }
    }
  );
});