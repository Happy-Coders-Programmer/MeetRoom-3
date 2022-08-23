import React, { useEffect, useState } from 'react';
import { AiOutlinePushpin } from "react-icons/ai";
import { FaCreativeCommons } from "react-icons/fa";
import { BsRecordCircle, BsPlus } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import user from "../../assets/images/user.png";
import * as webRTCHandler from "../../utils/webRTCHandler";
import { useSelector } from 'react-redux';

const Video = () => {
    const data = useSelector(state => state);
    const {isRoomHost, identity, roomId, connectOnlyWithAudio, showOverlay} = data;
    // ============Copy to Clipboard=============
    const [copySuccess, setCopySuccess] = useState('');
    const copyToClipBoard = async copyMe => {
        try {
          await navigator.clipboard.writeText(copyMe);
          <small>{setCopySuccess(`Copied!`)}</small>
        } catch (err) {
         setCopySuccess('Failed to copy!');
        }
    }
    console.log(data )
    const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false);
    const [isMicMuted, setIsMicMuted] = useState(false);

    
    useEffect(() => {
            webRTCHandler.getLocalPreviewAndInitRoomConnection(identity, roomId);
        // if (!isRoomHost && !roomId) {
        //   const siteUrl = window.location.origin +'/room';
        //   window.location.href = siteUrl;
        // } else {
        //   webRTCHandler.getLocalPreviewAndInitRoomConnection(
        //     isRoomHost,
        //     identity,
        //     roomId,
        //     connectOnlyWithAudio
        //   );
        // }
      }, [identity]);

    //=======Video Camera Button======
    const handleCameraButtonPressed = (e) => {
        e.prevent.default()
        webRTCHandler.toggleCamera(isLocalVideoDisabled);
        setIsLocalVideoDisabled(!isLocalVideoDisabled);
    };
    //======= Mic Button=========
    const handleMicButtonPressed = (e) => {
        e.prevent.default()
      webRTCHandler.toggleMic(isMicMuted);
      setIsMicMuted(!isMicMuted);
    };
    // ========Handle Room Disconnected=======
    const handleRoomDisconnection = (e) => {
        e.prevent.default()
        const siteUrl = window.location.origin;
        window.location.href = siteUrl;
      };
    //========Conncect only audio======
    return (
        <div className='w-full mx-auto'>
            <div className='flex items-center justify-between text-gray-200'>
                <div className="flex gap-0 lg:gap-1">
                    <h2 className='text-sm lg:text-xl text-gray-200'>Discuss About Our New Projects</h2>
                    <div className='flex items-center rounded bg-green-900 list-none'>
                        <li><IoPeopleOutline /></li>
                        <li className='px-1 lg:px-3 text-sm'>37+ </li>
                    </div>
                </div>
                <div className="tooltip mr-1 py-1 px-2 rounded text-white hover:bg-slate-700" data-tip={copySuccess ? copySuccess : 'COPY ID'}>
                    <button className="text-gray-300" onClick={() => copyToClipBoard(`${data.roomId}`)}><small>ID: {data.roomId}</small></button>
                </div>
            </div>
            <div className='text-gray-200 flex justify-between my-4'>
                <div className='flex list-none items-center'>
                    <li className='bg-red-500 rounded-full'><BsRecordCircle /></li>
                    <li className='text-sm lg:text-md px-1 lg:px-2'>REQ : 00.02.36s </li>
                </div>
                <div className="id">
                    <p>{data.identity}</p>
                </div>
                <div className='flex list-none items-center text-gray-200'>
                    <li className='bg-green-900 rounded-full cursor-pointer'><BsPlus /></li>
                    <li className='text-sm lg:text-md px-2'>Add user to the class</li>
                </div>
            </div>

            <div className='rounded-xl bg-green-200 relative'>
                <div className='text-gray-200 list-none text-xl flex gap-3 justify-start p-4 absolute'>
                    <li className='bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl px-1 py-1 '><FaCreativeCommons /></li>
                    <li className='bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl px-1 py-1 '><AiOutlinePushpin /></li>

                </div>
                
                <div className="flex justify-center items-baseline">
                    <img src={user} alt="Main user" className='p-4' />
                </div>

                <div className='grid grid-rows justify-center items-baseline pb-4'>
                    <h2 className='bg-green-400 text-white mb-2 p-1'>This is the week thats we can more presentation..</h2>
                    <div className='flex gap-2 md:gap-4 justify-center place-items-end text-gray-200 font-bold cursor-pointer list-none'>
                        <button onClick={()=>handleMicButtonPressed()}>
                        <li className='bg-green-400 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-2 lg:px-4 py-1 lg:py-2 font-bold'>
                            
                            {isMicMuted? <i className="fal fa-microphone font-bold"></i>: <i className="fas fa-microphone-slash font-bold"></i>}    
                        </li>
                        </button>
                        <button onClick={()=>handleCameraButtonPressed()}>
                            <li className='bg-green-400 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-2 lg:px-4 py-1 lg:py-2 font-bold'>
                                {isLocalVideoDisabled ? <i className="fal fa-video font-bold"></i> : <i className="fas fa-video-slash font-bold"></i>}
                            </li>
                        </button>
                        <button onClick={()=>handleRoomDisconnection()}>
                            <li className='bg-red-500 rounded-md text-lg lg:text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-2 lg:px-4 py-2 lg:py-2'><i className="far fa-phone-alt font-bold"></i></li>
                        </button>
                        <li className='bg-green-400 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 px-2 lg:px-4 py-1 lg:py-2 '><i className="far fa-arrow-circle-up font-bold"></i></li>
                        <li className='bg-green-400 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 px-2 lg:px-4 py-1 lg:py-2 '><i className="far fa-ellipsis-v font-bold"></i></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;