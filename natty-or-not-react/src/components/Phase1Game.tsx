// Phase1Game.tsx
import React, { useState, useCallback } from 'react';
import { generatePhase1Questions } from '../gameData';
import './Phase1Game.css';

interface Phase1GameProps {
    onComplete: (score: number) => void;
}

export const Phase1Game: React.FC<Phase1GameProps> = ({ onComplete }) => {
    const [questions] = useState(() => generatePhase1Questions(5));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<'ai' | 'real' | null>(null);

    const question = questions[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;

    // useCallback para memoizar função de resposta
    const handleAnswer = useCallback((answer: 'ai' | 'real') => {
        setSelectedAnswer(answer);
        setAnswered(true);
        if (answer === question.correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }
    }, [question.correctAnswer]);

    // useCallback para memoizar função de próxima questão
    const handleNext = useCallback(() => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prevQuestion => prevQuestion + 1);
            setAnswered(false);
            setSelectedAnswer(null);
        }
    }, [currentQuestion, questions.length]);

    const isGameComplete = currentQuestion === questions.length - 1 && answered;

    return (
        <div className="phase1-container">
            <div className="header">
                <h1>🎯 FASE 1: É Gerada por IA?</h1>
                <div className="progress">
                    Questão {currentQuestion + 1} de {questions.length}
                </div>
            </div>

            <div className="image-container">
                <img
                    src={question.image.url}
                    alt="Desafio para identificar"
                    className="game-image"
                />
            </div>

            <div className="question">
                <p>Esta imagem foi gerada por Inteligência Artificial?</p>
            </div>

            <div className="buttons">
                <button
                    onClick={() => handleAnswer('ai')}
                    disabled={answered}
                    className={`btn btn-ai ${answered && selectedAnswer === 'ai'
                        ? isCorrect ? 'correct' : 'incorrect'
                        : ''
                        }`}
                >
                    🤖 Sim, é IA
                </button>
                <button
                    onClick={() => handleAnswer('real')}
                    disabled={answered}
                    className={`btn btn-real ${answered && selectedAnswer === 'real'
                        ? isCorrect ? 'correct' : 'incorrect'
                        : ''
                        }`}
                >
                    📷 Não, é Real
                </button>
            </div>

            {answered && (
                <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <p>
                        {isCorrect
                            ? '✅ Acertou!'
                            : '❌ Errou!'}
                    </p>
                    <p className="answer">
                        Resposta: Esta é uma imagem {question.image.type === 'ai' ? 'GERADA POR IA' : 'REAL'}
                    </p>
                </div>
            )}

            <div className="footer">
                <div className="score">Pontuação: {score}/{questions.length}</div>
                {answered && currentQuestion < questions.length - 1 && (
                    <button onClick={handleNext} className="btn btn-next">
                        Próxima →
                    </button>
                )}
                {isGameComplete && (
                    <div className="final-score">
                        <p>🎉 Você acertou {score} de {questions.length}!</p>
                        <button onClick={() => onComplete(score)} className="btn btn-next">
                            Continuar para Fase 2 →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
