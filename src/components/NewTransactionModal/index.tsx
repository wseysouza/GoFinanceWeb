import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionContext } from '../../TransactionsContext';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioButton } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps
) {
    const { createTransaction } = useContext(TransactionContext);

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("deposit")


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        createTransaction({
            amount,
            category,
            title,
            type,
        })

        // setTitle('')
        // setAmount(0)
        // setCategory("")
        // setType('deposit')

        // onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>

                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Titulo'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder='Valor'
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

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

                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>

        </Modal>
    );
}