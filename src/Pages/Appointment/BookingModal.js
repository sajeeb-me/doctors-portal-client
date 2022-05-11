import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date }) => {
    const { _id, name, slots } = treatment;

    const handleSubmit = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot, format(date, 'PP'))
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleSubmit} className='mt-10'>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full mb-4" readOnly disabled />
                        <select name='slot' className="select select-bordered w-full mb-4">
                            {
                                slots.map(slot => <option key={slot} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full mb-4" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full mb-4" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full mb-4" />
                        <input type="submit" value="SUBMIT" className='btn w-full btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;