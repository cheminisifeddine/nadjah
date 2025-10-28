import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

const FaqItem: React.FC<{ item: typeof FAQ_DATA[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-200">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full py-5 text-right"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-bold text-gray-800">{item.question}</span>
                <span className="ml-6 flex-shrink-0">
                    <svg className={`h-6 w-6 text-sky-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pb-5 pr-2 text-gray-600 leading-relaxed">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-cairo-black text-gray-900 mb-4">لديك أسئلة؟ لدينا إجابات.</h2>
                    <p className="text-lg text-gray-600">جمعنا لكم أكثر الأسئلة شيوعًا لمساعدتكم على اتخاذ القرار الصحيح نحو مستقبلكم.</p>
                </div>
                <div className="max-w-3xl mx-auto bg-white p-2 rounded-lg">
                    {FAQ_DATA.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;