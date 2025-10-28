import React from 'react';

const Instructor: React.FC = () => {
    return (
        <section id="instructor" className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-cairo-black text-gray-900 mb-4">لا تغامر بمستقبلك. تعلم مع ممتحن IELTS رسمي.</h2>
                    <p className="text-lg text-gray-600">أستاذك ليس مجرد مدرس لغة إنجليزية، بل هو خبير وممتحن معتمد يعرف تماماً ما يتطلبه النجاح في هذا الامتحان.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-200 grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto relative">
                     <div className="absolute top-4 -right-4 bg-amber-400 text-amber-950 font-bold px-4 py-2 rounded-md shadow-lg transform rotate-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>خبرة لا تقدر بثمن</span>
                    </div>
                    <div className="md:col-span-1 flex justify-center">
                         <img src="https://lh3.googleusercontent.com/pw/AP1GczO2vQ1e-n9R-t4Xb4s4F0-s-V9y5n0-w-f4S4m5j3p-f3p4e-p1p4j0k-r-w-l4l3i-s-f2p2j-m-n-q-j-h-u=w750-h422-s-no-gm" alt="Instructor Shaiban Harith Ahmed" className="rounded-2xl shadow-xl w-full max-w-xs md:max-w-full" />
                    </div>
                    <div className="md:col-span-2 text-center md:text-right">
                        <h3 className="text-3xl font-bold text-gray-800">Shaiban Harith Ahmed</h3>
                        <p className="inline-block bg-sky-100 text-sky-800 font-bold text-lg mb-4 px-3 py-1 rounded-md">
                           ممتحن IELTS معتمد ومصمم برامج تدريب
                        </p>
                        <ul className="space-y-4 text-lg text-gray-700">
                            <li className="flex items-start">
                                <span className="bg-sky-100 text-sky-700 rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center font-bold ml-3 mt-1">✓</span> 
                                <div><strong>أسرار الممتحن:</strong> سيكشف لك الأخطاء الشائعة التي يقع فيها الطلاب وكيفية تفاديها، ويعطيك مفاتيح الإجابات النموذجية.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-sky-100 text-sky-700 rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center font-bold ml-3 mt-1">✓</span> 
                                <div><strong>+33 سنة خبرة:</strong> عقود من الخبرة في التدريس والتدريب تترجم إلى استراتيجيات فعالة ومجربة لتحقيق أعلى الدرجات.</div>
                            </li>
                             <li className="flex items-start">
                                <span className="bg-sky-100 text-sky-700 rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center font-bold ml-3 mt-1">✓</span> 
                                <div><strong>شرح بالدارجة الجزائرية:</strong> يضمن لك فهمًا عميقًا 100% لكل تقنية وتفصيل، ويزيل أي حاجز لغوي قد يواجهك.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instructor;