import React from 'react';

interface BlockTitleProps {
  title: string;
  text: string;
}

const BlockTitle: React.FC<BlockTitleProps> = ({ title, text }) => {
  return (
    <div className="text-center mb-20 md:mb-32">
      <h3 className="text-[#0F2137] text-3xl md:text-4xl font-bold tracking-[-1.5px] leading-none mb-5">
        {title}
      </h3>
      <p className="text-[#858B91] text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default BlockTitle;
