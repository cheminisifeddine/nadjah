
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-4 text-center">
                <img src="https://lh3.googleusercontent.com/P0b31L29-pHm_qqMwAREuImuNJ4CRs4c4k8DmllT7aczi23RYAQXjgRKTJdVVUXZeDTuvRoX25XdPBaZbDofW-6AgPradJ7qBIs" alt="Nadjah Academy Logo" className="h-12 w-auto mx-auto mb-4" />
                <p className="max-w-2xl mx-auto my-4 text-slate-400">
                    مهمتنا في أكاديمية النجاح هي تمكين الشباب الجزائري من تحقيق طموحاتهم العالمية من خلال توفير أفضل تكوين ممكن لاجتياز امتحان IELTS بنجاح.
                </p>
                <p className="font-bold text-white">&copy; 2025 | أكاديمية النجاح. جميع الحقوق محفوظة.</p>
                <div className="mt-4 text-slate-300">
                    <a href="#" className="hover:text-white transition-colors text-sm">شروط الاستخدام</a>
                    <span className="mx-2 text-slate-500">-</span>
                    <a href="#" className="hover:text-white transition-colors text-sm">سياسة الخصوصية</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;