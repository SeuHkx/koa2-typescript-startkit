/**
 * Created by hkx on 2016/12/30.
 */
interface config {
	port?:number;
	staticPath?:string;
}

const deploy:config = {
	port: 3333,
	staticPath : '/client'
};

export default deploy;
