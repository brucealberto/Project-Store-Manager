const sinon = require('sinon')
const { expect } = require('chai')
const serviceSales = require('../../../services/salesService')
const { listAllSales } = require('../../../controllers/salesController')

describe('Ao chamar a camada Controller retornar as vendas do banco', () => {
  describe('Quando existem vendas no banco', () => {
    const res = {}
    const req = {}
    beforeEach(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns()
      sinon.stub(serviceSales, 'listAllSales').resolves([{
        "saleId": 1,
        "date": "2021-09-09T04:54:29.000Z",
        "productId": 1,
        "quantity": 2
      }])
    })

    afterEach(() => {
      serviceSales.listAllSales.restore()
    })

    it('É chamado o codigo 200 pelo status ', async () => {
      await listAllSales(req, res)
      expect(res.status.calledWith(200)).to.be.equal(true)
    })

    it('É chamado o metodo JSON com um objeto dentro', async () => {
      await listAllSales(req, res)
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true)
    })
  })
})