function Header() {
  return (
    <header className="header">
      <div className="logo">🍋 Little Lemon</div>

      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#specials">Specials</a>
        <a href="#about">About</a>
        <a href="#reservation">Reserve a Table</a>
      </nav>
    </header>
  );
}

export default Header;