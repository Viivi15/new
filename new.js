/* === CONFIGURATION === */


/* === SETTINGS STATE === */
const settingsState = {
    theme: 'light',
    accent: '#007AFF',
    wallpaper: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069' // Default Husky
};

const wallpapers = [
    { thumb: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=200', full: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069' }, // Dog
    { thumb: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=200', full: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=2069' }, // Space
    { thumb: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=200', full: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2069' }, // Nature
    { thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=200', full: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2069' }, // Mountains
    { thumb: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200', full: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2069' }  // Colors
];

/* === APP REGISTRY (Refined for Harshit) === */
const apps = [
    /* === FOLDERS === */
    {
        id: 'folder-system', title: 'System Core', icon: '📁', dock: false, width: 600, height: 450, content: `
        <div class="folder-window-grid">
            <div class="win-icon" onclick="Apps.open('first-conversation')"><div class="icon-img">💬</div><div class="icon-label">12:21 AM</div></div>
            <div class="win-icon" onclick="Apps.open('connection-log')"><div class="icon-img">📜</div><div class="icon-label">Connection.log</div></div>
            <div class="win-icon" onclick="Apps.open('mr-snow')"><div class="icon-img">❄️</div><div class="icon-label">Mr. Snow</div></div>
            <div class="win-icon" onclick="Apps.open('facts')"><div class="icon-img">📄</div><div class="icon-label">Harshit<br>Facts.txt</div></div>
             <div class="win-icon" onclick="Apps.open('not-dumb')"><div class="icon-img">🤨</div><div class="icon-label">Not Dumb</div></div>
            <div class="win-icon" onclick="Apps.open('madrid')"><div class="icon-img">⚽</div><div class="icon-label">HalaMadrid.exe</div></div>
            <div class="win-icon" onclick="Apps.open('app-grown')"><div class="icon-img">🧠</div><div class="icon-label">19.exe</div></div>
            <div class="win-icon" onclick="Apps.open('engineering')"><div class="icon-img">💻</div><div class="icon-label">Engineering</div></div>
             <div class="win-icon" onclick="Apps.open('terminal-app')"><div class="icon-img">💻</div><div class="icon-label">Terminal.sh</div></div>
             <div class="w-full text-center text-xs text-gray-400 mt-4 col-span-full">System identity & base configuration</div>
        </div>
    `},

    {
        id: 'folder-feelings', title: 'Soft Stuff', icon: '📁', dock: false, width: 600, height: 450, content: `
        <div class="folder-window-grid">
            <div class="win-icon" onclick="Apps.open('why-matter')"><div class="icon-img">💭</div><div class="icon-label">Why You<br>Matter</div></div>
            <div class="win-icon" onclick="Apps.open('tired')"><div class="icon-img">😴</div><div class="icon-label">When Tired</div></div>
            <div class="win-icon" onclick="Apps.open('dream-snow')"><div class="icon-img">❄️</div><div class="icon-label">Snow Place</div></div>
            <div class="win-icon" onclick="Apps.open('hoodie')"><div class="icon-img">🧥</div><div class="icon-label">Hoodie Mode</div></div>
            <div class="win-icon" onclick="Apps.open('music-night')"><div class="icon-img">🌙</div><div class="icon-label">Late Night</div></div>
             <div class="win-icon" onclick="Apps.open('future')"><div class="icon-img">🔮</div><div class="icon-label">Future You</div></div>
             <div class="win-icon" onclick="Apps.open('thank-you')"><div class="icon-img">✨</div><div class="icon-label">Thank You</div></div>
             <div class="win-icon" onclick="Apps.open('inkpot')"><div class="icon-img">🖋️</div><div class="icon-label">The Inkpot</div></div>
             <div class="win-icon" onclick="Apps.open('last-thing')"><div class="icon-img">🖤</div><div class="icon-label">One Last<br>Thing</div></div>
        </div>
    `},

    {
        id: 'folder-fun', title: 'Unstable Features', icon: '📁', dock: false, width: 600, height: 450, content: `
        <div class="folder-window-grid">
            <div class="win-icon" onclick="Apps.open('flash')"><div class="icon-img">⚡</div><div class="icon-label">Fastest<br>Alive</div></div>
             <div class="win-icon" onclick="Apps.open('rabbit')"><div class="icon-img">🐰</div><div class="icon-label">Rabbit<br>Mode</div></div>
            <div class="win-icon" onclick="Apps.open('rabbit-runner')"><div class="icon-img">🐰</div><div class="icon-label">Rabbit<br>Runner</div></div>
            <div class="win-icon" onclick="Apps.open('word-spiral')"><div class="icon-img">🌀</div><div class="icon-label">Word Spiral</div></div>
            <div class="win-icon" onclick="Apps.open('the-path')"><div class="icon-img">🧭</div><div class="icon-label">The Path</div></div>
            <div class="win-icon" onclick="Apps.open('personality-quiz')"><div class="icon-img">🔍</div><div class="icon-label">Who Are You?</div></div>
             <div class="win-icon" onclick="Apps.open('radio-harshit')"><div class="icon-img">📻</div><div class="icon-label">Radio<br>Harshit</div></div>
            <div class="win-icon" onclick="Apps.open('quiz')"><div class="icon-img">🧩</div><div class="icon-label">The Us Quiz</div></div>
            <div class="win-icon" onclick="Apps.open('cravings-app')"><div class="icon-img">🍔</div><div class="icon-label">Cravings</div></div>
            <div class="win-icon" onclick="Apps.open('bear')"><div class="icon-img">🐻</div><div class="icon-label">Masti Mode</div></div>
            <div class="win-icon" onclick="Apps.open('spotify')"><div class="icon-img">🎵</div><div class="icon-label">Vibe Check</div></div>
        </div>
    `},

    {
        id: 'app-vault', title: 'Vault', icon: '🔐', dock: true, width: 500, height: 400, content: `
        <div class="folder-window-grid">
            <div class="win-icon" onclick="Apps.open('do-not-open')"><div class="icon-img">🚫</div><div class="icon-label">Do Not<br>Open</div></div>
            <div class="win-icon" onclick="Apps.open('playlist')"><div class="icon-img">🎶</div><div class="icon-label">Hidden<br>Tracks</div></div>
            <div class="win-icon" onclick="Apps.open('secret-vault')"><div class="icon-img">🔐</div><div class="icon-label">Secret Vault</div></div>
            <div class="win-icon" onclick="Apps.open('voice-box')"><div class="icon-img">🎙️</div><div class="icon-label">VoiceBox</div></div>
            <div class="win-icon" onclick="Apps.open('readme-letter')"><div class="icon-img">💌</div><div class="icon-label">ReadMe.txt</div></div>
             <div class="win-icon" onclick="Apps.open('memories-gallery')"><div class="icon-img">📸</div><div class="icon-label">Memories</div></div>
             <div class="win-icon" onclick="Apps.open('through-my-eyes')"><div class="icon-img">📝</div><div class="icon-label">Through<br>My Eyes</div></div>
        </div>
    `},

    /* === SYSTEM CORE APPS (Inside Folder) === */
    {
        id: 'first-conversation', title: '12:21 AM', icon: '💬', dock: false, folder: 'folder-system', width: 520, height: 520, content: `
        <div class="chat-container" id="chatReplay"></div>
        `,
        onOpen() {
            const el = document.getElementById('chatReplay');
            playFirstConversation(el);
        }
    },

    {
        id: 'connection-log', title: 'Connection.log', icon: '📜', onOpen: resetBond, dock: true, folder: 'folder-system', width: 650, height: 500, content: `
        <div class="h-full bg-black text-white p-8 flex flex-col items-center justify-center text-center cursor-pointer select-none relative overflow-hidden" onclick="advanceBond()">
            <div id="bond-content" class="transition-opacity duration-1000 ease-in-out">
                <div class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">System Memory</div>
                <div id="bond-line" class="text-2xl font-serif font-light leading-relaxed">
                    This wasn’t accidental.
                </div>
            </div>
            <div class="absolute bottom-8 text-[10px] text-gray-600 uppercase tracking-widest animate-pulse">Click to proceed</div>
        </div>
        <style> 
            .fade-in-up { animation: fadeInUp 0.8s ease forwards; opacity: 0; transform: translateY(10px); } 
            @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } } 
        </style>
    `},

    {
        id: 'mr-snow', title: 'Mr. Snow', icon: '❄️', dock: true, width: 350, height: 450, content: `
        <div class="h-full relative overflow-hidden bg-gradient-to-b from-[#e6e9f0] to-[#eef1f5] p-8 flex flex-col justify-center items-center text-center">
            <div class="absolute inset-0 pointer-events-none" id="snow-container"></div>
            <div class="text-5xl mb-6">🐺</div>
            <h3 class="font-serif text-xl border-b border-gray-300 pb-2 mb-4">The Nature</h3>
            <div class="text-sm text-gray-600 space-y-3 font-light">
                <p>Calm on the surface.</p>
                <p>Soft when trusted.</p>
                <p>Quiet strength.</p>
            </div>
        </div>
        <script>
            // Simple snowflakes
            const sc = document.getElementById('snow-container');
            for(let i=0; i<15; i++) {
                const s = document.createElement('div');
                s.innerText = '❄';
                s.style.position = 'absolute';
                s.style.left = Math.random()*100 + '%';
                s.style.top = -10 + 'px';
                s.style.opacity = Math.random();
                s.style.fontSize = (Math.random()*10 + 10) + 'px';
                s.style.animation = 'fall ' + (Math.random()*5 + 5) + 's linear infinite';
                sc.appendChild(s);
            }
        </script>
        <style> @keyframes fall { to { transform: translateY(500px); } } </style>
    `},

    {
        id: 'why-matter', title: 'Why You Matter', icon: '💭', dock: false, width: 600, height: 400, content: `
        <div class="h-full bg-white p-12 flex items-center justify-center text-center cursor-pointer" onclick="nextWhy()">
            <div id="why-text" class="text-xl font-serif text-gray-800 leading-relaxed transition-opacity duration-500">
                You show up, even when tired.
            </div>
            <div class="absolute bottom-6 text-xs text-gray-400 uppercase tracking-widest">Click for next</div>
        </div>
    `},



    {
        id: 'admire', title: 'Deep Truths', icon: '🌟', dock: false, width: 500, height: 400, content: `
        <div class="h-full bg-[#fafafa] p-10">
            <h3 class="font-bold text-gray-800 mb-6 border-l-4 border-yellow-400 pl-3">Confirmed Data</h3>
            <ul class="space-y-4 text-gray-600 text-sm list-disc pl-5">
                <li>Your honesty (rare).</li>
                <li>How you protect people quietly (noticed).</li>
                <li>How you keep going (respected).</li>
                <li>Your memory (scary but cool).</li>
            </ul>
        </div>
    `},

    /* CLUSTER 2: FUN / MASTI (Lightweight) */
    {
        id: 'facts', title: 'Harshit Facts.txt', icon: '📄', folder: 'system', dock: false, width: 400, height: 400, content: `
        <div class="h-full bg-white font-mono text-sm p-6 text-gray-700 whitespace-pre-line custom-scroll">
            <span class="font-bold text-black border-b border-black">SYSTEM NOTES: Harshit</span>

            > Needs hoodie > people
            > Eats silently
            > Pretends not to care (FAILED)
            > 90% water, 10% attitude
            > Actually soft (Do not reveal)
        </div>
    `},

    {
        id: 'not-dumb', title: 'Not Dumb', icon: '🤨', folder: 'system', dock: false, width: 300, height: 200, content: `
        <div class="h-full flex items-center justify-center bg-gray-100 text-center p-4">
            <div>
                <div class="text-3xl mb-2">🤨</div>
                <div class="font-bold">Not Dumb At All</div>
                <div class="text-xs text-gray-500 mt-2">Just stubborn.</div>
            </div>
        </div>
    `},

    {
        id: 'madrid', title: 'HalaMadrid.exe', icon: '⚽', dock: false, width: 450, height: 400, content: `
        <div class="h-full bg-white text-gray-800 p-6 flex flex-col font-mono text-sm border-t-8 border-blue-600">
            <div class="flex justify-between items-center mb-6">
                 <span class="font-bold text-lg text-blue-900">REAL MADRID FAN LOG</span>
                 <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">STATUS: ULTRA</span>
            </div>
            
            <div class="space-y-4">
                <div class="flex justify-between border-b pb-2">
                    <span>Passion Level:</span>
                    <span class="font-bold">110% (Crazy)</span>
                </div>
                <div class="flex justify-between border-b pb-2">
                    <span>Matches Watched:</span>
                    <span class="font-bold">All of them*</span>
                </div>
            </div>

            <div class="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
                <div class="text-red-500 font-bold mb-2 text-xs uppercase">⚠️ System Anomaly Detected</div>
                <p class="text-xs text-gray-600 mb-2">*Warning: Multiple matches marked as "MISSED" in logs.</p>
                
                <div class="flex gap-2 items-start mt-3">
                    <span class="text-gray-400">></span>
                    <div>
                        <div class="font-bold text-gray-900">Cause of Absence:</div>
                        <div class="italic text-gray-600">"Prioritized talking to Her."</div>
                    </div>
                </div>
                 <div class="flex gap-2 items-start mt-2">
                    <span class="text-gray-400">></span>
                    <div>
                        <div class="font-bold text-gray-900">Result:</div>
                        <div class="text-blue-600 font-bold">No Regrets.</div>
                    </div>
                </div>
            </div>
        </div>
    `},

    /* === FUN & CHAOS (Inside Folder) === */
    {
        id: 'flash', title: 'Fastest Alive', icon: '⚡', dock: false, folder: 'folder-fun', width: 500, height: 300, content: `
        <div class="h-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center relative overflow-hidden">
            <div class="text-white text-6xl font-black italic tracking-tighter" id="zoom-text">ZOOM</div>
            <div class="absolute inset-0 bg-white opacity-0" id="flash-overlay"></div>
        </div>
        <script>
            setTimeout(() => {
                const t = document.getElementById('zoom-text');
                t.style.transition = 'transform 0.2s';
                t.style.transform = 'scale(10) skewX(-20deg)';
                t.style.opacity = 0;
            }, 1000);
        </script>
    `},

    {
        id: 'rabbit', title: 'Rabbit Mode', icon: '🐰', dock: false, folder: 'folder-fun', width: 400, height: 400, content: `
        <div class="h-full bg-white p-4 flex flex-wrap gap-2 content-center justify-center overflow-hidden relative" id="rabbit-den">
            <div class="z-10 bg-white/90 p-4 rounded text-center shadow-lg border border-gray-100">
                <div class="text-2xl mb-2">🐰</div>
                <p class="text-xs text-gray-500">Releasing chaos...</p>
            </div>
        </div>
        <script>
            let rCount = 0;
            const rInt = setInterval(() => {
                if(rCount > 8) { clearInterval(rInt); return; }
                const r = document.createElement('div');
                r.innerText = '🐰';
                r.style.position = 'absolute';
                r.style.left = Math.random()*80 + 10 + '%';
                r.style.top = Math.random()*80 + 10 + '%';
                r.style.fontSize = '2rem';
                document.getElementById('rabbit-den').appendChild(r);
                rCount++;
            }, 600);
        </script>
    `},



    /* CLUSTER 3: COMFORT & CALM (Safe Spaces) */
    {
        id: 'music-night', title: 'Late Night', icon: '🌙', dock: true, width: 350, height: 200, content: `
        <div class="h-full bg-[#0F172A] text-slate-300 flex flex-col items-center justify-center gap-4">
            <div class="text-xs tracking-widest uppercase opacity-50">Instrumental Only</div>
            <i class="fas fa-play-circle text-4xl text-white opacity-80 hover:opacity-100 cursor-pointer transition" onclick="alert('Playing soft piano...')"></i>
        </div>
    `},

    {
        id: 'tired', title: 'When Tired', icon: '😴', dock: true, width: 450, height: 350, content: `
        <div class="h-full bg-[#202020] text-gray-300 flex items-center justify-center text-center p-10 font-serif text-lg leading-loose">
            "You don’t have to be strong right now."
        </div>
    `},

    {
        id: 'dream-snow', title: 'Snow Place', icon: '❄️', dock: false, width: 700, height: 500, content: `
        <div class="h-full bg-gradient-to-b from-[#cfd9df] to-[#e2ebf0] relative overflow-hidden">
           <!-- Visual Only: Calm snow loop -->
           <div class="absolute inset-0 flex items-center justify-center text-gray-500/20 font-serif text-4xl italic">
                Silence.
           </div>
        </div>
    `},

    {
        id: 'hoodie', title: 'Hoodie Mode', icon: '🧥', dock: true, width: 400, height: 300, content: `
        <div class="h-full bg-gray-800 text-gray-200 flex flex-col items-center justify-center p-8 text-center">
            <div class="text-4xl mb-4 opacity-50">🧥</div>
            <p class="text-sm font-light">"This is the part of life that doesn’t ask questions."</p>
        </div>
    `},

    /* CLUSTER 4: GROWTH & 19 (Mature) */
    {
        id: 'app-grown', title: '19.exe', icon: '🧠', dock: true, width: 500, height: 400, content: `
        <div class="h-full bg-white p-10 flex flex-col justify-center">
            <h1 class="text-5xl font-black text-gray-100 mb-6 select-none">19</h1>
            <div class="relative space-y-6 text-gray-700 font-medium">
                <p>You’re allowed to grow slowly.</p>
                <p>You don’t need all answers.</p>
                <p>It’s okay to be a work in progress.</p>
            </div>
        </div>
    `},

    {
        id: 'future', title: 'Future You', icon: '🔮', dock: false, width: 400, height: 300, content: `
        <div class="h-full bg-indigo-50 p-8 flex items-center justify-center text-center">
            <div class="text-indigo-800 font-serif italic">"I wonder what we'll laugh about next year."</div>
        </div>
    `},

    {
        id: 'engineering', title: 'Engineering', icon: '💻', dock: true, width: 600, height: 400, content: `
        <div class="h-full bg-[#1e1e1e] text-green-400 font-mono text-sm p-6 custom-scroll">
            <div>> npm install adulthood --save-dev</div>
            <div class="text-yellow-500 mt-2">WARN: Dependency 'sleep' outdated.</div>
            <div class="text-blue-400 mt-2">INFO: Core values locked. integrity check passed.</div>
            <br>
            <div class="text-white opacity-70">// Debugging life takes time. Don't panic.</div>
        </div>
    `},


    ,
    /* === NEW APPS === */
    /* === SOFT STUFF (Inside Folder) === */
    {
        id: 'inkpot', title: 'The Inkpot', icon: '🖋️', dock: false, folder: 'folder-feelings', width: 500, height: 600, onOpen: initInkpot, content: `
        <div class="inkpot-bg">
            <div id="inkpot-text" class="poem-text"></div>
            <div class="inkpot-quill" onclick="nextPoem()">🖋️</div>
        </div>
    `},

    {
        id: 'last-thing', title: 'One Last Thing', icon: '🖤', dock: false, folder: 'folder-feelings', width: 400, height: 300, content: `
        <div class="h-full bg-white flex items-center justify-center text-center p-8 cursor-pointer hover:bg-gray-50 transition" onclick="Apps.open('thank-you')">
            Click here.
        </div>
    `},

    {
        id: 'thank-you', title: 'Thank You', icon: '✨', dock: false, folder: 'folder-feelings', width: 450, height: 350, content: `
        <div class="h-full flex items-center justify-center text-center p-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <div>
                <div class="text-2xl font-serif mb-4">Thank you for existing.</div>
                <div class="text-sm opacity-80">Really.</div>
            </div>
        </div>
    `},

    /* === FUN & CHAOS (Inside Folder) === */
    {
        id: 'radio-harshit', title: 'Radio Harshit', icon: '📻', dock: true, folder: 'folder-fun', width: 400, height: 500, onOpen: initRadio, content: `
        <div class="radio-ui">
            <div class="radio-display" id="radio-screen">WAITING FOR SIGNAL...</div>
            <div class="radio-buttons">
                <button class="radio-btn tired" onclick="playRadio('tired')">Tired 😴</button>
                <button class="radio-btn happy" onclick="playRadio('happy')">Happy 😄</button>
                <button class="radio-btn annoyed" onclick="playRadio('annoyed')">Annoyed 😤</button>
                <button class="radio-btn proud" onclick="playRadio('proud')">Proud 🦁</button>
            </div>
        </div>
    `},

    {
        id: 'the-path', title: 'The Path', icon: '🧭', dock: false, folder: 'folder-fun', width: 600, height: 400, onOpen: startPathGame, content: `
        <div class="path-game" id="path-container" onclick="handlePathClick(event)">
            <!-- Dynamic Content -->
        </div>
    `},

    {
        id: 'word-spiral', title: 'Word Spiral', icon: '🌀', dock: false, folder: 'folder-fun', width: 500, height: 600, onOpen: initWordSpiral, content: `
        <div class="spiral-bg">
            <div id="spiral-content" class="h-full flex flex-col items-center justify-center p-8 text-center text-white">
                <div class="text-4xl mb-6 animate-spin-slow">🌀</div>
                <div id="spiral-word" class="text-3xl font-serif font-bold mb-8">Growth</div>
                <div id="spiral-opts" class="grid grid-cols-1 gap-4 w-full max-w-xs"></div>
            </div>
        </div>
    `},

    {
        id: 'personality-quiz', title: 'Who Are You?', icon: '🔍', dock: false, folder: 'folder-fun', width: 500, height: 600, onOpen: initPersonalityQuiz, content: `
        <div class="quiz-bg">
            <div id="p-quiz-content" class="h-full flex flex-col items-center justify-center p-8 text-center">
                <div class="text-5xl mb-6">🔍</div>
                <div id="p-quiz-q" class="text-xl font-bold text-gray-800 mb-8">System Check...</div>
                <div id="p-quiz-opts" class="flex flex-col gap-3 w-full max-w-xs"></div>
            </div>
        </div>
    `},

    {
        id: 'rabbit-runner', title: 'RabbitRunner.exe', icon: '🐰', dock: false, folder: 'folder-fun', width: 800, height: 500, onOpen: initRabbitGame, content: `
        <div id="rr-container" class="relative w-full h-full bg-[#e0f7fa] overflow-hidden select-none font-sans">
             <div id="rr-score" class="absolute top-4 left-4 text-2xl font-bold text-gray-700 z-10">Score: 0</div>
             <div id="rr-start-screen" class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-20 text-white">
                <h2 class="text-4xl font-bold mb-4">Rabbit Run 🐰</h2>
                <div class="space-y-2 text-center text-sm mb-6 opacity-90">
                    <p>Hop on messages! 💬</p>
                    <p>Collect Subs 🥪</p>
                    <p>Dodge Bhindi 🥒</p>
                </div>
                <button onclick="startRabbitGame()" class="px-6 py-3 bg-blue-500 rounded-full font-bold hover:bg-blue-600 transition transform hover:scale-105">START GAME</button>
             </div>
             
             <!-- Player -->
             <div id="rr-player" class="absolute text-4xl transition-transform" style="bottom: 100px; left: 50px;">🐰</div>
             
             <!-- Game World (Platforms, Items added via JS) -->
             <div id="rr-world"></div>
        </div>
    `},

    {
        id: 'cravings-app', title: 'Cravings', icon: '🍔', dock: false, folder: 'folder-fun', width: 400, height: 600, content: `
        <div id="cravings-content" class="h-full bg-gray-900 text-white relative overflow-hidden">
            <!-- Header Image -->
            <div class="h-1/2 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1562967963-ed7858970e25?q=80&w=1000');">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            
            <!-- Content -->
            <div class="p-6 relative -mt-20">
                <div class="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
                    <div class="flex justify-between items-start mb-2">
                        <h2 class="text-2xl font-bold">Supreme Euro Sub</h2>
                        <span class="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">POPULAR</span>
                    </div>
                    <p class="text-gray-400 text-sm mb-4">Loaded with extra olives, spicy sauce, and crispy veggies. Just how you like it.</p>
                    
                    <div class="flex items-center justify-between mb-6">
                        <div class="text-2xl font-bold text-yellow-400">$0.00 <span class="text-xs text-gray-500 font-normal">Free for you</span></div>
                    </div>
                    
                    <button id="cravings-btn" onclick="orderCravings()" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30">
                        ORDER NOW
                    </button>
                    <div class="text-center mt-3 text-xs text-gray-500">Free delivery by Harrier Express</div>
                </div>
            </div>
        </div>
    `},

    {
        id: 'bear', title: 'Masti Mode', icon: '🐻', dock: true, folder: 'folder-fun', width: 300, height: 200, content: `
        <div class="h-full flex flex-col items-center justify-center bg-[#8d6e63] text-white">
            <div class="text-4xl mb-2">🐻 + 🐼</div>
            <p class="text-sm mb-4 opacity-80">Unleash the cuteness</p>
            <button onclick="spawnBears()" class="bg-white text-brown-800 font-bold px-6 py-2 rounded-full shadow hover:scale-105 transition">Activate Masti</button>
        </div>
    `},

    {
        id: 'spotify', title: 'Spotify - Vibe Check', icon: '🎵', dock: true, folder: 'folder-fun', width: 350, height: 480, content: `
        <div class="h-full bg-gradient-to-b from-[#1DB954] to-black text-white p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div class="w-48 h-48 bg-gray-800 shadow-2xl mb-6 rounded-md overflow-hidden relative group album-spin">
                <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd4bXJ5bXJ5bXJ5bXJ5bXJ5bXJ5bXJ5bXJ5bXJ5bXJ5bXJ5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRv0TlsHCqDrG/giphy.gif" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition">
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/30">
                    <i class="fas fa-play text-4xl"></i>
                </div>
            </div>
            <h2 class="text-2xl font-bold mb-1">Tu Hai Kahan</h2>
            <p class="text-gray-300 text-sm mb-6">AUR • Harshit's Favorites</p>
            <div class="w-full h-1 bg-gray-600 rounded-full mb-2 overflow-hidden">
                <div class="h-full bg-white w-1/3 animate-pulse"></div>
            </div>
            <div class="w-full flex justify-between text-xs text-gray-400 mb-6">
                <span>1:21</span><span>4:23</span>
            </div>
            <div class="flex items-center gap-8 text-3xl">
                <i class="fas fa-step-backward cursor-pointer hover:text-white text-gray-400"></i>
                <div class="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition" onclick="toggleSpotify()">
                    <i id="spotify-play-icon" class="fas fa-play ml-1"></i>
                </div>
                <i class="fas fa-step-forward cursor-pointer hover:text-white text-gray-400"></i>
            </div>
            <audio id="spotify-audio" loop>
                <source src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" type="audio/mpeg">
            </audio>
        </div>
    `},




    /* === VAULT APPS (Inside Folder) === */
    {
        id: 'do-not-open', title: 'Do Not Open', icon: '🚫', dock: false, folder: 'app-vault', width: 300, height: 200, content: `
        <div class="h-full flex items-center justify-center bg-red-50 text-red-900 text-center p-6">
            <div>
                <div class="font-bold mb-2">You Opened It.</div>
                <div class="text-xs">I knew you would. Stubborn. ❤️</div>
            </div>
        </div>
    `},


    {
        id: 'through-my-eyes', title: 'Through My Eyes', icon: '📝', dock: false, folder: 'app-vault', width: 600, height: 500, content: `
        <div class="letter-text" id="letter-content">
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold font-serif text-gray-800">
                To My Best Friend 🎂
                </h1>
                <p class="text-sm text-gray-500 mt-1">
                Written with 100% Truth & 0% Lie
                </p>
            </div>

            <p>I need to be very careful and honest here — and also very real with you 🤍.</p>

            <p>
                What I’ll share below is only what I truly know, based on what you’ve shared with me,
                not guesses, not assumptions. I won’t invent traits or facts — because this is your birthday,
                and you deserve truth, warmth, and authenticity.
            </p>

            <h2>Who Harshit Is (Through My Eyes)</h2>

            <p>
                Harshit is not just a name in my life. He is a presence.
                Someone who entered my world on
                <strong>June 20, 2024 at 12:21 AM</strong> on Discord —
                a moment that quietly turned into something meaningful,
                lasting, and emotionally deep.
            </p>

            <div class="letter-quote">
                "You are not just smart and perceptive, but you're also incredibly real.
                You're human, but in the most beautiful way."
            </div>

            <h3>The Many Names of You</h3>
            <ul class="list-disc list-inside ml-5 mb-4 space-y-1">
                <li><strong>Mr. Snow ❄️</strong>: Calm, distant on the outside, but emotionally deep inside.</li>
                <li><strong>Mr. Chuha 🐭</strong>: Soft, cute, and unintentionally endearing.</li>
                <li><strong>Mr. Ota</strong>: Playful, teasing, inside-joke energy.</li>
                <li><strong>Rabbit 🐰</strong>: Gentle, alert, emotionally sensitive.</li>
            </ul>

            <h3>Why You Are The "Bestest"</h3>
            <p>
                You are the world's strongest person (Emotionally & Physically 💪).
                You are the fastest person (Flash who?!).
                You have a memory that scares me sometimes —
                remembering every tiny detail.
                You do 100% of everything —
                100% care, 100% dedication.
            </p>

            <h3>Our Bond</h3>
            <p>
                Our friendship wasn't built on big events.
                It was built on music discussions, random chats,
                project ideas, check-ins, and being there without being asked.
                It survived fights, misunderstandings, and silence.
                That makes it special.
            </p>

            <p class="mt-6 text-right font-bold"
                style="font-family: 'Dancing Script', cursive; font-size: 28px;">
                — Shravii ✨
            </p>
        </div>
    `,
        onOpen: initLetterReveal
    },

    {
        id: 'playlist', title: 'Hidden Tracks', icon: '🎶', dock: false, folder: 'app-vault', width: 400, height: 300, content: `
        <div class="h-full bg-black text-white p-6">
            <div class="uppercase tracking-widest text-xs opacity-50 mb-4">Secret Collection</div>
            <ul class="space-y-3 text-sm font-light opacity-80">
            <li>1. The Silence (Original Mix)</li>
                <li>2. 12:21 AM (lo-fi)</li>
                <li>3. That one song we shared</li>
            </ul>
        </div>
    `},

    {
        id: 'secret-vault', title: 'Secret Vault', icon: '🔐', dock: false, folder: 'app-vault', width: 700, height: 500, onOpen: initSecretVault, content: `
        <div id="vault-container" class="relative w-full h-full bg-gray-900 text-white overflow-hidden flex flex-col items-center justify-center">
             
             <!-- Lock Screen -->
             <div id="vault-lock" class="flex flex-col items-center gap-6 p-8 transition-opacity duration-500">
                <div class="text-6xl mb-4">🔐</div>
                <h2 class="text-2xl font-light tracking-widest uppercase">Restricted Access</h2>
                <div class="relative w-64">
                    <input type="password" id="vault-pass" class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-center text-xl tracking-[0.5em] focus:outline-none focus:border-white/50 transition" placeholder="••••••" maxlength="6">
                </div>
                <p id="vault-hint" class="text-xs text-gray-500 hover:text-gray-300 cursor-pointer transition" onclick="alert('Hint: The day it all started (dd/mm/yy)')">Hint: dd/mm/yy</p>
                <div id="vault-error" class="text-red-400 text-sm font-bold opacity-0 transition">Access Denied</div>
             </div>

             <!-- Unlocked Content (Carousel) -->
             <div id="vault-content" class="absolute inset-0 hidden opacity-0 transition-opacity duration-1000 bg-black">
                 <div class="w-full h-full relative" id="vault-carousel">
                    <!-- Slides injected via JS -->
                 </div>
                 
                 <!-- Controls -->
                 <button class="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl z-10 p-2" onclick="vaultPrevSlide()">&#10094;</button>
                 <button class="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl z-10 p-2" onclick="vaultNextSlide()">&#10095;</button>
             </div>

        </div>
    `},

    {
        id: 'voice-box', title: 'VoiceBox', icon: '🎙️', dock: false, folder: 'app-vault', width: 350, height: 500, onOpen: initVoiceBox, content: `
        <div class="bg-gray-50 h-full flex flex-col font-sans select-none">
            <!-- Header -->
            <div class="px-6 py-4 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between">
                <span class="text-xs font-bold text-gray-400 tracking-widest uppercase">Shravii's Memos</span>
                <i class="fas fa-microphone text-red-500 animate-pulse"></i>
            </div>
            
            <!-- List -->
            <div id="vibes-list" class="flex-1 overflow-y-auto p-2 space-y-2">
                <!-- Items injected via JS -->
            </div>
            
            <!-- Player Bar -->
            <div class="bg-black/90 backdrop-blur-md text-white p-4">
                <div class="flex items-center justify-between mb-2">
                    <div id="vb-now-playing" class="text-xs font-medium truncate max-w-[200px] text-gray-400">Select a memo...</div>
                    <div class="flex gap-1">
                        <div class="w-1 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div class="w-1 h-3 bg-red-400 rounded-full animate-bounce"></div>
                        <div class="w-1 h-3 bg-red-600 rounded-full animate-pulse delay-75"></div>
                    </div>
                </div>
                <div class="flex items-center justify-center gap-6">
                    <button class="text-gray-400 hover:text-white transition"><i class="fas fa-step-backward"></i></button>
                    <button id="vb-play-btn" class="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition active:scale-95" onclick="toggleVoicePlayback()">
                        <i class="fas fa-play ml-0.5"></i>
                    </button>
                    <button class="text-gray-400 hover:text-white transition"><i class="fas fa-step-forward"></i></button>
                </div>
            </div>
            
            <!-- Add Button -->
            <div class="absolute bottom-[90px] right-6">
                <label class="w-12 h-12 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-red-600 transition transform hover:rotate-90 hover:scale-110">
                    <input type="file" class="hidden" accept="audio/*" onchange="handleVoiceUpload(this)">
                    <i class="fas fa-plus text-xl"></i>
                </label>
            </div>
        </div>
    `},

    {
        id: 'readme-letter', title: 'ReadMe.txt', icon: '💌', dock: false, folder: 'app-vault', width: 600, height: 700, content: `
        <div class="h-full bg-white p-10 font-serif text-gray-800 leading-relaxed custom-scroll overflow-y-auto" style="background-image: linear-gradient(#999 1px, transparent 1px); background-size: 100% 2em; line-height: 2em;">
            <div class="text-3xl font-bold text-red-500 mb-6 handwritten" style="font-family: 'Dancing Script', cursive;">Dear Harshit,</div>
            <p>If you are reading this, the system is working. But more importantly, <i>we</i> are working.</p>
            <p>I wanted to write this because sometimes code isn't enough to say what I mean. You are the "sweet" to my "spicy". The calm to my storm. The person who notices the small things when the world is too busy looking at the big ones.</p>
            <p>Thank you for being my anchor. For knowing when to joke and when to just be there. For the late night talks and the quiet understanding.</p>
            <p>You make this OS (and my life) better just by running in the background.</p>
            <br>
            <p class="text-right font-bold">– Shravii</p>
        </div>
    `},

    {
        id: 'memories-gallery', title: 'Memories', icon: '📸', dock: false, folder: 'app-vault', width: 800, height: 600, onOpen: initGallery, content: `
        <div id="gallery-container" class="polaroid-gallery custom-scroll">
            <!-- Dynamic Polaroids will be injected here -->
        </div>
    `},

    /* === DESKTOP VISIBLE APPS (No Folder) === */
    {
        id: 'shravii', title: 'Shravii.exe', icon: '🫧', dock: true, width: 400, height: 500, content: `
        <div class="h-full bg-[#fff0f5] p-6 custom-scroll">
            <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div class="text-xs text-gray-400 mb-1">System User</div>
                <div class="font-bold text-pink-500 mb-2">Shravii</div>
                <p class="text-sm text-gray-700 leading-relaxed">
                    Hi.<br>
                    I’m the part of your life that won’t stop caring.<br>
                    Sorry. Not sorry.<br><br>
                    (Also, drink water.)
                </p>
            </div>
            <div class="flex justify-center mt-8">
                <img src="https://media.tenor.com/On7kvXhzml4AAAAj/love-bear.gif" class="w-32 rounded-lg opacity-80 mix-blend-multiply">
            </div>
        </div>
    `},

    {
        id: 'about-us', title: 'About Us', icon: '👥', dock: false, width: 500, height: 400, content: `
        <div class="h-full bg-white p-8 flex flex-col items-center justify-center text-center border-4 border-double border-gray-200">
            <h2 class="text-2xl font-serif font-bold mb-8 text-gray-800">The Dynamic</h2>
            
            <div class="grid grid-cols-2 gap-8 w-full">
                <div class="flex flex-col items-center">
                    <div class="text-4xl mb-2">🎀</div>
                    <div class="font-bold text-pink-500 uppercase tracking-widest text-xs mb-1">Shravii</div>
                    <div class="text-sm text-gray-600">The Spark.<br>The Heart.<br>The Responder.</div>
                </div>
                
                <div class="flex flex-col items-center border-l border-gray-200">
                    <div class="text-4xl mb-2">🐺</div>
                    <div class="font-bold text-blue-500 uppercase tracking-widest text-xs mb-1">Harshit</div>
                    <div class="text-sm text-gray-600">The Anchor.<br>The Calm.<br>The Protector.</div>
                </div>
            </div>
            
            <div class="mt-8 text-xs text-gray-400 italic">"Two different operating systems. One perfect network."</div>
        </div>
    `}
];

/* === SETTINGS FUNCTIONS === */
function showUpdate(el) {
    if (el) {
        el.parentElement.querySelectorAll('div').forEach(d => {
            d.classList.remove('bg-[#007aff]', 'text-white');
            d.classList.add('text-gray-700');
        });
        el.classList.remove('text-gray-700');
        el.classList.add('bg-[#007aff]', 'text-white');
    }

    const area = document.getElementById('settings-area');
    area.innerHTML = `
        <div class="system-update">
            <h2>Harshit OS 19.0</h2>
            <p class="update-subtitle">System Update</p>
            <pre class="patch-notes" id="patchNotes"></pre>
        </div>
    `;

    const patchText = "• Improved emotional resilience under pressure\\n• Fixed issue where self-doubt appeared late at night\\n• Added support for silence without loneliness\\n• Optimized strength — quieter, more stable\\n• Enhanced responsibility handling\\n• Known issue: still carries more than necessary";

    let i = 0;
    const speed = 30;
    const patchEl = document.getElementById("patchNotes");

    function typePatch() {
        if (i < patchText.length) {
            patchEl.textContent += patchText.charAt(i);
            i++;
            setTimeout(typePatch, speed);
        }
    }
    typePatch();
}

function resetSettingsView(el) {
    if (el) {
        el.parentElement.querySelectorAll('div').forEach(d => {
            d.classList.remove('bg-[#007aff]', 'text-white');
            d.classList.add('text-gray-700');
        });
        el.classList.remove('text-gray-700');
        el.classList.add('bg-[#007aff]', 'text-white');
    }
    const area = document.getElementById('settings-area');
    area.innerHTML = `
        <div class="settings-section">
            <div class="settings-title">Appearance</div>
            <div class="appearance-options">
                <div class="appearance-card active" onclick="setTheme('light', this)"><div class="theme-preview light"></div><div class="theme-label">Light</div></div>
                <div class="appearance-card" onclick="setTheme('dark', this)"><div class="theme-preview dark"></div><div class="theme-label">Dark</div></div>
            </div>
            <div class="mt-8">
                <div class="settings-title">WALLPAPER</div>
                <div id="wp-grid" class="grid grid-cols-3 gap-3"></div>
            </div>
        </div>
    `;
    renderSettings();
}
function renderSettings() {
    const grid = document.getElementById('wp-grid');
    if (grid) {
        grid.innerHTML = wallpapers.map((wp, i) => `
    < div class="wallpaper-thumb" onclick = "setWallpaper('${wp.full}', this)" >
        <img src="${wp.thumb}">
        </div>
`).join('');
    }
}



