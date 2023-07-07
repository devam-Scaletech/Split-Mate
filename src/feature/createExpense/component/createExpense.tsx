import createExpenseStyle from '../style/createExpense.module.scss';
import CreateExpenseForm from './createExpenseForm';

const CreateExpense = () => {
    return (
        <div className={`${createExpenseStyle['expense-form']} m--0-auto b-radius--25`}>
            <div className="pt--20">
                <p className="font-family--bold font-size--24 ml--35">Create Expense</p>
            </div>
            <CreateExpenseForm />
        </div>
    );
};

export default CreateExpense;