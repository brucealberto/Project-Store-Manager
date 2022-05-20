const sinon = require('sinon')
const { expect } = require('chai')
const { listAllSales } = require('../../../models/SalesModel')
const connection = require('../../../models/connection');

describe('Ao constar a camada Model retornar os produtos do banco', () => {
  describe('Quando não existir vendas no banco', () => {
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([[]])
    })
    afterEach(() => {
      connection.execute.restore()
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
      sinon.stub(connection, 'execute').resolves([[{
      "saleId": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    }]])
    })
    afterEach(() => {
      connection.execute.restore()
    })
    
    it('Retorna um array ', async () => {
      const result = await listAllSales()
      expect(result).to.be.an('array')
    })

    it('O array deve ter um objeto com as chaves "saleId", "date", "productId", "quantity" ', async () => {
      const result = await listAllProducts()
      expect(result).to.be.deep.equal({
        "saleId": 1,
        "date": "2021-09-09T04:54:29.000Z",
        "productId": 1,
        "quantity": 2
      })
    })
  })
})