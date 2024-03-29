const { getItems, getItem, createItem, deleteItem, updateItem } = require("../controllers/items");

// Item schema
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
  handler: getItems
};

// Options for get a single item
const getItemByIdOpts = {
  schema: {
    response: {
      200: Item
    }
  },
  handler: getItem
};

// Options for creating an item
const postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' }
      }
    },
    response: {
      201: Item
    }
  },
  handler: createItem
};

// Options for deleting an item
const deleteItemByIdOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    }
  },
  handler: deleteItem
};

// Options for update an item
const updateItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' }
      }
    },
    response: {
      200: Item
    }
  },
  handler: updateItem
};


function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get('/items', getItemsOpts);

  // Get a single item
  fastify.get('/items/:id', getItemByIdOpts);

  // Add an item
  fastify.post('/items', postItemOpts);

  // Delete an item
  fastify.delete('/items/:id', deleteItemByIdOpts);

  // Update an item
  fastify.put('/items/:id', updateItemOpts);

  done();
}

module.exports = itemRoutes;
