/**
 * Created by hkx on 2016/12/30.
 */
import * as Koa from 'koa';
import render from '../render';

const action = {
	index : async(ctx:Koa.Context):Promise<void>=>{
		ctx.body = await render('index.pug');
	}
};

export default action;