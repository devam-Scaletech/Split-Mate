// import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import createExpenseStyle from '../style/createExpense.module.scss';

const CreateExpenseForm = () => {
    // const navigate = useNavigate();
    const friendList = localStorage.getItem("userData");
    const retrievedUserData = friendList && JSON.parse(friendList);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log('data', data);
        //navigate('/homePage');
    };

    return (
        <div className={`${createExpenseStyle['expense-form']} m--0-auto b-radius--25`}>
            <div className="pt--20">
                <p className="font-family--bold font-size--24 ml--35">Create Expense</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex--column width--90-per m--0-auto">
                <div className='mt--30 flex flex--column'>
                    <label htmlFor="billName" className='font-family--medium font-size--18 mb--10'>Bill Name:</label>
                    <input type="text" placeholder="Bill Name" {...register("billName", { required: true, maxLength: 80 })} className='height--35-px b-radius--10 b--none' />
                    {errors.billName && (
                        <span className="error font-size--14px mt--10">
                            Bill Name is required*
                        </span>
                    )}
                </div>

                <div className='mt--30 flex flex--column'>
                    <label htmlFor="typeOfBill" className='font-family--medium font-size--18 mb--10'>Type of bill:</label>
                    <input type="text" placeholder="Type of bill" {...register("typeOfBill", { required: true, maxLength: 100, pattern: /^[A-Za-z\s]+$/ })} className='height--35-px b-radius--10 b--none' />
                    {errors.typeOfBill && (
                        <span className="error font-size--14px mt--10">
                            Type of bill Name is required*
                        </span>
                    )}
                </div>

                <div className='mt--30 flex flex--column'>
                    <label htmlFor="amount" className='font-family--medium font-size--18 mb--10'>Amount:</label>
                    <input
                        type="number"
                        placeholder="Amount"
                        className='height--35-px b-radius--10 b--none'
                        {...register("amount", {
                            required: true,
                            minLength: 1,
                            maxLength: 5
                        })}
                    />
                    {errors.amount && (
                        <span className="error font-size--14px mt--10">
                            Bill amount is required*
                        </span>
                    )}
                </div>

                <div className='mt--30 mb--30 flex flex--column'>
                    <label htmlFor="title" className='font-family--medium font-size--18 mb--10'>Paid by:</label>
                    <select {...register("title", { required: true })} className='height--35-px b-radius--10 b--none'>
                        {retrievedUserData?.friend.map((friendName: any, index: number) => {
                            const { name } = friendName;
                            return (
                                <option value={name} key={index}>{name}</option>);
                        })}
                    </select>
                    {errors.title && (
                        <span className="error font-size--14px mt--10">
                            Paid by is required*
                        </span>
                    )}
                </div>

                <div className='mt--30 mb--30 flex flex--column'>
                    <input type="submit" className="primary--btn font-size--16px font-weight--600 line-height--20px b-radius--25 width--100-px cursor--pointer m--0-auto" />
                </div>
            </form>
        </div>
    );
};

export default CreateExpenseForm;