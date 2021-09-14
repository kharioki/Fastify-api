const fastify = require('fastify')({ logger: true });
fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Fastify API',
    },
  }
});
fastify.register(require('./routes/items'));

const PORT = 5000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (e) {
    fastify.log.error(e);
    process.exit(1);
  }
}

start();
