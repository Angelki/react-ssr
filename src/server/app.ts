import Koa from 'koa';

const app = new Koa();
const port = process.env.PORT ?? 5000;

app.use((ctx) => {
    ctx.body = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>server</title>
</head>
<body>
    <div id="root"></div>
    <script src="bundle.js"></script>
</body>
</html>

`;
});

app.listen(5000, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
