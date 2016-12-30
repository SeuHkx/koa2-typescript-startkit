/**
 * Created by hkx on 2016/12/29.
 */
import Server from './server/server';
import Socket from './socket/socket';
import * as chalk from 'chalk';

const app = Server.init().app;

const server = app.listen(app.port,()=>{
	console.log(chalk.white.bgMagenta.bold(`Listening on port ${app.port}`));
});

const socket = new Socket(server);