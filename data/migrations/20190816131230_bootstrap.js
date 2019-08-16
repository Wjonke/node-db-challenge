
exports.up = function(knex) {
  return knex.schema

  
    .createTable('projects', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
      tbl.string('description', 4000);
      tbl.bool('completed', false);
    })


    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description', 4000);
      tbl.bool('completed', false);
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); 
    })


    .createTable('resources', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
      tbl.string('description', 4000);

    })


    .createTable('projects_resources', tbl => {
      tbl.increments();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); 
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); 
    });
};




exports.down = function(knex) {
  
return knex.schema
    .dropTableIfExists('')
    .dropTableIfExists('')
    .dropTableIfExists('')




};
