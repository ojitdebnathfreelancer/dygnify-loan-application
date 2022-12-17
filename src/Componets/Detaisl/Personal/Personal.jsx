import LoanData from '../../../Hooks/LoanData';
import PCard from './PCard';

const Personal = () => {

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
                            <h1 className='text-center font-bold text-xl md:text-3xl lg:text-3xl mb-5'>Personal Loan Details</h1>
                            <table className="table table-compact w-full">
                                <thead>
                                    <tr className='text-center'>
                                        <th></th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Age</th>
                                        <th>Number</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        datas &&
                                        datas.map((data, i) => <PCard key={i} data={data} i={i}></PCard>)
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

export default Personal;