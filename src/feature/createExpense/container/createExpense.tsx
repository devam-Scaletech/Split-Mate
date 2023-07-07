import { useNavigate } from "react-router-dom";
import createExpenseStyle from '../style/createExpense.module.scss';
const CreateExpense = () => {
    const navigate = useNavigate();
    return (
        <div className="width--full">
            <div className={`${createExpenseStyle['expense-form']} m--0-auto b-radius--25`}>
                <div className="flex justify__content--between align__items--center">
                    <p className="font-family--bold font-size--24 ml--35">Create Expense</p>
                    <button type="submit" onClick={() => navigate('/homePage')} className="primary--btn font-size--16px font-weight--600 line-height--20px b-radius--25 width--100-px cursor--pointer mr--40">Create</button>
                </div>
            </div>
        </div>
    );
};

export default CreateExpense;