import { useNavigate } from 'react-router-dom';
import summaryStyle from '../style/summary.module.scss';

const Summary = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={`flex justify__content--between align__items--center mt--50 width--90-per m--0-auto  b-radius--25 ${summaryStyle['summary']}`}>
                <p className="ml--30 font-size--23 font-family--semi-bold">Split Summary</p>
                <button className="primary--btn font-size--16px font-weight--600 line-height--20px b-radius--25 width--auto cursor--pointer mr--40" onClick={() => navigate('/createExpense')}>Create Expense</button>
            </div>
        </div>
    );
};

export default Summary;