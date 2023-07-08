import { Fragment, useCallback, useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import { getRandomColor, memberMapper } from "shared/constant/constant";
import { IExpenseData } from '../interface/summary.interface';
import summaryStyle from '../style/summary.module.scss';

const SummaryList = () => {
    const [expenseData, setExpenseData] = useState<IExpenseData[]>([]);
    const expenseList = localStorage.getItem("Expense");
    const expenseListData = expenseList && JSON.parse(expenseList);

    useEffect(() => {
        setExpenseData(expenseListData);
    }, [localStorage]);

    const handleOnStatus = useCallback((billIndex: number, status: string) => {
        const index = expenseListData.findIndex((friend: IExpenseData, index: number) => index === billIndex);

        if (index !== -1) {
            const updatedFriendArray = [...expenseListData];

            if (status === 'settled') {
                updatedFriendArray[index].amountStatus = true;
            } else if (status === 'pending') {
                updatedFriendArray[index].amountStatus = false;
            } else if (status === 'remove') {
                updatedFriendArray.splice(index, 1);
            }

            localStorage.setItem('Expense', JSON.stringify(updatedFriendArray));
            setExpenseData(updatedFriendArray);
        }
    }, [expenseListData]);

    return (
        <div className="ml--30 pb--20 mr--30 flex  flex--wrap box-size--border-box">
            {!isEmpty(expenseData) && expenseData.map((expenseData: IExpenseData, index: number) => {
                const { chooseCb, billName, paidBy, amount, typeOfBill, createdDate, amountStatus } = expenseData;
                return (
                    <div key={index} className={`mr--30 mt--30 ${summaryStyle['summary__list--box']}`}>
                        <div className={`ml--20 flex justify__content--between mr--20 flex--wrap ${summaryStyle['summary__list--content']}`}>
                            <p className="font-family--bold font-size--28 text--capitalize flex flex--column"><span className="font-size--16px mb--10 font-family--semi-bold">Bill name:</span>{billName}</p>

                            <p className="font-family--bold font-size--28 text--capitalize flex flex--column"><span className="font-size--16px mb--10 font-family--semi-bold">Created Date:</span>{createdDate}</p>

                            <p className="font-family--bold font-size--28 text--capitalize flex flex--column line-height--33px"><span className="font-size--16px font-family--semi-bold">Bill description:</span>{typeOfBill}</p>

                            <p className="font-family--bold font-size--28 text--capitalize flex flex--column"><span className="font-size--16px mb--10 font-family--semi-bold">
                                {paidBy === 'Olivia Davis' ? " Paid By you:" : "Paid By:"} </span> {paidBy}</p>

                            <p className="font-family--bold font-size--28 text--capitalize flex flex--column text--blue"> <span className="font-size--16px mb--10 font-family--semi-bold text--black">Total Bill: </span> &#8377;&nbsp;{amount}</p>
                        </div>
                        <div className={`${summaryStyle['summary__member--wrapper']} flex mb--30 flex--wrap`}>
                            {chooseCb?.map((member: string, index: number) => {
                                return (
                                    <div className={`flex align__items--center ml--15 ${summaryStyle['summary__member--content']}`} style={{ backgroundColor: getRandomColor() }} key={index}>
                                        <img src={`${memberMapper[member].image}`} alt={member} title={member} className='width--75-px mr--10' />
                                        <p className='font-family--semi-bold font-size--18 flex flex--column'>{`${memberMapper[member].name}`}
                                            <span className="font-size--14px mt--10 font-family--semi-bold">Amount:&nbsp;
                                                {amountStatus ? 'Paid' : (
                                                    <Fragment>
                                                        &#8377;
                                                        {(amount / (chooseCb.length + 1)).toFixed(2)}
                                                    </Fragment>
                                                )}
                                            </span>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={`${summaryStyle['summary__list-btn']} flex width--full justify__content--evenly mb--20 mt--30 flex--wrap `}>
                            <button className="success--btn font-size--16px font-weight--600 line-height--20px b-radius--25 width--auto cursor--pointer"
                                onClick={() => handleOnStatus(index, 'settled')}
                            >
                                Settled bill
                            </button>
                            <button className="primary--btn font-size--16px font-weight--600 line-height--20px b-radius--25 width--auto cursor--pointer"
                                onClick={() => handleOnStatus(index, 'pending')}
                            >
                                Revoke
                            </button>
                            <button className="error-btn font-size--16px font-weight--600 line-height--20px b-radius--25 width--auto cursor--pointer"
                                onClick={() => handleOnStatus(index, 'remove')}
                            >
                                Remove bill
                            </button>
                        </div>
                    </div>
                );
            })}
            {isEmpty(expenseListData) && <p className="flex justify__content--center font-size--24 font-family--bold width--full">No Expense added💲</p>}
        </div>
    );
};

export default SummaryList;