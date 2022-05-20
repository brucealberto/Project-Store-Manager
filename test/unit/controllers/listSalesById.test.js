const sinon = require('sinon')
const { expect } = require('chai')
const serviceSales = require('../../../services/salesService')
const {listSalesById} = require('../../../controllers/salesController')

describe('Ao chamar a camada Controller retornar uma venda do banco', () => {
  describe('Quando existe um produto no banco', () => {
    const res = {}
    const req = {}
    beforeEach(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns()
      req.params = {id:1}
      sinon.stub(serviceSales, 'listsalesById').resolves(  [
        {
          "date": "2021-09-09T04:54:29.000Z",
          "productId": 1,
          "quantity": 2
        },
        {
          "date": "2021-09-09T04:54:54.000Z",
          "productId": 2,
          "quantity": 2
        }
      ])
    })

    afterEach(() => {
      serviceSales.listsalesById.restore()
    })

    it('É chamado o codigo 200 pelo status ', async () => {
      await listSalesById(req, res)
      expect(res.status.calledWith(200)).to.be.equal(true)
    })

    it('É chamado o metodo JSON com um objeto dentro', async () => {
      await listSalesById(req, res)
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true)
    })
  })
})