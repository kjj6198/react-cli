var fs = require('fs-extra'); /* more fs operation */
var path = require('path');
var chalk = require('chalk');

function createProject(projectName) {
  if(projectName) {
      var projectPath = path.join(__dirname, '..', 'examples', projectName);
      try {
        fs.mkdirSync(projectPath);
        fs.copySync(path.join(__dirname, '..', 'scripts', 'templates', 'redux'), projectPath);
        return true;
      } catch(e) {
        console.log(chalk.red(chalk.red(e.message)));
        process.exit();
      }
  }
  
}

if(process.argv) {
  var args = process.argv[2];
  createProject(args);
}

module.exports = createProject;
