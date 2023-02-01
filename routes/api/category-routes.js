const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    attributes:[
      'id',
      'category_name',
    ],
    include:[
      {
        model: Product,
        attributes: [
          'product_id',
          'product_name',
          'price',
          'stock',
          'category_id',
        ]
      }
    ]
  }).then(data => {
    res.json(data)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
  
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
     id: req.params.id
    },
    attributes:[
      'id',
      'category_name',
    ],
    include:[
      {
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'stock',
          'category_id',
        ]
      }
    ]
  }).then(data => {
    if (!data) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(data)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then(data => {
    res.json(data)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where:{
      id: req.params.id
    }
  }).then(data => {
    if (!data) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(data)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(req.body, {
    where: {
      id: req.params.id
    }
  }).then(data => {
    if (!data) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
  }
    res.json(data)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

module.exports = router;


// // GET a single location
// router.get('/:id', async (req, res) => {
//   try {
//     const locationData = await Location.findByPk(req.params.id, {
//       // JOIN with travellers, using the Trip through table
//       include: [{ model: Traveller, through: Trip, as: 'location_travellers' }]
//     });

//     if (!locationData) {
//       res.status(404).json({ message: 'No location found with this id!' });
//       return;
//     }

//     res.status(200).json(locationData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CREATE a location
// router.post('/', async (req, res) => {
//   try {
//     const locationData = await Location.create(req.body);
//     res.status(200).json(locationData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // DELETE a location
// router.delete('/:id', async (req, res) => {
//   try {
//     const locationData = await Location.destroy({
//       where: {
//         id: req.params.id
//       }
//     });

//     if (!locationData) {
//       res.status(404).json({ message: 'No location found with this id!' });
//       return;
//     }

//     res.status(200).json(locationData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;