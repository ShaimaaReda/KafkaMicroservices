console.log("CONSUMER");
const Offer = require('./models/offer');

const Kafka = require('node-rdkafka');

const consumer = Kafka.KafkaConsumer({
  'group.id': 'kafka',
  'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

consumer.on('ready', () => {
  console.log('consumer ready..')
  consumer.subscribe(['first-kafka-topic']);
  consumer.consume();
}).on('data', function (data) {

  let object = JSON.parse(data.value);
  console.log(`received message: ${object}`);
  //////////////////////////////
  //get all Offers
  // function GetAllFunction() {
  //   Offer.findAll()
  //     .then(offers => {
  //       res.status(200).json({ offers: offers });
  //     })
  //     .catch(err => console.log(err));

  // }
  ///////////////////////////////////////////////
  // function GetFunction() {
  //   const OfferId = req.params.OfferId;
  //   Offer.findByPk(OfferId)
  //     .then(offer => {
  //       if (!offer) {
  //         return res.status(404).json({ message: 'Offer not found!' });
  //       }
  //       return res.status(200).json({ offer: offer });
  //     })
  //     .catch(err => console.log(err));
  // }

  ///////////////////////////////////////////////

    if (object.type=="create")
    {
      Offer.create({
        item: object.item,
        amount: object.amount,
        endDate: object.endDate
      })
        .then(result => {
          console.log('Created Offer');
        })
        .catch(err => {
          console.log(err);
        }); 

    }
  /////////////////////////////////////////////////////////////////////////

     if (object.type=="update")
     {
      Offer.findByPk(object.id)
      .then(offer => {
        if (!offer) {
          console.log('Offer Not Found ');
        }
        offer.item = object.item;
        offer.item = object.item;
        offer.amount = object.amount;
        offer.endDate = object.endDate;
        return offer.save();
      })
      .catch(err => console.log(err));
     }
  /////////////////////////////////////////////////////////////////

     if (object.type=="delete")
     {
      Offer.findByPk(object.id)
      .then(offer => {
        return offer.destroy({
          where: {
            id: object.id
          }
        });
      })
      .catch(err => console.log(err));
     }

});