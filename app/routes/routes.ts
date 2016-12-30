/**
 * Created by hkx on 2016/12/30.
 */
import * as Router from 'koa-router';
import action from './../controllers/'

const router = new Router();

router.get('/',action.index);

export default router;