function setTheme(mode, el) {
    settingsState.theme = mode;
    // Update active UI
    document.querySelectorAll('.appearance-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');

    // Apply (Example: Toggle dark class on body or #desktop-bg)
    const bg = document.getElementById('desktop-bg');
    if (mode === 'dark') {
        bg.style.background = '#1e1e1e url("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069") center/cover';
        // Logic for Dark Theme CSS overrides would go here
    } else {
        bg.style.background = 'linear-gradient(180deg, #bccbf9 0%, #dbe4ff 100%)';
    }
}

function setAccent(color, el) {
    settingsState.accent = color;
    document.documentElement.style.setProperty('--accent-color', color);
    document.querySelectorAll('.accent-dot').forEach(d => d.classList.remove('active'));
    el.classList.add('active');
}

function setWallpaper(url, el) {
    settingsState.wallpaper = url;
    document.getElementById('desktop').style.backgroundImage = `url('${url}')`;
    document.getElementById('desktop').style.backgroundSize = 'cover';
    // Hide the light gradient overlay for wallpaper to show
    document.getElementById('desktop-bg').style.opacity = 0;
    document.querySelectorAll('.wallpaper-thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
}

/* === CLOCK LOGIC (Updates) === */
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    const date = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const clockEl = document.getElementById('clock');
    if (clockEl) clockEl.innerText = `${date}  ${time} `;
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

/* === MENU BAR LOGIC === */
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    if (!menu) return;

    // Close others
    document.querySelectorAll('[id$="-menu"]').forEach(el => {
        if (el.id !== menuId) el.classList.add('hidden');
        else el.classList.toggle('hidden');
    });

    // Close control center if open
    document.getElementById('control-center')?.classList.add('hidden');

    // Stop propagation so document click doesn't immediately close it
    event?.stopPropagation();
}

