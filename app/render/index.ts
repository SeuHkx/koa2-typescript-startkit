/**
 * Created by hkx on 2016/12/30.
 */
import * as Pug from 'pug';

const render =(path?:string,options?:{}):string =>{
	let reallyPath = __dirname.replace('render','');
	let html = Pug.renderFile(reallyPath+'/views/'+path,options);
	return html;
};
export default render;