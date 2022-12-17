import { data } from 'autoprefixer';
import LoanData from '../../../Hooks/LoanData';
import LCard from './LCard';

const Loan = () => {

    const [datas] = LoanData();

    if (!datas) {
        return <p>Loading ...</p>
    };

    return (
        <>
            {
                data.length !== 0 ?
                    <>
                        <div className="overflow-x-auto">
                            <h1 className='text-center font-bold text-xl md:text-3xl lg:text-3xl mb-5'>Loan Application Details</h1>
                            <table className="table table-compact w-full">
                                <thead>
                                    <tr className='text-center'>
                                        <th></th>
                                        <th>Amount</th>
                                        <th>Interest</th>
                                        <th>Tenure</th>
                                        <th>Years</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        datas &&
                                        datas.map((data, i) => <LCard key={i} data={data} i={i}></LCard>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                    :
                    <p className='text-3xl font-bold text-center my-5'>Data Not Available</p>
            }
        </>
    );
};

export default Loan;