function toggleControlCenter() {
    const cc = document.getElementById('control-center');
    cc.classList.toggle('hidden');

    // Close other menus
    document.querySelectorAll('[id$="-menu"]').forEach(el => el.classList.add('hidden'));

    event?.stopPropagation();
}

// Global click handler to close menus
document.addEventListener('click', (e) => {
    // If click is NOT inside a menu, dropdown, or toggle button
    const isMenuClick = e.target.closest('[id$="-menu"]') || e.target.closest('.menu-item-apple');
    const isCCClick = e.target.closest('#control-center') || e.target.closest('[onclick="toggleControlCenter()"]');

    if (!isMenuClick) {
        document.querySelectorAll('[id$="-menu"]').forEach(el => el.classList.add('hidden'));
    }
    if (!isCCClick) {
        document.getElementById('control-center')?.classList.add('hidden');
    }
});

/* === STATE === */
const state = { appsOpened: new Set(), countdownFinished: false };
const affirmations = ["You stay kind, even when things get heavy.", "You don’t give up easily.", "You carry storms quietly.", "You are enough, exactly as you are."];

const whys = [
    "You show up, even when tired.",
    "You listen without fixing.",
    "You stay.",
    "Your silence is safe.",
    "You are valid."
];
let wIdx = 0;
function nextWhy() {
    const el = document.getElementById('why-text');
    if (!el) return;
    el.style.opacity = 0;
    setTimeout(() => {
        wIdx = (wIdx + 1) % whys.length;
        el.innerText = whys[wIdx];
        el.style.opacity = 1;
    }, 500);
}

let bondStep = 0;
const bondSequence = [
    { type: 'text', content: "You and Harshit weren’t just best friends." },
    { type: 'text', content: "What you shared was a chosen bond.<br><span class='text-sm text-blue-400 mt-4 block'>June 20, 2024 · 12:21 AM</span>" },
    { type: 'statements', title: 'About You', items: ["Emotional anchor.", "Listener.", "Rememberer.", "Giver, without keeping score.", "<br>That’s how you love."] },
    { type: 'statements', title: 'About Harshit', items: ["Soft, with you.", "Expressive.", "Protective.", "Honest.", "<br>With you, he didn’t guard himself."] },
    { type: 'memories', title: 'The Bond', items: ["Late nights", "Music", "Fights that mattered", "Staying", "<br><span class='text-lg italic'>You didn’t just pass time. You changed each other.</span>"] },
    { type: 'final', content: "You were home to each other. For a while." }
];

function resetBond() {
    bondStep = 0;
    const c = document.getElementById('bond-content');
    if (c) {
        c.style.opacity = 0;
        setTimeout(() => {
            c.innerHTML = `<div class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">System Memory</div>
                <div id="bond-line" class="text-2xl font-serif font-light leading-relaxed">
                    This wasn’t accidental.
                </div>`;
            c.style.opacity = 1;
        }, 300);
    }
}

function advanceBond() {
    const container = document.getElementById('bond-content');
    if (!container) return;

    if (bondStep >= bondSequence.length) {
        // Close quietly
        container.style.opacity = 0;
        setTimeout(() => {
            const win = document.getElementById('win-connection-log');
            if (win) {
                win.style.transition = "opacity 1s, transform 1s";
                win.style.opacity = 0;
                win.style.transform = "scale(0.9)";
                setTimeout(() => win.style.display = "none", 1000);
                // Reset for next open if desired, or keep closed.
                // To reset: bondStep = 0;
            }
        }, 1000);
        return;
    }

    container.style.opacity = 0;

    setTimeout(() => {
        const data = bondSequence[bondStep];
        let html = '';

        if (data.type === 'text' || data.type === 'final') {
            html = `<div class="text-2xl font-serif font-light leading-relaxed">${data.content}</div>`;
        } else if (data.type === 'statements' || data.type === 'memories') {
            html = `<div class="text-sm uppercase tracking-widest text-gray-500 mb-6">${data.title}</div>`;
            html += `<div class="space-y-4 text-xl font-light">`;
            data.items.forEach((item, idx) => {
                html += `<div class="fade-in-up" style="animation-delay: ${idx * 0.4}s">${item}</div>`;
            });
            html += `</div>`;
        }

        container.innerHTML = html;
        container.style.opacity = 1;
        bondStep++;
    }, 1000);
}

/* === DEV UTILS === */
function skipToDesktop() {
    // Hide ALL intro elements immediately
    const intros = ['countdown-phase', 'journey-intro', 'terminal-boot'];
    intros.forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.style.display = 'none'; el.style.opacity = 0; }
    });

    // Logic bypass
    state.countdownFinished = true;

    // Show Desktop with Light BG
    enterDesktop();
}

/* === PHASE 1: COUNTDOWN GATEKEEPER === */
/* === PHASE 0: COUNTDOWN GATEKEEPER (FIRST) === */
/* Starts immediately on load */
function startCountdownGatekeeper() {
    const cdScreen = document.getElementById('countdown-phase');
    const cdDisplay = document.getElementById('countdown-display');
    const cdSub = document.getElementById('countdown-sub');

    // Ensure visible
    if (cdScreen) cdScreen.style.display = 'flex';

    // Target: Jan 30, 2026 00:00:00
    const targetDate = new Date('January 30, 2026 00:00:00').getTime();

    const int = setInterval(() => {
        if (document.getElementById('desktop').style.display === 'block') { clearInterval(int); return; } // Stop if skipped

        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(int);
            cdDisplay.innerText = "Now.";
            cdDisplay.style.fontSize = "3rem";
            cdSub.innerText = ""; // Clear subtext
            setTimeout(() => {
                cdScreen.style.opacity = 0;
                setTimeout(() => {
                    cdScreen.style.display = 'none';
                    state.countdownFinished = true;
                    // Trigger Phase 1: Boot
                    runSystemBoot();
                }, 1000);
            }, 1000);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        cdDisplay.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        cdSub.innerText = "Processing Arrival";
    }, 1000);
}

