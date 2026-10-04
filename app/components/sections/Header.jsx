export default function Header() {
  return (
    <header className="site-header" id="top">
      <a className="brand" href="#home" aria-label="Avelith Studio home">
        <img
          className="brand-mark-image"
          src="/assets/avelith-mark-transparent.png"
          alt="Avelith symbol"
        />
        <span className="brand-word">
          AVELITH<small>STUDIO</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#studio">Studio</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="menu-project magnetic" href="#contact">
        <span>Start a project</span>
        <i>↗</i>
      </a>
    </header>
  );
}
