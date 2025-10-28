import React from 'react';
import type { Testimonial } from '../types';
import { TESTIMONIALS_DATA } from '../constants';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden">
        <svg className="absolute top-4 left-4 h-24 w-24 text-slate-100/70" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm-2 2a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm12-10a2 2 0 1 0 2-2 2 2 0 0 0-2 2zm-2 4a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm2 2a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-12 8a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm2-2a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm-6 4a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-2-2a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm16-10a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm-2 2a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-10-4a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm-2 2a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-2 2a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm14 4a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-2-2a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm2 6a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-2-2a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm-4 4a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-2-2a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm-2-12a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm-2 2a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm2-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm10 2a2 2 0 1 0-2-2 2 2 0 0 0 2 2z"></path></svg>

        <div className="relative z-10 flex-grow mb-6">
            <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
        </div>
        <div className="relative z-10 mt-auto flex justify-between items-end">
            <div className="flex items-center">
                <div className="w-14 h-14 rounded-full ml-4 bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xl border-2 border-white shadow-md">
                    {testimonial.avatarText}
                </div>
                <div>
                    <p className="font-bold text-lg text-gray-800">{testimonial.name}</p>
                    <p className="font-semibold text-sm text-gray-500">{testimonial.title}</p>
                </div>
            </div>
            <div className="text-center">
                <p className="text-sm text-slate-500 mb-1">النتيجة المحققة</p>
                <div className="bg-green-100 text-green-800 font-bold text-2xl py-2 px-4 rounded-lg border-2 border-green-200">
                    {testimonial.score}
                </div>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-cairo-black text-gray-900 mb-4">لا تصدق كلامنا فقط، اسمع من طلابنا!</h2>
                    <p className="text-lg text-gray-600">هؤلاء مجرد أمثلة قليلة من عشرات الطلاب الذين حققوا أحلامهم بعد الانضمام إلى دورتنا.</p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {TESTIMONIALS_DATA.map(testimonial => (
                        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;