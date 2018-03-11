const express = require("express");
const router = express.Router();
const bookController = require('../controllers/BookController');

router.get('/', bookController.findAll);
router.get('/:id', bookController.findById);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
