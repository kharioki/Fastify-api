const fastify = require('fastify')({ logger: true });
const PORT = 5000;

fastify.get('/items', async (req, res) => {
  res.send({ test: 'Hello' });
});

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (e) {
    fastify.log.error(e);
    process.exit(1);
  }
}

start();
