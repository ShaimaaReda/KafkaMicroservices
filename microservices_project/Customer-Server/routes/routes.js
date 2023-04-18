const controller = require('../controllers/controller');
const router = require('express').Router();

// CRUD Routes /offers
router.get('/', controller.getOffers); // /offers
router.get('/:offerId', controller.getOffer); // /offers/:offerId
// router.post('/', controller.createOffer); // /offers
// router.put('/:offerId', controller.updateOffer); // /offers/:offerId
// router.delete('/:offerId', controller.deleteOffer); // /offers/:offerId

module.exports = router;