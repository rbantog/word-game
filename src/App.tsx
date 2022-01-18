import { ReactElement } from 'react';

import { GameBoard } from './components/GameBoard/GameBoard';
import './App.css';

function App(): ReactElement {
    return (
        <div className="app">
            <header className="app-header">word game</header>
            <main className="main-game">
                <GameBoard />
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
