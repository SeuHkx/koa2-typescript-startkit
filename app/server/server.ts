/**
 * Created by hkx on 2016/12/29.
 */
import * as Koa from 'koa';
import * as serveStatic from 'koa-static';
import * as bodyParser from 'koa-bodyparser';
import routes from './../routes/routes';
import deploy from './../config/config';

export default class Server {
	public app : any;
	public port: number;
	public static init() : Server{
		return new Server();
	}
	constructor(){
		this.app = new Koa();
		this.app.port = deploy.port;
		this.config();
		this.routes();
	}
	public config(){
		this.app.use(serveStatic(__dirname + deploy.staticPath));
	}
	private routes(){
		this.app.use(bodyParser())
			.use(routes.routes())
			.use(routes.allowedMethods());
	}
}


