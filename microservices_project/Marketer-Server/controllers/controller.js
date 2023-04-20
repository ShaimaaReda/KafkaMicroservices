const Offer = require('../models/offer');
const OfferDto = require('../models/offerDto');
const queueMessage = require('../producer');

// CRUD Controllers


//create Offer
exports.createOffer = (req, res, next) => {

  let offerDto = new OfferDto(
    null,
    req.body.item,
    req.body.amount,
    req.body.endDate,
    "create"
  );

  queueMessage(offerDto);

  return res.status(200).json({ type: 'Offer Created' });
}
//------------------------------------------------------------------
//update Offer
exports.updateOffer = (req, res, next) => {

  Offer.findByPk(req.params.offerId)
    .then(offer => {
      if (!offer) {
        return res.status(404).json({ type: 'Offer Not Found' });
      }
      else {
        let offerDto = new OfferDto(
          req.params.offerId,
          req.body.item,
          req.body.amount,
          req.body.endDate,
          "update",
        );

        queueMessage(offerDto);

        return res.status(200).json({ type: 'Offer Updated' });
      }
    }).catch(() => {
      return res.status(404).json({ type: 'Error' });
    });
}
//----------------------------------------------------------------------------
//delete Offer
exports.deleteOffer = (req, res, next) => {
  Offer.findByPk(req.params.offerId)
    .then(offer => {
      if (!offer) {
        return res.status(404).json({ type: 'Offer Not Found' });
      }
      else {
        let offerDto = new OfferDto(
          req.params.offerId,
          null,
          null,
          null,
          "delete"
        );

        queueMessage(offerDto);

        return res.status(404).json({ type: 'Offer Deleted' });
      }
    }).catch(() => {
      return res.status(404).json({ type: 'Offer Not Found' });
    });
}