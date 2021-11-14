module.exports = (sequelize, DataTypes) => {
  const UIC-CNTRL-No = sequelize.define('UIC-CNTRL-No', {
    title: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Todo.associate = (models) => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    });
  };

  return Todo;
};
