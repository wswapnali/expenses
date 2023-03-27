import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        onCancelExpenseDataHandler();
    }

    const onAddNewExpense = () => {
        setShowForm(true)
    }

    const onCancelExpenseDataHandler = () => {
        setShowForm(false);
    }

    return (
        <div className="new-expense">
            {!showForm && <button onClick={onAddNewExpense}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancelExpenseData={onCancelExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense;