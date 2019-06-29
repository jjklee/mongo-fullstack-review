const router = require('express').Router();
const controllers = require('./controller');

router
  .route('/todos/')
  .get(controllers.get)
  .post(controllers.post)

router 
  .route('/todos/:id')
  .delete(controllers.destroy)
  // .put(controller.update)


module.exports = router;