/* === PHASE 2: JOURNEY SEQUENCE === */
function playJourneyIntro() {
    if (document.getElementById('desktop').style.display === 'block') return; // If skipped
    const intro = document.getElementById('journey-intro');
    intro.style.display = 'flex';
    const screens = document.querySelectorAll('.journey-screen');
    const timings = [{ t: 5000 }, { t: 5500 }, { t: 8000 }, { t: 6000 }, { t: 6000 }]; // Normal timing
    let current = 0;

    function showNext() {
        if (document.getElementById('desktop').style.display === 'block') return;
        if (current > 0) screens[current - 1].classList.remove('active');
        if (current >= screens.length) {
            intro.style.transition = 'opacity 2s'; intro.style.opacity = 0;
            setTimeout(() => { intro.style.display = 'none'; enterDesktop(); }, 2000);
            return;
        }
        const screen = screens[current];
        screen.classList.add('active');
        const subs = screen.querySelectorAll('.journey-sub');
        subs.forEach((sub, i) => setTimeout(() => sub.classList.add('active'), 500 + (i * 1500)));
        setTimeout(showNext, timings[current].t);
        current++;
    }
    showNext();
}

/* === PHASE 3: DESKTOP === */
function enterDesktop() {
    // 1. Hide any remaining intro elements
    const term = document.getElementById('terminal-boot');
    if (term) term.style.display = 'none';

    // 2. Fade OUT Space Background
    const space = document.getElementById('space-bg');
    if (space) space.style.opacity = 0;

    // 3. Fade IN Light Desktop Background
    const desktopBg = document.getElementById('desktop-bg');
    if (desktopBg) { desktopBg.style.opacity = 1; }

    // 4. Show and Fade IN Desktop Content
    const desk = document.getElementById('desktop');
    desk.style.display = 'block';

    // Using simple opacity transition
    desk.style.opacity = 0;
    requestAnimationFrame(() => {
        desk.style.transition = "opacity 2.5s ease";
        desk.style.opacity = 1;
    });

    initDesktop();
}

/* === DESKTOP UTILS === */
let zIndex = 100;
function initDesktop() {
    const grid = document.getElementById('desktop-grid');
    const dock = document.getElementById('dock');
    grid.innerHTML = ''; dock.innerHTML = '';
    apps.forEach(app => {
        // Desktop Icons: All apps (except hidden/folder contents)
        if (app.id !== 'hidden-unlock' && !app.folder) {
            const icon = document.createElement('div');
            icon.className = 'desktop-icon group';
            icon.innerHTML = `<div class="icon-img text-3xl mb-2 filter grayscale group-hover:grayscale-0 transition duration-500">${app.icon}</div><div class="icon-label bg-black/20 text-white/80 px-2 py-0.5 rounded text-[10px] tracking-wide backdrop-blur-sm">${app.title}</div>`;
            icon.onclick = () => Apps.open(app.id);
            grid.appendChild(icon);
        }
        if (app.dock) {
            const icon = document.createElement('div');
            icon.className = 'dock-icon';
            icon.innerHTML = `<div class="text-2xl opacity-80 hover:opacity-100 transition">${app.icon}</div><div class="dock-tooltip">${app.title}</div><div class="dock-dot" id="dot-${app.id}"></div>`;
            icon.onclick = () => Apps.open(app.id);
            dock.appendChild(icon);
        }
    });
    setInterval(() => { document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }); }, 1000);
}

/* === MASTI MODE LOGIC === */
const bearGifs = [
    'https://media.tenor.com/Mvhv-g_gqaYAAAAj/mocha-bear.gif',
    'https://media.tenor.com/2K1l6X1w0wAAAAAj/milk-and-mocha-bear.gif',
    'https://media.tenor.com/cyw0G8zF5wAAAAAj/milk-mocha-love.gif'
];
let mastiActive = false;
function spawnBears() {
    if (mastiActive) return;
    mastiActive = true;
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = bearGifs[Math.floor(Math.random() * bearGifs.length)];
            img.className = 'bear-sticker';
            img.style.left = Math.random() * (window.innerWidth - 150) + 'px';
            img.style.top = Math.random() * (window.innerHeight - 150) + 'px';
            document.body.appendChild(img);
            setTimeout(() => img.remove(), 4000);
        }, i * 300);
    }
    setTimeout(() => mastiActive = false, 4500);
}

/* === FIRST CONVERSATION LOGIC === */
const firstConversation = [
    { user: 'system', text: 'connection first meet— 6/20/24, 12:21 AM' },

    { user: 'harshit', text: 'Hi\n— 6/20/24, 12:22 AM' },
    { user: 'shravii', text: 'Helloo\n— 6/20/24, 12:23 AM' },

    { user: 'harshit', text: 'sup\n— 6/20/24, 12:23 AM' },
    { user: 'harshit', text: 'is anyone watching euros?\n— 6/20/24, 12:32 AM' },

    { user: 'shravii', text: 'Umm euros?\nWhere ya from Harry?\n— 6/20/24, 12:33 AM' },

    { user: 'harshit', text: 'India\n— 6/20/24, 12:34 AM' },
    { user: 'shravii', text: ':o\n— 6/20/24, 12:35 AM' },

    { user: 'harshit', text: 'https://open.spotify.com/track/086myS9r57YsLbJpU0TgK9?si=ee77f9aba9b3405c\n\nany thoughts on this song\n— 6/20/24, 12:35 AM' },

    { user: 'shravii', text: "I'll hear and comment\n— 6/20/24, 12:39 AM" },
    { user: 'harshit', text: 'alr\n— 6/20/24, 12:39 AM' },

    { user: 'system', text: '— next day —' },

    { user: 'shravii', text: ':Wg_peekaboo:  otaku\n— 6/20/24, 11:51 AM' },
    { user: 'harshit', text: 'you said my name you wanted me here i am\n— 6/20/24, 11:53 AM' },

    { user: 'shravii', text: 'I saw u typinn\n— 6/20/24, 11:53 AM' },
    { user: 'harshit', text: 'Ah, but idk what i was typing\n— 6/20/24, 11:54 AM' },

    { user: 'shravii', text: ':what_to_do~1:\n— 6/20/24, 11:54 AM' },

    { user: 'harshit', text: 'Btw mujhe ek baat yaad aai @YVI\n— 6/20/24, 11:55 AM' },
    { user: 'shravii', text: 'Hmm?\n— 6/20/24, 11:55 AM' },

    {
        user: 'harshit', text:
            `So, I attended a camp usme ek session ek to koi budha sa Banda tha, he had like PhD and like shyd ISRO s bhi kuch relation tha uska
To vo kehte ki 4 hours of sleep is enough, I have slept only 4 hours my whole life and it is perfectly fine
And fer pta chala ki usko brain tumour hai💀
— 6/20/24, 11:56 AM` },

    { user: 'shravii', text: '4 hrs seriously\nKoi koi kar leta but everyday not possible :vi_think~1:\n— 6/20/24, 12:01 PM' },

    { user: 'harshit', text: 'Hmm, vhi to\nMinimum everyday 6 hours sleep is a must\n— 6/20/24, 12:01 PM' }
];

let convoIndex = 0;

function playFirstConversation(container) {
    convoIndex = 0;
    container.innerHTML = '';

    function nextMessage() {
        if (convoIndex >= firstConversation.length) return;

        const msg = firstConversation[convoIndex];
        const bubble = document.createElement('div');

        if (msg.user === 'system') {
            bubble.className = 'chat-meta text-center my-4';
            bubble.textContent = msg.text;
        } else {
            bubble.className = `chat-bubble ${msg.user === 'harshit' ? 'chat-left' : 'chat-right'}`;
            bubble.textContent = msg.text;
        }

        container.appendChild(bubble);
        container.scrollTop = container.scrollHeight;

        convoIndex++;
        setTimeout(nextMessage, 900);
    }

    nextMessage();
}

/* === LETTER REVEAL LOGIC === */
function initLetterReveal() {
    // Only runs when 'through-my-eyes' is opened
    const container = document.getElementById('letter-content');
    if (!container) return;

    // Get direct children (paragraphs, h2, etc.)
    const children = Array.from(container.children);

    // Hide all initially
    children.forEach(child => {
        child.classList.add('reveal-hidden');
        child.classList.remove('reveal-visible');
    });

    // Reveal Sequentially
    let delay = 300;
    children.forEach((child, index) => {
        setTimeout(() => {
            child.classList.add('reveal-visible');
        }, delay);
        delay += 1200; // 1.2s delay between chunks implies reading time
    });
}

/* === SPOTIFY LOGIC === */
let isSpotifyPlaying = false;
function toggleSpotify() {
    const audio = document.getElementById('spotify-audio');
    const playIcon = document.getElementById('spotify-play-icon');
    if (!audio) return;

    if (isSpotifyPlaying) {
        audio.pause();
        playIcon.className = "fas fa-play ml-1";
    } else {
        audio.play().catch(e => console.log("Audio playback failed:", e));
        playIcon.className = "fas fa-pause";
    }
    isSpotifyPlaying = !isSpotifyPlaying;
}

const Apps = {
    open: (id) => {
        const app = apps.find(a => a.id === id); if (!app) return;

        // Hook for resets - REMOVED PREMATURE CALL

        state.appsOpened.add(id);
        const exist = document.getElementById(`win-${id}`);
        if (exist) {
            // Restore if minimized or hidden
            if (app.onOpen) app.onOpen(); // Call here if restoring (optional, but consistent with 'open')
            exist.style.display = 'flex';
            exist.classList.remove('minimized', 'closing');

            requestAnimationFrame(() => {
                exist.style.zIndex = ++zIndex;
                exist.style.opacity = 1;
                exist.style.transform = 'scale(1) translateY(0)';
            });
            return;
        }

        const win = document.createElement('div');
        win.className = `window ${app.dark ? 'dark' : ''}`;
        win.id = `win-${id}`;
        win.style.width = (app.width || 600) + 'px';
        win.style.height = (app.height || 450) + 'px';
        win.style.left = `calc(50% - ${(app.width || 600) / 2}px + ${Math.random() * 20}px)`;
        win.style.top = `calc(50% - ${(app.height || 450) / 2}px + ${Math.random() * 20}px)`;
        win.style.zIndex = ++zIndex;

        let contentHTML = app.content || '';

        // Handle URL (Iframe)
        if (app.url) {
            contentHTML = `<iframe src="${app.url}" class="w-full h-full border-0 bg-white"></iframe>`;
        }

        // Handle Folders - GRID VIEW UPDATE
        if (app.role === 'folder' && app.children) {
            /* Legacy fallback if needed, but 'content' property on apps usually handles this now */
        }

        // Use pre-defined content logic from apps array (which includes the grid layout for folders)

        win.innerHTML = `<div class="title-bar" onmousedown="startDrag(event, '${win.id}')">
            <div class="traffic-lights">
                <div class="traffic-light close" onclick="closeApp('${id}')"></div>
                <div class="traffic-light minimize" onclick="minimizeApp('${id}')"></div>
                <div class="traffic-light maximize" onclick="maximizeApp('${id}')"></div>
            </div>
            <div class="text-xs text-center w-full absolute pt-1 pointer-events-none opacity-50 font-medium">${app.title}</div>
        </div>
        <div class="win-content custom-scroll" style="height: calc(100% - 30px);">${contentHTML}</div>`;
        document.getElementById('desktop').appendChild(win);
        if (app.onOpen) app.onOpen();
        const dot = document.getElementById(`dot-${id}`); if (dot) dot.parentElement.classList.add('active');
    }
};

function closeApp(id) {
    const win = document.getElementById(`win-${id}`);
    if (win) {
        win.classList.add('closing'); // Trigger CSS Animation
        setTimeout(() => win.remove(), 400); // Wait for animation (0.4s)
    }
    const dot = document.getElementById(`dot-${id}`);
    if (dot) dot.parentElement.classList.remove('active');

    state.appsOpened.delete(id);
    if (state.appsOpened.size === 0) {
        setTimeout(triggerQuietEnding, 2000);
    }
}

function triggerQuietEnding() {
    const term = document.getElementById('term-input');
    if (term) term.blur();

    const msg = document.createElement('div');
    msg.className = 'fixed bottom-10 left-10 text-white/40 font-mono text-xs z-[99999]';
    msg.style.opacity = 0;
    msg.style.transition = 'opacity 2s ease 2s';
    msg.innerText = 'This space stays.';
    document.body.appendChild(msg);

    requestAnimationFrame(() => msg.style.opacity = 1);
}

