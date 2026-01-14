
// === NOT DUMB APP LOGIC ===
let notDumbStep = 0;
const notDumbSlides = [
    // 0: ENTRY (Handled by init)
    { type: 'entry' },

    // 1: OBSERVATIONS
    {
        type: 'html', content: `
        <div class="space-y-6 animate-fade-in-up">
            <div class="text-[10px] uppercase tracking-widest text-gray-400 mb-6 font-bold">System Observations</div>
            <div class="border-l-4 border-gray-300 pl-6 py-3 text-lg italic text-gray-600 font-serif">“Understands everything. Responds late.”</div>
            <div class="border-l-4 border-gray-300 pl-6 py-3 text-lg italic text-gray-600 font-serif delay-100">“Overthinks silently. Says ‘nothing’s wrong.’”</div>
            <div class="border-l-4 border-gray-300 pl-6 py-3 text-lg italic text-gray-600 font-serif delay-200">“Remembers details. Misses the point.”</div>
            <div class="border-l-4 border-gray-300 pl-6 py-3 text-lg italic text-gray-600 font-serif delay-300">“Emotion detected. Action delayed.”</div>
            <div class="border-l-4 border-gray-300 pl-6 py-3 text-lg italic text-gray-600 font-serif delay-500">“Stubborn even when correct.”</div>
        </div>
    `},

    // 2: VOICEBOX
    {
        type: 'html', content: `
        <div class="flex flex-col items-center justify-center h-full animate-fade-in-up">
            <div class="text-[10px] uppercase tracking-widest text-gray-400 mb-8 font-bold">Audio Evidence Found</div>
            <div class="relative group cursor-pointer" onclick="playVoiceMemo(2)">
                <div class="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-500 animate-pulse"></div>
                <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition duration-300 relative z-10 text-white text-3xl">
                    <i class="fas fa-play pl-2"></i>
                </div>
            </div>
            <div class="mt-8 text-center space-y-2">
                <div class="text-xl font-bold text-gray-800">“Stop acting dumb 🙄”</div>
                <div class="text-xs text-gray-400 font-mono">Source: VoiceBox / Yesterday</div>
            </div>
        </div>
    `},

    // 3: LOGS
    {
        type: 'html', content: `
         <div class="space-y-4 animate-fade-in-up h-full overflow-y-auto custom-scroll pr-2">
            <div class="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold">Expand System Logs</div>
            
            <details class="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden" open>
                <summary class="flex justify-between items-center p-4 cursor-pointer font-bold text-xs uppercase tracking-wide hover:bg-gray-50 transition list-none">
                    <span class="flex items-center gap-2">🙄 Pretends Not to Care</span>
                </summary>
                <div class="p-5 text-xs bg-gray-50/50 border-t border-gray-100">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="text-gray-500">BEHAVIOR:<br><span class="text-gray-800">Acts detached.</span></div>
                        <div class="text-red-500">TRUTH:<br><span class="text-gray-800 font-bold">Cares deeply.</span></div>
                    </div>
                </div>
            </details>

            <details class="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <summary class="flex justify-between items-center p-4 cursor-pointer font-bold text-xs uppercase tracking-wide hover:bg-gray-50 transition list-none">
                    <span class="flex items-center gap-2">🧠 Scary Memory</span>
                </summary>
                <div class="p-5 text-xs bg-gray-50/50 border-t border-gray-100">
                    <div class="mb-2">Remembers exact words from 2024.</div>
                    <div class="text-yellow-600 bg-yellow-50 p-2 rounded border border-yellow-100">⚠ Acts clueless when things get real.</div>
                </div>
            </details>

            <details class="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                 <summary class="flex justify-between items-center p-4 cursor-pointer font-bold text-xs uppercase tracking-wide hover:bg-gray-50 transition list-none">
                    <span class="flex items-center gap-2">🏏 Sports Paradox</span>
                </summary>
                <div class="p-5 text-xs bg-gray-50/50 border-t border-gray-100">
                     Talks Football strategies for hours.<br>
                     <span class="font-bold text-red-500">Never watched Cricket.</span>
                </div>
            </details>

             <details class="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                 <summary class="flex justify-between items-center p-4 cursor-pointer font-bold text-xs uppercase tracking-wide hover:bg-gray-50 transition list-none">
                    <span class="flex items-center gap-2">🎭 Nicknames</span>
                </summary>
                <div class="p-5 text-xs bg-gray-50/50 border-t border-gray-100 italic text-gray-600">
                     Mr. Snow, Mr. Chuha, Rabbit, Mr. Ota...<br>
                     Accepts all. Questions none.
                </div>
            </details>
        </div>
    `},

    // 4: METERS
    {
        type: 'html', content: `
        <div class="flex flex-col justify-center h-full animate-fade-in-up space-y-8 px-4">
             <div class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold text-center">Live Analysis</div>
             
             <div>
                <div class="flex justify-between text-xs mb-2 font-bold text-gray-700"><span>Logic Efficiency</span> <span>80%</span></div>
                <div class="h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-100">
                    <div class="h-full bg-blue-500 rounded-full shadow-lg transition-all duration-[2s]" style="width: 0%; animation: fillBar 1.5s forwards 0.2s; width: 80%"></div>
                </div>
            </div>

             <div>
                <div class="flex justify-between text-xs mb-2 font-bold text-gray-700"><span>Emotional Decisions</span> <span>30%</span></div>
                <div class="h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-100">
                    <div class="h-full bg-red-400 rounded-full shadow-lg transition-all duration-[2s]" style="width: 0%; animation: fillBar 1.5s forwards 0.4s; width: 30%"></div>
                </div>
            </div>

             <div>
                <div class="flex justify-between text-xs mb-2 font-bold text-gray-700"><span>Stubbornness</span> <span>100%</span></div>
                <div class="h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-100">
                    <div class="h-full bg-gray-800 rounded-full shadow-lg" style="width: 100%"></div>
                </div>
                <div class="text-[10px] text-gray-400 mt-1 italic text-right">System can do nothing about this.</div>
            </div>
        </div>
        <style> @keyframes fillBar { from { width: 0; } } </style>
    `},

    // 5: QUOTE
    {
        type: 'html', content: `
        <div class="flex flex-col items-center justify-center h-full animate-fade-in-up text-center cursor-help" title="Permission: Admin Shravii">
             <div class="font-mono text-[10px] text-gray-300 mb-8 animate-pulse">> Decrypting hidden note...</div>
             <div class="font-serif italic text-4xl leading-tight text-gray-800 drop-shadow-md">
                “Not dumb.<br>
                <span class="opacity-0 animate-fade-in-up" style="animation-delay: 1s; animation-fill-mode: forwards">Just feels deeply</span><br>
                <span class="opacity-0 animate-fade-in-up" style="animation-delay: 2s; animation-fill-mode: forwards">and pretends not to.”</span>
             </div>
        </div>
    `},

    // 6: FINAL
    {
        type: 'html', content: `
        <div class="flex flex-col items-center justify-center h-full animate-fade-in-up text-center relative z-10">
             <div class="w-full max-w-sm p-8 bg-gray-900 text-white rounded-3xl shadow-2xl border border-gray-800 relative overflow-hidden">
                <!-- BG Mesh -->
                <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#4ade80 1px, transparent 1px); background-size: 20px 20px;"></div>
                
                <div class="relative z-10">
                    <div class="flex items-center justify-center gap-2 text-green-400 font-mono text-xs mb-8">
                        <span class="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                        OVERRIDE CONFIRMED
                    </div>

                    <div class="text-2xl font-serif italic text-gray-200 mb-8 leading-relaxed">
                        User is not dumb.<br>
                        <span class="text-blue-300">Just emotionally soft,</span><br>
                        stubborn, and<br>
                        <span class="text-white font-bold border-b border-white/20 pb-1">deeply human.</span>
                    </div>

                    <button onclick="Apps.close('not-dumb')" class="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-xs font-bold tracking-widest uppercase transition border border-white/10">
                        Close Log
                    </button>
                </div>
             </div>
        </div>
    `}
];

