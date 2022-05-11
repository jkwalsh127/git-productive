const User = require('./User');
const Project = require('./Project');
const Activity = require('./Activity');
const Exercise = require('./Exercise');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.belongsToMany(Activity, {
  through: Exercise
});

Activity.belongsToMany(Project, {
  through: Exercise
});

module.exports = { User, Project, Activity, Exercise  };
