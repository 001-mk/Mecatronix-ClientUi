import React, { useState, useEffect } from 'react';
import Img_Helper from "../../helper/img_help";
import kuralDetails from './thirukkural.json';
import kuralStructure from './detail.json';
import Icons from "../../helper/icon_help";

const Typewriter = ({ text, delay = 50, className = "", onComplete }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        setDisplayText("");
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(interval);
                if (onComplete) onComplete();
            }
        }, delay);
        return () => clearInterval(interval);
    }, [text, delay]);

    return <span className={className}>{displayText}</span>;
};

const Thirukural = () => {
    const { AiOutlineDoubleRight } = Icons;
    const [step, setStep] = useState(0);
    const [data, setData] = useState(null);
    const [showLine2, setShowLine2] = useState(false);

    const STEPS = ["TAMIL", "ENGLISH", "URAI1", "URAI2", "URAI3"];

    useEffect(() => {

        const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
        const kuralNumber = (daysSinceEpoch % 1330) + 1;
        const foundKural = kuralDetails.kural.find(k => k.Number === kuralNumber);

        let meta = { paal: "", athigaram: "", iyal: "" };
        kuralStructure[0].section.detail.forEach(section => {
            section.chapterGroup.detail.forEach(group => {
                group.chapters.detail.forEach(chap => {
                    if (kuralNumber >= chap.start && kuralNumber <= chap.end) {
                        meta.paal = section.name;
                        meta.athigaram = chap.name;
                        meta.iyal = group.name;
                    }
                });
            });
        });

        setData({ ...foundKural, ...meta });
    }, []);

    const nextStep = () => {
        setShowLine2(false);
        setStep((prev) => (prev + 1) % STEPS.length);
    };

    if (!data) return <div className="p-20 text-orange-500 font-mono animate-pulse">INIT_SYSTEM...</div>;


    const renderContent = () => {
        switch (STEPS[step]) {
            case "TAMIL":
                return (
                    <div className="space-y-4">
                        <span className="text-md text-orange-600 font-bold tracking-widest block underline">மூலக்குறள் <span className='text-xs'>(SOURCE)</span></span>
                        <h2 className="text-2xl tamil-heading md:text-3xl font-black text-white font-mono leading-relaxed">
                            <Typewriter text={data.Line1} onComplete={() => setShowLine2(true)} />
                            <br />
                            {showLine2 && <Typewriter text={data.Line2} className="text-orange-600" />}
                            <span className="inline-block w-2 h-6 bg-orange-600 ml-2 animate-pulse align-middle" />
                        </h2>
                    </div>
                );
            case "ENGLISH":
                return (
                    <div className="space-y-4 tamil-heading">
                        <span className="text-[10px] text-orange-600  font-bold tracking-widest block">TRANSLATION</span>
                        <p className="text-xl tamil-heading text-gray-300 italic font-mono leading-relaxed border-l-2 border-white/20 pl-4">
                            “ <Typewriter text={data.Translation} /> ”
                        </p>
                    </div>
                );
            case "URAI1":
                return (
                    <div className="space-y-3">
                        <span className="text-[10px] text-orange-600  font-bold tracking-widest block uppercase">M. Varatharasanar Explanation</span>
                        <p className="text-lg tamil-heading text-gray-400 font-mono leading-relaxed">
                            <Typewriter text={data.mv} />
                        </p>
                    </div>
                );
            case "URAI2":
                return (
                    <div className="space-y-3">
                        <span className="text-[10px] text-orange-600  font-bold tracking-widest block uppercase">M. Karunanidhi Explanation</span>
                        <p className="text-lg tamil-heading text-gray-400 font-mono leading-relaxed">
                            <Typewriter text={data.mk} />
                        </p>
                    </div>
                );
            case "URAI3":
                return (
                    <div className="space-y-3">
                        <span className="text-[10px] text-orange-600  font-bold tracking-widest block uppercase">Solomon Pappaiah Explanation</span>
                        <p className="text-lg tamil-heading text-gray-400 font-mono leading-relaxed">
                            <Typewriter text={data.sp} />
                        </p>
                    </div>
                );
            default: return null;
        }
    };

    if (!data) {
        return (
            <div className="text-gray-500 font-mono text-center p-10">
                ERROR::LINK_FAILURE
            </div>
        );
    }

    return (
        <section onClick={nextStep} className="relative tamil-heading max-w-7xl mx-auto flex flex-row overflow-hidden cursor-pointer my-12 p-1 border border-white/5 rounded-sm shadow-2xl transition-all duration-500">
            <div className="w-1/4 h-auto flex items-center justify-center border-r border-white/5">
                <img src={Img_Helper.thiruvalluvar} alt="" className="w-full h-auto" />
            </div>

            <div className="w-3/4 h-auto">
                <div className="relative z-10 p-5 flex flex-col gap-2">

                    <div className="flex flex-wrap gap-4 items-center border-b border-white/5 pb-4">
                        <h1 className="text-xs font-black text-white uppercase tracking-[0.4em]">
                            {step % 2 === 0 ? "திருக்குறள்" : "Thirukkural"}
                        </h1>
                        <span className="px-2 py-0.5 bg-orange-600/10 border border-orange-500/20 text-[9px] text-orange-500 uppercase font-bold">
                            {data.paal}
                        </span>
                        <span className="text-sm text-gray-400 font-mono ml-auto flex justify-center items-center gap-2 tamil-heading">
                            <AiOutlineDoubleRight className='text-orange-600/80' /> NEXT_STEP: {STEPS[(step + 1) % STEPS.length]}
                        </span>
                    </div>

                    <div
                        key={step}
                        className="relative min-h-[140px] flex items-center
                     animate-fadeIn transition-opacity duration-700"
                    >
                        {renderContent()}
                    </div>

                    {/* Footer HUD */}
                    <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-4">
                        <div className="text-sm text-gray-400 tamil-heading font-mono">
                            CHAPTER: <span className='text-lg'>{data.athigaram}</span> <br />
                            GROUP: <span className='text-lg'>{data.iyal}</span>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-black text-orange-600/80 uppercase tracking-[0.3em] italic">
                                {step % 2 === 0 ? "– திருவள்ளுவர்" : "– Thiruvalluvar"}
                            </span>
                        </div>
                    </div>

                </div>

                <div className="absolute bottom-3 right-3 text-6xl font-black text-white/10 pointer-events-none select-none">
                    {data.Number}
                </div>
            </div>
        </section>
    );
};

export default Thirukural;
