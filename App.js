import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; // Importe ThemeProvider
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    {/* Adicione mais rotas aqui conforme necessário */}
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
