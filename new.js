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
/* === APP REGISTRY (Curated System) === */
const apps = [
    /* CLUSTER 1: EMOTIONAL BUT SOFT (The Heart) */
    {
        id: 'timeline-1221', title: '12:21 AM', icon: '🕒', dock: true, width: 400, height: 350, content: `
        <div class="h-full flex flex-col items-center justify-center text-center p-8 bg-black text-white">
            <div class="text-xs tracking-[0.3em] uppercase opacity-50 mb-4">Origin</div>
            <div class="text-4xl font-serif mb-6">12:21 AM</div>
            <div id="timeline-text" class="text-sm font-light text-gray-300 space-y-4"></div>
        </div>
        <script>
            setTimeout(() => {
                const lines = ["A conversation began.", "No expectations.", "Just honesty.", "Still here."];
                let i = 0;
                const el = document.getElementById('timeline-text');
                const tInt = setInterval(() => {
                    if (i >= lines.length) { clearInterval(tInt); return; }
                    el.innerHTML += '<div class="fade-in-up">' + lines[i] + '</div>';
                    i++;
                }, 1200);
            }, 500);
        </script>
    `},

    /* THE CHOSEN BOND (Progressive Reveal) */
    {
        id: 'connection-log', title: 'Connection.log', icon: '📜', dock: true, width: 650, height: 500, content: `
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
        id: 'admire', title: 'Things I Admire', icon: '🌟', dock: false, width: 500, height: 400, content: `
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
        id: 'facts', title: 'Harshit Facts.txt', icon: '📄', dock: false, width: 400, height: 400, content: `
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
        id: 'not-dumb', title: 'Not Dumb', icon: '🤨', dock: false, width: 300, height: 200, content: `
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

    {
        id: 'flash', title: 'Fastest Alive', icon: '⚡', dock: false, width: 500, height: 300, content: `
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
        id: 'rabbit', title: 'Rabbit Mode', icon: '🐰', dock: false, width: 400, height: 400, content: `
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
        id: 'app-19', title: '19.exe', icon: '🧠', dock: true, width: 500, height: 400, content: `
        <div class="h-full bg-white p-10 flex flex-col justify-center relative">
            <h1 class="text-6xl font-black text-gray-100 absolute top-4 left-4 select-none">19</h1>
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

    /* CLUSTER 5: EASTER EGGS (Hidden) */
    {
        id: 'do-not-open', title: 'Do Not Open', icon: '🚫', dock: false, width: 300, height: 200, content: `
        <div class="h-full flex items-center justify-center bg-red-50 text-red-900 text-center p-6">
            <div>
                <div class="font-bold mb-2">You Opened It.</div>
                <div class="text-xs">I knew you would. Stubborn. ❤️</div>
            </div>
        </div>
    `},

    {
        id: 'playlist', title: 'Hidden Tracks', icon: '🎶', dock: false, width: 400, height: 300, content: `
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
        id: 'last-thing', title: 'One Last Thing', icon: '🖤', dock: true, width: 400, height: 300, content: `
        <div class="h-full bg-white flex items-center justify-center text-center p-8 cursor-pointer hover:bg-gray-50 transition" onclick="Apps.open('thank-you')">
            Click here.
        </div>
    `},

    {
        id: 'thank-you', title: 'Thank You', icon: '✨', dock: false, width: 450, height: 350, content: `
        <div class="h-full flex items-center justify-center text-center p-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <div>
                <div class="text-2xl font-serif mb-4">Thank you for existing.</div>
                <div class="text-sm opacity-80">Really.</div>
            </div>
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
    { type: 'final', content: "You were home to each other for a while." }
];

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



function closeApp(id) {
    const win = document.getElementById(`win-${id}`);
    if (win) {
        win.style.opacity = 0;
        setTimeout(() => win.remove(), 300);
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
    if (term) term.blur(); // Unfocus inputs

    // Removed dimming effect per user request ("No dim thing")
    // document.body.style.filter = 'brightness(0.1)';

    const msg = document.createElement('div');
    msg.className = 'fixed bottom-10 left-10 text-white/40 font-mono text-xs z-[99999]';
    msg.style.opacity = 0;
    msg.style.transition = 'opacity 2s ease 2s'; // Delay 2s
    msg.innerText = 'This space stays.';
    document.body.appendChild(msg);

    requestAnimationFrame(() => msg.style.opacity = 1);
}
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
function playMusic(m) { alert(`Playing ${m} `); }
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
function initGallery() {
    const container = document.getElementById('gallery-container');
    if (!container || container.children.length > 0) return; // Prevent duplicates

    const photos = [
        { src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=400', caption: "Mr. Snow" },
        { src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400', caption: "Doggo Mode" },
        { src: 'https://images.unsplash.com/photo-1523307730650-594bc63f9d67?q=80&w=400', caption: "Smart Stuff" },
        { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=400', caption: "Cold Vibes" },
        { src: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=400', caption: "Focus." },
        { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400', caption: "(Place real photos here)" }
    ];

    photos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'polaroid-card';
        card.innerHTML = `<img src="${photo.src}"><div class="caption">${photo.caption}</div>`;

        // Random Scatter
        const randomRot = Math.random() * 20 - 10; // -10 to +10 deg
        const randomTop = Math.random() * 200;
        const randomLeft = Math.random() * (container.clientWidth - 230); // Prevent overflow

        card.style.transform = `rotate(${randomRot}deg)`;
        card.style.top = `${randomTop + 50}px`;
        card.style.left = `${randomLeft}px`;

        // Draggable Logic (Simple)
        card.onmousedown = function (e) {
            card.style.zIndex = 200;
            const offX = e.clientX - card.getBoundingClientRect().left;
            const offY = e.clientY - card.getBoundingClientRect().top;

            function move(ev) {
                // Determine container bounds
                const rect = container.getBoundingClientRect();
                card.style.left = (ev.clientX - offX - rect.left) + 'px';
                card.style.top = (ev.clientY - offY - rect.top) + 'px';
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
    });
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

// START HERE
window.onload = startCountdownGatekeeper;



