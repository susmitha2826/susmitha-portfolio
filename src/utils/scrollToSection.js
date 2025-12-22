export const scrollToSection = (id, setMobileMenuOpen) => {
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    if (setMobileMenuOpen) setMobileMenuOpen(false);
  }
};