import { Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Paketi",
    href: "/cards",
    icon: "bi bi-card-text",
  },

  {
    title: "Dodaj paket",
    href: "/forms",
    icon: "bi bi-link",
  },
];

const Sidebar = () => {
  let location = useLocation();

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
