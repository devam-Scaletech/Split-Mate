import { useNavigate } from 'react-router-dom';
import createExpenseStyle from '../style/createExpense.module.scss';
import CreateExpenseForm from './createExpenseForm';

const CreateExpense = () => {
    const navigate = useNavigate();
    return (
        <div className={`${createExpenseStyle['expense-form']} m--0-auto b-radius--25`}>
            <div className="pt--20 flex justify__content--between align__items--center">
                <p className="font-family--bold font-size--24 ml--35">Create Expense</p>
                <button className="font-size--16px font-weight--600 width--auto cursor--pointer mr--40 text--blue b--none bg--transparent" onClick={() => navigate(-1)}>Back</button>
            </div>
            <CreateExpenseForm />
        </div>
    );
};

export default CreateExpense;