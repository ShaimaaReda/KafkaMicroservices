const controller = require('../controllers/controller');
const router = require('express').Router();

// CRUD Routes /offers
router.get('/', controller.getOffers); // /offers
router.get('/:offerId', controller.getOffer); // /offers/:offerId


module.exports = router;