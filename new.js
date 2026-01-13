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

/* === APP REGISTRY === */
const apps = [
    /* --- ORIGINAL APPS --- */
    { id: 'about', title: 'About You', icon: '👤', dock: true, width: 500, height: 400, content: `<div class="p-10 text-center bg-[#fafafa] h-full flex flex-col justify-center"><h2 class="text-2xl font-serif mb-6 text-gray-800">Who You Are</h2><div class="space-y-4 text-gray-600 leading-relaxed font-light"><p>Not just the achievements.</p><p>But the resilience behind them.</p><p>The honesty you keep when it's hard.</p><p>The depth you carry instantly.</p></div><div class="mt-8 text-xs text-gray-400 tracking-widest uppercase">Growth • Silence • Strength</div></div>` },
    { id: 'letter', title: 'To Harshit', icon: '💌', dock: true, width: 600, height: 500, content: `<div class="h-full p-10 bg-white overflow-y-auto custom-scroll"><div class="max-w-md mx-auto space-y-6 text-gray-700 font-serif leading-loose"><p class="text-xl">Harshit,</p><p>I promised to write this slowly, because that’s how you deserve to be read. Not in a rush.</p><p>I look at you and I see someone who has built himself from the ground up. I see the pressure you take on, the expectations you manage, and the silence you keep so others don't have to worry.</p><p>I want you to know: You are protected here. You are understood here.</p><p>I am proud clearly, not just of what you do, but of who you are becoming.</p><p class="pt-6 text-right text-sm text-gray-400">— always here.</p></div></div>` },
    { id: 'affirmations', title: 'Seen', icon: '👁️', dock: true, width: 450, height: 400, dark: true, content: `<div class="h-full bg-[#111] text-gray-300 flex flex-col items-center justify-center p-8 text-center" id="aff-container"><div id="aff-text" class="text-xl font-light italic transition-opacity duration-1000">"Hover to see."</div><div class="mt-8 flex gap-2 justify-center"><div class="w-2 h-2 rounded-full bg-gray-700 hover:bg-white transition-colors cursor-pointer" onmouseover="showAffirmation(0)"></div><div class="w-2 h-2 rounded-full bg-gray-700 hover:bg-white transition-colors cursor-pointer" onmouseover="showAffirmation(1)"></div><div class="w-2 h-2 rounded-full bg-gray-700 hover:bg-white transition-colors cursor-pointer" onmouseover="showAffirmation(2)"></div><div class="w-2 h-2 rounded-full bg-gray-700 hover:bg-white transition-colors cursor-pointer" onmouseover="showAffirmation(3)"></div></div></div>` },
    { id: 'phases', title: 'Phases', icon: '🌘', dock: true, width: 600, height: 450, content: `<div class="h-full bg-gray-50 p-8 grid grid-cols-1 divide-y divide-gray-200"><div class="flex items-center py-4 group hover:bg-white transition-colors px-4 rounded"><div class="w-12 text-2xl opacity-50">🌑</div><div><div class="text-sm font-bold text-gray-800">The Heavy Days</div><div class="text-xs text-gray-500 mt-1">When things were too much, but you stood.</div></div></div><div class="flex items-center py-4 group hover:bg-white transition-colors px-4 rounded"><div class="w-12 text-2xl opacity-50">🌓</div><div><div class="text-sm font-bold text-gray-800">The Silence</div><div class="text-xs text-gray-500 mt-1">When you kept it all inside. I saw you.</div></div></div><div class="flex items-center py-4 group hover:bg-white transition-colors px-4 rounded"><div class="w-12 text-2xl opacity-50">🌕</div><div><div class="text-sm font-bold text-gray-800">The Growth</div><div class="text-xs text-gray-500 mt-1">Where you are now. Stronger.</div></div></div></div>` },
    { id: 'music', title: 'Presence', icon: '🎵', dock: true, width: 400, height: 300, content: `<div class="h-full bg-white p-6 flex flex-col justify-center text-center"><p class="text-xs text-gray-400 mb-6 tracking-widest uppercase">Play this if you want</p><div class="space-y-3"><button onclick="playMusic('calm')" class="w-full py-3 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 rounded transition text-sm text-gray-600 flex items-center justify-between px-4"><span>Calm</span><i class="fas fa-play text-xs opacity-50"></i></button><button onclick="playMusic('strength')" class="w-full py-3 border border-gray-100 hover:bg-red-50 hover:border-red-200 rounded transition text-sm text-gray-600 flex items-center justify-between px-4"><span>Strength</span><i class="fas fa-play text-xs opacity-50"></i></button><button onclick="playMusic('hope')" class="w-full py-3 border border-gray-100 hover:bg-yellow-50 hover:border-yellow-200 rounded transition text-sm text-gray-600 flex items-center justify-between px-4"><span>Reflection</span><i class="fas fa-play text-xs opacity-50"></i></button></div></div>` },
    { id: 'future', title: 'Future', icon: '🌱', dock: true, width: 400, height: 400, content: `<div class="h-full bg-[#f8f9fa] p-8 flex items-center justify-center"><ul class="space-y-6 text-center"><li class="text-gray-700 font-serif">Take care of yourself.</li><li class="w-8 h-[1px] bg-gray-300 mx-auto"></li><li class="text-gray-700 font-serif">Take care of your family.</li><li class="w-8 h-[1px] bg-gray-300 mx-auto"></li><li class="text-gray-700 font-serif">You are allowed to rest.</li><li class="w-8 h-[1px] bg-gray-300 mx-auto"></li><li class="text-gray-700 font-serif">You are allowed to grow.</li></ul></div>` },
    { id: 'hidden-unlock', title: 'key.sys', icon: '🔒', dock: false, width: 300, height: 200, dark: true, content: `<div class="h-full bg-black text-gray-500 flex items-center justify-center text-center p-4"><div id="lock-msg"><div class="text-2xl mb-2">🔒</div><div class="text-xs">Explore the space first.</div><div class="text-[10px] mt-2 opacity-50">(Open all apps + Wait for time)</div></div><div id="unlock-msg" class="hidden animate-fade-in"><p class="text-white font-serif italic">"This space stays."</p><p class="text-xs mt-4 text-gray-400">Come back whenever you need quiet.</p></div></div>`, onOpen: checkUnlock },
    { id: 'trash', title: 'Trash', icon: '🗑️', dock: false, width: 200, height: 150, content: `<div class="p-4 text-center text-xs text-gray-400">Empty</div>` },

    /* --- FOLDERS & UTILITIES --- */
    { role: 'folder', id: 'system-folder', title: 'System', icon: '⚙️', dock: false, width: 500, height: 350, children: ['settings', 'hidden-unlock'] },
    { role: 'folder', id: 'games-folder', title: 'Games', icon: '🎮', dock: true, width: 600, height: 450, children: ['folder-arcade', 'folder-creative', 'folder-challenges', 'folder-puzzles', 'folder-tabletop'] },

    /* --- SETTINGS --- */
    {
        id: 'settings', title: 'System Preferences', icon: '⚙️', dock: false, width: 700, height: 500,
        content: `<div class="settings-container bg-[#f5f5f7]"><div class="settings-sidebar"><div class="settings-nav-item active">General</div></div><div class="settings-content custom-scroll"><div class="settings-section"><div class="settings-title">Appearance</div><div class="appearance-options"><div class="appearance-card active" onclick="setTheme('light', this)"><div class="theme-preview light"></div><div class="theme-label">Light</div></div><div class="appearance-card" onclick="setTheme('dark', this)"><div class="theme-preview dark"></div><div class="theme-label">Dark</div></div></div></div><div class="settings-section"><div class="settings-title">Accent Color</div><div class="accent-colors"><div class="accent-dot bg-blue-500 active" onclick="setAccent('#3b82f6', this)"></div><div class="accent-dot bg-purple-500" onclick="setAccent('#a855f7', this)"></div><div class="accent-dot bg-pink-500" onclick="setAccent('#ec4899', this)"></div><div class="accent-dot bg-green-500" onclick="setAccent('#22c55e', this)"></div><div class="accent-dot bg-orange-500" onclick="setAccent('#f97316', this)"></div></div></div><div class="settings-section"><div class="settings-title">Wallpaper</div><div class="wallpaper-grid" id="wp-grid"></div></div></div></div>`,
        onOpen: renderSettings
    },

    /* --- GAME CATEGORY FOLDERS --- */
    { role: 'folder', id: 'folder-arcade', title: 'Arcade', icon: '🕹️', dock: false, width: 600, height: 400, children: ['game-brick', 'game-bounce', 'game-bird', 'game-insect', 'game-dino', 'game-shoot', 'game-rabbit', 'game-snake'] },
    { role: 'folder', id: 'folder-creative', title: 'Creative', icon: '🎨', dock: false, width: 600, height: 400, children: ['game-draw', 'game-piano', 'game-board'] },
    { role: 'folder', id: 'folder-challenges', title: 'Challenges', icon: '🏆', dock: false, width: 600, height: 400, children: ['game-hangman', 'game-math', 'game-quiz', 'game-type'] },
    { role: 'folder', id: 'folder-puzzles', title: 'Puzzles', icon: '🧩', dock: false, width: 600, height: 400, children: ['game-2048', 'game-color', 'game-disney', 'game-guess', 'game-memory', 'game-puzzle', 'game-simon', 'game-sudoku'] },
    { role: 'folder', id: 'folder-tabletop', title: 'Tabletop', icon: '🎲', dock: false, width: 600, height: 400, children: ['game-blackjack', 'game-tictactoe-bot', 'game-chess', 'game-dice', 'game-bingo', 'game-rps', 'game-tictactoe', 'game-score'] },

    /* --- ARCADE GAMES --- */
    { id: 'game-brick', title: 'Brick Breaker', icon: '🧱', url: 'D:/games/Arcade/2D-break-breaker-master/index.html' },
    { id: 'game-bounce', title: 'Bounce It', icon: '🎾', url: 'D:/games/Arcade/bounce it back/index.html' },
    { id: 'game-bird', title: 'Clumsy Bird', icon: '🐦', url: 'D:/games/Arcade/clumsy-bird-master/index.html' },
    { id: 'game-insect', title: 'Insect Catch', icon: '🕸️', url: 'D:/games/Arcade/insect-catch-game/index.html' },
    { id: 'game-dino', title: 'Dino Jump', icon: '🦖', url: 'D:/games/Arcade/JAVASCRIPT GAME/index.html' },
    { id: 'game-shoot', title: 'Shooter', icon: '🔫', url: 'D:/games/Arcade/JS- Shooting Game/index.html' },
    { id: 'game-rabbit', title: 'Rabbit Race', icon: '🐇', url: 'D:/games/Arcade/Rabbit Race/index.html' },
    { id: 'game-snake', title: 'Snake', icon: '🐍', url: 'D:/games/Arcade/Snake-Game/index.html' },

    /* --- CREATIVE GAMES --- */
    { id: 'game-draw', title: 'Drawing App', icon: '✏️', url: 'D:/games/Creative/DrawingApp/index.html' },
    { id: 'game-piano', title: 'Piano', icon: '🎹', url: 'D:/games/Creative/Piano/index.html' },
    { id: 'game-board', title: 'Whiteboard', icon: '🖊️', url: 'D:/games/Creative/White-Board/index.html' },

    /* --- CHALLENGE GAMES --- */
    { id: 'game-hangman', title: 'Hangman', icon: '😵', url: 'D:/games/Challenges/Hangman-Game/index.html' },
    { id: 'game-math', title: 'Math Quiz', icon: '➗', url: 'D:/games/Challenges/Maths quiz game/index.html' },
    { id: 'game-quiz', title: 'General Quiz', icon: '❓', url: 'D:/games/Challenges/quiz-app/index.html' },
    { id: 'game-type', title: 'Typing Test', icon: '⌨️', url: 'D:/games/Challenges/Typing Speed Test Website/index.html' },

    /* --- PUZZLE GAMES --- */
    { id: 'game-2048', title: '2048', icon: '🔢', url: 'D:/games/Puzzles/2048-lite-master/index.html' },
    { id: 'game-color', title: 'Color Game', icon: '🎨', url: 'D:/games/Puzzles/Color Game/index.html' },
    { id: 'game-disney', title: 'Disney Char', icon: '🏰', url: 'D:/games/Puzzles/disney-character-game/index.html' },
    { id: 'game-guess', title: 'Guess Number', icon: '#️⃣', url: 'D:/games/Puzzles/GuessTheNumber/index.html' },
    { id: 'game-memory', title: 'Memory Cards', icon: '🃏', url: 'D:/games/Puzzles/Memory Card Game/index.html' },
    { id: 'game-puzzle', title: 'Puzzle', icon: '🧩', url: 'D:/games/Puzzles/puzzle-main/index.html' },
    { id: 'game-simon', title: 'Simon', icon: '🔴', url: 'D:/games/Puzzles/SimonGame/index.html' },
    { id: 'game-sudoku', title: 'Sudoku', icon: '9️⃣', url: 'D:/games/Puzzles/Sudoku solver/index.html' },

    /* --- TABLETOP GAMES --- */
    { id: 'game-blackjack', title: 'Blackjack', icon: '♠️', url: 'D:/games/Tabletop/Blackjack/index.html' },
    { id: 'game-tictactoe-bot', title: 'TicTacToe (Bot)', icon: '🤖', url: 'D:/games/Tabletop/bot-human-tictactoe/index.html' },
    { id: 'game-chess', title: 'Chess', icon: '♟️', url: 'D:/games/Tabletop/Grandmaster Chess Arena/index.html' },
    { id: 'game-dice', title: 'Dice Roll', icon: '🎲', url: 'D:/games/Tabletop/Dice Roll Simulator/index.html' },
    { id: 'game-bingo', title: 'Bingo', icon: '🅱️', url: 'D:/games/Tabletop/Picture Bingo Blast/index.html' },
    { id: 'game-rps', title: 'Rock Paper S.', icon: '✊', url: 'D:/games/Tabletop/RPS Battle Arena/index.html' },
    { id: 'game-tictactoe', title: 'TicTacToe', icon: '❌', url: 'D:/games/Tabletop/Tic-Tac-Toe Classic/index.html' },
    { id: 'game-score', title: 'Scorekeeper', icon: '📝', url: 'D:/games/Tools/Scorekeeper/Score_keeper.html' }
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
function startCountdownGatekeeper() {
    const cdScreen = document.getElementById('countdown-phase');
    const cdDisplay = document.getElementById('countdown-display');
    const cdSub = document.getElementById('countdown-sub');

    cdScreen.classList.remove('hidden');
    let count = 19;
    cdDisplay.classList.add('countdown-glow');
    cdSub.style.opacity = 1;

    const int = setInterval(() => {
        if (document.getElementById('desktop').style.display === 'block') { clearInterval(int); return; } // Stop if skipped
        count--;
        cdDisplay.innerText = count < 10 ? `0${count}` : count;
        if (count <= 0) {
            clearInterval(int);
            cdSub.innerText = "The wait is over.";
            setTimeout(() => {
                cdScreen.style.opacity = 0;
                setTimeout(() => {
                    cdScreen.style.display = 'none';
                    state.countdownFinished = true;
                    playJourneyIntro();
                }, 1500);
            }, 1000);
        }
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

        win.innerHTML = `<div class="title-bar" onmousedown="startDrag(event, '${win.id}')"><div class="traffic-lights"><div class="traffic-light close" onclick="closeApp('${id}')"></div></div><div class="text-xs text-center w-full absolute pt-1 pointer-events-none opacity-50 font-medium">${app.title}</div></div><div class="win-content custom-scroll" style="height: calc(100% - 30px);">${contentHTML}</div>`;
        document.getElementById('desktop').appendChild(win);
        if (app.onOpen) app.onOpen();
        const dot = document.getElementById(`dot-${id}`); if (dot) dot.parentElement.classList.add('active');
    }
};

function closeApp(id) { const win = document.getElementById(`win-${id}`); win.style.opacity = 0; setTimeout(() => win.remove(), 300); const dot = document.getElementById(`dot-${id}`); if (dot) dot.parentElement.classList.remove('active'); }
function showAffirmation(i) { const el = document.getElementById('aff-text'); if (el) { el.style.opacity = 0; setTimeout(() => { el.innerText = `"${affirmations[i]}"`; el.style.opacity = 1; }, 300); } }
function playMusic(m) { alert(`Playing ${m}`); }
function checkUnlock() { if (state.countdownFinished && state.appsOpened.size >= 5) { document.getElementById('lock-msg').style.display = 'none'; document.getElementById('unlock-msg').classList.remove('hidden'); } }
let dragItem = null, offX = 0, offY = 0;
function startDrag(e, id) { if (e.target.closest('.traffic-lights')) return; dragItem = document.getElementById(id); offX = e.clientX - dragItem.offsetLeft; offY = e.clientY - dragItem.offsetTop; dragItem.style.zIndex = ++zIndex; document.addEventListener('mousemove', doDrag); document.addEventListener('mouseup', stopDrag); }
function doDrag(e) { if (dragItem) { dragItem.style.left = (e.clientX - offX) + 'px'; dragItem.style.top = (e.clientY - offY) + 'px'; } }
function stopDrag() { dragItem = null; document.removeEventListener('mousemove', doDrag); document.removeEventListener('mouseup', stopDrag); }

window.onload = startCountdownGatekeeper;
