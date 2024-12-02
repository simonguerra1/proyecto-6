const {
  getDiscos,
  postDisco,
  updateDisco,
  deleteDisco,
  getDisco
} = require('../controllers/disco')

const discosRouter = require('express').Router()

discosRouter.get('/', getDiscos)
discosRouter.post('/', postDisco)
discosRouter.put('/:id', updateDisco)
discosRouter.delete('/:id', deleteDisco)
discosRouter.get('/:id', getDisco)

module.exports = discosRouter
