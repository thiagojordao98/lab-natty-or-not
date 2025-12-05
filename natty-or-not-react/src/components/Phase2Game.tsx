// Phase2Game.tsx
import React, { useState, useCallback } from 'react';
import { generatePhase2Questions } from '../gameData';
import './Phase2Game.css';

interface Phase2GameProps {
    onComplete: (score: number) => void;
}

export const Phase2Game: React.FC<Phase2GameProps> = ({ onComplete }) => {
    const [questions] = useState(() => generatePhase2Questions(5));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<'left' | 'right' | null>(null);

    const question = questions[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;

    // useCallback para memoizar função de resposta
    const handleAnswer = useCallback((answer: 'left' | 'right') => {
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
        <div className="phase2-container">
            <div className="header">
                <h1>🎯 FASE 2: Qual é Gerada por IA?</h1>
                <div className="progress">
                    Questão {currentQuestion + 1} de {questions.length}
                </div>
            </div>

            <div className="question">
                <p>Qual das duas imagens foi gerada por Inteligência Artificial?</p>
            </div>

            <div className="images-container">
                <div
                    className={`image-box left ${answered && selectedAnswer === 'left'
                        ? isCorrect ? 'correct' : 'incorrect'
                        : ''
                        } ${answered && question.correctAnswer === 'left' ? 'was-correct' : ''}`}
                    onClick={() => !answered && handleAnswer('left')}
                >
                    <img src={question.left.url} alt="Opção da esquerda" />
                    <div className="image-label">Esquerda</div>
                    {answered && question.correctAnswer === 'left' && (
                        <div className="ai-badge">🤖 IA</div>
                    )}
                </div>

                <div className="vs-divider">VS</div>

                <div
                    className={`image-box right ${answered && selectedAnswer === 'right'
                        ? isCorrect ? 'correct' : 'incorrect'
                        : ''
                        } ${answered && question.correctAnswer === 'right' ? 'was-correct' : ''}`}
                    onClick={() => !answered && handleAnswer('right')}
                >
                    <img src={question.right.url} alt="Opção da direita" />
                    <div className="image-label">Direita</div>
                    {answered && question.correctAnswer === 'right' && (
                        <div className="ai-badge">🤖 IA</div>
                    )}
                </div>
            </div>

            {answered && (
                <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <p>
                        {isCorrect
                            ? '✅ Acertou!'
                            : '❌ Errou!'}
                    </p>
                    <p className="answer">
                        A imagem da {question.correctAnswer === 'left' ? 'ESQUERDA' : 'DIREITA'} é gerada por IA
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
                        <p>🎉 Fase 2 Concluída!</p>
                        <p>Você acertou {score} de {questions.length}!</p>
                        <button onClick={() => onComplete(score)} className="btn btn-next">
                            Ver Resultado Final →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
