import { ReactElement } from 'react';

import { Row } from './../Row/Row';

interface GameBoardProps {
    secretWord?: string;
}

export function GameBoard(props: GameBoardProps): ReactElement {
    return (
        <div className="board">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    );
}
