const items = require('../items');

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
          },
        }
      }
    }
  }
};

// Options for get a single item
const getItemByIdOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
        }
      }
    }
  }
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get('/items', getItemsOpts, async (req, reply) => {
    reply.send(items);
  });

  // Get a single item
  fastify.get('/items/:id', getItemByIdOpts, async (req, reply) => {
    const id = req.params.id;
    const item = items.find(i => i.id === id);
    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
