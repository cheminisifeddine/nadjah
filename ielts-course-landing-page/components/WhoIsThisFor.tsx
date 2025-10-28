import React from 'react';
import { WHO_IS_THIS_FOR_DATA } from '../constants';
import type { TargetAudience } from '../types';

const GraduationCapIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);

const BriefcaseIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075c0 1.313-.964 2.41-2.175 2.533-1.24.127-2.457-.14-3.45-.65-1.02-.53-2.22.102-2.942.992-.713.878-1.83.93-2.886.143-1.07-.797-2.334-.72-3.42-.074-1.11.66-2.58.42-3.69-.3-1.22-.8-2.65.1-3.77.7-1.1 2.09-1.5 3.3-1.2.9.2 1.8.6 2.4.9 1.4.8 3.1.2 3.9-.9.8-1.2 2.3-1.6 3.6-1.3l.1.1c.6.3 1.2.7 1.9 1.1.5.3 1 .6 1.6.9.5.3.9.6 1.4.9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25v-1.5a1.5 1.5 0 0 0-1.5-1.5h-6a1.5 1.5 0 0 0-1.5 1.5v1.5" />
    </svg>
);

const GlobeAltIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.73 9h16.54M9.528 3.73a18.45 18.45 0 0 1 4.944 0M14.472 20.27a18.45 18.45 0 0 1-4.944 0M9 21v-3.375c0-.621.504-1.125 1.125-1.125h2.75c.621 0 1.125.504 1.125 1.125V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
);


const icons = [GraduationCapIcon, BriefcaseIcon, GlobeAltIcon];
const data: TargetAudience[] = WHO_IS_THIS_FOR_DATA.map((item, index) => ({
    ...item,
    icon: icons[index]
}));


const TargetAudienceCard: React.FC<TargetAudience> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl border border-slate-200 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center bg-sky-100 text-sky-700 rounded-full h-14 w-14 mb-5">
            <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


const WhoIsThisFor: React.FC = () => {
    return (
        <section id="who-is-this-for" className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-cairo-black text-gray-900 mb-4">هل هذه الدورة لك؟</h2>
                    <p className="text-lg text-gray-600">إذا كنت واحداً من هؤلاء، فأنت في المكان الصحيح تمامًا. هذه الدورة صُممت خصيصًا لتحقيق هدفك.</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {data.map(item => (
                        <TargetAudienceCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoIsThisFor;