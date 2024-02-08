import { makeAutoObservable } from 'mobx';
import { IProducts } from '../types/data';
import { log } from 'console';

class CartStore {
  cartProductsStore: IProducts[] = [];

  price = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment(product: IProducts) {
    const newCountProductIndex = this.cartProductsStore.findIndex(
      (item) => item.id === product.id
    );
    if (newCountProductIndex !== -1) {
      this.cartProductsStore[newCountProductIndex].count += 1;

      this.price += product.price;
    }
    console.log(this.cartProductsStore[0].count);
  }

  decrement(product: IProducts) {
    const newCountProductIndex = this.cartProductsStore.findIndex(
      (item) => item.id === product.id
    );
    if (newCountProductIndex !== -1) {
      if (this.cartProductsStore[newCountProductIndex].count > 1) {
        this.cartProductsStore[newCountProductIndex].count -= 1;
        this.price -= product.price;
      }
    }
  }

  addCart(item: IProducts) {
    const newCartProductIndex = this.cartProductsStore.findIndex(
      (product) => product.id === item.id
    );

    if (newCartProductIndex !== -1) {
      this.cartProductsStore[newCartProductIndex].count += 1;
      this.price +=
        (this.cartProductsStore[newCartProductIndex].count - 1) * item.price;
    } else {
      this.cartProductsStore.push({
        ...item,
        count: 1,
      });
      this.price += item.price;
      console.log(this.cartProductsStore[0].count);
    }
  }

  clearCart() {
    this.cartProductsStore.length = 0;
    this.price = 0;
  }

  deleteProductCart(item: IProducts) {
    const newCartProductIndex = this.cartProductsStore.findIndex(
      (product) => product.id === item.id
    );
    this.cartProductsStore = this.cartProductsStore.filter(
      (product) => product.id !== item.id,
      this.cartProductsStore.length > 1
        ? (this.price -=
            this.cartProductsStore[newCartProductIndex].count * item.price)
        : (this.price -= item.price)
    );

    // this.price =
    //   this.price -
    //   (this.cartProductsStore[newCartProductIndex].count + 1
    //     ? (this.cartProductsStore[newCartProductIndex].count + 1) * item.price
    //     : item.price);

    // console.log(this.cartProductsStore[0].count);

    console.log(this.cartProductsStore[0].count);
  }
}

export default new CartStore();
