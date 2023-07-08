import { getRandomColor, memberMapper } from "shared/constant/constant";
import summaryStyle from '../style/summary.module.scss';
import isEmpty from 'lodash/isEmpty';

const SummaryList = () => {
    const expenseList = localStorage.getItem("Expense");
    const expenseListData = expenseList && JSON.parse(expenseList);

    return (
        <div className="ml--30 pb--20 mr--30 flex  flex--wrap box-size--border-box">
            {!isEmpty(expenseListData) && expenseListData.map((expenseData: any, index: number) => {
                const { chooseCb, billName, paidBy, amount, typeOfBill, createdDate } = expenseData;
                return (
                    <div key={index} className={`mr--30 mt--30 ${summaryStyle['summary__list--box']}`}>
                        <div className={`ml--20 flex justify__content--between mr--20 flex--wrap ${summaryStyle['summary__list--content']}`}>
                            <p className="font-family--bold font-size--28 text--capitalize flex flex--column"><span className="font-size--16px mb--10 font-family--semi-bold">Bill name:</span>{billName}</p>

                            <p className="font-family--bold font-size--28 text--capitalize flex flex--column"><span className="font-size--16px mb--10 font-family--semi-bold">Created Date:</span>{createdDate}</p>

                            <p className="font-family--bold font-size--28 text--capitalize flex flex--column line-height--33px"><span className="font-size--16px font-family--semi-bold">Bill description:</span>{typeOfBill}</p>

                            <p className="font-family--bold font-size--28 text--capitalize flex flex--column"><span className="font-size--16px mb--10 font-family--semi-bold"> Paid By: </span> {paidBy}</p>

                            <p className="font-family--bold font-size--28 text--capitalize flex flex--column text--blue"> <span className="font-size--16px mb--10 font-family--semi-bold text--black">Total Bill: </span> &#8377;&nbsp;{amount}</p>
                        </div>
                        <div className="flex mb--30 flex--wrap">
                            {chooseCb?.map((member: string, index: number) => {
                                return (
                                    <div className={`flex align__items--center ml--15 ${summaryStyle['summary__member--wrapper']}`} style={{ backgroundColor: getRandomColor() }}><img key={index} src={`${memberMapper[member].image}`} alt={member} title={member} className='width--75-px mr--10' />
                                        <p className='font-family--semi-bold font-size--18 flex flex--column'>{`${memberMapper[member].name}`}
                                            <span className="font-size--14px mt--10 font-family--semi-bold">Amount: &#8377; {(amount / (chooseCb.length + 1)).toFixed(2)}</span>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                );
            })}
            {isEmpty(expenseListData) && <p className="flex justify__content--center font-size--24 font-family--bold width--full">No Expense added💲</p>}
        </div>
    );
};

export default SummaryList;