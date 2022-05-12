import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth)

    const handleSubmit = e => {
        e.preventDefault();
        const bookedAppointment = {
            patientName: user?.displayName,
            patientEmail: user?.email,
            patientPhone: e.target.phone.value,
            appointmentID: _id,
            treatmentName: name,
            slot: e.target.slot.value,
            appointmentDate: format(date, 'PP')
        }
        // console.log(bookedAppointment)

        fetch('http://localhost:5000/appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookedAppointment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Booked appointment successfully!")
            })
        // to close the modal
        setTreatment(null)
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
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user?.displayName} className="input input-bordered w-full mb-4" readOnly disabled />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full mb-4" required />
                        <input type="email" value={user?.email} className="input input-bordered w-full mb-4" readOnly disabled />
                        <input type="submit" value="SUBMIT" className='btn w-full btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;