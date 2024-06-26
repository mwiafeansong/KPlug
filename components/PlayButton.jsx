'use client';
import { FaPlay } from 'react-icons/fa';
import { ModalContext } from '@/context';
import { useContext } from 'react';

const PlayButton = ({ title }) => {
  const { openModal } = useContext(ModalContext);

  return (
    <button
      className="bannerbutton bg-white text-black w-fit"
      onClick={openModal}
    >
      <FaPlay />
      {title}
    </button>
  );
};

export default PlayButton;
