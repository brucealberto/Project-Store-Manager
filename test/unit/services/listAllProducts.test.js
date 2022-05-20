const sinon = require("sinon");
const { expect } = require("chai");
const model = require("../../../models/ProductsModel");
const { listAllProducts } = require("../../../services/productsService");

describe("Ao chamar a camada Service retornar os produtos do banco", () => {
  describe("Quando não existir produto no banco", () => {
    beforeEach(() => {
      sinon.stub(model, "listAllProducts").resolves([]);
    });
    afterEach(() => {
      model.listAllProducts.restore();
    });

    it("Retorna um array ", async () => {
      const result = await listAllProducts();
      expect(result).to.be.an("array");
    });

    it("O array deve estar vazio ", async () => {
      const result = await listAllProducts();
      expect(result).to.be.empty;
    });
  });

  describe("Quando existir produtos no banco", () => {
    beforeEach(() => {
      sinon.stub(model, "listAllProducts").resolves([
        {
          id: 1,
          name: "produto A",
          quantity: 10,
        },
      ]);
    });

    afterEach(() => {
      model.listAllProducts.restore();
    });

    it("Retorna um array ", async () => {
      const result = await listAllProducts();
      expect(result).to.be.an("array");
    });

    it('O array deve ter um objeto com as chaves "id", "name", "quantity" ', async () => {
      const result = await listAllProducts();
      expect(result[0]).to.be.deep.equal({
        id: 1,
        name: "produto A",
        quantity: 10,
      });
    });
  });
});
