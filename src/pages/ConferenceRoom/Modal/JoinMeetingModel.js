
import React from 'react';
import { Link } from 'react-router-dom';

const JoinMeetingModel = () => {
    return (
        <div className=' items-center justify-center'>
            <label for="my-modal-3" class="hover:cursor-pointer"><i className="fal fa-plus-square font-bold text-3xl bg-clock bg-transparent border border-gray-400 p-2"></i></label>


            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle  ">
                <div class="modal-box bg-chat h-auto  mx-auto  ">
                    <h2 className="text-center text-2xl divide-y">Joining a Meeting Now</h2>

                    <input type="text" placeholder="Meeting ID" class="input w-full my-3 bg-slate-800 rounded" />
                    <input type="text" placeholder="Enter your Name" class="input bg-slate-800 rounded w-full" />
                    <div className='flex justify-end gap-3'>
                        <div class="modal-action">
                            <label for="my-modal-3" class="btn ">Cancel</label>
                        </div>
                        <div class="modal-action">
                            <label for="my-modal-3" class="btn btn-primary"><Link to='/room/video'>Join</Link></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinMeetingModel;
