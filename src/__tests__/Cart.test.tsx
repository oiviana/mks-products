import { fireEvent, render, screen } from "@testing-library/react";
import CartProvider from "@/contexts/CartContext";
import CartButton from "@/components/Cart/CartButton";
import Cart from "@/components/Cart";
import AddToCart from "@/components/Cart/AddToCart";
import { ProductProps } from "@/components/Products/types";

const mockProduct = {
    id: 1,
    name: 'Product Name',
    photo: '/test.png',
    price: "9.99",

  } as ProductProps;

describe("Cart", () => {
  it("MiniCart button should open cart", () => {
    render(
      <CartProvider>
        <CartButton />
        <Cart />
      </CartProvider>
    );
    const cartContainer = screen.getByTestId("cart");
    expect(cartContainer).toHaveClass("close");
    fireEvent.click(screen.getByTestId("minicart-button"));
    expect(cartContainer).toHaveClass("open");
  });

  it("Close button should close cart", () => {
    render(
      <CartProvider>
        <CartButton />
        <Cart />
      </CartProvider>
    );
    const cartContainer = screen.getByTestId("cart");
    expect(cartContainer).toHaveClass("close");
    fireEvent.click(screen.getByTestId("minicart-button"));
    expect(cartContainer).toHaveClass("open");
    fireEvent.click(screen.getByTestId("close-cart-button"));
    expect(cartContainer).toHaveClass("close");
  });

  it("Add to cart button should add products", () => {
    render(
      <CartProvider>
        <Cart />
        <AddToCart {...mockProduct} />
      </CartProvider>
    );
    fireEvent.click(screen.getByTestId("add-to-cart"));
    const cartProducts = screen.getByTestId("cart-products");
    expect(cartProducts).toBeInTheDocument();
  });
});
