import React, { useContext } from 'react';
import './Header.css'; // Ajuste o caminho se necessário
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './ThemeContext'; // Ajuste o caminho conforme necessário

const Header = () => {
    const { i18n } = useTranslation();
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <header className="header">
            <nav className="navigation-links">
                <a href="/">Home</a> {/* Link para a home page */}
                {/* Outros links de navegação */}
            </nav>
            <div className="language-switch">
                <button onClick={() => changeLanguage('en')}>EN</button>
                <button onClick={() => changeLanguage('es')}>ES</button>
                <button onClick={() => changeLanguage('pt')}>PT</button>
                <button onClick={toggleTheme}>
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    );
};

export default Header;
