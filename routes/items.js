const items = require('../items');

function itemRoutes(fastify, options, done) {

  fastify.get('/items', async (req, reply) => {
    reply.send(items);
  });

  fastify.get('/items/:id', async (req, reply) => {
    const id = req.params.id;
    const item = items.find(i => i.id === id);
    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
