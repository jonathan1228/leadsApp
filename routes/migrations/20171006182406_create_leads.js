exports.up = function(knex, Promise) {
  return knex.schema.createTable('leads', function(table){
    table.increments();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.string('firstName');
    table.string('lastName');
    table.string('phoneNumber');
    table.string('email');
    table.string('address');
    table.integer('homeSquareFootage');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('leads');
};
