import React from 'react';
import { toast } from 'react-hot-toast';

const Form = () => {
    const handelSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const PfirstName = form.firstName.value;
        const PlastName = form.lastName.value;
        const Page = form.age.value;
        const Pnumber = form.number.value;
        const Pemail = form.email.value;
        const Paddress = form.address.value;
        
        const Bname = form.businessName.value;
        const BgstNumber = form.gstNumber.value;
        const Baddress = form.busniessAddress.value;
        const BcompanyName = form.companyName.value;

        const Lamount = form.loanAmount.value;
        const Linterest = form.interestRate.value;
        const Ltenure = form.loanTenure.value;
        const Lyears = form.years.value;

        const loanInfo ={
            PfirstName,
            PlastName,
            Page,
            Pnumber,
            Pemail,
            Paddress,
            Bname,
            BgstNumber,
            Baddress,
            BcompanyName,
            Lamount,
            Linterest,
            Ltenure,
            Lyears
        };

        fetch('https://loan-server.vercel.app/loan',{
            method:"POST",
            headers:{
                "content-type":'application/json'
            },
            body: JSON.stringify(loanInfo)
        })
        .then(res => res.json())
        .then(data => {
            form.reset();
            toast.success("Your application sucessfully")
        })

    };
    // submit application 
    return (
        <div className="">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={(e)=> handelSubmit(e)}>
                            <h1 className='text-3xl text-center font-bold mb-2'>Personal Details</h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 mb-10'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">First Name</span>
                                    </label>
                                    <input type="text" name='firstName' placeholder="Enter Your First Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Last Name</span>
                                    </label>
                                    <input type="text" name='lastName' placeholder="Enter Your Last Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Age</span>
                                    </label>
                                    <input type="number" name='age' placeholder="Enter Your Age" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Number</span>
                                    </label>
                                    <input type="number" name='number' placeholder="Enter Your Number" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Address</span>
                                    </label>
                                    <input type="text" name='address' placeholder="Enter Your Address" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* personal info  */}

                            <h1 className='text-3xl text-center font-bold mb-2'>Business Details</h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 mb-10'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Business Name</span>
                                    </label>
                                    <input type="text" name='businessName' placeholder="Enter Your Business Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">GST Number</span>
                                    </label>
                                    <input type="number" name='gstNumber' placeholder="Enter Your GST Number" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Busniness Address</span>
                                    </label>
                                    <input type="text" name='busniessAddress' placeholder="Enter Your BusniessAddress" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Company Name</span>
                                    </label>
                                    <input type="text" name='companyName' placeholder="Enter Your Company Name" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* Business info  */}

                            <h1 className='text-3xl text-center font-bold mb-2'>Loan Application Details</h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 mb-10'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Loan Amount</span>
                                    </label>
                                    <input type="number" name='loanAmount' placeholder="Enter Your Loan Amount" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold"> Interest Rate</span>
                                    </label>
                                    <input type="number" name='interestRate' placeholder="Enter Your Interest Rate" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Loan Tenure</span>
                                    </label>
                                    <input type="number" name='loanTenure' placeholder="Enter Your BusniessAddress" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Years</span>
                                    </label>
                                    <input type="number" name='years' placeholder="Enter Your Years" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* Loan applicatoin info  */}

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;