import Koa from 'koa';
import koaStatic from 'koa-static';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../shared/app';

const app = new Koa();
const port = process.env.PORT || 5000;

app.use(koaStatic('public'));
app.use((ctx) => {
    const content = ReactDOMServer.renderToString(<App />);
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

app.listen(5000, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
