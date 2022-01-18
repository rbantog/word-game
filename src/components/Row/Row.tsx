import { ReactElement } from 'react';

import { LetterState } from './../../types/game';

interface RowProps {
    correctness?: LetterState[];
    word?: string;
}

export function Row({
    correctness = [
        LetterState.E,
        LetterState.E,
        LetterState.E,
        LetterState.E,
        LetterState.E,
    ],
    word = '',
}: RowProps): ReactElement {
    return (
        <div className="game-row">
            {correctness.map((_, i) => {
                const letter = word.charAt(i);
                const className = `letter-box ${
                    correctness[i] || LetterState.E
                }`;
                return <div className={className}>{letter}</div>;
            })}
        </div>
    );
}
