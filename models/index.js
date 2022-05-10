const User = require('./User');
const Project = require('./Project');
const Activity = require('./Activity');

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

Project.hasMany(Activity, {
  foreignKey: 'project_id',
});

Activity.belongsToMany(Project, {
  foreignKey: 'project_id'
});

module.exports = { User, Project, Module, Activity };
