var spawn  = require('cross-spawn');
var path   = require('path');
var chalk  = require('chalk');

var script = process.argv[2];
var args   = process.argv.slice(2);
var log    = console.log;

const exeuteCommand = (command) => (cmdArgs, file) => {
	return spawn.sync(
		command,
		[require.resolve(__dirname + '/scripts/' + file)].concat(args),
		{stdio: 'inherit'}
	);
};

const bindNodeCommand = exeuteCommand('node');

switch (script) {
  case 'component':
    /* will execute node $filename args
     * like run in terminal
     * e.g: node index.js a b c
     */
    try {
      var result = bindNodeCommand(args, 'newComponent.js');
      process.exit(result.status);
      break;
    } catch(e) {
      log(chalk.red(chalk.bold(e.message)));
      break;
    }
  
  case 'container':
  	var result = bindNodeCommand(args, 'newContainer.js')
  	break;
  default:
    console.log('Unknown script "' + script + '".');
    console.log('Perhaps you need to update react-scripts?');
    break;
}