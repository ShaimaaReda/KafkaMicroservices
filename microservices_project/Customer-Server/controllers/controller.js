const Offer = require('../models/offer');
const OfferDto = require('../models/offerDto');
const queueMessage = require('../../Marketer-Server/producer');
const GetFunction = require('../consumer');
// CRUD Controllers

//get all Offers
exports.getOffers = (req, res, next) => {
  Offer.findAll()
    .then(offers => {
      res.status(200).json({ offers: offers });
    })
    .catch(err => console.log(err));
}

//get Offer by id
exports.getOffer = (req, res, next) => {
  const OfferId = req.params.offerId;
  Offer.findByPk(OfferId)
    .then(offer => {
      if (!offer) {
        return res.status(404).json({ message: 'Offer not found!!!!' });
      }
      return res.status(200).json({ offer: offer });
    })
    .catch(err => console.log(err));
}