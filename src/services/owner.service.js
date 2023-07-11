const { Owner, Pet } = require('../models');

// Eager loading
const getAll = async () => {
  const owners = await Owner.findAll({
    include: { model: Pet, as: 'pets' },
  });
  return owners;
};

// Lazy loading
const getById = async (id) => {
  const owner = await Owner.findOne({
    where: { id },
  });
  return owner;
};

const create = async ({ name, email }) => {
  const owner = await Owner.create({ name, email });
  return owner;
};

module.exports = {
  getAll,
  getById,
  create,
};