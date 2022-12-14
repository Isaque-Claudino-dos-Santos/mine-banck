import sequelize from './conection';

try {
  sequelize.authenticate();
} catch (err) {
  console.log(err);
}

export default sequelize;
