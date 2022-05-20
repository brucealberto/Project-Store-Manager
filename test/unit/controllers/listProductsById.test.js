const sinon = require('sinon')
const { expect } = require('chai')
const serviceProducts = require('../../../services/productsService')
const {listProductsById} = require('../../../controllers/productsController')

describe('Ao chamar a camada Controller retornar um produto do banco', () => {
  describe('Quando existe um produto no banco', () => {
    const res = {}
    const req = {}
    beforeEach(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns()
      req.params = {id:1}
      sinon.stub(serviceProducts, 'listProductsById').resolves({
        "id": 1,
        "name": "produto A",
        "quantity": 10
      })
    })

    afterEach(() => {
      serviceProducts.listProductsById.restore()
    })

    it('É chamado o codigo 200 pelo status ', async () => {
      await listProductsById(req, res)
      expect(res.status.calledWith(200)).to.be.equal(true)
    })

    it('É chamado o metodo JSON com um objeto dentro', async () => {
      await listProductsById(req, res)
      expect(res.json.calledWith(sinon.match.object)).to.be.equal(true)
    })
  })
})