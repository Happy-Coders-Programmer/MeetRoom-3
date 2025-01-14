import React from 'react';
import { Link } from 'react-router-dom';

const CreateBroadcastRoom = () => {
    return (
        <div className=' items-center justify-center'>
            <label for="my-modal-3" className="hover:cursor-pointer"><i className="far fa-signal-stream font-bold text-3xl bg-clock bg-transparent border border-gray-300 p-2"></i></label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            
            <div className="modal modal-bottom sm:modal-middle  ">
                <div className="modal-box bg-chat h-auto  mx-auto  ">
                    <h2 className="text-center text-2xl divide-y">Crate Room BroadCast</h2>
                    <div className='flex justify-end gap-3'>
                        {/* Cancel Btn */}
                        <div className="modal-action">
                            <label for="my-modal-3" className="btn">Cancel</label>
                            <div className="flex gap-2 items-center">
                            {/* <button class="schedule" onClick={() => setModalShow(true)}> Schedule Call </button> */}
                            <Link to="/conference/schedule" className="btn">Schedule</Link>
                            <button className="btn"> Instant Call </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreateBroadcastRoom;