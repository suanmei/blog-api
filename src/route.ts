import Router = require('koa-router');

const router = new Router();

router
  .get('/login', (ctx, next) => {
    ctx.body = 'login';
    next();
  });

export default router;