const sinon = require('sinon')
const { expect } = require('chai')
const service = require('../../../services/productsService')
const { listAllProducts } = require('../../../controllers/productsController')

describe('Ao chamar a camada Controller retornar os produtos do banco', () => {
  describe('Quando existem produtos no banco', () => {
    const res = {}
    const req = {}
    beforeEach(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns()
      sinon.stub(service, 'listAllProducts').resolves([{
        "id": 1,
        "name": "produto A",
        "quantity": 10
      }])
    })

    afterEach(() => {
      service.listAllProducts.restore()
    })

    it('É chamado o codigo 200 pelo status ', async () => {
      await listAllProducts(req, res)
      expect(res.status.calledWith(200)).to.be.equal(true)
    })

    it('É chamado o metodo JSON com um objeto dentro', async () => {
      await listAllProducts(req, res)
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true)
    })
  })
})