import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}
//OMIT = os itens que vc nao quer, PICK = os itens que vc quer
// type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
type TransactionInput = Pick<Transaction, 'title' | 'type' | 'category' | 'amount'>;


interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}


export const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);


export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transitions')
            .then(response => setTransactions(response.data.transactions))
    }, []);


    function createTransaction(transaction: TransactionInput) {
        api.post("/transactions", transaction)
    }


    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}