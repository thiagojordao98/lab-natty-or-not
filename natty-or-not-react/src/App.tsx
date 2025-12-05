import React, { useState, useCallback } from 'react';
import { Phase1Game } from './components/Phase1Game';
import { Phase2Game } from './components/Phase2Game';
import './App.css';

type GameState = 'menu' | 'phase1' | 'phase2' | 'results';

function App() {
    const [gameState, setGameState] = useState<GameState>('menu');
    const [phase1Score, setPhase1Score] = useState(0);
    const [phase2Score, setPhase2Score] = useState(0);

    // useCallback para memoizar funções de navegação
    const handleStartGame = useCallback(() => {
        setGameState('phase1');
        setPhase1Score(0);
        setPhase2Score(0);
    }, []);

    const handlePhase1Complete = useCallback((score: number) => {
        setPhase1Score(score);
        setGameState('phase2');
    }, []);

    const handlePhase2Complete = useCallback((score: number) => {
        setPhase2Score(score);
        setGameState('results');
    }, []);

    const handleBackToMenu = useCallback(() => {
        setGameState('menu');
    }, []);

    return (
        <div className="App">
            {gameState === 'menu' && (
                <div className="menu-container">
                    <div className="menu-content">
                        <h1 className="title">🎨 Natty or Not? 🤖</h1>
                        <p className="subtitle">Desafio de Autenticidade com IA</p>

                        <div className="description">
                            <p>🔍 Você consegue identificar se uma imagem foi gerada por IA ou é real?</p>
                            <p>Teste suas habilidades em 2 fases desafiadoras!</p>
                        </div>

                        <div className="phases-info">
                            <div className="phase-card">
                                <h3>🎯 Fase 1</h3>
                                <p>Identifique se a imagem é IA ou Real</p>
                                <span className="difficulty easy">Médio</span>
                            </div>
                            <div className="phase-card">
                                <h3>🎯 Fase 2</h3>
                                <p>Compare duas imagens e encontre a IA</p>
                                <span className="difficulty hard">Difícil</span>
                            </div>
                        </div>

                        <button onClick={handleStartGame} className="start-button">
                            🚀 Iniciar Desafio
                        </button>

                        <div className="footer-info">
                            <p>Made with ❤️ for #LabDIONattyOrNot</p>
                        </div>
                    </div>
                </div>
            )}

            {gameState === 'phase1' && (
                <Phase1Game onComplete={handlePhase1Complete} />
            )}

            {gameState === 'phase2' && (
                <Phase2Game onComplete={handlePhase2Complete} />
            )}

            {gameState === 'results' && (
                <div className="results-container">
                    <div className="results-content">
                        <h1>🎉 Desafio Concluído!</h1>

                        <div className="results-summary">
                            <div className="result-card">
                                <h3>Fase 1</h3>
                                <p className="big-score">{phase1Score}/5</p>
                                <p>acertos</p>
                            </div>
                            <div className="result-card">
                                <h3>Fase 2</h3>
                                <p className="big-score">{phase2Score}/5</p>
                                <p>acertos</p>
                            </div>
                        </div>

                        <div className="total-score">
                            <h2>Pontuação Total</h2>
                            <p className="final-score">{phase1Score + phase2Score}/10</p>
                        </div>

                        <div className="message">
                            {(phase1Score + phase2Score) >= 8 && (
                                <p>🏆 Excelente! Você tem um ótimo olho para IAs!</p>
                            )}
                            {(phase1Score + phase2Score) >= 5 && (phase1Score + phase2Score) < 8 && (
                                <p>👍 Bom trabalho! Continue praticando!</p>
                            )}
                            {(phase1Score + phase2Score) < 5 && (
                                <p>💪 Continue tentando! As IAs estão cada vez melhores!</p>
                            )}
                        </div>

                        <div className="action-buttons">
                            <button onClick={handleStartGame} className="btn btn-primary">
                                🔄 Jogar Novamente
                            </button>
                            <button onClick={handleBackToMenu} className="btn btn-secondary">
                                🏠 Voltar ao Menu
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
