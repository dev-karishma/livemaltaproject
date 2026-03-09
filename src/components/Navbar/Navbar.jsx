
// import { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import logos from "../../assets/Images/logos.png"

// const NAV_LINKS = [
//   {
//     label: "Ascencia Malta",
//     dropdown: [
//       { label: "About Us",          path: "/aboutus" },
//       { label: "Our Team",          path: "/our-team" },
//       { label: "Work With Us",      path: "/work-with-us" },
//       { label: "Accredited Member", path: "/accredited-member" },
//       { label: "Erasmus+",          path: "/erasmus" },
//     ],
//   },
//   { label: "Programmes",        path: "/programmes" },
//   { label: "English School",    path: "/english-school" },
//   { label: "Living in Malta",   path: "/living-in-malta" },
//   { label: "Quality Assurance", path: "/quality-assurance" },
//   { label: "Fees",              path: "/fees" },
//   { label: "Events",            path: "/events" },
// ];


// function NavItem({ item }) {
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const handler = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);


//   if (!item.dropdown) {
//     return (
//       <li>
//         <Link to={item.path}>{item.label}</Link>
//       </li>
//     );
//   }


//   return (
//     <li
//       ref={ref}
//       className={`has-dropdown${open ? " dropdown-open" : ""}`}
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       <button
//         className="dropdown-trigger"
//         onClick={() => setOpen((v) => !v)}
//       >
//         {item.label}
//         {/* <svg className="dropdown-arrow" viewBox="0 0 10 6" width="10" height="6">
//           <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
//             fill="none" strokeLinecap="round" strokeLinejoin="round" />
//         </svg> */}
//       </button>

//       <ul className="dropdown-menu">
//         {item.dropdown.map((sub) => (
//           <li key={sub.label}>
//             <Link to={sub.path} onClick={() => setOpen(false)}>
//               {sub.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </li>
//   );
// }

// /* ── Main Navbar ── */
// export default function Navbar() {
//   const [menuOpen, setMenuOpen]       = useState(false);
//   const [mobileDropOpen, setMobileDrop] = useState(null);
//   const navigate = useNavigate();

//   const openMenu  = () => { setMenuOpen(true);  document.body.style.overflow = "hidden"; };
//   const closeMenu = () => { setMenuOpen(false); document.body.style.overflow = ""; setMobileDrop(null); };
//   const toggleMobileDrop = (label) =>
//     setMobileDrop((prev) => (prev === label ? null : label));

//   return (
//     <>
    
//       <nav className="navbar">
//         <Link to="/" className="navbar__logo">
//           <img src={logos} alt="Ascencia Malta" />
//         </Link>

      
//         <ul className="navbar__links">
//           {NAV_LINKS.map((item) => (
//             <NavItem key={item.label} item={item} />
//           ))}
//         </ul>

       
//         <div className="navbar__hamburger-icon" onClick={openMenu}>
//           <span />
//         </div>

      
//         <Link to="/contactform" className="navbar__contact">
//           Contact Us
//         </Link>

      
//         <button className="navbar__mobile-toggle" onClick={openMenu} aria-label="Open menu">
//           <span className="bar" />
//           <span className="bar" />
//           <span className="bar" />
//         </button>
//       </nav>

     
//       <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
//         <div className="mobile-menu__header">
//           <Link to="/" onClick={closeMenu}>
//             <img src={logos} alt="Ascencia Malta" className="mobile-logo" />
//           </Link>
//           <button className="mobile-menu__close" onClick={closeMenu} aria-label="Close menu">
//             {/* <svg viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round">
//               <line x1="18" y1="6" x2="6"  y2="18" />
//               <line x1="6"  y1="6" x2="18" y2="18" />
//             </svg> */}
//           </button>
//         </div>

//         <ul className="mobile-menu__links">
//           {NAV_LINKS.map((item) => (
//             <li key={item.label} className={item.dropdown ? "mobile-has-dropdown" : ""}>
//               {item.dropdown ? (
//                 <>
//                   <button
//                     className={`mobile-dropdown-toggle${mobileDropOpen === item.label ? " active" : ""}`}
//                     onClick={() => toggleMobileDrop(item.label)}
//                   >
//                     {item.label}
//                     {/* <svg className="dropdown-arrow" viewBox="0 0 10 6" width="10" height="6">
//                       <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
//                         fill="none" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg> */}
//                   </button>

