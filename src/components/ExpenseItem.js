
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card.js';

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <div className="expense-item h2">
                <ExpenseDate date={props.date}></ExpenseDate>
            </div>
            <div className = "expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>     
        </Card>
    );
}

export default ExpenseItem