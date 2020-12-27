import Koa from 'koa';
import koaStatic from 'koa-static';
import React from 'react';
import Router from '@koa/router';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import App from '../shared/app';

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 5000;

app.use(koaStatic('public'));
router.get(['/', '/about'], (ctx, next) => {
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={ctx.req.url}>
            <App />
        </StaticRouter>,
    );
    ctx.body = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>server</title>
</head>
<body>
    <div id="root">${content}</div>
</body>
</html>
`;
});
router.get('/getData', (ctx) => {
    ctx.body = {
        data: 'data list',
        message: '',
        code: 200,
    };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(5000, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