//                   {mobileDropOpen === item.label && (
//                     <ul className="mobile-submenu">
//                       {item.dropdown.map((sub) => (
//                         <li key={sub.label}>
//                           <Link to={sub.path} onClick={closeMenu}>{sub.label}</Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </>
//               ) : (
//                 <Link to={item.path} onClick={closeMenu}>{item.label}</Link>
//               )}
//             </li>
//           ))}
//         </ul>

//         <Link to="/contactform" className="mobile-menu__contact" onClick={closeMenu}>
//           Contact Us
//         </Link>
//       </div>
//     </>
//   );
// }




import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logos from "../../assets/Images/logos.png";

const NAV_LINKS = [
  {
    label: "Ascencia Malta",
    dropdown: [
      { label: "About Us",          path: "/aboutus" },
      { label: "Our Team",          path: "/our-team" },
      { label: "Work With Us",      path: "/work-with-us" },
      { label: "Accredited Member", path: "/accredited-member" },
      { label: "Erasmus+",          path: "/erasmus" },
    ],
  },
  { label: "Programmes",        path: "/programmes" },
  { label: "English School",    path: "/english-school" },
  { label: "Living in Malta",   path: "/living-in-malta" },
  { label: "Quality Assurance", path: "/quality-assurance" },
  { label: "Fees",              path: "/fees" },
  { label: "Events",            path: "/events" },
];

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.dropdown) {
    return <li><Link to={item.path}>{item.label}</Link></li>;
  }

  return (
    <li
      ref={ref}
      className={`has-dropdown${open ? " dropdown-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="dropdown-trigger" onClick={() => setOpen(v => !v)}>
        {item.label}
        <svg className="dropdown-arrow" viewBox="0 0 10 6" width="9" height="9">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.8"
            fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <ul className="dropdown-menu">
        {item.dropdown.map(sub => (
          <li key={sub.label}>
            <Link to={sub.path} onClick={() => setOpen(false)}>{sub.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [mobileDropOpen, setMobileDrop] = useState(null);

  const openMenu  = () => { setMenuOpen(true);  document.body.style.overflow = "hidden"; };
  const closeMenu = () => { setMenuOpen(false); document.body.style.overflow = ""; setMobileDrop(null); };
  const toggleMobileDrop = (label) => setMobileDrop(prev => prev === label ? null : label);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src={logos} alt="Ascencia Malta" />
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(item => <NavItem key={item.label} item={item} />)}
        </ul>

        {/* Desktop Contact */}
        <Link to="/contactform" className="navbar__contact">Contact Us</Link>

        {/* Hamburger — mobile/tablet */}
        <button className="navbar__mobile-toggle" onClick={openMenu} aria-label="Open menu">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      {/* Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} />}

      {/* Mobile Drawer */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <div className="mobile-menu__header">
          <Link to="/" onClick={closeMenu}>
            <img src={logos} alt="Ascencia Malta" className="mobile-logo" />
          </Link>
          <button className="mobile-menu__close" onClick={closeMenu} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" width="22" height="22">
              <line x1="18" y1="6" x2="6"  y2="18"/>
              <line x1="6"  y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <ul className="mobile-menu__links">
          {NAV_LINKS.map(item => (
            <li key={item.label} className={item.dropdown ? "mobile-has-dropdown" : ""}>
              {item.dropdown ? (
                <>
                  <button
                    className={`mobile-dropdown-toggle${mobileDropOpen === item.label ? " active" : ""}`}
                    onClick={() => toggleMobileDrop(item.label)}
                  >
                    {item.label}
                    <svg className={`mob-arrow${mobileDropOpen === item.label ? " rotated" : ""}`}
                      viewBox="0 0 10 6" width="10" height="10">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.8"
                        fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {mobileDropOpen === item.label && (
                    <ul className="mobile-submenu">
                      {item.dropdown.map(sub => (
                        <li key={sub.label}>
                          <Link to={sub.path} onClick={closeMenu}>{sub.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.path} onClick={closeMenu}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>

        <Link to="/contactform" className="mobile-menu__contact" onClick={closeMenu}>
          Contact Us
        </Link>
      </div>
    </>
  );
}