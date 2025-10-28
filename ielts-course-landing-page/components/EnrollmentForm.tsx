import React, { useState } from 'react';
import { WILAYAS_DATA } from '../constants';

const EnrollmentForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzVFvC4B5c-2SHlXWgK-Qyc3eIKrf72Z9y9wQMOiX-Zhm7P8MqCgmydl_MY3pZKKtDK/exec';

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                if(response.ok) {
                    window.location.href = 'ielts-thank-you.html';
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                setError('حدث خطأ، يرجى المحاولة مرة أخرى');
                setIsSubmitting(false);
            });
    };

    return (
        <section id="form" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                 <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl shadow-2xl overflow-hidden p-2">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="form-summary-gradient text-white p-8 md:p-10 rounded-2xl flex flex-col justify-center order-last md:order-first">
                            <h3 className="text-3xl font-cairo-black mb-4">هذا ما ستحصل عليه فوراً:</h3>
                            <ul className="space-y-3 mb-6 text-lg">
                                <li className="flex items-center gap-3"><svg className="w-6 h-6 text-amber-300 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> وصول مدى الحياة لأكثر من 80 فيديو</li>
                                <li className="flex items-center gap-3"><svg className="w-6 h-6 text-amber-300 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> متابعة شخصية في مجموعة خاصة</li>
                                <li className="flex items-center gap-3"><svg className="w-6 h-6 text-amber-300 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> تصحيح احترافي لوظائف الكتابة</li>
                                <li className="flex items-center gap-3"><svg className="w-6 h-6 text-amber-300 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> استراتيجيات حصرية من ممتحن رسمي</li>
                                <li className="flex items-center gap-3"><svg className="w-6 h-6 text-amber-300 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> ضمان تحسين درجتك بشكل ملحوظ</li>
                            </ul>
                            <div className="mt-auto bg-black/20 p-4 rounded-lg text-center border border-sky-300/50">
                                <p className="font-bold text-amber-300 text-lg">الدفع آمن 100% عند الاستلام</p>
                                <p className="text-sm text-slate-200">لا تدفع أي شيء الآن. تأكد من طلبك ثم ادفع لموظف التوصيل.</p>
                            </div>
                        </div>

                        <div className="p-8 md:p-10">
                            <div className="text-center">
                                <span className="inline-block bg-red-100 text-red-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4 animate-pulse">عرض خاص لفترة محدودة جداً</span>
                                <h2 className="text-3xl md:text-4xl font-cairo-black text-gray-900 mb-2">خطوتك الأخيرة نحو حلمك!</h2>
                                 <p className="text-lg text-gray-600 mb-6">املأ الاستمارة وسنتصل بك للتأكيد.</p>
                                <div className="bg-white p-4 rounded-2xl shadow-inner border border-slate-200">
                                    <p className="text-2xl font-bold text-gray-400 line-through">8900 د.ج</p>
                                    <p className="text-6xl font-cairo-black text-sky-700 animate-bounce">4900 د.ج فقط</p>
                                    <p className="font-bold text-green-600 mt-2">خصم 55% + توصيل مجاني لكل الولايات!</p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4 text-right mt-6">
                                <div>
                                    <label htmlFor="name-pro" className="block text-sm font-bold text-gray-700 mb-1">الاسم واللقب</label>
                                    <input type="text" name="name" id="name-pro" required className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-300" placeholder="مثال: كريم فضيل" />
                                </div>
                                <div>
                                    <label htmlFor="phone-pro" className="block text-sm font-bold text-gray-700 mb-1">رقم الهاتف</label>
                                    <input type="tel" name="phone" id="phone-pro" required className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-300" placeholder="سنتصل بك على هذا الرقم للتأكيد" />
                                </div>
                                <div>
                                    <label htmlFor="wilaya-pro" className="block text-sm font-bold text-gray-700 mb-1">الولاية</label>
                                    <select id="wilaya-pro" name="wilaya" required className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-300">
                                        <option value="" disabled selected>اختر ولايتك...</option>
                                        {WILAYAS_DATA.map(wilaya => (
                                            <option key={wilaya.value} value={wilaya.label}>{wilaya.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="address-pro" className="block text-sm font-bold text-gray-700 mb-1">العنوان الكامل (اختياري)</label>
                                    <input type="text" name="address" id="address-pro" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-300" placeholder="لتسهيل عملية التوصيل" />
                                </div>
                                <div>
                                    <button type="submit" disabled={isSubmitting} className={`w-full font-bold py-4 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50 ${isSubmitting ? 'bg-gray-400' : 'bg-amber-500 hover:bg-amber-400 text-amber-950'}`}>
                                        {isSubmitting ? '...جاري التأكيد' : 'أؤكد طلبي الآن!'}
                                    </button>
                                    {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
                                </div>
                                <p className="text-xs text-gray-500 pt-2 text-center">بالنقر على الزر، أنت توافق على شروط الخدمة. سنتصل بك للتأكيد قبل إرسال أي شيء.</p>
                            </form>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default EnrollmentForm;