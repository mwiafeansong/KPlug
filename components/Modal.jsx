'use client';
import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import { ModalContext } from '@/context';
import VideoPlayer from './VideoPlayer';

const Modal = ({ trailer }) => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 top-0 left-0 bottom-0 right-0 bg-black/60 z-20 flex justify-center items-center">
          <button className="absolute top-5 right-5 z-20" onClick={closeModal}>
            <FaTimes size="30px" />
          </button>
          {trailer ? (
            <VideoPlayer trailer={trailer} />
          ) : (
            <div className="text-4xl border border-white p-2">
              No trailer available
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
