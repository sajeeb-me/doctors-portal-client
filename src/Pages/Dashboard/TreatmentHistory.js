import React from 'react';

const TreatmentHistory = () => {
    return (
        <section className='bg-slate-100 p-4 lg:p-8 h-screen'>
            <div className='flex justify-between mb-5'>
                <h1 className='text-xl font-semibold'>My Treatment History</h1>
                <button className='btn btn-outline btn-sm'>Date</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Treatment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default TreatmentHistory;