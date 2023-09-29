import { NavSubItem } from "./NavSubItem";
import { useState } from "react";
import { Logo } from "./Logo";
const navSubItems = ["Aktualności", "Historia", "Nasz team", "Osiągnięcia"];
export const Navigation = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const handleShowSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };
    return (
        <header className="header">
            <div className="wrapper">
                <Logo />
                <nav>
                    <ul className="list">
                        <li
                            className="list-item"
                            onMouseEnter={handleShowSubMenu}
                            onMouseLeave={handleShowSubMenu}
                        >
                            <a className="list-link" href="google.com">
                                O firmie
                            </a>
                            {showSubMenu && (
                                <ul className="nested-list">
                                    {navSubItems.map((text, index) => {
                                        return (
                                            <NavSubItem
                                                linkText={text}
                                                key={index}
                                            />
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                        <li className="list-item">
                            <a className="list-link" href="google.com">
                                galeria
                            </a>
                        </li>
                        <li className="list-item">
                            <a className="list-link" href="google.com">
                                kontakt
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
