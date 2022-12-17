import LoanData from '../../../Hooks/LoanData';
import BCard from './BCard';

const Business = () => {

    const [datas] = LoanData();

    if (!datas) {
        return <p>Loading ...</p>
    };

    return (
        <>
            {
                datas.length !== 0 ?
                    <>
                        <div className="overflow-x-auto">
                            <h1 className='text-center font-bold text-xl md:text-3xl lg:text-3xl mb-5'>Business Loan Details</h1>
                            <table className="table table-compact w-full">
                                <thead>
                                    <tr className='text-center'>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Company Name</th>
                                        <th>GST Number</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        datas &&
                                        datas.map((data, i) => <BCard key={i} data={data} i={i}></BCard>)
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

export default Business;