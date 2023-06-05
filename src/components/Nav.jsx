import React from "react";

const NavbarItem = ({ href, text }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <li>
      <a href={href} onClick={handleClick}>
        {text}
      </a>
    </li>
  );
};

const Navbar = () => {
  const navItems = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <nav>
      <h2 className="logo">AmarGupta.Tech</h2>
      <ul>
        {navItems.map((item, index) => (
          <NavbarItem key={index} href={item.href} text={item.text} />
        ))}
        <li>
          <i className="fa-solid fa-bars-staggered mobile-menu"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
