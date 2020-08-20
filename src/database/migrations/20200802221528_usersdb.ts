exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('id').notNullable();
    table.string('lat').notNullable();
    table.string('long').notNullable();
    table.string('hour').notNullable();
    table.string('date').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};