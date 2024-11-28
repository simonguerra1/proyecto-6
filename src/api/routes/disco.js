const {
  getDiscos,
  postDisco,
  updateDisco,
  deleteDisco
} = require('../controllers/disco')

const discosRouter = require('express').Router()

discosRouter.get('/', getDiscos)
discosRouter.post('/', postDisco)
discosRouter.put('/:id', updateDisco)
discosRouter.delete('/:id', deleteDisco)

module.exports = discosRouter
