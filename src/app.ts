import Koa from 'koa';
import route from './route';

const app = new Koa();

app
  .use(route.routes())
  .use(route.allowedMethods());

app.listen(3000);