function initNotDumb() {
    notDumbStep = 0;
    const container = document.getElementById('not-dumb-content');
    const nav = document.getElementById('not-dumb-nav');

    // RESET
    if (container) container.innerHTML = '';
    if (nav) nav.style.opacity = '0';

    // RENDER STEP 0 (Timed Entry)
    if (container) {
        container.innerHTML = `
            <div class="flex flex-col justify-center h-full font-mono text-xs space-y-4 select-none">
                <div class="flex items-center gap-2 text-gray-500">
                    <span class="text-green-500">➜</span>
                    <span class="typewriter-text" style="animation: typing 1s steps(20, end);">Opening Not Dumb.app...</span>
                </div>
                <div style="opacity: 0; animation: fadeIn 0.5s ease-out 1.5s forwards;">> Intelligence check: <span class="text-green-600 font-bold bg-green-100 px-1 rounded">PASSED</span></div>
                <div style="opacity: 0; animation: fadeIn 0.5s ease-out 2.5s forwards;">> Decision-making module: <span class="text-red-500 font-bold animate-pulse">Questionable</span></div>
            </div>
        `;
    }

    // Auto-advance after 5 seconds to next slide button
    setTimeout(() => {
        if (nav) nav.style.opacity = '1';
    }, 4500);
}

function nextNotDumbSlide() {
    notDumbStep++;
    const container = document.getElementById('not-dumb-content');
    const nav = document.getElementById('not-dumb-nav');

    if (notDumbStep >= notDumbSlides.length) {
        // End of slides
        Apps.close('not-dumb');
        return;
    }

    const slide = notDumbSlides[notDumbStep];

    if (slide.type === 'html' && container) {
        // Fade out slightly
        container.style.opacity = '0';
        container.style.transform = 'translateY(10px) scale(0.98)';

        setTimeout(() => {
            container.innerHTML = slide.content;
            container.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0) scale(1)';
        }, 200);
    }

    // Hide nav on final slide
    if (notDumbStep === notDumbSlides.length - 1 && nav) {
        nav.style.opacity = '0';
        nav.style.pointerEvents = 'none';
    }
}

// Export
window.initNotDumb = initNotDumb;
window.nextNotDumbSlide = nextNotDumbSlide;
