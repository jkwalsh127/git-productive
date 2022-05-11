const User = require('./User');
const Project = require('./Project');
const Activity = require('./Activity');
const Exercise = require('./Exercise');
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

Project.belongsToMany(Activity, {
  through: Exercise
});

Activity.belongsToMany(Project, {
  through: Exercise
});

Code.belongsTo(User, {
  foreignKey: 'user_id',
})

module.exports = { User, Project, Activity, Exercise, Code  };
