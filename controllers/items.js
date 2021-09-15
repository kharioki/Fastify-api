const { v4: uuidv4 } = require('uuid');
let items = require('../items');

const getItems = (req, res) => {
  res.send(items);
};

const getItem = (req, res) => {
  const { id } = req.params;
  const item = items.find(item => item.id === id);
  res.send(item);
};

const createItem = (req, res) => {
  const { name } = req.body;
  const item = {
    id: uuidv4(),
    name,
  };
  items = [...items, item];
  res.code(201).send(item);
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  items = items.filter(item => item.id !== id);
  res.send({ message: `Item ${id} has been removed` });
};

module.exports = {
  getItems,
  getItem,
  createItem,
  deleteItem,
};
