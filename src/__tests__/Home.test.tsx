import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import CartProvider from "@/contexts/CartContext";

it("Home should has Header", () => {
    render(
      <CartProvider>
        <Header />
      </CartProvider>
    );

    expect(screen.getByText('mks')).toBeInTheDocument();
  });