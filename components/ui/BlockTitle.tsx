import React from 'react';

interface BlockTitleProps {
  title: string;
  text: string;
}

const BlockTitle: React.FC<BlockTitleProps> = ({ title, text }) => {
  return (
    <div className="text-center mb-16 lg:mb-20">
      <h3 className="text-[#0F2137] text-2xl md:text-3xl font-semibold tracking-[-1.5px] leading-tight mb-5">
        {title}
      </h3>
      <p className="text-[#858B91] text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default BlockTitle;