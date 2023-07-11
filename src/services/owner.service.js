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

module.exports = {
  getAll,
  getById,
};