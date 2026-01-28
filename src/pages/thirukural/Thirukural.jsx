import React, { useState, useEffect } from 'react';
import { kuralApi } from '../../api/api';

const Thirukural = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
console.log(data,"ggggg")
    useEffect(() => {
        const fetchDailyKural = async () => {
            setLoading(true);
            
            // 1. Logic: Change every 24 hours (1 to 1330)
            const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
            const dailyId = (daysSinceEpoch % 1330) + 1;

            // 2. Fetch data
            const result = await kuralApi(dailyId);
            setData(result);
            setLoading(false);
        };

        fetchDailyKural();
    }, []);

    if (loading) return (
        <div className="flex justify-center p-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-orange-500"></div>
        </div>
    );

    if (!data) return <div className="text-gray-500 text-center p-10">Sync Error. Please check connection.</div>;

    return (
        <section className="relative group max-w-3xl mx-auto my-12 p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="text-8xl font-black text-white italic">{data.number}</span>
            </div>

            {/* Header HUD */}
            <div className="relative z-10 flex flex-wrap gap-4 items-center mb-8 border-b border-white/5 pb-6">
                <div className="px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded-md">
                    <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">{data.paal}</span>
                </div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{data.athigaram}</span>
                </div>
                <span className="ml-auto text-xs font-mono text-gray-600">ID://{data.number}</span>
            </div>

            {/* Tamil Verse */}
            <div className="relative z-10 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4">
                    {data.line1} <br />
                    {data.line2}
                </h2>
                {/* Author Selection: Using Mu. Varatharasan (urai3) */}
                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-orange-500 pl-4 italic">
                    <span className="text-orange-500 not-italic font-bold block mb-1 text-[10px] uppercase">Meaning (Tamil):</span>
                    {data.urai3}
                </p>
            </div>

            {/* English Translation */}
            <div className="relative z-10 pt-8 border-t border-white/5">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] block mb-2">Translation</span>
                        <p className="text-lg font-medium text-white/90 italic">"{data.translation}"</p>
                    </div>
                    <div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] block mb-2">Technical Insight</span>
                        <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider">{data.iyal}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Thirukural;