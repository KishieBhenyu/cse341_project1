const express = require('express');
const router = express.Router();

const usersController = require('../controllers/contacts');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', usersController.createcontact);

router.put('/:id', usersController.updatecontact);

router.delete('/:id', usersController.deletecontact);

module.exports = router;