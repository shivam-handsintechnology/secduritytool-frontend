import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import data from "../../helpers/dashboard";

export default function Menu() {
  const userreducerDetails = useSelector((state) => state.UserReducer);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(data.map(category => ({ name: category.Category, isOpen: false })));

  const toggleSubMenu = (name) => {
    setIsSubMenuOpen(prevState => prevState.map(item =>
      item.name === name ? { ...item, isOpen: !item.isOpen } : item
    ));
  };

  const isOpen = (name) => {
    const foundItem = isSubMenuOpen.find(item => item.name === name);
    return foundItem ? foundItem.isOpen : false;
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="nav">
          {data.map((category, index) => (
            <li key={index} className={`nav-item ${isOpen(category.Category) ? 'menu-open' : ''}`}>
              {category.link ? (
                <Link to={`${category.link}`} className="nav-link">
                  {category.Category}
                </Link>
              ) : (
                <div className="nav-link" onClick={() => toggleSubMenu(category.Category)}>
                  {category.Category}
                  <i className={`fas fa-angle-right right ${isOpen(category.Category) ? 'open' : ''}`} />
                </div>
              )}
              {isOpen(category.Category) && (
                <ul className="nav nav-treeview">
                  {category.UseCases.map((useCase, i) => (
                    <li key={i} className="nav-item">
                      <Link to={`${useCase.link}`} className="nav-link">
                        {useCase.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
