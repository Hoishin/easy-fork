import {fork} from 'child_process';

const easyFork = (command: string) => {
	const splitCommand = command.split(' ');
	return          fork(`node_modules/.bin/${splitCommand[0]}`, splitCommand.slice(1));
};

export = easyFork;
