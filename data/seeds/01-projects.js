exports.seed = function(knex, Promise) {

  return knex('projects').insert(

    [
      {
      "name":"Ceratotherium simum",
      "description":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut.",
      "completed":"false"
    }, 
    {
      "name": "Hippotragus equinus",
      "description":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut.",
      "completed":"false"
    }, 
    {
      "name": "Dasyurus maculatus",
      "description":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut.",
      "completed":"false"
    }, 
    {
      "name": "Mephitis mephitis",
      "description":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut.",
      "completed":"false"
    }, 
    {
      "name": "Marmota monax",
      "description":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut.",
      "completed":"false"
    }, 
    {
      "name": "Galago crassicaudataus",
      "description":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut.",
      "completed":"false"
    }
  ]);
};

	  