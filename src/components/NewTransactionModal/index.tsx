import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioButton } from './styles'

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { type } from 'os';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps
) {

    const [type, setType] = useState("deposit")

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose} className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder='Titulo' />
                <input type="number" placeholder='Valor' />
                <TransactionTypeContainer>
                    <RadioButton
                        type="button"
                        onClick={() => setType("deposit")}
                        activeColor="green"
                        isActive={type === "deposit"}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioButton>
                    <RadioButton
                        type="button"
                        onClick={() => setType("withdrawal")}
                        activeColor="red"
                        isActive={type === "withdrawal"}
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saída</span>
                    </RadioButton>

                </TransactionTypeContainer>

                <input placeholder='Categoria' />
                <button type="submit">Cadastrar</button>
            </Container>

        </Modal>
    );
}