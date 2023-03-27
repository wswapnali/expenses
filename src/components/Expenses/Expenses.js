import React, { useState } from 'react';
import './Expenses.css'
import ExpenseList from './ExpenseList'
import Card from '../UI/Card'
import ExpenseFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const yearChangeHandler = (enteredYear) => {
        setSelectedYear(enteredYear);
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    

    return (
        <Card className="expenses">
            <ExpenseFilter selected={selectedYear} onYearChange={yearChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses