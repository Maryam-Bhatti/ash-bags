"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { CartItem } from "@/types/product";

type StoreContextValue = {
  cart: CartItem[];
  itemCount: number;
  addToCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const CART_STORAGE_KEY = "ash-bags-demo-cart";
const EMPTY_CART: CartItem[] = [];
const listeners = new Set<() => void>();
let currentCart = EMPTY_CART;
let hasReadCart = false;

function isCartItemList(value: unknown): value is CartItem[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item: unknown) =>
        typeof item === "object" &&
        item !== null &&
        "productId" in item &&
        typeof item.productId === "string" &&
        "quantity" in item &&
        typeof item.quantity === "number" &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0,
    )
  );
}

function getCartSnapshot() {
  if (!hasReadCart) {
    hasReadCart = true;
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsed: unknown = JSON.parse(savedCart);
        if (isCartItemList(parsed)) {
          currentCart = parsed;
        } else {
          console.warn("The saved Ash Bags cart had an invalid format and was ignored.");
          currentCart = EMPTY_CART;
        }
      } else {
        currentCart = EMPTY_CART;
      }
    } catch (error) {
      console.error("Could not restore the saved Ash Bags demo cart.", error);
      currentCart = EMPTY_CART;
    }
  }
  return currentCart;
}

function getServerCartSnapshot() {
  return EMPTY_CART;
}

function subscribeToCart(listener: () => void) {
  listeners.add(listener);
  const handleStorage = (event: StorageEvent) => {
    if (event.key === CART_STORAGE_KEY || event.key === null) {
      hasReadCart = false;
      getCartSnapshot();
      listeners.forEach((notify) => notify());
    }
  };
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function saveCart(nextCart: CartItem[]) {
  currentCart = nextCart;
  hasReadCart = true;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextCart));
  } catch (error) {
    console.error("Could not save the Ash Bags demo cart.", error);
  }
  listeners.forEach((notify) => notify());
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const cart = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot,
    getServerCartSnapshot,
  );

  const addToCart = useCallback((productId: string) => {
    const current = getCartSnapshot();
    const existing = current.find((item) => item.productId === productId);
    saveCart(
      existing
        ? current.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...current, { productId, quantity: 1 }],
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) return;
    saveCart(
      getCartSnapshot().map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    );
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    saveCart(getCartSnapshot().filter((item) => item.productId !== productId));
  }, []);

  const clearCart = useCallback(() => saveCart([]), []);
  const itemCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const value = useMemo(
    () => ({ cart, itemCount, addToCart, updateQuantity, removeFromCart, clearCart }),
    [cart, itemCount, addToCart, updateQuantity, removeFromCart, clearCart],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return context;
}
