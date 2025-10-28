

import React from 'react';
import type { CourseFeature } from '../types';
// FIX: The constant FEATURES_DATA does not exist. Renamed to WHAT_YOU_GET_DATA.
import { WHAT_YOU_GET_DATA } from '../constants';

const FeatureCard: React.FC<CourseFeature> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const CourseContent: React.FC = () => {
    return (
        <section className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-cairo-black text-gray-900 mb-12">هذا هو برنامجك للوصول إلى +6.0 في IELTS</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* FIX: Use the corrected constant name WHAT_YOU_GET_DATA. */}
                    {WHAT_YOU_GET_DATA.map(feature => (
                        <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseContent;