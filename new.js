/* === CONFIGURATION === */
const CONFIG = { apiKey: "" };

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

/* === APP REGISTRY (Personalized for Harshit) === */
const apps = [
    /* 0. HARSHIT AI (PERSONAL ASSISTANT) */
    {
        id: 'harshit-ai',
        title: 'HarshitAI',
        icon: '🧠',
        dock: true,
        width: 450, height: 600,
        content: `
            <div class="ai-container">
                <div class="ai-header">
                    <div class="ai-avatar"><i class="fas fa-brain"></i></div>
                    <div class="ai-info">
                        <h3>HarshitAI v2.0</h3>
                        <p>Powered by Gemini Flash • Sassy Mode: ON</p>
                    </div>
                </div>
                <div class="ai-chat-window custom-scroll" id="ai-chat">
                    <div class="msg ai">Hello Mr. Snow. ❄️<br>I'm your personal brain. I know everything about you (scary, right?).<br>Ask me something, or don't. I'm busy calculating how amazing you are.</div>
                </div>
                <div class="ai-input-area">
                    <input type="text" class="ai-input" id="ai-input" placeholder="Ask HarshitAI..." onkeypress="if(event.key==='Enter') handleAIChat()">
                    <button class="ai-send" onclick="handleAIChat()"><i class="fas fa-arrow-up"></i></button>
                </div>
            </div>
        `
    },

    /* 0.5. TERMINAL.SH (CLI) */
    {
        id: 'terminal',
        title: 'Terminal.sh',
        icon: '💻',
        dock: true,
        width: 600, height: 400,
        content: `
            <div class="terminal-app" onclick="document.getElementById('term-input').focus()">
                <div class="term-output custom-scroll" id="term-output">
                    <div>Welcome to HarshitOS Kernel v19.0.0</div>
                    <div>Type 'help' for available commands.</div>
                    <br>
                </div>
                <div class="term-prompt-line">
                    <div class="term-prompt">root@harshit:~$</div>
                    <input type="text" class="term-input" id="term-input" autocomplete="off" spellcheck="false" onkeypress="if(event.key==='Enter') handleTerminalCommand()">
                </div>
            </div>
        `
    },

    /* 1. IDENTITY & PROFILE -> ABOUT US */
    {
        id: 'about', title: 'About Us', icon: '👥', dock: true, width: 550, height: 600, content: `
        <div class="id-card">
            <div class="id-photo" style="background-image: url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=200');"></div>
            <div class="id-name">The Bond</div>
            <div class="id-role">June 20, 2024 • 12:21 AM</div>
            <div class="mt-8 text-left w-full px-6 space-y-6">
                <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 class="font-bold text-blue-800 mb-1">Shravii (The Anchor)</h4>
                    <p class="text-xs text-gray-600 leading-relaxed">The one who listened without rushing. Who remembered the dates, the moods, and the silences. The safe place.</p>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <h4 class="font-bold text-purple-800 mb-1">Harshit (The Responder)</h4>
                    <p class="text-xs text-gray-600 leading-relaxed">The one who was emotionally expressive, vulnerable, and romantic. Who treated you like a queen and made you feel protected.</p>
                </div>
                <div class="text-center text-xs text-gray-400 italic mt-4">"Neither was disposable."</div>
            </div>
        </div>
    `},

    /* 2. OUR JOURNEY (Timeline) */
    {
        id: 'journey-timeline', title: 'OurJourney', icon: '🚀', dock: true, width: 650, height: 550, content: `
        <div class="h-full overflow-y-auto custom-scroll timeline-container">
            <div class="timeline-item">
                <div class="timeline-date">June 20, 2024 • 12:21 AM</div>
                <div class="timeline-title">The Midnight Spark</div>
                <div class="timeline-content">It started quietly on Discord. No announcements, just late-night talks that felt surprisingly real. Strangers to something familiar in hours.</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">The Accumulation</div>
                <div class="timeline-title">The Shared World</div>
                <div class="timeline-content">Shared music, creating playlists, sub sandwiches, and discussing emotions. Mr. Ota, Mr. Snow, and Rabbit 🐰 nicknames were born here.</div>
            </div>
             <div class="timeline-item">
                <div class="timeline-date">The Heavy Days</div>
                <div class="timeline-title">Safe Space</div>
                <div class="timeline-content">You became the anchor. I became the listener. We fought, we misunderstood, but we reconciled because neither was disposable.</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">Now</div>
                <div class="timeline-title">Deep Truths</div>
                <div class="timeline-content">Even if silence exists, the bond remains. You are home to a part of me.</div>
            </div>
        </div>
    `},

    /* 3. LETTER (ReadMe.txt) */
    {
        id: 'letter', title: 'ReadMe.txt', icon: '📜', dock: true, width: 600, height: 600, content: `
        <div class="h-full p-10 bg-[#fffef0] overflow-y-auto custom-scroll" style="font-family: 'Handlee', cursive;">
            <div class="max-w-md mx-auto space-y-6 text-gray-800 text-lg leading-loose">
                <h1 class="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">My Bestest Friend,</h1>
                <p>I promised to write this slowly.</p>
                <p>You are a combination of sweetness and spiciness. You don't entertain lies. You handle me like a kid, but treat me like a queen.</p>
                <p>You are the world's strongest person. The fastest person. The person who remembers every tiny detail (seriously, how is your memory that good?).</p>
                <p>At times you overdo it—100% care, 100% dedication—and I worry, but I admire it. You know exactly which card to play, which silence to hold.</p>
                <p>Thank you for being my safe space. For the 12:21 AM talks. For the fights that made us stronger. For being Mr. Chuha and Mr. Snow.</p>
                <p class="font-bold">Happy 19th Birthday. You deserve the world.</p>
                <p class="pt-6 text-right text-base text-gray-500">— Shravii (Your drama queen)</p>
            </div>
        </div>
    `},

    /* 4. DEEP TRUTHS (Notes) */
    {
        id: 'favs', title: 'DeepTruths', icon: '⭐', dock: false, width: 650, height: 500, content: `
        <div class="h-full sticky-grid custom-scroll bg-[#f0f0f0]">
            <!-- Generated Notes -->
            <div class="sticky-note" style="--rot: -2deg; background: #fff;">
                <div class="sticky-title">Everything I Know</div>
                "This document exists because you mattered enough to be noticed."
            </div>
            <div class="sticky-note" style="--rot: 3deg">
                <div class="sticky-title">The Vibe ❄️</div>
                Siberian Huskies 🐺<br>Cold Places<br>Silence over Noise<br>Hoodies
            </div>
             <div class="sticky-note" style="--rot: -1deg">
                <div class="sticky-title">The Memory 🧠</div>
                You notice every tiny detail.<br>You remember dates.<br>You remember moods.
            </div>
            <div class="sticky-note" style="--rot: 2deg">
                <div class="sticky-title">Food 🥪</div>
                Sub Sandwiches (Practical!)<br>Euros<br>NO Bhindi ❌
            </div>
        </div>
    `},

    /* 5. VS CODE (Engineering) */
    {
        id: 'code', title: 'birthday_script.py', icon: '👨‍💻', dock: true, width: 700, height: 500, content: `
        <div class="code-editor custom-scroll">
            <div class="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                <span class="text-xs text-gray-400">main.py</span>
                <button class="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs flex items-center gap-2 transition" onclick="runCode()">
                    <i class="fas fa-play"></i> Run Code
                </button>
            </div>
            <div id="code-content">
                <div class="code-line"><span class="line-num">1</span><span class="c-keyword">import</span> <span class="c-func">life</span></div>
                <div class="code-line"><span class="line-num">2</span></div>
                <div class="code-line"><span class="line-num">3</span><span class="c-keyword">def</span> <span class="c-func">analyze_dna</span>(<span class="c-string">person</span>):</div>
                <div class="code-line"><span class="line-num">4</span>    <span class="c-keyword">if</span> <span class="c-string">person</span>.name == <span class="c-string">"Harshit"</span>:</div>
                <div class="code-line"><span class="line-num">5</span>        <span class="c-string">person</span>.status = <span class="c-string">"World's Strongest"</span></div>
                <div class="code-line"><span class="line-num">6</span>        <span class="c-string">person</span>.level = <span class="c-func">19</span></div>
                <div class="code-line"><span class="line-num">7</span>        <span class="c-keyword">return</span> <span class="c-string">"HAPPY BIRTHDAY HARSHIT! 🎉"</span></div>
                <div class="code-line"><span class="line-num">8</span></div>
                <div class="code-line"><span class="line-num">9</span><span class="c-keyword">print</span>(<span class="c-func">analyze_dna</span>(<span class="c-func">user</span>))</div>
            </div>
            <div id="code-output" class="mt-4 border-t border-gray-700 pt-4 hidden">
                <div class="text-gray-400 text-xs mb-2">OUTPUT:</div>
                <div class="text-green-400 font-mono">>> Analyzing DNA sequence...</div>
                <div class="text-green-400 font-mono">>> Match Found: Level 19 Engineer detected.</div>
                <div class="text-xl text-yellow-400 font-bold mt-2 typing-effect">>> HAPPY BIRTHDAY HARSHIT! 🎂</div>
            </div>
        </div>
        <script>
            function runCode() {
                document.getElementById('code-output').classList.remove('hidden');
            }
        </script>
    `},

    /* 6. CRAVINGS (Food Dashboard) */
    {
        id: 'food', title: 'Cravings', icon: '🍔', dock: true, width: 600, height: 500, content: `
        <div class="food-dashboard custom-scroll">
            <div class="food-section food-good">
                <div class="food-title">The Good Stuff ✅</div>
                <div class="food-grid">
                    <div class="food-item"><span class="food-emoji">🥪</span><span class="food-name">Sub Sandwiches</span></div>
                    <div class="food-item"><span class="food-emoji">💶</span><span class="food-name">Euros</span></div>
                    <div class="food-item"><span class="food-emoji">🍗</span><span class="food-name">Chicken</span></div>
                    <div class="food-item"><span class="food-emoji">🧊</span><span class="food-name">Cold Water</span></div>
                </div>
            </div>
            <div class="food-section food-bad">
                <div class="food-title">Trash Bin 🗑️</div>
                <div class="food-grid">
                    <div class="food-item"><span class="food-emoji">🍚</span><span class="food-name">Rice</span></div>
                    <div class="food-item"><span class="food-emoji">🤢</span><span class="food-name">Bhindi</span></div>
                    <div class="food-item"><span class="food-emoji">🍬</span><span class="food-name">Too Sweet</span></div>
                </div>
            </div>
        </div>
    `},

    /* 7. STRESS RELIEF (Bubble Wrap) */
    {
        id: 'stress', title: 'Bubble Wrap', icon: '🫧', dock: true, width: 400, height: 400, content: `
        <div class="bubble-wrap-container custom-scroll" id="bubble-container">
            <!-- Bubbles injected via JS -->
        </div>
    `, onOpen: initBubbleWrap
    },

    /* 8. BIN (Trash) -> Updated Content */
    {
        id: 'trash', title: 'Bin', icon: '🗑️', dock: true, width: 400, height: 300, content: `
        <div class="h-full bg-white flex flex-col items-center justify-center text-center p-6">
            <div class="text-6xl mb-4">🗑️</div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">Permanently Deleted</h3>
            <ul class="text-gray-500 text-sm space-y-2">
                <li>❌ Liars <span class="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">GONE</span></li>
                <li>❌ Weak Vibes <span class="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">GONE</span></li>
                <li>❌ Bhindi <span class="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">BURNED</span></li>
            </ul>
            <div class="mt-6 text-xs text-gray-400">Auto-emptying enabled.</div>
        </div>
    `},

    /* 9. MASTI / BEAR (Memories/Gifs) */
    {
        id: 'masti', title: 'Shravii Mode', icon: '🐻', dock: true, width: 400, height: 500, content: `
        <div class="bear-container custom-scroll">
            <div class="chat-bubble">Hehehe Happy Birthday! 🎉</div>
            <div class="chat-bubble">Remember this? (Imagine me annoying you)</div>
            <img src="assets/bear_poke.gif" class="w-32 rounded mb-4" onerror="this.src='https://media.tenor.com/On7kvXhzml4AAAAj/love-bear.gif'"> <!-- Fallback to online gif -->
            <div class="chat-bubble">You handling my drama like:</div>
            <img src="assets/bear_pat.gif" class="w-32 rounded mb-4" onerror="this.src='https://media.tenor.com/-pMrF1h8YVAAAAAj/milk-and-mocha-bear-couple.gif'">
            <div class="chat-bubble">Me feeling safe around you:</div>
            <img src="assets/bear_hug.gif" class="w-32 rounded" onerror="this.src='https://media.tenor.com/J7e9j0A7b0kAAAAj/hugs.gif'">
        </div>
    `},

    /* 10. MUSIC PLAYER */
    {
        id: 'music-player', title: 'Vibes', icon: '🎧', dock: true, width: 400, height: 400, content: `
        <div class="music-player">
            <div class="album-art" style="background-image: url('https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400');">🎵</div>
            <div class="track-info">
                <h3>Our Playlist</h3>
                <p>Songs that explain feelings</p>
            </div>
            <div class="player-controls">
                <div class="text-2xl cursor-pointer opacity-70 hover:opacity-100">⏮️</div>
                <div class="play-btn" onclick="document.getElementById('bg-audio').play()">▶</div>
                <div class="text-2xl cursor-pointer opacity-70 hover:opacity-100">⏭️</div>
            </div>
            <div class="mt-6 text-xs text-gray-400">Put 'music.mp3' in the folder to play real audio!</div>
        </div>
    `},

    /* 11. GALLERY (Memories Grid) */
    {
        id: 'gallery', title: 'Memories', icon: '🖼️', dock: false, width: 700, height: 500, content: `
        <div class="h-full bg-black p-4 grid grid-cols-3 gap-2 overflow-y-auto custom-scroll">
            <div class="aspect-square bg-gray-800 rounded flex items-center justify-center text-gray-500 hover:opacity-80 transition cursor-pointer">Place photos in assets/</div>
            <div class="aspect-square bg-gray-700 rounded"></div>
            <div class="aspect-square bg-gray-600 rounded"></div>
            <div class="aspect-square bg-gray-900 rounded"></div>
            <div class="aspect-square bg-gray-800 rounded"></div>
        </div>
    `},

    /* UTILITIES */
    { id: 'discord', title: 'Discord 2024', icon: '💬', dock: false, width: 400, height: 500, content: `<div class="p-4 bg-[#36393f] h-full text-white"><div class="border-b border-gray-700 pb-2 mb-4 font-bold"># general</div><div class="space-y-4 text-sm"><div class="flex gap-3"><div class="w-8 h-8 rounded-full bg-blue-500"></div><div><span class="font-bold text-red-400">Harshit</span> <span class="text-xs text-gray-400">Today at 12:21 AM</span><div class="text-gray-300">Hey.</div></div></div><div class="flex gap-3"><div class="w-8 h-8 rounded-full bg-pink-500"></div><div><span class="font-bold text-yellow-400">Shravii</span><span class="text-xs text-gray-400">Today at 12:22 AM</span><div class="text-gray-300">Hi! Stranger.</div></div></div></div></div>` },
    { id: 'calc', title: 'Calculator', icon: '🧮', dock: false, width: 250, height: 350, content: `<div class="h-full bg-gray-900 flex items-center justify-center text-white">0</div>` },


    /* SYSTEM SETTINGS */
    {
        id: 'settings', title: 'System Preferences', icon: '⚙️', dock: false, width: 700, height: 500,
        content: `
            <div class="settings-container bg-[#f5f5f7]">
                <div class="settings-sidebar">
                    <div class="settings-nav-item active">General</div>
                </div>
                <div class="settings-content custom-scroll">
                    <div class="settings-section">
                        <div class="settings-title">Appearance</div>
                        <div class="appearance-options">
                            <div class="appearance-card active" onclick="setTheme('light', this)"><div class="theme-preview light"></div><div class="theme-label">Light</div></div>
                            <div class="appearance-card" onclick="setTheme('dark', this)"><div class="theme-preview dark"></div><div class="theme-label">Dark</div></div>
                        </div>
                    </div>
                </div>
            </div>`,
        onOpen: renderSettings
    },

    /* FOLDER: SYSTEM */
    { role: 'folder', id: 'system-folder', title: 'System', icon: '🖥️', dock: false, children: ['settings', 'trash', 'calc', 'calendar'] },

    /* FOLDER: GAMES (Collapsed to be less prominent but still there if wanted) */
    { role: 'folder', id: 'arcade-folder', title: 'Arcade', icon: '🕹️', dock: true, children: ['game-brick', 'game-snake', 'game-2048', 'game-chess'] },

    /* GAMES (Hidden from desktop, inside folder) */
    { id: 'game-brick', title: 'Brick Breaker', icon: '🧱', url: 'D:/games/Arcade/2D-break-breaker-master/index.html' },
    { id: 'game-snake', title: 'Snake', icon: '🐍', url: 'D:/games/Arcade/Snake-Game/index.html' },
    { id: 'game-2048', title: '2048', icon: '🔢', url: 'D:/games/Puzzles/2048-lite-master/index.html' },
    { id: 'game-chess', title: 'Chess', icon: '♟️', url: 'D:/games/Tabletop/Grandmaster Chess Arena/index.html' }
];

