const items = require('../items');

const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  }
}

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item
      }
    }
  },
  handler: (req, reply) => {
    reply.send(items);
  }
};

// Options for get a single item
const getItemByIdOpts = {
  schema: {
    response: {
      200: Item
    }
  },
  handler: (req, reply) => {
    const id = req.params.id;
    const item = items.find(i => i.id === id);
    reply.send(item);
  }
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get('/items', getItemsOpts);

  // Get a single item
  fastify.get('/items/:id', getItemByIdOpts);

  done();
}

module.exports = itemRoutes;