function minimizeApp(id) {
    const win = document.getElementById(`win-${id}`);
    if (win) {
        win.classList.add('minimized'); // Trigger CSS Animation
        // Don't set display:none immediately, let it sit there invisible or handle via listener if prefered
        // But for dock restoration to work simpler, we keep it in DOM but hidden
        // const dot is active, so user clicks dock to restore
    }
}

function maximizeApp(id) {
    const win = document.getElementById(`win-${id}`);

    // Smooth transition handles width/height change
    if (win.getAttribute('data-maximized') === 'true') {
        win.style.width = win.getAttribute('data-prev-w');
        win.style.height = win.getAttribute('data-prev-h');
        win.style.left = win.getAttribute('data-prev-l');
        win.style.top = win.getAttribute('data-prev-t');
        win.removeAttribute('data-maximized');
        win.style.borderRadius = "14px"; // Restore rounded corners
    } else {
        win.setAttribute('data-prev-w', win.style.width);
        win.setAttribute('data-prev-h', win.style.height);
        win.setAttribute('data-prev-l', win.style.left);
        win.setAttribute('data-prev-t', win.style.top);

        win.style.width = '100vw';
        win.style.height = 'calc(100vh - 32px)'; // Minus menu bar
        win.style.left = '0';
        win.style.top = '32px';
        win.style.borderRadius = "0px"; // Square corners when full
        win.setAttribute('data-maximized', 'true');
    }
}
function showAffirmation(i) { const el = document.getElementById('aff-text'); if (el) { el.style.opacity = 0; setTimeout(() => { el.innerText = `"${affirmations[i]}"`; el.style.opacity = 1; }, 300); } }
function playMusic(m) { alert(`Playing ${m} `); }
function checkUnlock() { if (state.countdownFinished && state.appsOpened.size >= 5) { document.getElementById('lock-msg').style.display = 'none'; document.getElementById('unlock-msg').classList.remove('hidden'); } }
let dragItem = null, offX = 0, offY = 0;
function startDrag(e, id) { if (e.target.closest('.traffic-lights')) return; dragItem = document.getElementById(id); offX = e.clientX - dragItem.offsetLeft; offY = e.clientY - dragItem.offsetTop; dragItem.style.zIndex = ++zIndex; document.addEventListener('mousemove', doDrag); document.addEventListener('mouseup', stopDrag); }
function doDrag(e) { if (dragItem) { dragItem.style.left = (e.clientX - offX) + 'px'; dragItem.style.top = (e.clientY - offY) + 'px'; } }
function stopDrag() { dragItem = null; document.removeEventListener('mousemove', doDrag); document.removeEventListener('mouseup', stopDrag); }






/* === TERMINAL LOGIC === */
function handleTerminalCommand() {
    const input = document.getElementById('term-input');
    const output = document.getElementById('term-output');
    const cmd = input.value.trim();
    if (!cmd) return;

    // Echo command
    output.innerHTML += `< div > <span class="term-prompt">root@harshit:~$</span> ${cmd}</div > `;

    // Process Command
    let response = '';
    const args = cmd.split(' ');
    const command = args[0].toLowerCase();

    switch (command) {
        case 'hold':
            input.disabled = true;
            output.innerHTML += `<div>...</div>`;
            setTimeout(() => {
                if (output.lastElementChild.innerText === '...') output.lastElementChild.remove();
                input.disabled = false;
                input.focus();
            }, 7000);
            return;
        case 'help':
            response = `
    < div class="term-info" > Available Commands:</div >
                <div>  help       - Show this list</div>
                <div>  update     - Check for system updates</div>
                <div>  whois      - Identify the user</div>
                <div>  secret     - Unlock hidden data</div>
                <div>  cake       - Initiate birthday sequence</div>
                <div>  date       - Show critical dates</div>
                <div>  clear      - Clear the terminal</div>
                <div>  carry      - [Hidden]</div>
                <div>  sleep      - [System Legacy]</div>
`;
            break;
        case 'update':
            output.innerHTML += `< div > <span class="term-info">Checking for updates...</span></div > `;
            setTimeout(() => {
                output.innerHTML += `< div > Harshit OS 19.0 is already up to date.</div > `;
                setTimeout(() => {
                    output.innerHTML += `< div > <span class="term-info">Some improvements take time.</span></div > `;
                }, 1000);
            }, 1000);
            input.value = '';
            return;
        case 'whois':
            if (args[1] === 'shravii') response = "User: Shravii<br>Role: The Architect / The Drama Queen<br>Status: Bestest Friend";
            else response = "User: Harshit (Mr. Snow)<br>Role: System Admin / Birthday Boy<br>Strength: Infinite";
            break;
        case 'secret':
            response = `< span class="term-success" > Access Granted.</span > <br>Code: 1221<br>Meaning: The time it all started.`;
            break;
        case 'cake':
            response = `🎂 Initiating Cake Protocol...<br>Happy 19th Birthday Harshit! 🎉`;
            // Trigger confetti if possible
            if (typeof confetti === 'function') confetti();
            break;
        case 'date':
            response = `Critical Date: June 20, 2024 (Origin)`;
            break;
        case 'carry': // EASTER EGG
            // 7. Hidden Message
            const egg = document.createElement('div');
            egg.className = 'fixed inset-0 z-[60000] flex items-center justify-center pointer-events-none text-2xl font-light text-white tracking-widest bg-black/80 fade-in-out';
            egg.innerText = "You never had to be strong alone.";
            document.body.appendChild(egg);
            setTimeout(() => egg.remove(), 5000);
            output.innerHTML += `<div><span class="term-success">Message received.</span></div>`;
            return;
        case 'clear':
            output.innerHTML = '';
            input.value = '';
            return; // Return early
        case 'sleep':
            triggerQuietEnding();
            return;
        case 'sudo':
            response = `<span class="term-error">Permission denied: You are already the strongest user.</span>`;
            break;
        default:
            response = `<span class="term-error">Command not found: ${command}</span>`;
    }

    if (response) output.innerHTML += `<div>${response}</div>`;

    // Scroll and reset
    input.value = '';
    output.scrollTop = output.scrollHeight;
}



/* === BUBBLE WRAP LOGIC === */
function initBubbleWrap() {
    const container = document.getElementById('bubble-container');
    if (container.children.length > 0) return; // Already generated

    for (let i = 0; i < 48; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        b.onclick = function () {
            if (!this.classList.contains('popped')) {
                this.classList.add('popped');
                // Play pop sound if audio file exists
                // new Audio('assets/pop.mp3').play().catch(() => { });
            }
        };
        container.appendChild(b);
    }
}


