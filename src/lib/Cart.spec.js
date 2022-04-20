import Cart from './Cart';

describe('Cart', () => {
  it('Deve adicionar um item no carrinho', () => {
    Cart.addProduct({ nome: 'Coca-cola', preco: 10 });

    expect(Cart.total).toBe(10);
  });

  it('Deve remover um item previamente adicionado no carrinho', () => {
    Cart.addProduct({ nome: 'Coca-cola', preco: 10 });
    Cart.removeProduct({ nome: 'Coca-cola' });

    expect(Cart.total).toBe(0);
    expect(Cart.itens.length).toBe(0);
  });

  it('Deve exibir um resumo do carrinho', () => {
    // TODO: Adicionar uma Coca-cola no carrinho antes do expect abaixo
    // TODO: verificar no expect um total == 10 e quantidade == 1
    // TODO: modificar o código do arquivo Cart para que todos os testes passem
    expect(Cart.summary()).toEqual({
      total: 0,
      itemsQuantity: 0,
    });
  });

  it('Deve finalizar um carrinho com produtos adicionados', () => {
    Cart.addProduct({ nome: 'Coca-cola', preco: 10 });
    Cart.addProduct({ nome: 'Pasta de dente', preco: 8 });

    expect(Cart.checkout()).toEqual({
      total: 18,
      itemsQuantity: 2,
    });

    expect(Cart.total).toBe(0);
    expect(Cart.itens.length).toBe(0);
  });
});