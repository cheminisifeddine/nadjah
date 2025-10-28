import React from 'react';
import type { CourseBenefit } from '../types';
import { WHAT_YOU_GET_DATA } from '../constants';

const VideoCameraIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" />
    </svg>
);
const ChatBubbleLeftRightIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.372a3.75 3.75 0 0 1-3.65-3.65l.007-3.72a3.75 3.75 0 0 1 3.65-3.65l3.72-.372ZM15.75 11.25l-3.72.372a3.75 3.75 0 0 1-3.65-3.65l.007-3.72a3.75 3.75 0 0 1 3.65-3.65l3.72-.372c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193Z" />
    </svg>
);
const UserGroupIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0ZM10.5 18.75a9.094 9.094 0 0 1 4.252-.989m-4.252-1.638a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" />
    </svg>
);
const DocumentCheckIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
);
const SparklesIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);
const DocumentDuplicateIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m9.375 2.25-3-3m0 0-3 3m3-3v11.25m-7.5-7.5H7.5" />
    </svg>
);

const icons = [VideoCameraIcon, ChatBubbleLeftRightIcon, UserGroupIcon, DocumentCheckIcon, SparklesIcon, DocumentDuplicateIcon];
const data: CourseBenefit[] = WHAT_YOU_GET_DATA.map((item, index) => ({
    ...item,
    icon: icons[index]
}));


const BenefitCard: React.FC<CourseBenefit> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-slate-200 text-center transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center justify-center bg-sky-100 text-sky-700 rounded-full h-16 w-16 mb-5 mx-auto ring-4 ring-white shadow-md">
            <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
    </div>
);

const WhatYouGet: React.FC = () => {
    return (
        <section id="content" className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-cairo-black text-gray-900 mb-4">ليست مجرد دورة، بل نظام متكامل لضمان نجاحك</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">لقد قمنا بتصميم كل جزء من هذه الدورة لتأخذ بيدك خطوة بخطوة نحو هدفك.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map(item => (
                        <BenefitCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;