const OwnerService = require('../services/owner.service');

const getAll = async (_req, res) => {
  try {
    const owners = await OwnerService.getAll();
    return res.status(200).json(owners);
  } catch (e) {
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await OwnerService.getById(id);
    return res.status(200).json(owner);
  } catch (e) {
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
  getById,
};