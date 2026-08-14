import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";

describe("portfolio regressions", () => {
  it("uses the valid contact email address", () => {
    render(<ContactSection />);

    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:oluisvipersonal@gmail.com",
    );
  });

  it("exposes and updates the mobile navigation state", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: "Abrir menu" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);

    expect(screen.getByRole("button", { name: "Fechar menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("navigation", { name: "Navegação mobile" })).toBeInTheDocument();
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.click(screen.getByRole("button", { name: "Fechar menu" }));
    expect(document.body.style.overflow).toBe("");
  });

  it("keeps alternating project descriptions aligned with their cards", () => {
    render(<ProjectsSection />);

    const ecoDescription = screen.getByText(/Plataforma de educação ambiental/i);
    expect(ecoDescription).toHaveClass("md:ml-auto");
    expect(ecoDescription.className).not.toContain("${isEven");
  });
});