/* === SETTINGS FUNCTIONS === */
function renderSettings() {
    const grid = document.getElementById('wp-grid');
    if (grid) {
        grid.innerHTML = wallpapers.map((wp, i) => `
            <div class="wallpaper-thumb" onclick="setWallpaper('${wp.full}', this)">
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
    if (clockEl) clockEl.innerText = `${date}  ${time}`;
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
/* === PHASE 1: COUNTDOWN GATEKEEPER (Real-time to Jan 30) === */
function startCountdownGatekeeper() {
    const cdScreen = document.getElementById('countdown-phase');
    const cdDisplay = document.getElementById('countdown-display');
    const cdSub = document.getElementById('countdown-sub');

    cdScreen.classList.remove('hidden');
    // Adjust font size for longer text
    cdDisplay.classList.remove('text-6xl', 'md:text-8xl');
    cdDisplay.classList.add('text-4xl', 'md:text-6xl');
    cdDisplay.classList.add('countdown-glow');
    cdSub.style.opacity = 1;

    // Target: Jan 30, 2026 00:00:00
    // Note: Assuming 2026 based on current system time.
    const targetDate = new Date('January 30, 2026 00:00:00').getTime();

    const int = setInterval(() => {
        if (document.getElementById('desktop').style.display === 'block') { clearInterval(int); return; } // Stop if skipped

        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(int);
            cdDisplay.innerText = "IT'S TIME";
            cdSub.innerText = "The wait is over.";
            setTimeout(() => {
                cdScreen.style.opacity = 0;
                setTimeout(() => {
                    cdScreen.style.display = 'none';
                    state.countdownFinished = true;
                    playJourneyIntro();
                }, 1500);
            }, 1000);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        cdDisplay.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        cdSub.innerText = "UNTIL JANUARY 30";
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
        if (!app.dock || app.id === 'hidden-unlock') {
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

const Apps = {
    open: (id) => {
        const app = apps.find(a => a.id === id); if (!app) return;
        state.appsOpened.add(id);
        const exist = document.getElementById(`win-${id}`);
        if (exist) { exist.style.display = 'flex'; exist.style.zIndex = ++zIndex; return; }

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

        // Handle Folders
        if (app.role === 'folder' && app.children) {
            const childItems = app.children.map(cid => {
                const c = apps.find(x => x.id === cid);
                if (!c) return '';
                return `<div onclick="Apps.open('${c.id}')" class="flex flex-col items-center gap-2 p-3 hover:bg-black/5 rounded-lg cursor-pointer transition">
                    <div class="text-3xl">${c.icon}</div>
                    <div class="text-xs text-gray-700 text-center font-medium">${c.title}</div>
                </div>`;
            }).join('');
            contentHTML = `<div class="p-6 grid grid-cols-4 gap-4 bg-[#f5f5f7] h-full overflow-y-auto custom-scroll">${childItems}</div>`;
        }

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

function closeApp(id) { const win = document.getElementById(`win-${id}`); win.style.opacity = 0; setTimeout(() => win.remove(), 300); const dot = document.getElementById(`dot-${id}`); if (dot) dot.parentElement.classList.remove('active'); }
function minimizeApp(id) {
    const win = document.getElementById(`win-${id}`);
    win.style.transform = 'scale(0.8) translateY(200px)';
    win.style.opacity = 0;
    setTimeout(() => { win.style.display = 'none'; }, 300);
}
function maximizeApp(id) {
    const win = document.getElementById(`win-${id}`);
    if (win.getAttribute('data-maximized') === 'true') {
        win.style.width = win.getAttribute('data-prev-w');
        win.style.height = win.getAttribute('data-prev-h');
        win.style.left = win.getAttribute('data-prev-l');
        win.style.top = win.getAttribute('data-prev-t');
        win.removeAttribute('data-maximized');
    } else {
        win.setAttribute('data-prev-w', win.style.width);
        win.setAttribute('data-prev-h', win.style.height);
        win.setAttribute('data-prev-l', win.style.left);
        win.setAttribute('data-prev-t', win.style.top);
        win.style.width = '100vw'; win.style.height = 'calc(100vh - 40px)';
        win.style.left = '0'; win.style.top = '30px';
        win.setAttribute('data-maximized', 'true');
    }
}
function showAffirmation(i) { const el = document.getElementById('aff-text'); if (el) { el.style.opacity = 0; setTimeout(() => { el.innerText = `"${affirmations[i]}"`; el.style.opacity = 1; }, 300); } }
function playMusic(m) { alert(`Playing ${m}`); }
function checkUnlock() { if (state.countdownFinished && state.appsOpened.size >= 5) { document.getElementById('lock-msg').style.display = 'none'; document.getElementById('unlock-msg').classList.remove('hidden'); } }
let dragItem = null, offX = 0, offY = 0;
function startDrag(e, id) { if (e.target.closest('.traffic-lights')) return; dragItem = document.getElementById(id); offX = e.clientX - dragItem.offsetLeft; offY = e.clientY - dragItem.offsetTop; dragItem.style.zIndex = ++zIndex; document.addEventListener('mousemove', doDrag); document.addEventListener('mouseup', stopDrag); }
function doDrag(e) { if (dragItem) { dragItem.style.left = (e.clientX - offX) + 'px'; dragItem.style.top = (e.clientY - offY) + 'px'; } }
function stopDrag() { dragItem = null; document.removeEventListener('mousemove', doDrag); document.removeEventListener('mouseup', stopDrag); }


/* === HARSHIT AI LOGIC === */
async function handleAIChat() {
    const input = document.getElementById('ai-input');
    const chat = document.getElementById('ai-chat');
    const msg = input.value.trim();
    if (!msg) return;

    // 1. Add User Message
    const userDiv = document.createElement('div');
    userDiv.className = 'msg user';
    userDiv.innerText = msg;
    chat.appendChild(userDiv);
    input.value = '';
    chat.scrollTop = chat.scrollHeight;

    // 2. Simulate "Thinking" (or call API)
    const aiDiv = document.createElement('div');
    aiDiv.className = 'msg ai';
    aiDiv.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Thinking...';
    chat.appendChild(aiDiv);
    chat.scrollTop = chat.scrollHeight;

    // 3. Generate Response (Mock Logic for now, can swap with real Gemini API)
    setTimeout(() => {
        let response = "I'm analyzing... but honestly, you should know this.";
        const m = msg.toLowerCase();

        // KNOWLEDGE BASE (Sassy Mode)
        if (m.includes('who are you')) response = "I'm HarshitAI. The brain of this operation. Obviously.";
        else if (m.includes('meet') || m.includes('met') || m.includes('date')) response = "June 20, 2024. 12:21 AM. On Discord. Don't pretend you forgot.";
        else if (m.includes('bhindi')) response = "Ew. No. Please respect yourself. Trash bin is that way -> 🗑️";
        else if (m.includes('snow') || m.includes('nickname')) response = "Mr. Snow ❄️. Because I'm cool, calm, and slightly distant until you get to know me.";
        else if (m.includes('shravani') || m.includes('shravii')) response = "She's the drama queen who built this OS. She handles you like a kid but treats you like a king. You're lucky.";
        else if (m.includes('birthday') || m.includes('age')) response = "19. You're officially old enough to know better, but you probably won't.";
        else if (m.includes('strength') || m.includes('strong')) response = "Infinite. World's Strongest. It's in the database, look at your ID card.";
        else if (m.includes('love') || m.includes('like')) response = "Sub sandwiches, Huskies, Cold places, Shoes, Peaky Blinders. Simple man.";
        else if (m.includes('hello') || m.includes('hi')) response = "Sup. Ready to be productive or just annoying me?";
        else {
            // Default "Smart" responses
            const fallbacks = [
                "I'm processing that... results inconclusive. Try again.",
                "That's a question for Google, not your personal OS.",
                "I'm 100% loyal, but 0% interested in answering that.",
                "Check the 'Memories' folder. The answer might be there."
            ];
            response = fallbacks[Math.floor(Math.random() * fallbacks.length)];
        }

        aiDiv.innerHTML = response;
        chat.scrollTop = chat.scrollHeight;

        // Optional: If real API key exists
        if (CONFIG.apiKey) {
            // Call Gemini API here with system instruction:
            // "You are HarshitAI, a sassy personal assistant for Harshit. You know he dislikes bhindi, loves huskies..."
        }

    }, 1000);
}



/* === TERMINAL LOGIC === */
function handleTerminalCommand() {
    const input = document.getElementById('term-input');
    const output = document.getElementById('term-output');
    const cmd = input.value.trim();
    if (!cmd) return;

    // Echo command
    output.innerHTML += `<div><span class="term-prompt">root@harshit:~$</span> ${cmd}</div>`;

    // Process Command
    let response = '';
    const args = cmd.split(' ');
    const command = args[0].toLowerCase();

    switch (command) {
        case 'help':
            response = `
                <div class="term-info">Available Commands:</div>
                <div>  help       - Show this list</div>
                <div>  whois      - Identify the user</div>
                <div>  secret     - Unlock hidden data</div>
                <div>  cake       - Initiate birthday sequence</div>
                <div>  date       - Show critical dates</div>
                <div>  clear      - Clear the terminal</div>
            `;
            break;
        case 'whois':
            if (args[1] === 'shravii') response = "User: Shravii<br>Role: The Architect / The Drama Queen<br>Status: Bestest Friend";
            else response = "User: Harshit (Mr. Snow)<br>Role: System Admin / Birthday Boy<br>Strength: Infinite";
            break;
        case 'secret':
            response = `<span class="term-success">Access Granted.</span><br>Code: 1221<br>Meaning: The time it all started.`;
            break;
        case 'cake':
            response = `🎂 Initiating Cake Protocol...<br>Happy 19th Birthday Harshit! 🎉`;
            // Trigger confetti if possible
            if (typeof confetti === 'function') confetti();
            break;
        case 'date':
            response = `Critical Date: June 20, 2024 (Origin)`;
            break;
        case 'clear':
            output.innerHTML = '';
            input.value = '';
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
                // new Audio('assets/pop.mp3').play().catch(() => {});
            }
        };
        container.appendChild(b);
    }
}


window.onload = startCountdownGatekeeper;
