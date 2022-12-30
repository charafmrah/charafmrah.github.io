import React, { useState } from "react";

const Nav = () => {
  [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <nav>
        <div id="nav-links">
          <a class="nav-link" href="#">
            <h2 class="nav-link-label rubik-font">Home</h2>
            <img
              class="nav-link-image"
              src="https://images.unsplash.com/photo-1666091863721-54331a5db52d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            />
          </a>
          <a class="nav-link" href="#">
            <h2 class="nav-link-label rubik-font">Work</h2>
            <img
              class="nav-link-image"
              src="https://images.unsplash.com/photo-1666055642230-1595470b98fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80"
            />
          </a>
          <a class="nav-link" href="#">
            <h2 class="nav-link-label rubik-font">About</h2>
            <img
              class="nav-link-image"
              src="https://images.unsplash.com/photo-1666005487638-61f45819c975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            />
          </a>
          <a class="nav-link" href="#">
            <h2 class="nav-link-label rubik-font">Contact</h2>
            <img
              class="nav-link-image"
              src="https://images.unsplash.com/photo-1665910407771-bc84ad45676b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
            />
          </a>
          <a class="nav-link" href="#">
            <h2 class="nav-link-label rubik-font">Join Us</h2>
            <img
              class="nav-link-image"
              src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            />
          </a>
        </div>
      </nav>

      <button id="nav-toggle" type="button" onclick={toggleNav}>
        <i class="open fa-light fa-bars-staggered"></i>
        <i class="close fa-light fa-xmark-large"></i>
      </button>
    </>
  );
};

export default Nav;
