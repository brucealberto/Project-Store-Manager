const sinon = require('sinon')
const { expect } = require('chai')
const modelSales = require('../../../models/SalesModel');
const { listAllSales } = require('../../../services/salesService')

describe('Ao chamar a camada Service retornar as vendas do banco', () => {
  describe('Quando não existir vendas no banco', () => {
    beforeEach(() => {
      sinon.stub(modelSales, 'listAllSales').resolves([])
    })
    afterEach(() => {
      modelSales.listAllSales.restore()
    })

    it('Retorna um array ', async () => {
      const result = await listAllSales()
      expect(result).to.be.an('array')
    })

    it('O array deve estar vazio ', async () => {
      const result = await listAllSales()
      expect(result).to.be.empty
    })
  })

  describe('Quando existir vendas no banco', () => {
    beforeEach(() => {
      sinon.stub(modelSales, 'listAllSales').resolves([{
        "saleId": 1,
        "date": "2021-09-09T04:54:29.000Z",
        "productId": 1,
        "quantity": 2
      }])
    })

    afterEach(() => {
      modelSales.listAllSales.restore()
    })
    
    it('Retorna um array ', async () => {
      const result = await listAllSales()
      expect(result).to.be.an('array')
    })

    it('O array deve ter um objeto com as chaves "saleId", "date", "productId", "quantity" ', async () => {
      const result = await listAllSales()
      expect(result[0]).to.be.deep.equal({
        "saleId": 1,
        "date": "2021-09-09T04:54:29.000Z",
        "productId": 1,
        "quantity": 2
      })
    })
  })
})