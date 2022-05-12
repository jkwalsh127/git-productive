const User = require('./User');
const Project = require('./Project');
const Code = require('./Code');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Code, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Code.belongsTo(User, {
  foreignKey: 'user_id',
})

module.exports = { User, Project, Code };