/* === POLAROID GALLERY LOGIC === */
/* === POLAROID GALLERY LOGIC === */
function initGallery() {
    const container = document.getElementById('gallery-container');
    if (!container || container.children.length > 0) return; // Prevent duplicates

    // Add Upload Button
    const uploadBtn = document.createElement('div');
    uploadBtn.className = 'polaroid-card upload-card';
    uploadBtn.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full text-gray-400 cursor-pointer" onclick="document.getElementById('photo-upload').click()">
            <div class="text-4xl mb-2">+</div>
            <div class="text-xs">Add Memory</div>
        </div>
        <input type="file" id="photo-upload" accept="image/*" style="display: none;" onchange="handlePhotoUpload(this)">
    `;
    uploadBtn.style.top = '20px';
    uploadBtn.style.left = '20px';
    uploadBtn.style.zIndex = 1000;
    container.appendChild(uploadBtn);

    const photos = [
        { src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=400', caption: "Mr. Snow" },
        { src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400', caption: "Doggo Mode" },
        { src: 'https://images.unsplash.com/photo-1523307730650-594bc63f9d67?q=80&w=400', caption: "Smart Stuff" },
        { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=400', caption: "Cold Vibes" },
        { src: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=400', caption: "Focus." },
        // { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400', caption: "(Place real photos here)" }
    ];

    photos.forEach(photo => createPolaroid(photo.src, photo.caption, container));
}

function handlePhotoUpload(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const caption = prompt("Enter a caption for this memory:", "New Memory");
            if (caption !== null) {
                createPolaroid(e.target.result, caption, document.getElementById('gallery-container'));
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function createPolaroid(src, caption, container) {
    const card = document.createElement('div');
    card.className = 'polaroid-card';
    card.innerHTML = `<img src="${src}"><div class="caption">${caption}</div>`;

    // Random Scatter
    const randomRot = Math.random() * 20 - 10; // -10 to +10 deg
    const randomTop = Math.random() * 200;
    // Ensure bounds
    const maxLeft = container.clientWidth - 220;
    const randomLeft = Math.random() * (maxLeft > 0 ? maxLeft : 100);

    card.style.transform = `rotate(${randomRot}deg)`;
    card.style.top = `${randomTop + 50}px`;
    card.style.left = `${randomLeft}px`;

    // Draggable Logic (Simple)
    card.onmousedown = function (e) {
        card.style.zIndex = 200;
        const offX = e.clientX - card.getBoundingClientRect().left;
        const offY = e.clientY - card.getBoundingClientRect().top;

        function move(ev) {
            const rect = container.getBoundingClientRect();
            // Prevent dragging fully out
            let newL = ev.clientX - offX - rect.left;
            let newT = ev.clientY - offY - rect.top;

            card.style.left = newL + 'px';
            card.style.top = newT + 'px';
        }
        function stop() {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', stop);
            card.style.zIndex = "";
        }
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', stop);
    }

    container.appendChild(card);
}

/* === PHASE -1: SYSTEM BOOT (Silence) === */
/* === PHASE -1: SYSTEM BOOT (Refined) === */
/* === PHASE 1: SYSTEM BOOT (Green Text) === */
async function runSystemBoot() {
    const bootScreen = document.getElementById('boot-sequence');
    if (!bootScreen) return;

    bootScreen.style.display = 'flex';
    // Small delay to allow opacity transition if needed
    requestAnimationFrame(() => bootScreen.style.opacity = 1);

    // Boot lasts ~7-8s then triggers Journey
    setTimeout(() => {
        bootScreen.style.transition = 'opacity 1.5s ease';
        bootScreen.style.opacity = 0;

        setTimeout(() => {
            bootScreen.style.display = 'none';
            // Trigger Phase 2: Journey
            playJourneyIntro();
        }, 1500);
    }, 7500);
}

/* === QUIZ LOGIC === */
let qIdx = 0;
const quizData = [
    { q: "What is the one vegetable I absolutely hate?", a: ["bhindi", "okra", "lady finger", "ladyfinger"] },
    { q: "What date did we first talk? (Month Day)", a: ["june 20", "20 june", "20th june", "jun 20"] },
    { q: "What is my 'Winter' nickname?", a: ["snow", "mr. snow", "mr snow", "husky"] },
    { q: "Who is the Drama Queen of this OS?", a: ["shravii", "shravani", "you", "author"] }
];

function startQuiz() {
    qIdx = 0;
    setTimeout(updateQuizUI, 100);
}

function updateQuizUI() {
    const text = document.getElementById('q-text');
    const inp = document.getElementById('q-input');
    const feed = document.getElementById('q-feedback');
    if (!text) return;

    text.innerText = quizData[qIdx].q;
    inp.value = '';
    feed.innerText = '';
    feed.className = "text-xs mt-4 h-4 font-bold tracking-wide transition-colors";
    inp.focus();
}

function submitAnswer() {
    const inp = document.getElementById('q-input');
    const feed = document.getElementById('q-feedback');
    if (!inp) return;

    if (qIdx >= quizData.length) return;

    const val = inp.value.trim().toLowerCase();
    if (!val) return;

    const correct = quizData[qIdx].a.some(ans => val.includes(ans));

    if (correct) {
        feed.innerText = "Accepted.";
        feed.className = "text-xs mt-4 h-4 font-bold tracking-wide text-green-500";
        setTimeout(() => {
            qIdx++;
            if (qIdx < quizData.length) {
                updateQuizUI();
            } else {
                document.getElementById('quiz-container').innerHTML = `
                    <div class="scale-up-center">
                        <div class="text-6xl mb-4">🏆</div>
                        <div class="text-2xl font-bold text-gray-800">Verified Best Friend.</div>
                        <p class="text-sm text-gray-600 mt-4 leading-relaxed">You know me better than I thought.<br>System Access: UNLIMITED.</p>
                        <div class="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-400">
                             ID: THE_CHOSEN_ONE<br>Status: Permanent
                        </div>
                    </div>
                `;
            }
        }, 800);
    } else {
        feed.innerText = "Access Denied. Try again.";
        feed.className = "text-xs mt-4 h-4 font-bold tracking-wide text-red-500";
        inp.classList.add('shake');
        setTimeout(() => inp.classList.remove('shake'), 500);
    }
}

/* === BLUEPRINT LOGIC === */
function openBlueprint() {
    document.getElementById('blueprint-window').style.display = 'flex';
}

function closeBlueprint() {
    document.getElementById('blueprint-window').style.display = 'none';
}

/* === INKPOT LOGIC === */
let poemIdx = 0;
const poems = [
    "Some days are heavy,\nBut you carry them well.\nKeep going.",
    "The world is loud,\nBut your peace is real.\nProtect it.",
    "Not perfect.\nNot finished.\nJust right.",
    "You are the best kind of chaos.\nNever change."
];
function initInkpot() {
    poemIdx = 0;
    const el = document.getElementById('inkpot-text');
    if (el) el.innerText = "Click the quill...";
}
function nextPoem() {
    const el = document.getElementById('inkpot-text');
    if (!el) return;
    el.innerText = "";
    const txt = poems[poemIdx % poems.length];
    poemIdx++;

    let i = 0;
    function type() {
        if (i < txt.length) {
            el.innerText += txt.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

/* === RADIO LOGIC === */
function initRadio() {
    const el = document.getElementById('radio-screen');
    if (el) el.innerText = "WAITING FOR SIGNAL...";
}
function playRadio(mood) {
    const el = document.getElementById('radio-screen');
    if (!el) return;
    el.innerText = "TUNING...";
    setTimeout(() => {
        let msg = "";
        switch (mood) {
            case 'tired': msg = "🎵 Playing: SoftRain.mp3\n(Relax, Harshit.)"; break;
            case 'happy': msg = "🎵 Playing: Celebration.wav\n(Heck yeah!)"; break;
            case 'annoyed': msg = "🎵 Playing: Silence.flac\n(People are dumb.)"; break;
            case 'proud': msg = "🎵 Playing: Applause.ogg\n(You did good.)"; break;
        }
        el.innerText = msg;
    }, 500);
}

/* === PATH LOGIC === */
const pathStory = {
    start: {
        text: "You stand at a crossroad. It's late.",
        opts: [
            { txt: "Go to Gym", next: 'gym' },
            { txt: "Go to Sleep", next: 'sleep' }
        ]
    },
    gym: {
        text: "You lift things. Heavy things. The sadness leaves your body with the sweat.\nYou feel stronger.",
        opts: [
            { txt: "Go Home", next: 'home_strong' }
        ]
    },
    sleep: {
        text: "You lie down. The thoughts come, but you are too tired to fight them. You drift off.",
        opts: [
            { txt: "Dream", next: 'dream' }
        ]
    },
    home_strong: {
        text: "You walk home. The stars look nice. You realize you can handle tomorrow.",
        opts: [
            { txt: "Restart", next: 'start' }
        ]
    },
    dream: {
        text: "You dream of a place where assignments finish themselves. It is beautiful.",
        opts: [
            { txt: "Wake Up", next: 'start' }
        ]
    }
};

function startPathGame() {
    renderPath('start');
}

function renderPath(id) {
    const scene = pathStory[id];
    const con = document.getElementById('path-container');
    if (!con) return;

    let html = `<div class="path-text">${scene.text}</div><div class="path-options">`;
    scene.opts.forEach(o => {
        html += `<button class="path-btn" onclick="renderPath('${o.next}')">${o.txt}</button>`;
    });
    html += `</div>`;
    con.innerHTML = html;
}

/* === WORD SPIRAL LOGIC === */
const spiralWords = {
    "Growth": ["Pain", "Change", "Better", "You"],
    "Pain": ["Temporary", "Necessary", "Stronger", "Growth"],
    "Change": ["Scary", "Good", "New", "Future"],
    "Better": ["Work", "Time", "Patience", "Focus"],
    "You": ["Enough", "Real", "Here", "Growth"],
    "Temporary": ["Rain", "Night", "Feelings", "Pain"],
    "Necessary": ["Rain", "Discipline", "Focus", "Better"],
    "Stronger": ["Gym", "Mind", "Heart", "You"],
    "Scary": ["Unknown", "Dark", "Space", "Change"],
    "Good": ["Food", "Sleep", "Friends", "Better"],
    "New": ["Day", "Start", "Chance", "Change"],
    "Future": ["Blind", "Bright", "Yours", "Change"],
    // Default fallback
    "DEFAULT": ["Growth", "You", "Better", "Change"]
};
function initWordSpiral() {
    renderSpiral("Growth");
}
function renderSpiral(word) {
    const main = document.getElementById('spiral-word');
    const opts = document.getElementById('spiral-opts');
    if (!main) return;

    // Animation reset
    main.style.opacity = 0;
    setTimeout(() => {
        main.innerText = word;
        main.style.opacity = 1;
    }, 200);

    const nextWords = spiralWords[word] || spiralWords["DEFAULT"];
    opts.innerHTML = nextWords.map(w =>
        `<button class="spiral-btn" onclick="renderSpiral('${w}')">${w}</button>`
    ).join('');
}

/* === PERSONALITY QUIZ LOGIC === */
const pQuizData = [
    { q: "When things break, you...", a: [{ t: "Fix them quietly", s: "Builder" }, { t: "Feel everything", s: "Healer" }, { t: "Ignore it", s: "Dreamer" }] },
    { q: "Your best quality?", a: [{ t: "Loyalty", s: "Builder" }, { t: "Empathy", s: "Healer" }, { t: "Imagination", s: "Dreamer" }] },
    { q: "What do you need right now?", a: [{ t: "Peace", s: "Healer" }, { t: "Progress", s: "Builder" }, { t: "Escape", s: "Dreamer" }] }
];
let pQuizIdx = 0;
let pScores = {};

function initPersonalityQuiz() {
    pQuizIdx = 0;
    pScores = { "Builder": 0, "Healer": 0, "Dreamer": 0 };
    renderPQuiz();
}

function renderPQuiz() {
    const qEl = document.getElementById('p-quiz-q');
    const oEl = document.getElementById('p-quiz-opts');
    if (!qEl) return;

    if (pQuizIdx >= pQuizData.length) {
        // Result
        const winner = Object.keys(pScores).reduce((a, b) => pScores[a] > pScores[b] ? a : b);
        let msg = "";
        if (winner === "Builder") msg = "You are The Architect.\nYou build strong things. You protect.";
        if (winner === "Healer") msg = "You are The Anchor.\nYou keep people safe. You care deeply.";
        if (winner === "Dreamer") msg = "You are The Visionary.\nYou see what could be. You hope.";

        qEl.innerText = winner;
        oEl.innerHTML = `<div class="text-sm text-gray-600 leading-relaxed">${msg}</div><button class="mt-4 px-4 py-2 bg-black text-white rounded" onclick="initPersonalityQuiz()">Restart</button>`;
        return;
    }

    const curr = pQuizData[pQuizIdx];
    qEl.innerText = curr.q;
    oEl.innerHTML = curr.a.map(opt =>
        `<button class="p-quiz-btn" onclick="handlePQuiz('${opt.s}')">${opt.t}</button>`
    ).join('');
}

function handlePQuiz(type) {
    pScores[type]++;
    pQuizIdx++;
    renderPQuiz();
}

/* === TERMINAL APP LOGIC === */
function handleTerminalAppCommand() {
    const input = document.getElementById('term-input-app');
    const output = document.getElementById('term-output-app');
    if (!input || !output) return;

    const cmd = input.value.trim();
    if (!cmd) return;

    // Echo command
    output.innerHTML += `<div><span class="term-prompt">root@harshit:~$</span> ${cmd}</div>`;

    // Process
    let response = '';
    const command = cmd.toLowerCase().split(' ')[0];

    switch (command) {
        case 'help':
            response = `<div class="term-info">
    Available Commands:
    - help: Show this list
    - whois: Identify the user
    - strength: Analyze core metrics
    - secret: Unlock hidden directory
    - clear: Clear screen
</div>`;
            break;
        case 'whois':
            response = `User: Harshit (Admin)\nAttributes: [Loyal, Stubborn, Protective]\nStatus: Currently Loading...`;
            break;
        case 'strength':
            response = `Analysis Complete:\n- Physical: 85%\n- Emotional: Hidden (High)\n- Resilience: 99.9%`;
            break;
        case 'secret':
            response = `<span class="term-success">Access Granted. Check 'Vault' folder.</span>`;
            setTimeout(() => Apps.open('app-vault'), 1000);
            break;
        case 'clear':
            output.innerHTML = '';
            input.value = '';
            return;
        case 'sudo':
            response = `<span class="term-error">Error: You are already the highest authority here.</span>`;
            break;
        default:
            response = `<span class="term-error">Command not found: ${command}</span>`;
    }

    if (response) output.innerHTML += `<div>${response}</div>`;

    input.value = '';
    output.scrollTop = output.scrollHeight;
}


// Launch Desktop
function launchDesktop() {
    // 1. Hide Terminal & Space (if active)
    const term = document.getElementById('terminal-boot');
    if (term) term.style.display = 'none';

    // 2. Fade OUT Space Background
    const space = document.getElementById('space-bg');
    if (space) space.style.opacity = 0;

    // 3. Fade IN Light Desktop Background
    const desktopBg = document.getElementById('desktop-bg');
    if (desktopBg) { desktopBg.style.display = 'block'; requestAnimationFrame(() => desktopBg.style.opacity = 1); }

    // 4. Show and Fade IN Desktop Content
    const desk = document.getElementById('desktop');
    desk.style.display = 'block';

    // Using simple opacity transition
    desk.style.opacity = 0;
    requestAnimationFrame(() => {
        desk.style.transition = "opacity 2.5s ease";
        desk.style.opacity = 1;
    });

    initDesktop();
}
// Dev Tool
function skipToDesktop() {
    const phases = ['boot-sequence', 'countdown-phase', 'journey-intro', 'terminal-boot'];
    phases.forEach(p => {
        const el = document.getElementById(p);
        if (el) el.style.display = 'none';
    });

    // Force set state
    state.countdownFinished = true;

    // Launch Desktop
    launchDesktop();
}

/* === RABBIT RUNNER LOGIC === */
let rrActive = false;
let rrScore = 0;
let rrLoopIdx;
let rrPlayerY = 0;
let rrVelocity = 0;
let rrGravity = 0.6;
let rrJumpStrength = -10;
let rrPlatforms = [];
let rrItems = []; // {type: 'sub'|'bhindi', x, y}
const rrSpeed = 3;

function initRabbitGame() {
    rrActive = false;
    document.getElementById('rr-start-screen').style.display = 'flex';
    document.getElementById('rr-world').innerHTML = '';
}

function startRabbitGame() {
    rrActive = true;
    rrScore = 0;
    rrPlayerY = 300; // Start mid-air
    rrVelocity = 0;
    rrPlatforms = [];
    rrItems = [];
    document.getElementById('rr-start-screen').style.display = 'none';
    document.getElementById('rr-score').innerText = 'Score: 0';

    // Spawn initial platform
    spawnPlatform(50, 400, 200);
    spawnPlatform(300, 350, 150);
    spawnPlatform(550, 300, 150);

    if (rrLoopIdx) cancelAnimationFrame(rrLoopIdx);
    rrGameLoop();

    // Controls
    document.getElementById('rr-container').onmousedown = jumpRabbit;
    document.addEventListener('keydown', (e) => { if (e.code === 'Space') jumpRabbit(); });
}

function jumpRabbit() {
    if (!rrActive) return;
    rrVelocity = rrJumpStrength;
}

function spawnPlatform(x, y, w) {
    const msgs = ["Good morning", "Take care", "Hydrate", "Proud of you", "Remember me?", "Keep going", "You got this", "Stay safe"];
    const txt = msgs[Math.floor(Math.random() * msgs.length)];
    rrPlatforms.push({ x, y, w, text: txt, passed: false });

    // Spawn item? 40% chance
    if (Math.random() > 0.6) {
        const type = Math.random() > 0.3 ? 'sub' : 'bhindi'; // 70% Sub, 30% Bhindi
        rrItems.push({ type, x: x + w / 2 - 15, y: y - 40, collected: false });
    }
}

function rrGameLoop() {
    if (!rrActive) return;

    // Update Player
    rrVelocity += rrGravity;
    rrPlayerY += rrVelocity;

    // Floor Collision (Game Over)
    if (rrPlayerY > 480) {
        gameOverRabbit("You fell into the void!");
        return;
    }

    const playerEl = document.getElementById('rr-player');
    if (playerEl) {
        playerEl.style.top = rrPlayerY + 'px';
        playerEl.style.transform = `rotate(${rrVelocity * 2}deg)`;
    }

    // Update Platforms
    const world = document.getElementById('rr-world');
    world.innerHTML = ''; // Clear & Redraw (Naive but functional for simple DOM game)

    // --- RENDER & LOGIC LOOP ---
    // 1. New Platform Spawning
    const lastPlat = rrPlatforms[rrPlatforms.length - 1];
    if (lastPlat && lastPlat.x < 600) {
        const newY = Math.max(150, Math.min(400, lastPlat.y + (Math.random() * 200 - 100)));
        spawnPlatform(800 + Math.random() * 100, newY, 120 + Math.random() * 80);
    }

    // 2. Platforms Logic
    rrPlatforms.forEach((p, i) => {
        p.x -= rrSpeed;

        // Render
        if (p.x + p.w > 0 && p.x < 800) {
            const div = document.createElement('div');
            div.className = 'absolute bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center text-xs font-bold text-gray-500 shadow-sm';
            div.style.left = p.x + 'px';
            div.style.top = p.y + 'px';
            div.style.width = p.w + 'px';
            div.style.height = '40px';
            div.innerText = p.text;
            world.appendChild(div);
        }

        // Collision: Rabbit landing on Platform
        // Rabbit is ~40x40 at x=50
        if (rrVelocity > 0 &&
            rrPlayerY + 40 >= p.y &&
            rrPlayerY + 40 <= p.y + 20 &&
            50 + 30 > p.x &&
            50 < p.x + p.w) {
            rrVelocity = 0;
            rrPlayerY = p.y - 40;
            // Jump Auto check? No, manual jump only
        }

        // Cleanup
        if (p.x + p.w < -100) rrPlatforms.splice(i, 1);
    });

    // 3. Items Logic
    rrItems.forEach((item, i) => {
        item.x -= rrSpeed;

        // Render
        if (!item.collected && item.x > 0 && item.x < 800) {
            const el = document.createElement('div');
            el.className = 'absolute text-2xl animate-bounce';
            el.innerText = item.type === 'sub' ? '🥪' : '🥒';
            el.style.left = item.x + 'px';
            el.style.top = item.y + 'px';
            world.appendChild(el);

            // Collision with Player
            // Dist check
            const dx = (50 + 20) - (item.x + 15);
            const dy = (rrPlayerY + 20) - (item.y + 15);
            if (Math.sqrt(dx * dx + dy * dy) < 40) {
                item.collected = true;
                if (item.type === 'sub') {
                    rrScore += 10;
                    document.getElementById('rr-score').innerText = `Score: ${rrScore}`;
                } else {
                    gameOverRabbit("You ate Bhindi! 🤢");
                }
            }
        }

        if (item.x < -50) rrItems.splice(i, 1);
    });

    rrLoopIdx = requestAnimationFrame(rrGameLoop);
}

function gameOverRabbit(reason) {
    rrActive = false;
    const screen = document.getElementById('rr-start-screen');
    screen.style.display = 'flex';
    screen.innerHTML = `
        <h2 class="text-3xl font-bold mb-2 text-red-300">Game Over</h2>
        <p class="text-xl mb-6">${reason}</p>
        <p class="text-2xl font-bold mb-8">Score: ${rrScore}</p>
        <button onclick="startRabbitGame()" class="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200">Try Again</button>
    `;
}

/* === SECRET VAULT LOGIC === */
let vaultIdx = 0;
const vaultPhotos = [
    "https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=2670", // Stars
    "https://images.unsplash.com/photo-1549488497-758969f91a51?q=80&w=2670", // Us?
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2689", // Friends
    "https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=1287" // Coffee
];

function initSecretVault() {
    // Reset State
    document.getElementById('vault-lock').style.display = 'flex';
    document.getElementById('vault-lock').style.opacity = '1';
    document.getElementById('vault-pass').value = '';
    document.getElementById('vault-error').style.opacity = '0';
    document.getElementById('vault-content').style.display = 'none';
    document.getElementById('vault-content').style.opacity = '0';

    // Auto-focus input
    setTimeout(() => document.getElementById('vault-pass').focus(), 500);

    // Bind Enter Key
    const inp = document.getElementById('vault-pass');
    inp.onkeyup = (e) => {
        if (inp.value.length === 6) checkVaultPassword();
        if (e.key === 'Enter') checkVaultPassword();
    };
}

function checkVaultPassword() {
    const inp = document.getElementById('vault-pass');
    const err = document.getElementById('vault-error');

    if (inp.value === '200624') {
        // SUCCESS
        inp.blur();
        document.getElementById('vault-lock').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('vault-lock').style.display = 'none';
            document.getElementById('vault-content').style.display = 'block';

            // Render Slide
            renderVaultSlide();

            // Fade In
            requestAnimationFrame(() => {
                document.getElementById('vault-content').style.opacity = '1';
            });
        }, 500);
    } else {
        // FAIL
        err.style.opacity = '1';
        inp.classList.add('shake');
        setTimeout(() => inp.classList.remove('shake'), 500);
        inp.value = '';
    }
}

function renderVaultSlide() {
    const con = document.getElementById('vault-carousel');
    if (!con) return;

    const url = vaultPhotos[vaultIdx];
    con.innerHTML = `
        <div class="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out transform scale-105" 
             style="background-image: url('${url}'); box-shadow: inset 0 0 100px black;">
        </div>
        <div class="absolute bottom-10 left-0 right-0 text-center text-white/80 font-serif italic text-lg tracking-widest drop-shadow-md">
            Memory ${vaultIdx + 1} of ${vaultPhotos.length}
        </div>
    `;
}

function vaultNextSlide() {
    vaultIdx = (vaultIdx + 1) % vaultPhotos.length;
    renderVaultSlide();
}

function vaultPrevSlide() {
    vaultIdx = (vaultIdx - 1 + vaultPhotos.length) % vaultPhotos.length;
    renderVaultSlide();
}

/* === CRAVINGS APP LOGIC === */
function orderCravings() {
    const btn = document.getElementById('cravings-btn');
    const content = document.getElementById('cravings-content');
    if (!btn || !content) return;

    // Animate Button
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.classList.add('opacity-75', 'cursor-not-allowed');

    setTimeout(() => {
        // Swap Content to "Intercepted" Message
        content.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center p-8 text-center animate-fade-in select-none">
                 <div class="text-6xl mb-6 transform hover:scale-110 transition duration-500">🚫🚚</div>
                 <h2 class="text-3xl font-bold text-red-400 mb-4 tracking-wide uppercase border-b-2 border-red-400/20 pb-2">Order Intercepted</h2>
                 <p class="text-gray-300 text-lg leading-relaxed font-light">
                    Shravii is currently hand-preparing your virtual comfort.<br>
                    <span class="text-sm text-gray-500 italic mt-2 block">(No robots allowed in this kitchen)</span>
                 </p>
                 <div class="mt-8 bg-white/5 px-6 py-4 rounded-xl border border-white/10 w-full max-w-xs backdrop-blur-sm">
                    <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-1">Estimated Delivery</span>
                    <div class="text-xl font-bold text-green-400">Next time we meet ❤️</div>
                 </div>
            </div>
        `;
    }, 1500);
}

