import { create } from "zustand";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  info: string;
  img: any;
}

export interface IBasketState {
  products: Array<IProduct & { quantity: number }>;
  addProduct: (product: IProduct) => void;
  reduceProduct: (product: IProduct) => void;
  clearCart: () => void;
  items: number;
  total: number;
}

const useBasketStore = create<IBasketState>()((set) => ({
  products: [],
  items: 0,
  total: 0,
  addProduct: (product) => {
    set((state) => {
      state.items += 1;
      state.total += product.price;
      const hasProduct = state.products.find((p) => p.id === product.id);

      if (hasProduct) {
        hasProduct.quantity += 1;
        return { products: [...state.products] };
      } else {
        return { products: [...state.products, { ...product, quantity: 1 }] };
      }
    });
  },
  reduceProduct: (product) => {
    set((state) => {
      state.total -= product.price;
      state.items -= 1;
      return {
        products: state.products.map((p) => {
          if (p.id === product.id) {
            p.quantity -= 1;
          }
          return p;
        }).filter((p) => p.quantity > 0),
      };
    });
  },
  clearCart: () => set({ products: [], items: 0, total: 0 }),
}));


export default useBasketStore;