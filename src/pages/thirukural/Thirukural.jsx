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

    const STEPS = ["தமிழ்", "ENGLISH", "URAI1", "URAI2", "URAI3"];

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

    if (!data) return <div className="p-10 md:p-20 text-orange-500 font-mono animate-pulse text-center">INIT_SYSTEM...</div>;

    const renderContent = () => {
        switch (STEPS[step]) {
            case "தமிழ்":
                return (
                    <div className="space-y-2 md:space-y-4">
                        <span className="text-xs md:text-sm text-orange-600 font-bold tracking-widest block underline tamil-heading uppercase">மூலக்குறள் <span className='text-[10px]'>(SOURCE)</span></span>
                        <h2 className="text-xl md:text-3xl  font-black text-white font-mono tamil-heading leading-relaxed break-words">
                            <Typewriter text={data.Line1} onComplete={() => setShowLine2(true)} />
                            <br />
                            {showLine2 && <Typewriter text={data.Line2} className="text-orange-600" />}
                            <span className="inline-block w-0.5 h-5 md:h-6 bg-orange-600 ml-2 animate-pulse align-middle" />
                        </h2>
                    </div>
                );
            case "ENGLISH":
                return (
                    <div className="space-y-4">
                        <span className="text-[10px] tamil-heading text-orange-600 font-bold tracking-widest block uppercase">TRANSLATION</span>
                        <p className="text-lg md:text-xl tamil-heading text-gray-300 italic font-mono leading-relaxed border-l-2 border-orange-600/30 pl-4">
                            “ <Typewriter text={data.Translation} /> <span className="inline-block w-0.5 h-5 md:h-6 bg-white ml-2 animate-pulse align-middle" /> ”
                        </p>
                    </div>
                );
            default:

                {
                    const uraiTitle = {
                        URAI1: "M. Varatharasanar Explanation",
                        URAI2: "M. Karunanidhi Explanation",
                        URAI3: "Solomon Pappaiah Explanation"
                    }[STEPS[step]];

                    const uraiContent = data[STEPS[step] === "ENGLISH" ? 'mv' : STEPS[step] === "URAI1" ? 'mv' : STEPS[step] === "URAI2" ? 'mk' : 'sp'];

                    return (
                        <div className="space-y-3">
                            <span className="text-[10px] text-orange-600 font-bold tracking-widest tamil-heading block uppercase">{uraiTitle}</span>
                            <p className="text-base  md:text-lg tamil-heading  text-gray-400 font-mono leading-relaxed">
                                <Typewriter text={uraiContent} />
                                <span className="inline-block w-0.5 h-5 md:h-6 bg-white ml-2 animate-pulse align-middle" /> 
                            </p>
                        </div>
                    );
                }
        }
    };

    return (
        <section
            onClick={nextStep}
            className="relative max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden cursor-pointer my-6 md:my-12 lg:mx-auto border border-white/5 rounded-lg bg-black/20 shadow-2xl transition-all duration-500 hover:border-white/10"
        >
            {/* Image Section */}
            <div className="w-full md:w-1/4 h-48 md:h-auto flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-b from-orange-600/5 to-transparent">
                <img
                    src={Img_Helper.thiruvalluvar}
                    alt="Thiruvalluvar"
                    className="h-full w-auto object-contain p-4 md:p-2 opacity-80 hover:opacity-100 transition-opacity"
                />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-3/4 relative">
                <div className="relative z-10 p-5 md:p-8 flex flex-col">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                        <div className="flex items-center gap-3">
                            <h1 className={`tamil-heading text-[10px] md:text-xs font-black text-white uppercase tracking-[0.4em]  `}>
                                {step % 2 === 0 ? "திருக்குறள்" : "Thirukkural"}
                            </h1>
                            <span className="tamil-heading px-2 py-0.5 bg-orange-600/10 border border-orange-500/20 text-[8px] md:text-[9px]  text-orange-500 uppercase font-bold rounded">
                                {data.paal}
                            </span>
                        </div>
                        <span className="text-[10px] md:text-sm tamil-heading text-gray-400 font-mono sm:ml-auto flex items-center gap-2 ">
                            <span><AiOutlineDoubleRight className='text-orange-600 animate-pulse' /></span>
                            <span className="hidden xs:inline ">NEXT:</span> {STEPS[(step + 1) % STEPS.length]}
                        </span>
                    </div>

                    {/* Content Body */}
                    <div key={step} className="relativepy-10 flex items-center transition-all min-h-[200px]">
                        {renderContent()}
                    </div>

                    {/* Footer HUD */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-white/5 pt-4 gap-4">
                        <div className="text-[10px] md:text-xs text-gray-500 font-mono uppercase tracking-tighter">
                            <div className="mb-1 tamil-heading text-sm font-semibold gap-3 flex flex-row items-end"> <span className='text-white text-sm md:text-base '> {data.athigaram}</span> <span> - </span> Chapter</div>
                            <div className='tamil-heading text-sm font-semibold gap-3 flex flex-row items-end'><span className='text-white text-sm md:text-base '>{data.iyal}</span> <span> - </span> Group </div>
                        </div>
                        <div className="w-full sm:w-auto text-right">
                            <span className={`text-xs tamil-heading md:text-sm font-black text-orange-600/80 uppercase tracking-[0.2em] italic `}>
                                {step % 2 === 0 ? "– திருவள்ளுவர்" : "– Thiruvalluvar"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Background Watermark */}
                <div className="absolute bottom-2 right-4 text-6xl md:text-8xl font-black text-white/[0.03] pointer-events-none select-none">
                    {data.Number}
                </div>
            </div>
        </section>
    );
};

export default Thirukural;