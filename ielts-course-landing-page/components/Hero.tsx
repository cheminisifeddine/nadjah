import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero-gradient pt-16 pb-20 md:pt-24 md:pb-32">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-right">
                        <span className="inline-block bg-sky-100 text-sky-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4">للهجرة، الدراسة، أو العمل في الخارج</span>
                        <h1 className="text-4xl lg:text-6xl font-cairo-black text-slate-900 leading-tight mb-5">
                            حلمك بالهجرة والدراسة يبدأ من هنا. <span className="text-sky-700">تأشيرتك للنجاح في IELTS مضمونة.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0">
                           الطريقة الوحيدة في الجزائر لتتعلم أسرار ممتحن IELTS رسمي. شرح بالدارجة، متابعة شخصية، و استراتيجيات حصرية لتحقيق +7.0 من المحاولة الأولى.
                        </p>
                        <div className="flex flex-col items-center md:items-start gap-4">
                             <a href="#form" className="w-full sm:w-auto bg-sky-700 hover:bg-sky-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-sky-500/50 flex items-center justify-center gap-3">
                                <span>نعم، أريد ضمان مستقبلي</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </a>
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-slate-500 mt-4">
                                <div className="flex items-center gap-2 font-semibold">
                                    <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span>شرح بالدارجة 100%</span>
                                </div>
                                <div className="flex items-center gap-2 font-semibold">
                                    <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span>على يد ممتحن معتمد</span>
                                </div>
                                <div className="flex items-center gap-2 font-semibold">
                                    <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span>ضمان تحسين النتيجة</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://images.pexels.com/photos/8199732/pexels-photo-8199732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="A happy person holding a passport with a visa, ready to travel abroad for studies or work." className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;