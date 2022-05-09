const User = require('./User');
const Project = require('./Project');
const Module = require('./Module');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.hasMany(Module, {
    foreignKeyConstraint: 'project_id',
    onDelete: 'CASCADE'
});

Module.belongsTo(Project, {
    foreignKey: 'project_id'
});

module.exports = { User, Project, Module };
