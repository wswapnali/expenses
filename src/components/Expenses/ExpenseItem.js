import './ExpenseItem.css'
import React, { useState } from "react";
import './ExpenseDate.js'
import ExpenseDate from './ExpenseDate.js'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)
    console.log("exp")
    const clickHandler = () => {
        setTitle('updated')
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    )
}

export default ExpenseItem