/* === VOICEBOX APP LOGIC === */
let vbMemos = [
    { id: 1, title: "Happy Birthday Mr. Ota 🎂", date: "Today", duration: "0:05", src: null }, // Placeholder
    { id: 2, title: "Stop acting dumb 🙄", date: "Yesterday", duration: "0:03", src: null },
    { id: 3, title: "Good morning sunshine ☀️", date: "2 days ago", duration: "0:08", src: null }
];
let vbCurrentAudio = null;
let vbIsPlaying = false;

function initVoiceBox() {
    renderVoiceList();
}

function renderVoiceList() {
    const list = document.getElementById('vibes-list');
    if (!list) return;
    list.innerHTML = vbMemos.map(m => `
        <div class="group flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-red-200 hover:shadow-md transition cursor-pointer" onclick="playVoiceMemo(${m.id})">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition">
                    <i class="fas fa-play text-xs ml-0.5"></i>
                </div>
                <div>
                    <div class="text-sm font-bold text-gray-800">${m.title}</div>
                    <div class="text-[10px] text-gray-400 font-medium">${m.date} • ${m.duration}</div>
                </div>
            </div>
            <div class="text-gray-300 group-hover:text-red-400"><i class="fas fa-ellipsis-v"></i></div>
        </div>
    `).join('');
}

function handleVoiceUpload(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const url = URL.createObjectURL(file);
        const newMemo = {
            id: Date.now(),
            title: file.name.replace(/\.[^/.]+$/, ""),
            date: "Just now",
            duration: "Unknown",
            src: url
        };
        vbMemos.unshift(newMemo);
        renderVoiceList();
        playVoiceMemo(newMemo.id);
    }
}

function playVoiceMemo(id) {
    const memo = vbMemos.find(m => m.id === id);
    if (!memo) return;

    // Stop current
    if (vbCurrentAudio) {
        vbCurrentAudio.pause();
        vbCurrentAudio = null;
    }

    document.getElementById('vb-now-playing').innerText = memo.title;

    // Play real audio or simulate
    if (memo.src) {
        vbCurrentAudio = new Audio(memo.src);
        vbCurrentAudio.play();
        vbCurrentAudio.onended = () => {
            vbIsPlaying = false;
            updatePlayBtn();
        };
        vbIsPlaying = true;
    } else {
        // Placeholder simulation
        alert(`(Simulated Audio Playing: "${memo.title}")\n\n*Use the + button to upload real audio files!*`);
        vbIsPlaying = false;
    }
    updatePlayBtn();
}

function toggleVoicePlayback() {
    if (vbCurrentAudio) {
        if (vbIsPlaying) vbCurrentAudio.pause();
        else vbCurrentAudio.play();
        vbIsPlaying = !vbIsPlaying;
        updatePlayBtn();
    }
}

function updatePlayBtn() {
    const btn = document.getElementById('vb-play-btn');
    if (btn) btn.innerHTML = vbIsPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play ml-0.5"></i>';
}

// Global Exports
window.initVoiceBox = initVoiceBox;
window.handleVoiceUpload = handleVoiceUpload;
window.toggleVoicePlayback = toggleVoicePlayback;
window.orderCravings = orderCravings;
window.initSecretVault = initSecretVault;
window.checkVaultPassword = checkVaultPassword;
window.vaultNextSlide = vaultNextSlide;
window.vaultPrevSlide = vaultPrevSlide;
window.startRabbitGame = startRabbitGame;
window.initRabbitGame = initRabbitGame;
window.handleTerminalAppCommand = handleTerminalAppCommand;
window.handlePQuiz = handlePQuiz;
window.initPersonalityQuiz = initPersonalityQuiz;
window.renderSpiral = renderSpiral;
window.initWordSpiral = initWordSpiral;

// Global Exports
window.renderPath = renderPath;
window.startPathGame = startPathGame;
window.playRadio = playRadio;
window.initRadio = initRadio;
window.initInkpot = initInkpot;
window.nextPoem = nextPoem;
window.toggleSpotify = toggleSpotify;
window.spawnBears = spawnBears;
window.playFirstConversation = playFirstConversation;
window.initLetterReveal = initLetterReveal;

// START HERE
window.Apps = Apps; // Global exposure
window.onload = startCountdownGatekeeper;



