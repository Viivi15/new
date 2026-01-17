/* === CONFIGURATION === */
function updateClock() {
    try {
        const now = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const str = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${hours}:${minutes} ${ampm}`;
        const clock = document.getElementById('clock');
        if (clock) {
            clock.textContent = str;
        }
    } catch (e) { }
}
updateClock();








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

/* === JOURNEY DATA === */
const journeyData = [
    {
        chapter: 1,
        title: "The First Spark",
        subtitle: "Discord, Euros, and 12:21 AM",
        color: "#3b82f6",
        items: [
            { type: 'title', text: "Chapter 1: The First Spark" },
            { type: 'chat', speaker: 'System', text: "Connection Established: June 20, 2024 • 12:21 AM" },
            { type: 'scene', text: "It was a pleasant meeting. You talked about Euros and football tournaments. I found out you'd never watched cricket in your life!" },
            { type: 'chat', speaker: 'Harshit', text: "4 hours of sleep is enough, I've slept only 4 hours my whole life... (and then the brain tumor story 💀)" },
            { type: 'scene', text: "Next day: You woke up at 11, pinged a 'hated' girl by mistake, and shared some... choice words. 😂" }
        ]
    },
    {
        chapter: 2,
        title: "Building the Bridge",
        subtitle: "From Strangers to Admin Buddies",
        color: "#a855f7",
        items: [
            { type: 'title', text: "Chapter 2: Building the Bridge" },
            { type: 'scene', text: "Haryana, Sirsa. You got along with Kuro and we vibed with music. Playing Atlas while counting was fun!" },
            { type: 'chat', speaker: 'Shravii', text: "Aapne server ke growth me... sabme help kari <:cutu_twi_watching_cutu_queen_vi:1250504172323995739>" },
            { type: 'scene', text: "The first promise: Not to delete or hide things. I gave you Admin so you wouldn't get banned. Trust was building." }
        ]
    },
    {
        chapter: 3,
        title: "The Protector",
        subtitle: "Fighting Battles, Real & Digital",
        color: "#22c55e",
        items: [
            { type: 'title', text: "Chapter 3: The Protector" },
            { type: 'scene', text: "Mikey said something to me... I was overthinking, and you actually came and fought with him. It touched my heart. ❤️" },
            { type: 'chat', speaker: 'Harshit', text: "Good morning! (Sent at 3 AM so you'd see it when you wake up) ☀️" },
            { type: 'scene', text: "July 6: Your diagnosis for my self-doubt. 'You don't have to tell people what they want to hear.' It stayed with me." }
        ]
    },
    {
        chapter: 4,
        title: "Comfort & Rules",
        subtitle: "Becoming Comfy",
        color: "#f59e0b",
        items: [
            { type: 'title', text: "Chapter 4: Becoming Comfy" },
            { type: 'chat', speaker: 'Ota Rules', text: "Rule 1: Always listen to Ota. Rule 2: Don't hide anything from Ota. (Medicine for the soul) 💊" },
            { type: 'recipe', title: "Ota's Egg Fried Rice", items: ["1. Add oil to kadhai", "2. Garlic and onion vgera", "3. Add eggs", "4. Rice + Masale", "5. Spring onion + Chilli", "6. Eat! 🍳"] }
        ]
    },
    {
        chapter: 5,
        title: "11:59 AM",
        subtitle: "The Birthday Math",
        color: "#3b82f6",
        items: [
            { type: 'title', text: "Chapter 5: 11:59 AM" },
            { type: 'scene', text: "You tried to send 'Happy Birthday' letter-by-letter to end at 12:00... but your math failed and it ended at 11:59! 🎈" },
            { type: 'poem', text: "Happiest Birthday Vi, so bright,\nMay success and dreams take endless flight.\nWith each sunrise, may you find anew,\nThe joy and wonders waiting for you." },
            { type: 'chat', speaker: 'Harshit', text: "Thankyou sm aapki vajah s hi me dc chalata hu and khush hota hu. ❤️" }
        ]
    }
];


/* === STATE === */
const state = { appsOpened: new Set(), countdownFinished: false };

/* === RABBIT SQUAD APP LOGIC === */
const RabbitSquad = {
    rabbits: [],
    bounds: { w: 600, h: 500 },

    init() {
        const den = document.getElementById('rabbit-den');
        if (!den) return;
        this.bounds.w = den.offsetWidth;
        this.bounds.h = den.offsetHeight;
        this.assemble();
    },

    createRabbit(type) {
        const field = document.getElementById('rabbit-field');
        if (!field) return;

        const el = document.createElement('div');
        el.className = 'bun-item ' + type.cls;
        el.innerHTML = '<div class="text-4xl dropdown-shadow-md">' + type.emoji + '</div><div class="bun-msg">' + type.msg + '</div>';

        // Random Pos (keep away from edges)
        const x = Math.random() * (this.bounds.w - 100) + 20;
        const y = Math.random() * (this.bounds.h - 150) + 80;

        el.style.left = x + 'px';
        el.style.top = y + 'px';

        // Click Interaction
        el.onclick = () => {
            el.classList.add('talking');
            if (type.action) type.action(el);
            setTimeout(() => el.classList.remove('talking'), 2000);
        };

        // Animate Loop
        const speed = Math.random() * 2000 + 2000;
        const moveInt = setInterval(() => {
            const nx = Math.random() * (this.bounds.w - 100) + 20;
            const ny = Math.random() * (this.bounds.h - 150) + 80;
            el.style.left = nx + 'px';
            el.style.top = ny + 'px';
        }, speed);

        field.appendChild(el);
        this.rabbits.push({ el, type, moveInt });
    },

    assemble() {
        this.clear();
        const types = [
            {
                id: 'madrid', emoji: '🐰⚽', cls: 'bun-madrid', msg: 'Hala Madrid!', action: (e) => {
                    if (typeof confetti === 'function') confetti({ particleCount: 20, spread: 30, origin: { x: e.getBoundingClientRect().left / window.innerWidth, y: e.getBoundingClientRect().top / window.innerHeight } });
                }
            },
            { id: 'cozy', emoji: '🐰🧥', cls: 'bun-cozy', msg: 'So comfy...', action: () => { } },
            { id: 'snow', emoji: '🐰❄️', cls: 'bun-snow', msg: 'Stay cool.', action: () => { } },
            {
                id: 'love', emoji: '🐰🎀', cls: 'bun-love', msg: 'You are loved!', action: (e) => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '❤️';
                    heart.style.position = 'absolute';
                    heart.style.left = '50%';
                    heart.style.top = '-20px';
                    heart.style.fontSize = '20px';
                    heart.style.animation = 'floatUp 1s forwards';
                    e.appendChild(heart);
                    setTimeout(() => heart.remove(), 1000);
                }
            }
        ];

        types.forEach(t => this.createRabbit(t));
    },

    celebrate() {
        this.rabbits.forEach(r => {
            if (r.type.id === 'madrid') {
                r.el.innerHTML = '<div class="text-5xl dropdown-shadow-md">⚽🥅</div><div class="bun-msg">SIUUU!</div>';
                r.el.classList.add('talking');

                // Audio check
                const sfx = document.getElementById('madrid-siuuu');
                if (sfx) sfx.play().catch(e => console.log(e));

                setTimeout(() => {
                    r.el.innerHTML = '<div class="text-4xl dropdown-shadow-md">🐰⚽</div><div class="bun-msg">Hala Madrid!</div>';
                    r.el.classList.remove('talking');
                }, 3000);
            }
        });
    },

    napTime() {
        this.rabbits.forEach(r => {
            clearInterval(r.moveInt);
            r.el.innerHTML = '<div class="text-4xl dropdown-shadow-md">🐰💤</div>';
        });
    },

    clear() {
        const field = document.getElementById('rabbit-field');
        if (field) field.innerHTML = '';
        this.rabbits.forEach(r => clearInterval(r.moveInt));
        this.rabbits = [];
    }
};

/* === MASTI MODE (Mocha & Bear) === */
const MastiMode = {
    chars: [],
    bounds: { w: 300, h: 200 },

    init() {
        const den = document.getElementById('masti-den');
        if (!den) return;
        this.bounds.w = den.offsetWidth;
        this.bounds.h = den.offsetHeight;
        this.spawn();
    },

    spawn() {
        const den = document.getElementById('masti-den');
        if (!den) return;
        den.innerHTML = '<div id="masti-msg" class="absolute top-10 w-full text-center text-xs font-bold text-pink-600 opacity-0 transition-opacity"></div>'; // clear & add msg layer

        // Bear (Brown)
        const bear = this.createChar('🐻', 'bun-bear', 60, 100);
        // Mocha (White)
        const mocha = this.createChar('🐻‍❄️', 'bun-mocha', 180, 100);

        den.appendChild(bear.el);
        den.appendChild(mocha.el);
        this.chars = [bear, mocha];
    },

    createChar(emoji, cls, x, y) {
        const el = document.createElement('div');
        el.className = 'absolute text-5xl cursor-pointer transition-transform duration-300 select-none ' + cls;
        el.innerText = emoji;
        el.style.left = x + 'px';
        el.style.top = y + 'px';

        // Simple bounce
        let dy = 0;
        let yPos = y;
        const int = setInterval(() => {
            yPos += Math.sin(Date.now() / 300) * 0.5;
            el.style.top = yPos + 'px';
        }, 50);

        return { el, x, y, int };
    },

    dance() {
        this.showMsg("🎶 Vibing 🎶");
        this.chars.forEach(c => {
            c.el.classList.add('animate-bounce');
            setTimeout(() => c.el.classList.remove('animate-bounce'), 2000);
        });
    },

    pinch() {
        this.showMsg("🤏 Cheeks Pinched!");
        // Move Mocha to Bear
        const bear = this.chars[0];
        const mocha = this.chars[1];

        mocha.el.style.transform = 'translateX(-60px)'; // Move Left
        setTimeout(() => {
            mocha.el.style.transform = 'translateX(0)';
            this.showMsg("♥️");
        }, 1000);
    },

    feed() {
        const den = document.getElementById('masti-den');
        this.showMsg("☕ Coffee & Cookies 🍪");

        // Spawn treats
        for (let i = 0; i < 6; i++) {
            const t = document.createElement('div');
            t.innerText = i % 2 === 0 ? '☕' : '🍪';
            t.className = 'absolute text-xl animate-bounce';
            t.style.left = Math.random() * 250 + 'px';
            t.style.top = '-20px';
            t.style.transition = 'top 1s';
            den.appendChild(t);

            setTimeout(() => {
                t.style.top = Math.random() * 150 + 50 + 'px';
            }, 50);

            setTimeout(() => t.remove(), 2000);
        }
    },

    showMsg(txt) {
        const m = document.getElementById('masti-msg');
        if (m) {
            m.innerText = txt;
            m.style.opacity = 1;
            setTimeout(() => m.style.opacity = 0, 1500);
        }
    }
};

/* === MR. SNOW APP LOGIC === */
function initMrSnowApp() {
    const canvas = document.getElementById('snow-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;

    let width, height;
    let particles = [];
    let mouse = { x: -200, y: -200 };

    function resize() {
        width = canvas.width = container.offsetWidth;
        height = canvas.height = container.offsetHeight;
    }

    function createParticles() {
        particles = [];
        const count = 60;
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 3 + 1,
                d: Math.random() * 6.28,
                v: Math.random() * 0.5 + 0.2
            });
        }
    }

    function draw() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.beginPath();
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }

    function update() {
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.y += p.v;
            p.x += Math.sin(p.d) * 0.3;
            p.d += 0.01;

            // Mouse Interaction: Drift away from cursor
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80) {
                p.x += dx / 15;
                p.y += dy / 15;
            }

            if (p.y > height) {
                p.y = -10;
                p.x = Math.random() * width;
            }
            if (p.x > width) p.x = 0;
            if (p.x < 0) p.x = width;
        }
    }

    function animate() {
        const win = document.getElementById('win-mr-snow');
        if (!win || win.style.display === 'none') return;
        draw();
        requestAnimationFrame(animate);
    }

    container.onmousemove = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    container.onmouseleave = () => {
        mouse.x = -200;
        mouse.y = -200;
    };

    window.addEventListener('resize', resize);
    resize();
    createParticles();
    animate();
}

const mrSnowQuotes = [
    "You stay kind, even when things get heavy.",
    "The world is loud, but your peace is real.",
    "Quiet strength is still strength.",
    "Soft when trusted, calm on the surface.",
    "You carry storms quietly, and that's okay.",
    "You are the best kind of chaos.",
    "Mr. Snow is chilling, and you should too."
];

function mrSnowComfort() {
    const el = document.getElementById('comfort-msg');
    if (!el) return;
    const quote = mrSnowQuotes[Math.floor(Math.random() * mrSnowQuotes.length)];
    el.innerText = '\"' + quote + '\"';
    el.classList.add('active');
    setTimeout(() => el.classList.remove('active'), 4000);
}

function mrSnowFlurry() {
    if (typeof confetti === 'function') {
        const end = Date.now() + (1.5 * 1000);
        const colors = ['#ffffff', '#e0f2fe', '#bae6fd'];

        (function frame() {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 55,
                origin: { x: 0.1, y: 0.7 },
                colors: colors
            });
            confetti({
                particleCount: 4,
                angle: 120,
                spread: 55,
                origin: { x: 0.9, y: 0.7 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
}

/* === APP REGISTRY (Refined for Harshit) === */
const apps = [
    /* === FOLDERS === */
    {
        id: 'folder-system', title: 'System Core', icon: '📁', dock: false, width: 800, height: 600, content: `
        <div class="h-full bg-gradient-to-b from-gray-50 to-white p-6 overflow-y-auto custom-scroll">
            <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Root Directory</div>
            <div class="folder-window-grid">
                <div class="win-icon group" onclick="Apps.open('first-conversation')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md">💬</div>
                    <div class="icon-label group-hover:text-blue-600 transition-colors">12:21 AM</div>
                </div>
                <div class="win-icon group" onclick="Apps.open('connection-log')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md">📜</div>
                    <div class="icon-label group-hover:text-amber-600 transition-colors">Connection.log</div>
                </div>
                <div class="win-icon group" onclick="Apps.open('mr-snow')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md">❄️</div>
                    <div class="icon-label group-hover:text-cyan-600 transition-colors">Mr. Snow</div>
                </div>
                <div class="win-icon group" onclick="Apps.open('facts')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md">📄</div>
                    <div class="icon-label group-hover:text-indigo-600 transition-colors">Harshit<br>Facts.txt</div>
                </div>
                 <div class="win-icon group" onclick="Apps.open('not-dumb')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md">🤨</div>
                    <div class="icon-label group-hover:text-pink-600 transition-colors">Not Dumb</div>
                </div>
                <div class="win-icon group" onclick="Apps.open('madrid')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md">⚽</div>
                    <div class="icon-label group-hover:text-indigo-700 transition-colors">HalaMadrid.exe</div>
                </div>
                <div class="win-icon group" onclick="Apps.open('app-grown')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md">🧠</div>
                    <div class="icon-label group-hover:text-purple-600 transition-colors">19.exe</div>
                </div>
                <div class="win-icon group" onclick="Apps.open('blueprint')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md">📐</div>
                    <div class="icon-label group-hover:text-blue-500 transition-colors">Blueprint</div>
                </div>
                 <div class="win-icon group" onclick="Apps.open('terminal-app')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md">💻</div>
                    <div class="icon-label group-hover:text-emerald-500 transition-colors">Terminal.sh</div>
                </div>
            </div>
            <div class="w-full text-center text-[10px] text-gray-300 mt-8 uppercase tracking-widest font-mono">System Core • v19.0</div>
        </div>
    `},

    {
        id: 'folder-feelings', title: 'Soft Stuff', icon: '📁', dock: false, width: 800, height: 600, content: `
        <div class="folder-window-grid">
            <div class="win-icon" onclick="Apps.open('why-matter')"><div class="icon-img">💭</div><div class="icon-label">Why You<br>Matter</div></div>
            <div class="win-icon" onclick="Apps.open('tired')"><div class="icon-img">😴</div><div class="icon-label">When Tired</div></div>


            <div class="win-icon" onclick="Apps.open('music-night')"><div class="icon-img">🌙</div><div class="icon-label">Late Night</div></div>
             <div class="win-icon" onclick="Apps.open('future')"><div class="icon-img">🔮</div><div class="icon-label">Future You</div></div>
             <div class="win-icon" onclick="Apps.open('thank-you')"><div class="icon-img">✨</div><div class="icon-label">Thank You</div></div>
             <div class="win-icon" onclick="Apps.open('inkpot')"><div class="icon-img">🖋️</div><div class="icon-label">The Inkpot</div></div>
             <div class="win-icon" onclick="Apps.open('last-thing')"><div class="icon-img">🖤</div><div class="icon-label">One Last<br>Thing</div></div>
             <div class="win-icon" onclick="Apps.open('admire')"><div class="icon-img">🌟</div><div class="icon-label">Deep<br>Truths</div></div>
        </div>
    `},

    {
        id: 'folder-fun', title: 'Unstable Features', icon: '📁', dock: false, width: 800, height: 600, content: `
        <div class="folder-window-grid">
            <div class="win-icon" onclick="Apps.open('flash')"><div class="icon-img">⚡</div><div class="icon-label">Fastest<br>Alive</div></div>
             <div class="win-icon" onclick="Apps.open('rabbit')"><div class="icon-img">🐰</div><div class="icon-label">Rabbit<br>Mode</div></div>
            <div class="win-icon" onclick="Apps.open('rabbit-runner')"><div class="icon-img">🐰</div><div class="icon-label">Rabbit<br>Runner</div></div>
            <div class="win-icon" onclick="Apps.open('word-spiral')"><div class="icon-img">🌀</div><div class="icon-label">Word Spiral</div></div>
            <div class="win-icon" onclick="Apps.open('the-path')"><div class="icon-img">🧭</div><div class="icon-label">The Path</div></div>
            <div class="win-icon" onclick="Apps.open('personality-quiz')"><div class="icon-img">🔍</div><div class="icon-label">Who Are You?</div></div>
             <div class="win-icon" onclick="Apps.open('radio-harshit')"><div class="icon-img">📻</div><div class="icon-label">Radio<br>Harshit</div></div>
            <div class="win-icon" onclick="Apps.open('quiz')"><div class="icon-img">🧩</div><div class="icon-label">The Us Quiz</div></div>

            <div class="win-icon" onclick="Apps.open('bear')"><div class="icon-img">🐻</div><div class="icon-label">Masti Mode</div></div>
            <div class="win-icon" onclick="Apps.open('spotify')"><div class="icon-img">🎵</div><div class="icon-label">Vibe Check</div></div>
        </div>
    `},

    {
        id: 'app-vault', title: 'Vault', icon: '🔐', dock: true, width: 700, height: 500, content: `
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
        id: 'terminal-app', title: 'Terminal.sh', icon: '💻', dock: false, folder: 'folder-system', width: 800, height: 600, content: `
        <div class="terminal-window h-full bg-[#1e1e1e] text-green-500 font-mono text-sm p-4 flex flex-col">
            <div id="term-output-app" class="flex-1 overflow-y-auto mb-2 custom-scroll space-y-1">
                <div class="selection-none" style="text-shadow: 0 0 5px rgba(74, 222, 128, 0.5);">HarshitOS Terminal [Version 1.0.0]</div>
                <div class="opacity-70">(c) 2024 System Core. All rights reserved.</div>
                <br>
                <div class="animate-pulse">Type 'help' for available commands.</div>
                <div class="text-xs text-gray-500 mt-2">Server Status: <span class="text-green-400">ONLINE</span></div>
                <br>
            </div>
            <div class="flex items-center gap-2 border-t border-gray-700 pt-2">
                <span class="text-green-500 font-bold shrink-0">root@harshit:~$</span>
                <input type="text" id="term-input-app" class="bg-transparent border-none outline-none text-white w-full font-mono placeholder-gray-600" autocomplete="off" autofocus onkeydown="if(event.key === 'Enter') handleTerminalAppCommand()">
            </div>
        </div>
    `,
        onOpen: () => {
            setTimeout(() => document.getElementById('term-input-app')?.focus(), 100);
        }
    },
    {
        id: 'first-conversation', title: '12:21 AM', icon: '💬', dock: false, folder: 'folder-system', width: 600, height: 600, content: `
        <div class="flex flex-col h-full bg-[#f8f9fa] relative">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px;"></div>
            
            <div class="px-4 py-3 border-b border-gray-200/50 flex justify-between items-center bg-white/50 backdrop-blur-sm z-10 sticky top-0">
                <div class="flex items-center gap-3">
                    <div id="shravii-status-dot" class="status-dot w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    <div class="flex flex-col">
                        <span class="text-xs font-bold text-gray-700">June 20, 2024</span>
                        <span class="text-[9px] uppercase tracking-wider text-gray-400 font-medium">Chat Log #001</span>
                    </div>
                </div>
                <button onclick="toggleChatTheme()" class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded-full transition font-medium border border-slate-200">🌙 Theme</button>
            </div>
            
            <div class="chat-container flex-1 relative z-0 custom-scroll pt-4" id="chatReplay"></div>
        </div>
        `,
        onOpen() {
            const el = document.getElementById('chatReplay');
            if (el) playFirstConversation(el);
        }
    },

    {
        id: 'connection-log', title: 'Our Journey', icon: '📜', dock: true, folder: 'folder-system', width: 600, height: 800, onOpen: renderJourney, content: `
        <div id="journey-scroll" class="h-full bg-[#fcfcfc] overflow-y-auto scroll-smooth relative">
            <div id="journey-container" class="min-h-full pb-20"></div>
        </div>
    `},

    {
        id: 'mr-snow', title: 'Mr. Snow', icon: '❄️', dock: true, width: 450, height: 600, onOpen: initMrSnowApp, content: `
        <div class="mr-snow-view relative h-full">
            <canvas id="snow-canvas" class="absolute inset-0 z-0"></canvas>
            
            <div class="relative z-10 h-full flex flex-col items-center justify-center p-8 pointer-events-none">
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl max-w-sm pointer-events-auto transform transition hover:scale-105 duration-700">
                    <h3 class="mr-snow-title text-3xl font-serif text-white mb-6 text-center drop-shadow-md">The Nature</h3>
                    <div class="mr-snow-text text-white/90 font-serif leading-relaxed text-center text-sm space-y-4">
                        <p>In the hush of winter, he found himself.<br>He kept the name, held close to Rain.<br>Silent, steady, he learned to remain.</p>
                        <p>Gentle enough to hold the fall,<br>strong enough to stay through all.</p>
                        <div class="w-12 h-[1px] bg-white/30 mx-auto my-4"></div>
                        <p class="italic text-white/70 text-xs">Mr. Snow — known by those<br>who stay to see it fall.</p>
                    </div>
                    
                    <div class="mr-snow-controls mt-8 flex justify-center gap-3">
                        <button class="snow-btn px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-xs text-white uppercase tracking-wider backdrop-blur-sm border border-white/10 transition" onclick="mrSnowComfort()">Comfort</button>
                        <button class="snow-btn px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-xs text-white uppercase tracking-wider backdrop-blur-sm border border-white/10 transition" onclick="mrSnowFlurry()">Flurry</button>
                    </div>
                </div>
                <div id="comfort-msg" class="mt-8 text-white/90 text-lg font-serif italic drop-shadow-lg transition-opacity duration-1000 opacity-0 bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10"></div>
            </div>
        </div>
    `},

    {
        id: 'why-matter', title: 'Why You Matter', icon: '💭', dock: false, width: 700, height: 500, content: `
        <div class="h-full bg-gradient-to-br from-rose-50 via-white to-teal-50 p-12 flex flex-col items-center justify-center text-center cursor-pointer relative overflow-hidden" onclick="nextWhy()">
             <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-200 to-transparent opacity-50"></div>
            
            <div class="absolute top-6 left-0 w-full text-center z-10">
                <div class="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">System Log</div>
                <div class="text-[10px] text-gray-400/80 italic font-medium">Realizations compiled over time.</div>
            </div>

            <div class="relative z-10">
                <span class="text-6xl text-rose-100 absolute -top-8 -left-4 font-serif -z-10 opacity-50">“</span>
                <div id="why-text" class="text-2xl font-serif text-slate-700 leading-relaxed transition-opacity duration-500 drop-shadow-sm">
                    You show up,<br>even when tired.
                </div>
            </div>
            
            <div class="absolute bottom-6 flex flex-col items-center gap-2">
                <div class="w-[1px] h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
                <div class="text-[10px] text-slate-400 uppercase tracking-widest animate-pulse font-medium">Click to continue</div>
            </div>
        </div>
    `},



    {
        id: 'admire', title: 'Deep Truths', icon: '🌟', dock: false, width: 900, height: 650, content: `
        <div class="truth-container h-full p-8 flex flex-col relative overflow-hidden">
            <!-- Background Elements -->
             <div class="absolute top-[-50%] left-[-20%] w-[150%] h-[150%] bg-gradient-to-br from-slate-900 via-slate-800 to-black -z-20"></div>
             <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
             <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div class="relative z-10 mb-8 border-b border-white/10 pb-4">
                <h3 class="font-serif text-3xl text-white/90 tracking-wider">Verified Core Data</h3>
                 <div class="text-[10px] text-emerald-400 uppercase tracking-[0.3em] mt-1 flex items-center gap-2">
                    <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> System Integrity: 100%
                </div>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 z-10 overflow-y-auto custom-scroll pr-2 pb-4">
                <!-- Card 1: Honesty -->
                <div class="truth-card group" onclick="toggleTruth(this)">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="truth-icon text-3xl filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">💎</div>
                        <div class="truth-header">
                            <div class="font-bold text-white text-lg">Honesty</div>
                            <div class="text-[10px] text-blue-300 uppercase tracking-widest">Status: Rare</div>
                        </div>
                    </div>
                    <div class="truth-details">
                        <p>In a world of filters, you remain unfiltered. Your words carry a weight because they are real. It is a rare and terrifyingly beautiful trait.</p>
                    </div>
                </div>
                
                <!-- Card 2: Quiet Protection -->
                <div class="truth-card group" onclick="toggleTruth(this)">
                     <div class="flex items-center gap-4 mb-2">
                        <div class="truth-icon text-3xl filter drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">🛡️</div>
                        <div class="truth-header">
                            <div class="font-bold text-white text-lg">Quiet Protection</div>
                            <div class="text-[10px] text-emerald-300 uppercase tracking-widest">Type: Passive-Active</div>
                        </div>
                    </div>
                     <div class="truth-details">
                        <p>You protect people without ever asking for credit. You stand guard in the shadows, ensuring safety while everyone else sleeps. A silent guardian.</p>
                    </div>
                </div>

                <!-- Card 3: Persistence -->
                <div class="truth-card group" onclick="toggleTruth(this)">
                     <div class="flex items-center gap-4 mb-2">
                        <div class="truth-icon text-3xl filter drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">🔥</div>
                        <div class="truth-header">
                            <div class="font-bold text-white text-lg">Persistence</div>
                            <div class="text-[10px] text-orange-300 uppercase tracking-widest">Energy: Infinite</div>
                        </div>
                    </div>
                     <div class="truth-details">
                        <p>You have every reason to stop, to rest, to give up. But you don't. You keep moving, fueled by an inner fire that refuses to be extinguished.</p>
                    </div>
                </div>

                <!-- Card 4: Memory -->
                <div class="truth-card group" onclick="toggleTruth(this)">
                     <div class="flex items-center gap-4 mb-2">
                        <div class="truth-icon text-3xl filter drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">🧠</div>
                        <div class="truth-header">
                            <div class="font-bold text-white text-lg">Memory</div>
                            <div class="text-[10px] text-purple-300 uppercase tracking-widest">Accuracy: High</div>
                        </div>
                    </div>
                     <div class="truth-details">
                        <p>You remember the small things. The passing comments, the hidden meanings, the dates. It shows how deeply you pay attention to the world.</p>
                    </div>
                </div>
                
                 <!-- Card 5: Empathy (New) -->
                <div class="truth-card group" onclick="toggleTruth(this)">
                     <div class="flex items-center gap-4 mb-2">
                        <div class="truth-icon text-3xl filter drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]">💓</div>
                        <div class="truth-header">
                            <div class="font-bold text-white text-lg">Flowing Heart</div>
                            <div class="text-[10px] text-rose-300 uppercase tracking-widest">State: Hidden/Active</div>
                        </div>
                    </div>
                     <div class="truth-details">
                        <p>Behind the logic and the rules, there is a heart that feels everything intensely. You care so much, it sometimes overflows.</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-auto border-t border-white/5 pt-4 flex justify-between items-end">
                <div class="text-[9px] text-slate-500 font-mono">
                    ID: 847-HK-TRUE<br>
                    CLR: TOP SECRET
                </div>
                 <div class="text-xs text-slate-400 tracking-widest uppercase opacity-70 animate-pulse">Access Granted</div>
            </div>
        </div >
    <script>
        function toggleTruth(card) {
            // Close others
            document.querySelectorAll('.truth-card.active').forEach(c => {
                if (c !== card) c.classList.remove('active');
            });
        card.classList.toggle('active');
            }
    </script>
    `},

    /* CLUSTER 2: FUN / MASTI (Lightweight) */
    {
        id: 'facts', title: 'Harshit Facts.txt', icon: '📄', folder: 'system', dock: false, width: 800, height: 700, content: `
        <div class="facts-app custom-scroll" id="facts-app-root">
            <!-- Section 0: Terminal Entry -->
            <div class="facts-terminal" id="facts-terminal">
                <div class="facts-log-line" style="animation-delay: 0.2s">> Accessing system logs...</div>
                <div class="facts-log-line" style="animation-delay: 0.8s">> User: Harshit</div>
                <div class="facts-log-line" style="animation-delay: 1.4s">> Clearance: Granted</div>
                <div class="facts-log-line" style="animation-delay: 2.0s; color: #fbbf24;">> Warning: Some files marked "Do Not Reveal"</div>
                <button class="facts-enter-btn" onclick="startFactsApp()" style="opacity: 0; animation: factsFadeIn 0.5s forwards; animation-delay: 2.8s;">ENTER FACTS</button>
            </div>

            <!-- Main Content -->
            <div class="facts-content" id="facts-main-content">
                
                <!-- SECTION 1: CORE SYSTEM STATS -->
                <div class="facts-section" id="section-1">
                    <div class="facts-section-title">SECTION 1: CORE SYSTEM STATS 🧬</div>
                    <div class="facts-grid">
                        <div class="facts-card">
                            <h4>Comfort Preference</h4>
                            <div class="fact-val">Needs hoodie > people</div>
                            <div class="sys-note">System confirms higher comfort in familiar warmth than social noise.</div>
                        </div>
                        <div class="facts-card">
                            <h4>Stealth Mode</h4>
                            <div class="fact-val">Eats silently</div>
                            <div class="sys-note">No sound detected. No witnesses.</div>
                        </div>
                        <div class="facts-card">
                            <h4>Emotional Mask</h4>
                            <div class="fact-val">Pretends not to care — FAILED</div>
                            <div class="sys-note" style="color: #ef4444;">System error: He cares. A lot.</div>
                        </div>
                        <div class="facts-card">
                            <h4>Molecular Breakdown</h4>
                            <div class="fact-val">90% Water · 10% Attitude</div>
                            <div class="sys-note">Stable composition. Occasional emotional overflow.</div>
                        </div>
                        <div class="facts-card" style="border-style: dashed; opacity: 0.8;">
                            <h4>Classified File</h4>
                            <div class="fact-val">Actually soft</div>
                            <div class="sys-note">Access denied. (But visible to trusted user.)</div>
                        </div>
                    </div>
                </div>

                <!-- SECTION 2: DEEP TRUTHS -->
                <div class="facts-section" id="section-2">
                    <div class="facts-section-title">SECTION 2: DEEP TRUTHS 🌟</div>
                    <div class="facts-truth-list">
                        <div class="facts-truth-item">
                            <span>Status: Rare</span>
                            <h3>Honesty</h3>
                            <p>System flags this as a non-replaceable trait. Genuine and unfiltered.</p>
                        </div>
                        <div class="facts-truth-item">
                            <span>Observed Behavior</span>
                            <h3>Quiet Protection</h3>
                            <p>Protects without announcing. No credit taken. No noise made. Just there.</p>
                        </div>
                        <div class="facts-truth-item">
                            <span>Status: Ongoing</span>
                            <h3>Persistence</h3>
                            <p>Keeps moving even when tired, hurt, or doubting. Built for endurance.</p>
                        </div>
                        <div class="facts-truth-item">
                            <span>Warning: Scary Accuracy</span>
                            <h3>Memory Module</h3>
                            <p>Remembers tiny details others forget. Every word, every moment is logged.</p>
                        </div>
                    </div>
                </div>

                <!-- SECTION 3: IDENTITY ALIASES -->
                <div class="facts-section" id="section-3">
                    <div class="facts-section-title">SECTION 3: IDENTITY ALIASES 🎭</div>
                    <div class="facts-alias-slider">
                        <div class="facts-alias-card">
                            <div class="facts-alias-icon">❄️</div>
                            <h3>Mr. Snow</h3>
                            <p>Calm surface. Deep emotional layers underneath. Known by those who stay to see it fall.</p>
                        </div>
                        <div class="facts-alias-card">
                            <div class="facts-alias-icon">🐭</div>
                            <h3>Mr. Chuha</h3>
                            <p>Soft. Cute. Unintentionally endearing. A personality prone to hiding but needing warmth.</p>
                        </div>
                        <div class="facts-alias-card">
                            <div class="facts-alias-icon">🎮</div>
                            <h3>Mr. Ota</h3>
                            <p>Teasing. Playful. Built entirely from inside jokes and shared laughter.</p>
                        </div>
                        <div class="facts-alias-card">
                            <div class="facts-alias-icon">🐰</div>
                            <h3>Rabbit</h3>
                            <p>Gentle. Alert. Emotionally sensitive but incredibly strong when protected.</p>
                        </div>
                    </div>
                </div>

                <!-- SECTION 4: JOURNEY LOGS -->
                <div class="facts-section" id="section-4">
                    <div class="facts-section-title">SECTION 4: JOURNEY & LOG FACTS 📜</div>
                    <div class="facts-timeline">
                        <div class="facts-log-item">
                            <div class="facts-log-date">June 20, 2024 · 12:21 AM</div>
                            <div class="facts-log-title">Connection Established</div>
                            <div class="facts-log-desc">Discord. First hello. System marks this as a critical event in history.</div>
                        </div>
                        <div class="facts-log-item">
                            <div class="facts-log-date">DAILY STATUS</div>
                            <div class="facts-log-title">The 4-Hour Rule</div>
                            <div class="facts-log-desc">Claim: "4 hours is enough."<br>Reality: System unsure how he’s still functioning. Sleep debt high.</div>
                        </div>
                        <div class="facts-log-item">
                            <div class="facts-log-date">LOG ANOMALY</div>
                            <div class="facts-log-title">Real Madrid Ultra</div>
                            <div class="facts-log-desc">Passion Level: 110%.<br>Observed anomaly: Missed matches detected.</div>
                            <div class="log-anomaly">REASON: Talking to Her.</div>
                        </div>
                        <div class="facts-log-item">
                            <div class="facts-log-date">SYSTEM QUIRK</div>
                            <div class="facts-log-title">Sports Paradox</div>
                            <div class="facts-log-desc">Can analyze football strategies for hours. Has never watched a single cricket match. Confusing logic.</div>
                        </div>
                    </div>
                </div>

                <!-- SECTION 5: SYSTEM NOTE -->
                <div class="facts-footer-note">
                    <span class="sys-obs">System Observation</span>
                    <blockquote>
                        "Harshit is not loud. Not dramatic. Not careless.<br><br>
                        But once he chooses someone,<br>the system never forgets them."
                    </blockquote>
                </div>

            </div>
        </div>
    `},

    // Internal filename: emotionally_dumb_but_lovable.js
    {
        id: 'not-dumb', title: 'Not Dumb', icon: '🤨', folder: 'system', dock: false, width: 600, height: 700, onOpen: initNotDumb, content: `
        <div id="not-dumb-container" class="h-full bg-gray-50 text-gray-800 font-mono text-sm relative overflow-hidden flex flex-col">
            <!-- Dynamic Content Area -->
            <div id="not-dumb-content" class="flex-1 p-8 flex flex-col justify-center relative z-10">
                <!-- Content injected via JS -->
            </div>

            <!-- Global Watermark -->
            <div class="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                <div class="text-[200px] grayscale rotate-12">🤨</div>
            </div>

            <!-- Navigation (Hidden initially) -->
            <div id="not-dumb-nav" class="p-4 flex justify-end opacity-0 transition duration-500 relative z-20">
                <button onclick="nextNotDumbSlide()" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-xs font-bold uppercase tracking-wider transition">Next ➜</button>
            </div>
        </div>
    `},

    {
        id: 'madrid', title: 'HalaMadrid.exe', icon: '⚽', dock: false, width: 600, height: 700, content: `
        <div class="madrid-dashboard custom-scroll" id="madrid-dash">
            <div class="madrid-header">
                <div class="madrid-title">
                    <span id="madrid-logo-icon">⚽</span> <span id="madrid-head-text">HALAMADRID DASHBOARD</span>
                </div>
                <div class="flex items-center gap-2">
                    <div class="theme-toggle" onclick="toggleUCLMode()" title="Toggle UCL Mode">🏆</div>
                    <div class="madrid-status" id="madrid-tier">Ultra Tier</div>
                </div>
            </div>
            
            <div class="madrid-scroll-area">
                <div class="madrid-grid">
                    <div class="madrid-card">
                        <div class="card-label">Passion Level</div>
                        <div class="card-value">110%</div>
                        <div class="passion-meter">
                            <div id="passion-fill" class="passion-fill"></div>
                        </div>
                    </div>
                    <div class="madrid-card">
                        <div class="card-label">Status</div>
                        <div class="card-value">No Ceiling</div>
                    </div>
                </div>

                <div class="loyalty-section">
                    <div class="loyalty-title">System Analysis: Priority Check</div>
                    <div class="graph-container">
                        <div class="graph-bar active" style="height: 100%;">
                            <div class="graph-label">Football</div>
                        </div>
                        <div class="graph-bar special" style="height: 110%;">
                            <div class="graph-label">Talking to Her</div>
                        </div>
                    </div>
                    <div class="no-regrets-badge">
                        CONCLUSION: NO REGRETS. ✨
                    </div>
                </div>

                <div class="mt-8 space-y-3">
                    <div class="text-[10px] text-white/30 uppercase tracking-widest font-bold">Memory Trophies</div>
                    <div class="p-3 bg-white/5 border border-white/10 rounded-lg flex items-center gap-3">
                        <span class="text-xl">🏆</span>
                        <div>
                            <div class="text-xs font-bold">The Missed Match Award</div>
                            <div class="text-[10px] opacity-60">"Because talking to you was the bigger win."</div>
                        </div>
                    </div>
                    <div class="p-3 bg-white/5 border border-white/10 rounded-lg flex items-center gap-3">
                        <span class="text-xl">⭐</span>
                        <div>
                            <div class="text-xs font-bold">Top Scorer</div>
                            <div class="text-[10px] opacity-60">Number of times you made him smile today.</div>
                        </div>
                    </div>
                </div>

                <button class="hala-btn" onclick="triggerMadridEffect(this)">Hala Madrid! 🚀</button>
            </div>

            <!-- NEWS TICKER -->
            <div class="news-ticker-container">
                <div class="news-ticker-wrapper">
                    <div class="news-item">🚨 BREAKING: Harshit misses 89th minute goal to reply to a text.</div>
                    <div class="news-item">⚽ UPDATE: "Siuuu" logic module improved by 200%.</div>
                    <div class="news-item">⚠️ WARNING: Sleep schedule transfer listed for 2:00 AM conversations.</div>
                    <div class="news-item">🏆 OFFICIAL: "Mr. Snow" alias renewed for another season.</div>
                </div>
            </div>

            <audio id="madrid-siuuu" src="https://www.myinstants.com/media/sounds/cristiano-ronaldo-siuuu.mp3"></audio>
        </div>
    `,
        onOpen() {
            setTimeout(() => {
                const fill = document.getElementById('passion-fill');
                if (fill) fill.style.width = '100%';
            }, 500);
        }
    },

    /* === FUN & CHAOS (Inside Folder) === */
    {
        id: 'flash', title: 'Fastest Alive', icon: '⚡', dock: false, folder: 'folder-fun', width: 800, height: 600, content: `
        <style>
            @keyframes lightning-flash {
                0%, 100% { opacity: 0; }
                10%, 90% { opacity: 0; }
                50% { opacity: 0.8; }
            }
            .speed-background {
                background: linear-gradient(135deg, #7f1d1d, #b91c1c, #f59e0b);
                background-size: 400% 400%;
                animation: speed-bg 2s infinite linear;
            }
            @keyframes speed-bg {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
            }
            .lightning-overlay {
                background: url('https://media.giphy.com/media/26uf43dkw9bYvZ8mx/giphy.gif') center/cover;
                mix-blend-mode: screen;
                opacity: 0.3;
            }
        </style>
        <div id="flash-app-container" class="h-full w-full speed-background relative overflow-hidden font-sans text-white select-none">
            <!-- Lightning Overlay -->
            <div class="absolute inset-0 lightning-overlay pointer-events-none"></div>
            
            <!-- Audio Elements -->
            <audio id="sfx-hover" src="https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"></audio> <!-- Electric Buzz -->
            <audio id="sfx-wait" src="https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3" loop></audio> <!-- Heartbeat/Tension -->
            <audio id="sfx-signal" src="https://assets.mixkit.co/active_storage/sfx/1130/1130-preview.mp3"></audio> <!-- Thunder -->
            <audio id="sfx-success" src="https://assets.mixkit.co/active_storage/sfx/2044/2044-preview.mp3"></audio> <!-- Whoosh -->
            <audio id="sfx-fail" src="https://assets.mixkit.co/active_storage/sfx/947/947-preview.mp3"></audio> <!-- Error Buzz -->

            <!-- INTRO SCREEN -->
            <div id="flash-intro" class="absolute inset-0 flex flex-col items-center justify-center z-10 p-8 text-center">
                <h1 class="text-4xl font-black italic tracking-tighter mb-2 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)] uppercase">Speed Force</h1>
                <p class="text-yellow-200 mb-8 font-mono text-xs tracking-widest">STATUS: CONNECTED</p>
                
                <button onclick="FlashApp.startRun()" onmouseenter="FlashApp.playHover()" class="px-8 py-3 bg-yellow-400 text-red-900 font-black text-xl italic uppercase tracking-wider skew-x-[-10deg] hover:scale-110 hover:bg-white hover:text-red-600 transition-all duration-200 shadow-[0_0_20px_rgba(251,191,36,0.6)] border-2 border-red-600">
                    RUN
                </button>
                <div id="flash-pb-intro" class="mt-4 text-[10px] text-white/50 font-mono tracking-widest">PERSONAL BEST: --ms</div>
            </div>

            <!-- GAME SCREEN -->
            <div id="flash-game" class="absolute inset-0 hidden z-20 cursor-pointer" onclick="FlashApp.handleTap()">
                <div id="flash-game-bg" class="absolute inset-0 bg-black/80 flex flex-col items-center justify-center transition-colors duration-0">
                    <div id="flash-instruction" class="text-2xl font-bold uppercase tracking-widest animate-pulse">Wait for Signal...</div>
                    <div class="text-xs text-white/50 mt-4 font-mono">Tap instantly when screen turns GREEN</div>
                </div>
            </div>

            <!-- RESULT SCREEN -->
            <div id="flash-result" class="absolute inset-0 hidden flex-col items-center justify-center z-30 bg-black/90 p-8 text-center">
                <div class="text-gray-400 text-sm font-mono mb-2">REACTION TIME</div>
                <div id="flash-time-display" class="text-6xl font-black text-yellow-400 italic mb-4">0ms</div>
                <div id="flash-rank-display" class="text-xl text-white font-serif mb-4 text-red-400">rank</div>
                <div id="flash-new-record" class="hidden text-xs font-bold bg-yellow-400 text-black px-2 py-1 rounded mb-6 animate-bounce">🏆 NEW PERSONAL RECORD!</div>
                
                <button onclick="FlashApp.reset()" onmouseenter="FlashApp.playHover()" class="px-6 py-2 border border-white/20 hover:bg-white/10 text-white rounded uppercase tracking-widest text-xs transition">Try Again</button>
            </div>
        </div>


    `},

    {
        id: 'rabbit', title: 'The Rabbit Squad', icon: '🐰', dock: false, folder: 'folder-fun', width: 700, height: 600, onOpen: () => RabbitSquad.init(), content: `
        <div class="h-full bg-[#f0fdf4] relative overflow-hidden select-none font-sans" id="rabbit-den">
            <!-- Background: Soft Field -->
            <div class="absolute inset-0 z-0 bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7]"></div>
            
            <!-- Controls -->
            <div class="absolute top-4 left-0 w-full z-20 flex justify-center gap-2">
                <button onclick="RabbitSquad.assemble()" class="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-green-700 shadow-sm hover:scale-105 transition border border-green-200">Assemble</button>
                <button onclick="RabbitSquad.celebrate()" class="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-blue-700 shadow-sm hover:scale-105 transition border border-blue-200">Goal! ⚽</button>
                <button onclick="RabbitSquad.napTime()" class="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-indigo-700 shadow-sm hover:scale-105 transition border border-indigo-200">Nap Time 💤</button>
            </div>

            <!-- Rabbits Container -->
            <div id="rabbit-field" class="absolute inset-0 z-10 pointer-events-none">
                <!-- Rabbits injected here -->
            </div>
            
            <style>
                .bun-item { position: absolute; cursor: pointer; transition: all 1.5s ease-in-out; pointer-events: auto; display: flex; flex-direction: column; items-center: center; }
                .bun-item:hover { transform: scale(1.1); transition: transform 0.2s; }
                .bun-msg { position: absolute; top: -30px; left: 50%; transform: translateX(-50%); background: white; padding: 4px 8px; border-radius: 8px; font-size: 11px; font-weight: bold; opacity: 0; transition: opacity 0.3s; pointer-events: none; white-space: nowrap; box-shadow: 0 2px 4px rgba(0,0,0,0.1); color: #374151; }
                .bun-item:hover .bun-msg, .bun-item.talking .bun-msg { opacity: 1; top: -35px; }
                
                .bun-madrid { filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5)); }
                .bun-snow { filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.5)); }
                .bun-love { filter: drop-shadow(0 0 5px rgba(255, 192, 203, 0.8)); }
                
                @keyframes floatUp { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-20px); } }
            </style>
        </div>
    `},



    /* CLUSTER 3: COMFORT & CALM (Safe Spaces) */
    {
        id: 'music-night', title: 'Late Night', icon: '🌙', dock: true, width: 500, height: 400, content: `
        <div class="h-full bg-slate-900 text-slate-300 flex flex-col items-center justify-center gap-6 relative overflow-hidden group">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/20"></div>
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div class="text-[10px] tracking-[0.3em] uppercase opacity-40 font-light">Late Night Vibes</div>
            
            <div class="relative transition-transform duration-700 hover:scale-105">
                <div class="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
                <i class="fas fa-compact-disc text-6xl text-white/90 hover:text-white cursor-pointer transition-all duration-500 hover:rotate-180" style="filter: drop-shadow(0 0 10px rgba(255,255,255,0.3))" onclick="createModal({ title: 'Late Night Mode', desc: 'Playing soft piano...', icon: '🎹' })"></i>
            </div>
            
            <div class="text-xs text-center opacity-60 font-light max-w-[200px]">
                "Quiet music for loud minds."
            </div>
        </div>
    `},

    {
        id: 'thank-you', title: 'Thank You', icon: '✨', dock: false, folder: 'folder-feelings', width: 700, height: 700, content: `
        <div class="thank-you-container custom-scroll">
            <div class="thank-you-header">
                <div class="ty-icon">✨</div>
                <div class="ty-title-group">
                    <div class="ty-subtitle">GRATITUDE JOURNAL</div>
                    <h2 class="ty-title">Things I'm Grateful For</h2>
                </div>
            </div>

            <div class="ty-grid">
                <div class="ty-card" style="animation-delay: 0.1s">
                    <div class="ty-card-icon">👂</div>
                    <div class="ty-card-content">
                        <h3>For Listening</h3>
                        <p>Even when I ramble about nonsense or overthink the smallest things. You're always there.</p>
                    </div>
                </div>

                <div class="ty-card" style="animation-delay: 0.2s">
                    <div class="ty-card-icon">😂</div>
                    <div class="ty-card-content">
                        <h3>For the Laughs</h3>
                        <p>The inside jokes, the roasts, and the moments where we just can't stop laughing.</p>
                    </div>
                </div>

                <div class="ty-card" style="animation-delay: 0.3s">
                    <div class="ty-card-icon">⚓</div>
                    <div class="ty-card-content">
                        <h3>For Staying</h3>
                        <p>When things got quiet, weird, or tough. You didn't leave. You stayed.</p>
                    </div>
                </div>

                <div class="ty-card" style="animation-delay: 0.4s">
                    <div class="ty-card-icon">🤍</div>
                    <div class="ty-card-content">
                        <h3>For Being You</h3>
                        <p>Authentic. Kind. And my favorite person to annoy.</p>
                    </div>
                </div>
            </div>

            <div class="ty-footer">
                <div class="ty-note">"Some people make the world better just by being in it."</div>
                <button onclick="Apps.close('thank-you')" class="ty-close-btn">Close Gratitude</button>
            </div>
            
            <!-- Confetti trigger on open -->
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="if(typeof confetti === 'function') { confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); }" style="display:none;">
        </div>
    `},

    {
        id: 'inkpot', title: 'The Inkpot', icon: '🖋️', dock: false, folder: 'folder-feelings', width: 800, height: 750, onOpen: initInkpot, content: `
        <div class="inkpot-wrapper h-full relative overflow-hidden bg-[#f0e6d2]">
            <!-- Paper Texture -->
            <div class="paper-texture absolute inset-0 opacity-40 pointer-events-none" style="background-image: url('https://www.transparenttextures.com/patterns/cream-paper.png'); mix-blend-mode: multiply;"></div>
            
            <!-- Ink Stains -->
            <div class="ink-stain stain-1"></div>
            <div class="ink-stain stain-2"></div>

            <!-- Header -->
            <div class="relative z-10 pt-10 text-center select-none">
                <h1 class="ink-title text-4xl text-[#3d2b1f] opacity-80 drop-shadow-sm mb-2" style="font-family: 'Dancing Script', cursive;">Spilled Ink</h1>
                <div class="w-24 h-[1px] bg-[#8b4513] mx-auto opacity-30"></div>
            </div>

            <!-- Writing Area -->
            <div id="inkpot-content" class="relative z-10 p-12 pr-4 font-serif text-xl leading-relaxed text-[#2c1810] h-[520px] overflow-y-auto custom-journal-scroll">
                <div id="journal-entry" class="ink-writing"></div>
            </div>

            <!-- Controls -->
            <div class="absolute bottom-6 right-8 z-20 flex gap-3 items-center">
                 <button class="journal-btn text-[#5c4033] hover:text-[#2c1810] transition" onclick="prevInkEntry()" title="Previous Entry"><i class="fas fa-arrow-left"></i></button>
                 <button class="journal-btn-new px-4 py-2 bg-[#2c1810] text-[#f0e6d2] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#4a2c1d] transition" onclick="newInkEntry()">New Page 🖋️</button>
                 <button class="journal-btn text-[#5c4033] hover:text-[#2c1810] transition" onclick="nextInkEntry()" title="Next Entry"><i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `},

    {
        id: 'last-thing', title: 'One Last Thing', icon: '🖤', dock: false, folder: 'folder-feelings', width: 500, height: 400, content: `
        <div class="h-full bg-black flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
             <!-- Cinematic Gradient -->
             <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-pulse-slow"></div>
             
             <div class="relative z-10 animate-fade-in-up">
                <div class="text-6xl mb-6 last-thing-heart">🖤</div>
                <h3 class="text-2xl font-serif text-white mb-4 tracking-wide drop-shadow-lg" style="font-family: 'Playfair Display', serif;">You are enough.</h3>
                <p class="text-sm text-gray-300 leading-relaxed max-w-[220px] mx-auto font-light opacity-80">
                    Just in case you forgot today.<br>
                    You are doing so great.
                </p>
                
                <div class="mt-10">
                     <button onclick="Apps.close('last-thing')" class="last-thing-btn text-[10px] text-gray-500 hover:text-white uppercase tracking-[0.3em] transition cursor-pointer">
                        Okay, I believe you
                    </button>
                </div>
             </div>
        </div>
    `},

    {
        id: 'tired', title: 'When Tired', icon: '😴', dock: true, width: 600, height: 500, onOpen: initTired, content: `
        <div id="tired-container" class="tired-container">
            <div id="tired-content" class="tired-content"></div>
            <div class="heart-corner">❤️</div>
        </div>
    `},





    /* CLUSTER 4: GROWTH & 19 (Mature) */
    {
        id: 'app-grown', title: '19.exe', icon: '🧠', dock: true, width: 800, height: 700, content: `
        <div class="h-full bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 flex flex-col items-center relative overflow-hidden">
            <!-- Background Watermark -->
            <div class="absolute top-[-20px] right-[-20px] text-[180px] font-serif font-bold text-slate-100 select-none z-0 rotate-12">19</div>
            
            <!-- Main Content -->
            <div class="relative z-10 w-full h-full flex flex-col overflow-y-auto custom-scroll pr-2">
                
                <!-- Header -->
                <div class="mb-8 text-center animate-fade-in-up">
                    <h1 class="text-4xl font-[Playfair_Display] font-bold text-slate-800 mb-2">Chapter 19</h1>
                    <div class="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                </div>

                <!-- Letter Body -->
                <div class="space-y-6 text-slate-600 font-[Inter] leading-relaxed text-[15px] opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
                    
                    <p class="first-letter:text-3xl first-letter:font-serif first-letter:text-slate-800 first-letter:mr-1">
                        18 got you understanding a little more... things you hadn’t noticed before, moments that made you think, and experiences that stayed with you.
                    </p>

                    <div class="bg-white/60 p-5 rounded-lg border-l-4 border-indigo-300 italic text-slate-700 shadow-sm backdrop-blur-sm">
                        "Now that you’re 19, I just want you to know it’s okay to grow at your own pace."
                    </div>

                    <p>
                        You don’t need to have everything figured out, and you never have to carry things alone. Life will teach you through both good and hard moments, and each one will shape you into someone stronger and wiser.
                    </p>

                    <p>
                        Be kind to yourself, learn from your lows, celebrate your highs, and don’t be afraid to ask for help when you need it.
                    </p>
                </div>

                <!-- Footer / Signature -->
                <div class="mt-10 pt-6 border-t border-slate-200 text-center opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
                    <p class="font-[Dancing_Script] text-2xl text-indigo-600 mb-2">I’m really proud of the person you’re becoming.</p>
                    <p class="text-xs text-slate-400 uppercase tracking-[0.2em] font-medium">May this year bring you peace</p>
                </div>

                <!-- Bottom Spacer for Scroll -->
                <div class="h-8"></div>
            </div>
        </div>
    `},

    {
        id: 'future', title: 'Future You', icon: '🔮', dock: false, width: 800, height: 600, content: `
        <div class="h-full w-full relative bg-black overflow-hidden group">
            <!-- Background Image: Train/Night Window Aesthetic -->
            <div class="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] group-hover:scale-105 group-hover:opacity-40 opacity-70" 
                 style="background-image: url('https://images.unsplash.com/photo-1532978016421-2a0614459f36?q=80&w=1600');">
                 <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            </div>
            
            <!-- Hover Quote (Option C) -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                 <div class="text-white/90 font-serif text-2xl tracking-widest opacity-0 transform translate-y-8 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-y-0 text-center drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                    "You didn't stop walking."
                 </div>
            </div>

            <!-- Static subtle hint (Option A) -->
             <div class="absolute bottom-8 right-8 text-white/40 text-[10px] uppercase tracking-[0.4em] font-light mix-blend-overlay opacity-60 group-hover:opacity-0 transition-opacity duration-700">
                Still becoming
            </div>
        </div>
    `},

    {
        id: 'blueprint', title: 'Blueprint.bp', icon: '📐', dock: true, width: 800, height: 600, content: `
        <div class="h-full bg-[#004a80] text-blue-100 font-mono text-sm p-0 flex flex-col">
            <!-- Grid Background -->
            <div class="flex-1 p-6 custom-scroll select-text relative" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 20px 20px;">
                <pre class="whitespace-pre-wrap font-inherit relative z-10" style="text-shadow: 1px 1px 0 #003366;">
[Project: BLUEPRINT]
[Version: 1.0]

[BEGIN TRANSMISSION]

STATUS: IN-PROGRESS

OBJECTIVE:
  - Phase 1: Establish Foundation
  - Phase 2: Structural Integrity
  - Phase 3: Systems Integration
  - Phase 4: Finalization

[END TRANSMISSION]
            </pre>
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



    /* === FUN & CHAOS (Inside Folder) === */
    {
        id: 'radio-harshit', title: 'Radio Harshit', icon: '📻', dock: true, folder: 'folder-fun', width: 500, height: 600, onOpen: initRadio, content: `
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
        id: 'quiz', title: 'The Us Quiz', icon: '🧩', dock: false, folder: 'folder-fun', width: 600, height: 700, onOpen: startQuiz, content: `
        <div class="h-full bg-indigo-50 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden" id="quiz-container">
            <div class="text-6xl mb-6 animate-bounce">🧩</div>
            <h2 class="text-2xl font-bold text-indigo-900 mb-2">The Us Quiz</h2>
            <p class="text-sm text-indigo-400 mb-8">How well do you know the lore?</p>
            
            <div class="w-full max-w-xs bg-white p-6 rounded-2xl shadow-xl border border-indigo-100">
                <div id="q-text" class="text-lg font-medium text-gray-800 mb-6 min-h-[60px] flex items-center justify-center">Loading...</div>
                <input type="text" id="q-input" class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center mb-4 focus:outline-none focus:border-indigo-400 transition" placeholder="Type answer..." autocomplete="off" onkeydown="if(event.key === 'Enter') submitAnswer()">
                <button onclick="submitAnswer()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition">Submit</button>
                <div id="q-feedback" class="text-xs mt-4 h-4 font-bold tracking-wide transition-colors"></div>
            </div>
        </div>
    `},

    {
        id: 'the-path', title: 'The Path', icon: '🧭', dock: false, folder: 'folder-fun', width: 800, height: 600, onOpen: startPathGame, content: `
        <div class="path-game" id="path-container" onclick="handlePathClick(event)">
            <!-- Dynamic Content -->
        </div>
    `},

    {
        id: 'word-spiral', title: 'Word Spiral', icon: '🌀', dock: false, folder: 'folder-fun', width: 600, height: 700, onOpen: initWordSpiral, content: `
        <div class="spiral-bg">
            <div id="spiral-content" class="h-full flex flex-col items-center justify-center p-8 text-center text-white">
                <div class="text-4xl mb-6 animate-spin-slow">🌀</div>
                <div id="spiral-word" class="text-3xl font-serif font-bold mb-8">Growth</div>
                <div id="spiral-opts" class="grid grid-cols-1 gap-4 w-full max-w-xs"></div>
            </div>
        </div>
    `},

    {
        id: 'personality-quiz', title: 'Who Are You?', icon: '🔍', dock: false, folder: 'folder-fun', width: 600, height: 700, onOpen: initPersonalityQuiz, content: `
        <div class="quiz-bg">
            <div id="p-quiz-content" class="h-full flex flex-col items-center justify-center p-8 text-center">
                <div class="text-5xl mb-6">🔍</div>
                <div id="p-quiz-q" class="text-xl font-bold text-gray-800 mb-8">System Check...</div>
                <div id="p-quiz-opts" class="flex flex-col gap-3 w-full max-w-xs"></div>
            </div>
        </div>
    `},

    {
        id: 'rabbit-runner', title: 'RabbitRunner.exe', icon: '🐰', dock: false, folder: 'folder-fun', width: 900, height: 600, onOpen: initRabbitGame, content: `
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
        id: 'bear', title: 'Masti Mode', icon: '🐻', dock: true, folder: 'folder-fun', width: 500, height: 450, onOpen: () => MastiMode.init(), content: `
        <div class="h-full bg-[#fff0f5] relative overflow-hidden select-none font-sans" id="masti-den">
            <!-- Background -->
            <div class="absolute inset-0 bg-gradient-to-b from-pink-50 to-rose-100 opacity-50 pointer-events-none"></div>
            
            <!-- Controls -->
            <div class="absolute bottom-4 left-0 w-full z-20 flex justify-center gap-3">
                <button onclick="MastiMode.pinch()" class="px-4 py-2 bg-white/80 rounded-full text-sm shadow hover:scale-105 transition border border-pink-200">🤏 Pinch</button>
                <button onclick="MastiMode.dance()" class="px-4 py-2 bg-white/80 rounded-full text-sm shadow hover:scale-105 transition border border-pink-200">💃 Dance</button>
                <button onclick="MastiMode.feed()" class="px-4 py-2 bg-white/80 rounded-full text-sm shadow hover:scale-105 transition border border-pink-200">🍪 Feed</button>
            </div>
        </div>
    `},

    {
        id: 'spotify', title: 'Spotify - Vibe Check', icon: '🎵', dock: true, folder: 'folder-fun', width: 450, height: 600, content: `
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
        id: 'do-not-open', title: 'Do Not Open', icon: '🚫', dock: false, folder: 'app-vault', width: 400, height: 300, content: `
        <div class="h-full flex items-center justify-center bg-red-50 text-red-900 text-center p-6">
            <div>
                <div class="font-bold mb-2">You Opened It.</div>
                <div class="text-xs">I knew you would. Stubborn. ❤️</div>
            </div>
        </div>
    `},


    {
        id: 'through-my-eyes', title: 'Through My Eyes', icon: '📝', dock: false, folder: 'app-vault', width: 700, height: 600, content: `
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
        id: 'playlist', title: 'Hidden Tracks', icon: '🎶', dock: false, folder: 'app-vault', width: 500, height: 400, content: `
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
        id: 'secret-vault', title: 'Secret Vault', icon: '🔐', dock: false, folder: 'app-vault', width: 800, height: 600, onOpen: initSecretVault, content: `
        <div id="vault-container" class="relative w-full h-full bg-gray-900 text-white overflow-hidden flex flex-col items-center justify-center">
             
             <!-- Lock Screen -->
             <div id="vault-lock" class="flex flex-col items-center gap-6 p-8 transition-opacity duration-500" style="display: flex;">
                <div class="text-6xl mb-4">🔐</div>
                <h2 class="text-2xl font-light tracking-widest uppercase">Restricted Access</h2>
                <div class="relative w-64">
                    <input type="password" id="vault-pass" class="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-center text-xl tracking-[0.5em] focus:outline-none focus:border-white/50 transition placeholder-gray-500" placeholder="••••••" maxlength="6">
                </div>
                <p id="vault-hint" class="text-xs text-gray-500 hover:text-gray-300 cursor-pointer transition" onclick="createModal({ title: 'Hint', desc: 'The day it all started (dd/mm/yy)', icon: '💡' })">Hint: dd/mm/yy</p>
                <div id="vault-error" class="text-red-400 text-sm font-bold opacity-0 transition">Access Denied</div>
             </div>

             <!-- Unlocked Content (Carousel) -->
             <div id="vault-content" class="absolute inset-0 transition-opacity duration-1000 bg-black" style="display: none; opacity: 0;">
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
        id: 'voice-box', title: 'VoiceBox', icon: '🎙️', dock: false, folder: 'app-vault', width: 550, height: 700, onOpen: initVoiceBox, content: `
        <div class="h-full flex flex-col font-sans select-none relative overflow-hidden">
            <!-- Case Texture -->
            <div class="absolute inset-0 bg-neutral-800 dictaphone-case"></div>
            
            <!-- Top Speaker Grille -->
            <div class="relative z-10 pt-6 px-8 flex justify-between items-center">
                <div class="flex gap-1 h-3">
                    <div class="w-1 bg-black/40 rounded-full"></div>
                    <div class="w-1 bg-black/40 rounded-full"></div>
                    <div class="w-1 bg-black/40 rounded-full"></div>
                    <div class="w-1 bg-black/40 rounded-full"></div>
                    <div class="w-1 bg-black/40 rounded-full"></div>
                </div>
                <div class="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">Dictaphone 3000</div>
            </div>

            <!-- Cassette Window -->
            <div class="relative z-10 mx-6 mt-6 p-4 bg-black/40 rounded-lg border-2 border-neutral-600 shadow-inner flex items-center justify-center h-32 cassette-window">
                 <!-- Cassette Graphic -->
                 <div class="w-full h-full bg-[#eee] rounded flex items-center justify-between px-3 relative overflow-hidden" style="background: radial-gradient(#fff, #ddd);">
                    <div class="absolute top-2 left-0 w-full text-center text-[8px] font-bold tracking-widest text-black/50">90 MIN TYPE I</div>
                    <!-- Reels -->
                    <div class="w-12 h-12 rounded-full border-4 border-white bg-transparent flex items-center justify-center vb-reel">
                        <div class="w-full h-1 bg-black transform rotate-0 absolute"></div>
                        <div class="w-full h-1 bg-black transform rotate-45 absolute"></div>
                        <div class="w-full h-1 bg-black transform rotate-90 absolute"></div>
                        <div class="w-full h-1 bg-black transform rotate-135 absolute"></div>
                    </div>
                    <!-- Tape Window -->
                    <div class="w-20 h-10 bg-white border border-gray-300 rounded flex items-center justify-center">
                        <div class="w-16 h-6 bg-black/80 rounded-sm"></div>
                    </div>
                    <!-- Reels -->
                    <div class="w-12 h-12 rounded-full border-4 border-white bg-transparent vb-reel">
                        <div class="w-full h-1 bg-black transform rotate-0 absolute top-1/2 -translate-y-1/2"></div>
                        <div class="w-full h-1 bg-black transform rotate-45 absolute top-1/2 -translate-y-1/2"></div>
                        <div class="w-full h-1 bg-black transform rotate-90 absolute top-1/2 -translate-y-1/2"></div>
                        <div class="w-full h-1 bg-black transform rotate-135 absolute top-1/2 -translate-y-1/2"></div>
                    </div>
                 </div>
            </div>

            <!-- Meters & Counter -->
            <div class="relative z-10 px-8 mt-6 flex justify-between items-end">
                <!-- VU Meter -->
                <div class="w-24 h-12 bg-[#eee] rounded-t-lg border border-neutral-500 relative overflow-hidden shadow-inner">
                    <div class="absolute bottom-0 left-1/2 w-[120%] h-[120%] -translate-x-1/2 border-t border-black/20 rounded-full"></div>
                    <!-- Needle -->
                    <div id="vb-needle" class="absolute bottom-0 left-1/2 w-0.5 h-10 bg-red-600 origin-bottom transform -rotate-45 transition-transform duration-100 ease-linear shadow-sm" style="transform: translateX(-50%) rotate(-45deg);"></div>
                    <div class="absolute bottom-1 w-full text-center text-[6px] font-bold">VU</div>
                </div>

                <!-- Digital/LCD Counter -->
                <div class="bg-[#9ca38f] p-1 px-2 border-2 border-neutral-600 rounded shadow-inner font-mono text-black font-bold tracking-widest text-sm flex items-center gap-2">
                    <span id="vb-lcd-text">READY</span>
                    <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-50"></div>
                </div>
            </div>

            <!-- Keypad Config -->
            <div class="relative z-10 mt-auto mb-10 px-6 grid grid-cols-3 gap-4">
                <button id="vb-rec-btn" class="mech-btn bg-neutral-300 shadow-[0_4px_0_#737373] active:shadow-none active:translate-y-[4px] h-16 rounded flex flex-col items-center justify-center" onclick="toggleVBRecord()">
                    <div class="w-3 h-3 bg-red-600 rounded-full mb-1"></div>
                    <span class="text-[8px] font-bold text-neutral-600">REC</span>
                </button>
                <button class="mech-btn bg-neutral-300 shadow-[0_4px_0_#737373] active:shadow-none active:translate-y-[4px] h-16 rounded flex flex-col items-center justify-center" onclick="stopVBMotion(); updateVBStatus('STOP'); vbIsPlaying=false; vbIsRecording=false; document.querySelectorAll('.active-mech-btn').forEach(b => b.classList.remove('active-mech-btn'));">
                    <div class="w-3 h-3 bg-neutral-800 rounded-sm mb-1"></div>
                    <span class="text-[8px] font-bold text-neutral-600">STOP</span>
                </button>
                <button id="vb-play-btn" class="mech-btn bg-neutral-300 shadow-[0_4px_0_#737373] active:shadow-none active:translate-y-[4px] h-16 rounded flex flex-col items-center justify-center" onclick="toggleVBPlay()">
                    <div class="w-0 h-0 border-l-[12px] border-l-green-700 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent mb-1 ml-1"></div>
                    <span class="text-[8px] font-bold text-neutral-600">PLAY</span>
                </button>
            </div>

        </div>
    `},

    {
        id: 'readme-letter', title: 'ReadMe.txt', icon: '💌', dock: false, folder: 'app-vault', width: 800, height: 800, content: `
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
        id: 'memories-gallery', title: 'Memories', icon: '📸', dock: false, folder: 'app-vault', width: 950, height: 700, onOpen: initGallery, content: `
        <div id="gallery-container" class="polaroid-gallery custom-scroll">
            <!-- Dynamic Polaroids will be injected here -->
        </div>
    `},

    /* === DESKTOP VISIBLE APPS (No Folder) === */
    {
        id: 'shravii', title: 'Shravii.exe', icon: '🫧', dock: true, width: 500, height: 600, content: `
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
        id: 'about-us', title: 'The Dynamic', icon: '👥', dock: false, width: 800, height: 600, content: `
        <div class="about-container relative w-full h-full bg-slate-50 overflow-hidden flex flex-col items-center justify-center">
            <!-- Background Elements -->
            <div class="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-white to-blue-50/50"></div>
            <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-300/20 rounded-full blur-[100px] animate-pulse"></div>
            <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-300/20 rounded-full blur-[100px] animate-pulse delay-700"></div>

            <!-- Main Title Area -->
            <div class="relative z-10 text-center mb-10">
                <div class="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold mb-2">Team Status</div>
                <h2 class="text-3xl font-serif font-bold text-slate-800">The Dynamic</h2>
                <div class="w-16 h-1 bg-gradient-to-r from-pink-400 to-blue-500 mx-auto rounded-full mt-3"></div>
            </div>

            <!-- Dual Card Layout -->
            <div class="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 w-full px-8">
                
                <!-- Shravii Card -->
                <div class="persona-card persona-shravii group">
                    <div class="persona-glow"></div>
                    <div class="persona-icon-container">
                        <div class="persona-icon">🎀</div>
                        <div class="persona-badge">ADMIN</div>
                    </div>
                    <h3 class="persona-name">Shravii</h3>
                    <p class="persona-role">Chief Chaos Officer</p>
                    <div class="persona-stats">
                        <div class="stat-row">
                            <span>Yapping</span>
                            <div class="stat-bar"><div class="stat-fill" style="width: 100%"></div></div>
                        </div>
                        <div class="stat-row">
                            <span>Drama</span>
                            <div class="stat-bar"><div class="stat-fill" style="width: 90%"></div></div>
                        </div>
                    </div>
                </div>

                <!-- Connection Link -->
                <div class="connection-link">
                    <div class="link-line"></div>
                    <div class="link-icon">⚡</div>
                    <div class="link-line"></div>
                </div>

                <!-- Harshit Card -->
                <div class="persona-card persona-harshit group">
                    <div class="persona-glow"></div>
                    <div class="persona-icon-container">
                        <div class="persona-icon">🐺</div>
                        <div class="persona-badge">ROOT</div>
                    </div>
                    <h3 class="persona-name">Harshit</h3>
                    <p class="persona-role">Chief Patience Officer</p>
                    <div class="persona-stats">
                        <div class="stat-row">
                            <span>Tolerance</span>
                            <div class="stat-bar"><div class="stat-fill" style="width: 95%"></div></div>
                        </div>
                        <div class="stat-row">
                            <span>Sleep Debt</span>
                            <div class="stat-bar"><div class="stat-fill" style="width: 85%"></div></div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Footer Quote -->
            <div class="absolute bottom-6 text-center z-10 opacity-60 hover:opacity-100 transition-opacity">
                <p class="text-xs font-mono text-slate-500">"He stays quiet so she can yap."</p>
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

/* === MENU BAR ACTIONS === */
function triggerAction(action) {
    // Close menus first
    document.querySelectorAll('[id$="-menu"]').forEach(el => el.classList.add('hidden'));

    switch (action) {
        // File
        case 'new-folder':
            const name = prompt("Enter folder name:", "Untitled Folder");
            if (name) {
                const grid = document.getElementById('desktop-grid');
                const icon = document.createElement('div');
                icon.className = 'desktop-icon group';
                icon.innerHTML = `<div class="icon-img text-3xl mb-2">📁</div><div class="icon-label bg-black/20 text-white/80 px-2 py-0.5 rounded text-[10px] tracking-wide backdrop-blur-sm">${name}</div>`;
                icon.onclick = () => alert("This folder is empty for now.");
                grid.appendChild(icon);
            }
            break;

        // Edit
        case 'select-all':
            // Simple visual selection of text in active window could be hard, 
            // so we'll just focus the last opened window or do a visual effect
            const activeId = Array.from(state.appsOpened).pop();
            if (activeId) {
                const win = document.getElementById(`win-${activeId}`);
                if (win) win.classList.add('ring-2', 'ring-blue-500');
                setTimeout(() => win && win.classList.remove('ring-2', 'ring-blue-500'), 500);
            }
            break;

        // View
        case 'toggle-fullscreen':
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            } else {
                document.exitFullscreen();
            }
            break;
        case 'zoom-in':
            document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1);
            break;
        case 'zoom-out':
            document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) - 0.1);
            break;
        case 'reset-zoom':
            document.body.style.zoom = 1;
            break;

        // Go
        case 'go-back':
            // Visual check only
            break;

        // Window
        case 'min-all':
            state.appsOpened.forEach(id => minimizeApp(id));
            break;
        case 'close-all':
            // Create a copy array because closeApp modifies the set
            Array.from(state.appsOpened).forEach(id => closeApp(id));
            break;

        case 'sleep':
            triggerQuietEnding();
            break;
    }
}

/* === AFFIRMATIONS === */
const affirmations = ["You stay kind, even when things get heavy.", "You don’t give up easily.", "You carry storms quietly.", "You are enough, exactly as you are."];

const whys = [
    "You show up, even when tired.",
    "You listen without fixing.",
    "You stay.",
    "Your silence is safe.",
    "You are valid.",
    "You didn’t disappear when things got heavy.",
    "You learned me instead of labeling me.",
    "You stayed even when staying wasn’t easy."
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

    // Blueprint Icon (Manual Add)
    const bpIcon = document.createElement('div');
    bpIcon.className = 'desktop-icon group';
    bpIcon.innerHTML = `<div class="icon-img text-3xl mb-2 filter grayscale group-hover:grayscale-0 transition duration-500">📐</div><div class="icon-label bg-black/20 text-white/80 px-2 py-0.5 rounded text-[10px] tracking-wide backdrop-blur-sm">Blueprint.bp</div>`;
    bpIcon.onclick = openBlueprint;
    grid.appendChild(bpIcon);

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
    { user: 'shravii', text: "Why don't ya join us\n— 6/20/24, 12:40 AM" },
    { user: 'harshit', text: "can't, i am watching the euros match 🥲\n— 6/20/24, 12:41 AM" },
    { user: 'shravii', text: "Oooo\nAlr enjoy\nWhat is that tho\n— 6/20/24, 12:41 AM" },
    { user: 'harshit', text: 'you too\n— 6/20/24, 12:42 AM' },
    { user: 'harshit', text: 'football tournament\nplayed between the european nations\n— 6/20/24, 12:42 AM' },
    { user: 'shravii', text: 'Oou\n— 6/20/24, 12:42 AM' },
    { user: 'shravii', text: ':o\nYa like to watch cricket too?\n— 6/20/24, 12:43 AM' },
    { user: 'harshit', text: 'umm... i never watched a cricket match😅\n— 6/20/24, 12:45 AM' },
    { user: 'shravii', text: 'R ya born in india???\n— 6/20/24, 12:46 AM' },
    { user: 'harshit', text: 'yeah\n— 6/20/24, 12:46 AM' },
    { user: 'shravii', text: 'Xd okie okie\n— 6/20/24, 12:46 AM' },
    { user: 'harshit', text: 'i have never been into sports, i only started watching football recently\n— 6/20/24, 12:47 AM' },
    { user: 'shravii', text: "Ooo i see\nI don't watch sports\nI play\n— 6/20/24, 12:48 AM" },
    { user: 'harshit', text: 'all sports, or you have a preference\n— 6/20/24, 12:49 AM' },
    { user: 'shravii', text: 'sprint,volleyball,batminton,relay...some of it which i know\n— 6/20/24, 12:51 AM' },

    { user: 'system', text: 'next day...' },

    { user: 'shravii', text: ':Wg_peekaboo:  otaku\n— 6/20/24, 11:51 AM' },
    { user: 'harshit', text: 'you said my name you wanted me here i am\n— 6/20/24, 11:53 AM' },
    { user: 'shravii', text: 'I saw u typinn\n— 6/20/24, 11:53 AM' },
    { user: 'harshit', text: 'Ah, but idk what i was typing\n— 6/20/24, 11:54 AM' },
    { user: 'shravii', text: ':what_to_do~1:\n— 6/20/24, 11:54 AM' },
    { user: 'harshit', text: 'Btw mujhe ek baat yaad aai @YVI\n— 6/20/24, 11:55 AM' },
    { user: 'shravii', text: 'Hmm?\n— 6/20/24, 11:55 AM' },
    { user: 'harshit', text: 'So, I attended a camp usme ek session ek to koi budha sa Banda tha, he had like PhD and like shyd ISRO s bhi kuch relation tha uska\nTo vo kehte ki 4 hours of sleep is enough, I have slept only 4 hours my whole life and it is perfectly fine\nAnd fer pta chala ki usko brain tumour hai💀\n— 6/20/24, 11:56 AM' },
    { user: 'shravii', text: '4 hrs seriously \nKoi koi kar leta but everyday not possible :vi_think~1:\n— 6/20/24, 12:01 PM' },
    { user: 'harshit', text: 'Hmm, vhi to\nMinimum everyday 6 hours sleep is a must\n— 6/20/24, 12:01 PM' },

    { user: 'harshit', text: 'subh s jhule p?\n— 6/20/24, 3:01 PM' },
    { user: 'shravii', text: 'Yes\n— 6/20/24, 3:01 PM' },
    { user: 'harshit', text: 'itna jhula to mene puri jindagi m nhi jhula hoga\n— 6/20/24, 3:02 PM' },
    { user: 'shravii', text: 'Lol meri fav cheej he gaon me 1 yr baad ayi hoon toh hehe:maze_hai~1:\n— 6/20/24, 3:04 PM' },
    { user: 'harshit', text: 'lol enjoy\n— 6/20/24, 3:05 PM' },

    { user: 'system', text: 'to truth and dares...' },

    { user: 'game', text: 'Akinator APP\notaku_98103 \nWhat\'s something that you would be willing to stay up all night to do?' },
    { user: 'harshit', text: 'BInge Watching any show or watching football match\n— 6/24/24, 9:30 PM' },
    { user: 'game', text: 'Akinator APP\notaku_98103\nWhat is your favourite game to play?' },
    { user: 'harshit', text: 'irl - football (even though i am not good), tennis (i am quite good in it) \nonline - i don\'t play that much but coc or gta ig\n— 6/24/24, 9:32 PM' },

    { user: 'system', text: '— 6/27/24, 3:57 PM —' },
    { user: 'game', text: 'Akinator APP\notaku_98103\nIf you could give up happiness to never be sad, would you?' },
    { user: 'harshit', text: 'nah\n— 6/27/24, 3:57 PM' },

    { user: 'system', text: 'to playing w me' },
    { user: 'game', text: 'vivi15_09\nDo you hate/strongly dislike anyone here?\nType: Truth | Rating: PG' },
    { user: 'shravii', text: 'yes\nno\nyes\nno\na bit\n— 7/4/24, 5:19 PM' },
    { user: 'harshit', text: 'hmm\n— 7/4/24, 5:19 PM' },
    { user: 'shravii', text: 'ig\nxd\nsomeoneee\n— 7/4/24, 5:19 PM' },
    { user: 'harshit', text: 'tell me\n— 7/4/24, 5:19 PM' },
    { user: 'shravii', text: 'myself\n:D\n— 7/4/24, 5:19 PM' },
    { user: 'harshit', text: 'nah\n— 7/4/24, 5:19 PM' },
    { user: 'shravii', text: ':D\n— 7/4/24, 5:20 PM' },
    { user: 'harshit', text: 'hmm\nname to btaya nhi\n— 7/4/24, 5:20 PM' },
    { user: 'shravii', text: 'but wait lemme think wh\nwho\n— 7/4/24, 5:20 PM' },
    { user: 'harshit', text: 'hmm ok\n— 7/4/24, 5:20 PM' },
    { user: 'harshit', text: 'last m kuch likha tha kya\n— 7/4/24, 5:29 PM' },

    { user: 'game', text: 'vivi15_09\nIf you were put in a random place in your city/town, could you find your way home?\nType: Truth | Rating: PG' },
    { user: 'shravii', text: 'yes\n— 7/4/24, 5:30 PM' },
    { user: 'harshit', text: 'no\n— 7/4/24, 5:30 PM' },

    { user: 'game', text: 'sirius_black007\nWhat\'s the worst decision you\'ve made?\nType: Truth | Rating: PG' },
    { user: 'shravii', text: 'believing in otaku\nxd\n— 7/4/24, 5:31 PM' },
    { user: 'harshit', text: ':khushi_kill~1:\n— 7/4/24, 5:32 PM' },
    { user: 'harshit', text: 'not focusing on jee\n— 7/4/24, 5:31 PM' },

    { user: 'game', text: 'vivi15_09\nWhere do you see yourself in 5 years?\nType: Truth | Rating: PG' },
    { user: 'shravii', text: ':what_to_do~1:\nbuilding my business\nwhich i have no idea about\n— 7/4/24, 5:32 PM' },

    { user: 'game', text: 'sirius_black007\nIn the group, who do you think fits the dumb role?\nType: Truth | Rating: PG13' },
    { user: 'shravii', text: 'me ig\n— 7/4/24, 5:34 PM' },
    { user: 'harshit', text: 'vi\n— 7/4/24, 5:34 PM' },
    { user: 'shravii', text: 'i am too inno to understand what ppl are talkin sometimes\n:vi_crying:\nuntil they tell me what it means\n— 7/4/24, 5:34 PM' },
    { user: 'harshit', text: 'me also\n— 7/4/24, 5:35 PM' },
    { user: 'harshit', text: 'but you aren\'t dumb\nyou are innocent\n— 7/4/24, 5:36 PM' },

    { user: 'system', text: 'to creating a diff server with a lot of storii times....truth and dares and fun' },

    { user: 'game', text: 'snow30_01\nIf you could know one thing from the future what would it be?\nType: Truth | Rating: PG' },
    { user: 'harshit', text: 'If i accomplished my dream \n— 7/13/2024 9:16 PM' },

    { user: 'game', text: 'snow30_01\nHave you ever asked an ex out again?\nType: Truth | Rating: PG13' },
    { user: 'harshit', text: 'never had one\n— 7/13/2024 9:16 PM' },

    { user: 'game', text: 'snow30_01\nWho was your first crush?\nType: Truth | Rating: PG13' },
    { user: 'harshit', text: '🤔\ndo you call that a crush, idk\nanyways, i am not gonna tell\n— 7/13/2024 9:16 PM' },

    { user: 'game', text: 'snow30_01\nDo you overthink a lot?\nType: Truth | Rating: PG' },
    { user: 'harshit', text: 'sometimes\n— 7/13/2024 9:17 PM' },

    { user: 'game', text: 'snow30_01\nWhat do you find is the most boring part of your life at the moment?\nType: Truth | Rating: PG' },
    { user: 'harshit', text: '🤔\nidk\n@Rose\n— 7/14/2024 7:46 PM' },
    { user: 'shravii', text: 'following the same routime daily\nroutine*\n— 7/14/2024 7:48 PM' },
    { user: 'harshit', text: 'yeah true\n— 7/14/2024 7:48 PM' },

    { user: 'game', text: 'snow30_01\nHave you ever been caught cheating in school?\nType: Truth | Rating: PG13' },
    { user: 'shravii', text: 'nope\nkari hi nahi he\n— 7/14/2024 7:48 PM' },
    { user: 'harshit', text: 'nope, but i was caught while my friend was cheating from me\n— 7/14/2024 7:48 PM' },
    { user: 'harshit', text: 'yep, mene bss krvai h cheating\nmeri sheet mere frnd k pass thi\nand sir ko pta tha ye\nto meri sheet k number count krlie the\n😂 :snow_sad:\n:what_to_do~2:\nxdd\nnext level\n— 7/14/2024 7:49 PM' },

    { user: 'game', text: 'rain_220\nWho on this server do you talk to the most and why?\nType: Truth | Rating: PG' },
    { user: 'shravii', text: 'Snow  he is an amazing listener, genuinely honest, and incredibly kind supportive person maybe not always confident abt himself but im here to encourage,support and be by his side always <3\n— 7/14/2024 9:41 PM' },
    { user: 'harshit', text: 'Not only on this server but on dc I talk to Rain the most, cuz I enjoy and like talking with her and she is a real and the first friend I got here, and doesn\'t get mad on me cuz me is dumb :snow_sad: \n— 7/14/2024 10:00 PM' },

    { user: 'game', text: 'rain_220\nWhat was the most physically painful experience of your life?\nType: Truth | Rating: PG13' },
    { user: 'shravii', text: 'ummmmmmmmmmm\nwhen i jumped off the 6th floor\naaaaaaaaaaaaaaaaaaaaaaaaaaaa\n— 7/14/2024 11:31 PM' },
    { user: 'harshit', text: 'What\n— 7/14/2024 11:31 PM' },
    { user: 'shravii', text: 'ouch it was the most painful experience\nxd\njoking\numm\nidk\n— 7/14/2024 11:32 PM' },
    { user: 'harshit', text: 'Shi m na\n— 7/14/2024 11:32 PM' },
    { user: 'shravii', text: 'ofc lol\n— 7/14/2024 11:32 PM' },
    { user: 'harshit', text: 'I thought I was talking to a ghost\n— 7/14/2024 11:32 PM' },
    { user: 'shravii', text: 'haha\n— 7/14/2024 11:32 PM' }
];

let convoIndex = 0;
function toggleChatTheme() {
    const container = document.getElementById('chatReplay');
    if (!container) return;
    container.classList.toggle('chat-dark-mode');
    const btn = document.querySelector('.chat-theme-toggle');
    if (btn) {
        btn.innerText = container.classList.contains('chat-dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}

function playFirstConversation(container) {
    convoIndex = 0;
    container.innerHTML = '';

    // Create typing indicator element
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-bubble hidden';
    typingIndicator.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';

    function nextMessage() {
        if (convoIndex >= firstConversation.length) return;

        const msg = firstConversation[convoIndex];
        let delay = 1000; // Base delay

        if (msg.user === 'system') {
            const systemDiv = document.createElement('div');
            systemDiv.className = 'text-center my-6 text-[10px] uppercase tracking-widest opacity-40 font-medium text-gray-400';
            systemDiv.textContent = msg.text;
            container.appendChild(systemDiv);
            container.scrollTop = container.scrollHeight;
            convoIndex++;
            setTimeout(nextMessage, 1500);
            return;
        } else if (msg.user === 'game') {
            const gameCard = document.createElement('div');
            gameCard.className = 'chat-game-card mx-auto my-4 p-4 bg-gray-50/5 border border-white/10 rounded-lg text-center max-w-[80%] shadow-sm';
            gameCard.innerHTML = `<div class="text-[10px] text-blue-400 uppercase tracking-widest mb-1 italic">Event Memory</div>
                                <div class="font-bold text-gray-300 text-sm whitespace-pre-wrap">${msg.text}</div>`;
            container.appendChild(gameCard);
            container.scrollTop = container.scrollHeight;

            convoIndex++;
            setTimeout(nextMessage, 2500);
            return;
        } else {
            // Typing simulation for Shravii
            if (msg.user === 'shravii') {
                container.appendChild(typingIndicator);
                typingIndicator.classList.remove('hidden');
                container.scrollTop = container.scrollHeight;

                const typeDuration = Math.min(msg.text.length * 30, 2000);
                setTimeout(() => {
                    typingIndicator.classList.add('hidden');
                    renderUserMessage(msg);
                }, typeDuration);
            } else {
                renderUserMessage(msg);
            }
        }
    }

    function renderUserMessage(msg) {
        const isHarshit = msg.user === 'harshit';
        const wrapper = document.createElement('div');
        wrapper.className = `flex flex-col mb-4 ${isHarshit ? 'items-end' : 'items-start'} group`;
        // Name + Status
        const nameRow = document.createElement('div');
        nameRow.className = 'flex items-center gap-1 mb-1 px-1';

        const nameLabel = document.createElement('div');
        nameLabel.className = 'text-[11px] font-bold opacity-60';
        nameLabel.textContent = isHarshit ? 'Harshit' : 'Shravii';
        nameLabel.style.color = isHarshit ? '#60a5fa' : '#94a3b8';

        nameRow.appendChild(nameLabel);

        if (!isHarshit) {
            const status = document.createElement('div');
            status.className = 'status-dot scale-50';
            nameRow.appendChild(status);
        }

        // Bubble
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${isHarshit ? 'chat-right' : 'chat-left'}`;
        bubble.style.whiteSpace = 'pre-wrap';
        bubble.textContent = msg.text;

        // Media Detection
        if (msg.text.includes('spotify.com')) {
            const preview = document.createElement('div');
            preview.className = 'chat-media-preview';
            preview.style.width = '100%';
            preview.innerHTML = `<iframe style="border-radius:12px" src="${msg.text.replace('open.spotify.com/', 'open.spotify.com/embed/')}" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
            bubble.appendChild(preview);
        }

        // Click to Heart Reaction
        bubble.onclick = () => {
            const existing = bubble.querySelector('.chat-reaction');
            if (existing) {
                existing.remove();
            } else {
                const heart = document.createElement('div');
                heart.className = 'chat-reaction';
                heart.innerHTML = '❤️';
                bubble.appendChild(heart);
            }
        };

        wrapper.appendChild(nameRow);
        wrapper.appendChild(bubble);

        // Read Receipt for Shravii's messages (viewed by Harshit)
        if (!isHarshit) {
            const seen = document.createElement('div');
            seen.className = 'seen-receipt';

            // Find Harshit's reply time
            let replyTime = '';
            for (let i = convoIndex + 1; i < firstConversation.length; i++) {
                if (firstConversation[i].user === 'harshit') {
                    const match = firstConversation[i].text.match(/(\d{1,2}:\d{2}\s?[AP]M)/i);
                    if (match) {
                        replyTime = match[1];
                        break;
                    }
                }
            }

            // Fallback to current message's time if no reply found
            if (!replyTime) {
                const match = msg.text.match(/(\d{1,2}:\d{2}\s?[AP]M)/i);
                if (match) replyTime = match[1];
            }

            seen.textContent = 'Read ' + (replyTime || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            wrapper.appendChild(seen);
            setTimeout(() => seen.style.opacity = '0.5', 1000);
        }

        container.appendChild(wrapper);
        container.scrollTop = container.scrollHeight;


        const readDelay = Math.min(Math.max(msg.text.length * 40, 800), 3000);
        convoIndex++;
        setTimeout(nextMessage, readDelay);
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
        const app = apps.find(a => a && a.id === id);
        if (!app) {
            console.error(`App with id "${id}" not found.`);
            if (typeof createModal === 'function') {
                createModal({ title: 'System Error', desc: `Application "${id}" is missing or corrupted.`, icon: '⚠️' });
            } else {
                alert(`System Error: App "${id}" not found.`);
            }
            return;
        }

        // Dynamic Menu Bar Name
        setAppName(app.title);

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
        win.style.width = (app.width || 800) + 'px';
        win.style.height = (app.height || 600) + 'px';
        const safeTop = Math.max(40, (window.innerHeight - (app.height || 600)) / 2 + Math.random() * 20);
        win.style.left = `calc(50% - ${(app.width || 800) / 2}px + ${Math.random() * 20}px)`;
        win.style.top = safeTop + 'px';
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
/* === DYNAMIC APP NAME LOGIC === */
function setAppName(name) {
    const el = document.getElementById('menubar-app-name');
    if (el) el.innerText = name;
}

/* Wrappers for Close/Minimize to reset name */
// We use a safe check to avoid infinite recursion if re-evaluated
if (typeof _origClose === 'undefined') {
    var _origClose = closeApp;
    closeApp = function (id) {
        _origClose(id);
        setTimeout(() => { if (state.appsOpened.size === 0) setAppName('Finder'); }, 100);
    };
}

if (typeof _origMin === 'undefined') {
    var _origMin = minimizeApp;
    minimizeApp = function (id) {
        _origMin(id);
        setTimeout(() => { if (state.appsOpened.size === 0) setAppName('Finder'); }, 100);
    };
}

/* Helpers */
function showAffirmation(i) { const el = document.getElementById('aff-text'); if (el) { el.style.opacity = 0; setTimeout(() => { el.innerText = `"${affirmations[i]}"`; el.style.opacity = 1; }, 300); } }
function playMusic(m) {
    createModal({ title: 'Now Playing', desc: `Playing ${m} 🎵`, icon: '🎧' });
    setSystemStatus(`Playing ${m}...`, 5000);
}
function checkUnlock() { if (state.countdownFinished && state.appsOpened.size >= 5) { document.getElementById('lock-msg').style.display = 'none'; document.getElementById('unlock-msg').classList.remove('hidden'); } }

/* Drag with Focus Logic */
let dragItem = null, offX = 0, offY = 0;
function startDrag(e, id) {
    if (e.target.closest('.traffic-lights')) return;

    // Focus App Name
    const appId = id.replace('win-', '');
    const app = apps.find(a => a.id === appId);
    if (app) setAppName(app.title);

    dragItem = document.getElementById(id);
    offX = e.clientX - dragItem.offsetLeft;
    offY = e.clientY - dragItem.offsetTop;
    dragItem.style.zIndex = ++zIndex;
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
}
function doDrag(e) { if (!dragItem) return; dragItem.style.left = (e.clientX - offX) + 'px'; dragItem.style.top = (e.clientY - offY) + 'px'; }
function stopDrag() { document.removeEventListener('mousemove', doDrag); document.removeEventListener('mouseup', stopDrag); dragItem = null; }






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

/* === TERMINAL APP ENHANCEMENTS === */

const firstMeetLog = [
    "<span class='text-gray-500'>[6/20/24 12:22 AM]</span> <span class='text-green-400 font-bold'>Harshit:</span> Hi",
    "<span class='text-gray-500'>[6/20/24 12:23 AM]</span> <span class='text-purple-400 font-bold'>Shravii:</span> Helloo",
    "<span class='text-gray-500'>[6/20/24 12:23 AM]</span> <span class='text-green-400 font-bold'>Harshit:</span> sup",
    "<span class='text-gray-500'>[6/20/24 12:32 AM]</span> <span class='text-green-400 font-bold'>Harshit:</span> is anyone watching euros?",
    "<span class='text-gray-500'>[6/20/24 12:33 AM]</span> <span class='text-purple-400 font-bold'>Shravii:</span> Umm euros?",
    "<span class='text-gray-500'>[6/20/24 12:33 AM]</span> <span class='text-purple-400 font-bold'>Shravii:</span> Where ya from Harry?",
    "<span class='text-gray-500'>[6/20/24 12:34 AM]</span> <span class='text-green-400 font-bold'>Harshit:</span> India",
    "<span class='text-gray-500'>[6/20/24 12:35 AM]</span> <span class='text-purple-400 font-bold'>Shravii:</span> :o",
    "<span class='text-gray-500'>[6/20/24 12:35 AM]</span> <span class='text-green-400 font-bold'>Harshit:</span> <a href='https://open.spotify.com/track/086myS9r57YsLbJpU0TgK9' target='_blank' class='underline hover:text-green-300'>Spotify Link 🎵</a>",
    "<span class='text-gray-500'>[6/20/24 12:39 AM]</span> <span class='text-purple-400 font-bold'>Shravii:</span> I'll hear and comment"
];

function typeToTerminal(element, text, delay = 20, callback) {
    const line = document.createElement('div');
    line.className = 'term-line mb-1'; // Check if we need to add styling for this
    element.appendChild(line);
    element.scrollTop = element.scrollHeight;

    // Check if text contains HTML tags
    if (text.includes('<')) {
        // For HTML content, we can't easily do character-by-character without breaking tags
        // So we'll fade it in or type it differently. 
        // Simple approach: Insert HTML immediately but hidden, then reveal? 
        // Or just set innerHTML since we want the colors.
        line.innerHTML = text;
        // Optional: Add a fade-in class if wanted, but standard terminal is instant or typed.
        // Let's stick to instant appearance for HTML lines to preserve formatting safety
        if (callback) setTimeout(callback, delay * 5);
    } else {
        // Plain text typing
        let i = 0;
        const interval = setInterval(() => {
            line.textContent += text[i];
            element.scrollTop = element.scrollHeight;
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, delay);
    }
}

function runTerminalSequence(element, lines, speed = 20, gap = 500, onComplete) {
    let index = 0;

    function nextLine() {
        if (index >= lines.length) {
            if (onComplete) onComplete();
            return;
        }
        typeToTerminal(element, lines[index], speed, () => {
            index++;
            setTimeout(nextLine, gap);
        });
    }

    nextLine();
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
    input.value = '';
    output.scrollTop = output.scrollHeight;

    // Process
    const command = cmd.toLowerCase().split(' ')[0];

    // Commands that don't need typing effect can return immediately or use simple output
    if (command === 'clear') {
        output.innerHTML = '';
        return;
    }

    // Disable input during cinematic sequences
    input.disabled = true;
    input.placeholder = "Processing...";

    const enableInput = () => {
        input.disabled = false;
        input.placeholder = "Enter command...";
        input.focus();
    };

    switch (command) {
        case 'help':
            runTerminalSequence(output, [
                "Available Commands:",
                "- help: Show this list",
                "- whois: Identify the user",
                "- strength: Analyze core metrics",
                "- secret: Unlock hidden directory",
                "- firstmeet: Replay origin connection",
                "- timeline: Show journey milestones",
                "- clear: Clear screen"
            ], 10, 100, enableInput);
            break;

        case 'whois':
            runTerminalSequence(output, [
                "Resolving identity...",
                "User: Harshit",
                "Role: Admin",
                "Strength: Visible",
                "Weakness: Never admitted",
                "Status: Still becoming"
            ], 20, 300, enableInput);
            break;

        case 'strength':
            runTerminalSequence(output, [
                "Analyzing metrics...",
                "Physical: 85%",
                "Mental: Adaptive",
                "Emotional: Hidden (High)",
                "Resilience: 99.9%",
                "Note: Survived things he never talks about"
            ], 20, 300, enableInput);
            break;

        case 'secret':
            runTerminalSequence(output, [
                "Accessing secure vault...",
                "Verifying credentials...",
                "Access Granted.",
                "Opening 'Vault' folder..."
            ], 30, 400, () => {
                setTimeout(() => Apps.open('app-vault'), 500);
                enableInput();
            });
            break;

        case 'firstmeet':
            runTerminalSequence(output, [
                "Initializing memory buffer...",
                "Locating origin point...",
                "Timestamp found: 6/20/24 12:21 AM",
                "Connection status: UNEXPECTED",
                "",
                "Replaying messages:"
            ], 18, 600, () => {
                setTimeout(() => {
                    runTerminalSequence(output, firstMeetLog, 25, 800, enableInput);
                }, 1000);
            });
            break;

        case 'timeline':
            runTerminalSequence(output, [
                "Boot Sequence:",
                "• 12:21 AM — Connection Initialized",
                "• Casual words exchanged",
                "• Laughter detected",
                "• Trust slowly compiled",
                "• Bond exceeded expected parameters"
            ], 20, 400, enableInput);
            break;

        case 'sudo':
            runTerminalSequence(output, [
                "Checking permissions...",
                "Error: You are already the highest authority here."
            ], 30, 200, enableInput);
            break;

        default:
            output.innerHTML += `<div><span class="term-error">Command not found: ${command}</span></div>`;
            enableInput();
            break;
    }
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

    // 5. Hide Dev Skip Button
    const skipBtn = document.getElementById('dev-skip-btn');
    if (skipBtn) skipBtn.style.display = 'none';

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



// Global Exports
window.initVoiceBox = initVoiceBox;

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

/* === JOURNEY LOGIC === */
/* === AUTOMATED MOVIE SEQUENCER === */
let movieTimer = null;
let currentMovieIndex = 0;
let movieItems = [];

function renderJourney() {
    const container = document.getElementById('journey-container');
    if (!container) return;

    // Reset and Flatten
    currentMovieIndex = 0;
    movieItems = [];
    journeyData.forEach(ch => {
        ch.items.forEach(item => {
            movieItems.push({ ...item, chapterColor: ch.color });
        });
    });

    container.innerHTML = `
        <div class="movie-viewport relative h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden">
            <!-- Movie Screen -->
            <div id="movie-screen" class="w-full max-w-4xl h-full flex items-center justify-center relative">
                <div id="movie-start" class="text-center cursor-pointer group" onclick="startAutomatedMovie()">
                    <div class="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">📀</div>
                    <div class="text-3xl font-black text-white tracking-[0.3em] uppercase mb-2">The Journey</div>
                    <div class="text-[10px] text-blue-400 font-mono tracking-[0.5em] animate-pulse">CLICK TO ENTER CINEMA</div>
                </div>
            </div>

            <!-- Cinematic Vignette -->
            <div class="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,1)]"></div>
        </div>
    `;
}

function startAutomatedMovie() {
    const startBtn = document.getElementById('movie-start');
    if (startBtn) startBtn.classList.add('opacity-0', 'pointer-events-none');

    setTimeout(() => {
        if (startBtn) startBtn.remove();
        playNextMovieScene();
    }, 1000);
}

function playNextMovieScene() {
    const screen = document.getElementById('movie-screen');
    if (!screen) return;

    if (currentMovieIndex >= movieItems.length) {
        showTheEnd();
        return;
    }

    const item = movieItems[currentMovieIndex];
    screen.innerHTML = '';

    const frame = document.createElement('div');
    frame.className = 'movie-frame opacity-0 transition-opacity duration-1000 flex flex-col items-center justify-center text-center w-full h-full p-12';

    // Automatic Timing Logic (Base delay)
    let displayDuration = 3000; // default 3s

    if (item.type === 'title') {
        frame.innerHTML = `
            <div class="movie-title-card scale-90 transition-transform duration-[3s] ease-out">
                <h1 class="text-6xl font-black text-white mb-4 tracking-tighter">${item.text}</h1>
                <div class="w-24 h-1 mx-auto rounded-full" style="background: ${item.chapterColor}"></div>
            </div>
        `;
        displayDuration = 4000;
    } else if (item.type === 'chat') {
        frame.innerHTML = `
            <div class="movie-chat border-l-4 border-blue-500 bg-white/5 p-8 rounded-r-2xl max-w-lg text-left backdrop-blur-sm">
                <div class="text-[10px] font-bold text-blue-400 uppercase mb-2 opacity-50 tracking-widest">${item.speaker}</div>
                <div id="typewriter-id" class="text-2xl font-medium text-white/90"></div>
            </div>
        `;
        // Timing depends on text length
        displayDuration = 2000 + (item.text.length * 60);
    } else if (item.type === 'scene') {
        frame.innerHTML = `
            <div class="text-3xl font-light italic text-white/70 leading-relaxed px-10">"${item.text}"</div>
        `;
        displayDuration = 4500;
    } else if (item.type === 'poem') {
        frame.innerHTML = `
            <div class="poem-scroll-card py-16 px-10 border-y border-white/5">
                <div class="text-2xl font-serif italic text-white/60 leading-[3] tracking-widest whitespace-pre-line">
                    ${item.text}
                </div>
            </div>
        `;
        displayDuration = 6000;
    } else if (item.type === 'recipe') {
        frame.innerHTML = `
            <div class="recipe-cinematic text-left">
                <div class="text-xs font-black text-yellow-500 uppercase tracking-widest mb-6 border-b border-yellow-500/20 pb-2">${item.title}</div>
                <div class="space-y-4 text-2xl font-serif italic text-yellow-100/40">
                    ${item.items.map((i, idx) => `<div class="step-reveal opacity-0" style="transition-delay: ${idx * 0.8}s">• ${i}</div>`).join('')}
                </div>
            </div>
        `;
        displayDuration = 2000 + (item.items.length * 1500);
    }

    screen.appendChild(frame);

    // Fade In
    requestAnimationFrame(() => {
        frame.classList.remove('opacity-0');
        if (item.type === 'title') {
            setTimeout(() => frame.querySelector('.movie-title-card').classList.remove('scale-90'), 50);
        }
        if (item.type === 'chat') {
            runTypewriterMovie('typewriter-id', item.text);
        }
        if (item.type === 'recipe') {
            setTimeout(() => {
                frame.querySelectorAll('.step-reveal').forEach(el => el.classList.remove('opacity-0', 'translate-x-4'));
                // Use a different reveal for recipe
                frame.querySelectorAll('.step-reveal').forEach(el => {
                    el.style.transition = 'opacity 1s, transform 1s';
                    el.style.opacity = '1';
                });
            }, 100);
        }
    });

    // Auto Advance
    movieTimer = setTimeout(() => {
        frame.classList.add('opacity-0');
        setTimeout(() => {
            currentMovieIndex++;
            playNextMovieScene();
        }, 1000);
    }, displayDuration);
}

function runTypewriterMovie(id, text) {
    const el = document.getElementById(id);
    if (!el) return;
    let i = 0;
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }
    type();
}

function showTheEnd() {
    const screen = document.getElementById('movie-screen');
    screen.innerHTML = `
        <div class="text-center animate-fade-in-slow">
            <div class="text-sm font-mono text-white/30 tracking-[1.5em] mb-6">THE END</div>
            <h1 class="text-5xl font-black text-white mb-2 tracking-tighter">To Be Continued... ❤️</h1>
            <p class="text-blue-500/50 text-xs tracking-widest uppercase mt-12">Closed System Reflections</p>
            <button onclick="renderJourney()" class="mt-8 text-[10px] text-white/20 hover:text-white transition uppercase tracking-[0.3em]">Replay Film</button>
        </div>
    `;
}

// START HERE
window.Apps = Apps; // Global exposure
window.onload = function () {
    startCountdownGatekeeper();
    initHappyMenuBar();
};

/* ========================================= */
/* ==== ENHANCED MENU BAR LOGIC ==== */
/* ========================================= */

// 1. System Status
function setSystemStatus(text, duration = 0) {
    const el = document.getElementById('system-status');
    if (!el) return;
    el.innerText = 'Status: ' + text;
    if (duration > 0) {
        setTimeout(() => {
            el.innerText = 'Status: Online';
        }, duration);
    }
}

// 2. Battery
function initBattery() {
    const icon = document.getElementById('battery-icon');
    const level = document.getElementById('battery-level');

    if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
            const updateBattery = () => {
                const pct = Math.round(battery.level * 100);
                if (level) level.innerText = pct + '% ' + (battery.charging ? '(Charging)' : '');
                if (icon) {
                    if (battery.charging) icon.className = 'fas fa-bolt text-[14px] text-yellow-400';
                    else if (pct > 75) icon.className = 'fas fa-battery-full text-[14px] opacity-80';
                    else if (pct > 50) icon.className = 'fas fa-battery-three-quarters text-[14px] opacity-80';
                    else if (pct > 25) icon.className = 'fas fa-battery-half text-[14px] opacity-80';
                    else icon.className = 'fas fa-battery-quarter text-[14px] text-red-500';
                }
            };
            updateBattery();
            battery.addEventListener('levelchange', updateBattery);
            battery.addEventListener('chargingchange', updateBattery);
        });
    } else {
        // Fallback for non-supported browsers
        if (level) level.innerText = '100% (External Power)';
    }
}

// 3. Wi-Fi
function initNetworkStatus() {
    const icon = document.getElementById('wifi-icon');
    const update = () => {
        const isOnline = navigator.onLine;
        if (icon) {
            icon.className = isOnline ? 'fas fa-wifi text-[14px]' : 'fas fa-wifi text-[14px] text-red-500 opacity-50';
            icon.parentElement.title = isOnline ? 'Wi-Fi: Connected (Strong)' : 'Wi-Fi: Disconnected';
        }
        setSystemStatus(isOnline ? 'Online' : 'Offline', 0);
    };
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    update();
}

// 4. Spotlight
function toggleSpotlight() {
    const overlay = document.getElementById('spotlight-overlay');
    const input = document.getElementById('spotlight-input');
    const results = document.getElementById('spotlight-results');

    if (!overlay) return;

    if (overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden');
        if (input) {
            input.value = '';
            input.focus();
        }
        if (results) {
            results.innerHTML = '';
            results.classList.add('hidden');
        }
    } else {
        overlay.classList.add('hidden');
    }
}
// Spotlight Input Listener
document.getElementById('spotlight-input')?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const resultsContainer = document.getElementById('spotlight-results');
    if (!resultsContainer) return;

    if (query.length === 0) {
        resultsContainer.innerHTML = '';
        resultsContainer.classList.add('hidden');
        return;
    }

    // Filter Apps
    const matches = apps.filter(app => app.title.toLowerCase().includes(query));

    const html = matches.map(app =>
        '<div class=\'spotlight-result\' onclick=\'Apps.open(\"' + app.id + '\"); toggleSpotlight();\'>' +
        '<div class=\'result-icon\'>' + (app.icon || '📱') + '</div>' +
        '<div class=\'result-info\'><h4>' + app.title + '</h4><p>Application</p></div>' +
        '</div>'
    ).join('');

    if (matches.length > 0) {
        resultsContainer.innerHTML = html;
        resultsContainer.classList.remove('hidden');
    } else {
        resultsContainer.innerHTML = '<div class=\'p-4 text-center text-white/50 text-sm\'>No results found.</div>';
        resultsContainer.classList.remove('hidden');
    }
});

// 5. Brightness
document.getElementById('brightness-slider')?.addEventListener('input', (e) => {
    const val = e.target.value;
    const opacity = (100 - val) / 100;
    const dimmer = document.getElementById('brightness-dimmer');
    if (dimmer) dimmer.style.opacity = opacity;
});

// 6. Weather
function initWeather() {
    const wIcon = document.getElementById('weather-icon');
    const wText = document.getElementById('weather-text');
    const wTip = document.querySelector('.weather-tooltip');

    const moods = [
        { icon: 'fas fa-cloud-sun', text: 'Mostly Sunny', tip: 'Perfect day for a walk.' },
        { icon: 'fas fa-cloud-moon', text: 'Clear Night', tip: 'Look at the stars.' },
        { icon: 'fas fa-bolt', text: 'Stormy', tip: 'Stay inside and code.' },
        { icon: 'fas fa-snowflake', text: 'Frosty', tip: 'Mr. Snow is chilling.' },
        { icon: 'fas fa-coffee', text: 'Cozy', tip: 'Time for hot cocoa.' }
    ];
    const mood = moods[Math.floor(Math.random() * moods.length)];

    if (wIcon && wText) {
        wIcon.className = mood.icon + ' text-blue-300';
        wText.innerText = mood.text;
        if (wTip) wTip.innerText = mood.tip;
    }
}



/* ========================================= */
/* ==== SYSTEM ACTIONS (The Thoughtful Part) ==== */
/* ========================================= */
const System = {
    about: () => {
        // Create a dedicated floating window
        const id = 'sys-about-win';
        if (document.getElementById(id)) return; // Already open

        const win = document.createElement('div');
        win.id = id;
        const safeTop = Math.max(40, (window.innerHeight - 300) / 2); // approx height
        win.className = 'window bg-[#ECECEC] rounded-xl shadow-2xl z-[5000] overflow-hidden flex flex-col font-sans animate-zoom-in';
        win.style.position = 'absolute';
        win.style.width = '320px';
        win.style.height = 'auto';
        win.style.left = `calc(50% - 160px)`;
        win.style.top = safeTop + 'px';

        win.innerHTML = `
            <div class="h-6 bg-gradient-to-b from-gray-200 to-gray-300 border-b border-gray-400 flex items-center px-2 relative" onmousedown="startDrag(event, '${id}')">
                <div class="flex gap-1.5 absolute left-2">
                    <div class="w-3 h-3 rounded-full bg-red-500 border border-red-600 hover:bg-red-600 cursor-pointer flex items-center justify-center group" onclick="document.getElementById('${id}').remove()">
                         <span class="hidden group-hover:block text-[8px] text-black/50 font-bold">x</span>
                    </div>
                </div>
                <div class="w-full text-center text-xs font-semibold text-gray-600 pointer-events-none">About This Mac</div>
            </div>
            <div class="p-6 flex flex-col items-center justify-center text-center">
                <div class="text-6xl mb-4">🍎</div> 
                <h2 class="text-2xl font-bold text-gray-800">Harshit OS</h2>
                <p class="text-sm text-gray-500 font-medium mb-4">Version 19.0 (Best Edition)</p>
                <div class="bg-white rounded border border-gray-300 p-3 w-full text-xs text-left shadow-inner space-y-1">
                    <div class="flex justify-between"><span class="text-gray-500">Processor</span> <span class="font-medium">Heart M1 (Infinite Love)</span></div>
                    <div class="flex justify-between"><span class="text-gray-500">Memory</span> <span class="font-medium">Unforgettable</span></div>
                    <div class="flex justify-between"><span class="text-gray-500">Startup Disk</span> <span class="font-medium">Memories</span></div>
                    <div class="flex justify-between"><span class="text-gray-500">Graphics</span> <span class="font-medium">Imagination Pro</span></div>
                </div>
                <div class="mt-4 text-[10px] text-gray-400">© 2024 Shravii Inc. All Rights Reserved.</div>
            </div>
        `;
        document.body.appendChild(win);
    },

    settings: () => {
        // Toggle Control Center as a simple settings panel
        toggleControlCenter();
    },

    sleep: () => {
        const sleepOverlay = document.createElement('div');
        sleepOverlay.className = 'fixed inset-0 bg-black z-[99999] cursor-pointer fade-in-out';
        sleepOverlay.title = "Click to Wake";
        sleepOverlay.onclick = function () {
            this.style.opacity = 0;
            setTimeout(() => this.remove(), 1000);
        };
        document.body.appendChild(sleepOverlay);
    },

    restart: () => {
        const overlay = document.createElement('div');
        overlay.className = 'fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center fade-in-out';
        overlay.innerHTML = `<div class="text-white text-4xl mb-4 animate-spin"><i class="fas fa-spinner"></i></div><div class="text-white/50 text-sm font-light">Restarting System...</div>`;
        document.body.appendChild(overlay);

        setTimeout(() => location.reload(), 2500);
    },

    shutdown: () => {
        const overlay = document.createElement('div');
        overlay.className = 'fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center fade-in-out';
        overlay.innerHTML = `<div class="text-white/30 text-lg font-light tracking-widest fade-in-out-slow">It is now safe to turn off your computer.</div>`;
        document.body.appendChild(overlay);
    }
};

window.System = System; // Expose

/* ========================================= */
/* ==== TOP BAR ENHANCEMENTS ==== */
/* ========================================= */

// Calendar Logic
let calendarDate = new Date(); // Global state for navigation

function changeMonth(offset) {
    calendarDate.setMonth(calendarDate.getMonth() + offset);
    renderCalendar();
}

function toggleCalendar() {
    const cal = document.getElementById('mini-calendar');
    if (!cal) return;

    if (cal.classList.contains('hidden')) {
        cal.classList.remove('hidden');
        calendarDate = new Date(); // Reset to today on open
        renderCalendar();
    } else {
        cal.classList.add('hidden');
    }
}

function renderCalendar() {
    const viewDate = calendarDate;
    const today = new Date(); // Actual Today

    const monthEl = document.getElementById('cal-month');
    const yearEl = document.getElementById('cal-year');
    const daysEl = document.getElementById('cal-days');
    const footerEl = document.querySelector('#mini-calendar .text-blue-300');

    if (!daysEl) return;

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Set Header
    if (monthEl) monthEl.innerText = monthNames[viewDate.getMonth()];
    if (yearEl) yearEl.innerText = viewDate.getFullYear();

    // Define Events
    const specialDates = [
        { d: 30, m: 0, title: "Harshit Birthday 🎂" }, // Jan 30
        { d: 15, m: 8, title: "Shravii's Birthday 🎉" }, // Sep 15
        { d: 20, m: -1, title: "The First Meet ❤️" }   // Monthly
    ];

    // Calculate Days for ViewDate
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    daysEl.innerHTML = '';

    // Empty slots
    for (let i = 0; i < firstDay; i++) {
        daysEl.innerHTML += `<div></div>`;
    }

    let activeEventText = "No events selected.";

    // Days
    for (let d = 1; d <= daysInMonth; d++) {
        // Is this day TODAY (Absolute)?
        const isToday = (d === today.getDate() && month === today.getMonth() && year === today.getFullYear());

        // Does this day have an EVENT?
        const evt = specialDates.find(e => e.d === d && (e.m === -1 || e.m === month));

        // Update footer if today is visible
        if (isToday) activeEventText = evt ? evt.title : "No events today.";

        // Visuals
        let dayClass = "aspect-square flex flex-col items-center justify-center rounded-full relative ";
        if (isToday) dayClass += "bg-red-500 text-white shadow-lg font-bold";
        else dayClass += "hover:bg-white/10 cursor-pointer text-gray-300 transition-colors";

        // Event Dot
        const dotHtml = evt ? `<div class="w-1 h-1 rounded-full ${isToday ? 'bg-white' : 'bg-blue-400'} absolute bottom-1"></div>` : '';

        // Click Action
        const clickAction = evt ? `document.querySelector('#mini-calendar .text-blue-300').innerText = '${evt.title.replace("'", "\\'")}'` : `document.querySelector('#mini-calendar .text-blue-300').innerText = 'No events on this day.'`;

        daysEl.innerHTML += `
            <div class="${dayClass}" title="${evt ? evt.title : ''}" onclick="${clickAction}">
                ${d}
                ${dotHtml}
            </div>
        `;
    }

    if (footerEl) footerEl.innerText = activeEventText;
}

// Initialize Everything
let clockInterval;
function initHappyMenuBar() {
    initBattery();
    initNetworkStatus();
    initWeather();

    // Clear existing interval if any
    if (clockInterval) clearInterval(clockInterval);
    clockInterval = setInterval(updateClock, 1000);

    updateClock();

    // Close calendar on outside click
    document.addEventListener('click', (e) => {
        const cal = document.getElementById('mini-calendar');
        const clock = document.getElementById('clock');
        if (cal && !cal.classList.contains('hidden') && !cal.contains(e.target) && e.target !== clock) {
            cal.classList.add('hidden');
        }
    });
}

/* === FACTS APP INTERACTIVE LOGIC === */
function startFactsApp() {
    const term = document.getElementById('facts-terminal');
    const main = document.getElementById('facts-main-content');
    if (!term || !main) return;

    term.classList.add('hidden');
    main.classList.add('active');

    // Auto-reveal sections with a slight delay
    const sections = main.querySelectorAll('.facts-section');
    sections.forEach((sec, i) => {
        setTimeout(() => {
            sec.classList.add('revealed');
        }, 500 + (i * 300));
    });
}







function triggerMadridEffect(btn) {
    const balls = ['⚽', '⚽️', '🧤', '🏆'];
    const rect = btn.getBoundingClientRect();

    // Create particles
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'ball-particle';
        p.innerText = balls[Math.floor(Math.random() * balls.length)];

        const tx = (Math.random() - 0.5) * 400;
        const ty = (Math.random() - 1) * 400;

        p.style.setProperty('--tx', `${tx}px`);
        p.style.setProperty('--ty', `${ty}px`);
        p.style.left = `${rect.left + rect.width / 2}px`;
        p.style.top = `${rect.top}px`;

        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    }

    // Audio
    const audio = document.getElementById('madrid-siuuu');
    if (audio) {
        audio.volume = 0.5;
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Audio play blocked", e));
    }

    // Feedback
    btn.innerText = "SIUUUU!!! ⚽";
    setTimeout(() => {
        btn.innerText = "Hala Madrid! 🚀";
    }, 2000);
}

function toggleUCLMode() {
    const dash = document.getElementById('madrid-dash');
    const headText = document.getElementById('madrid-head-text');
    const logo = document.getElementById('madrid-logo-icon');
    const tier = document.getElementById('madrid-tier');

    if (dash.classList.contains('ucl-mode')) {
        // Switch to La Liga
        dash.classList.remove('ucl-mode');
        headText.innerText = "HALAMADRID DASHBOARD";
        logo.innerText = "⚽";
        tier.innerText = "Ultra Tier";
    } else {
        // Switch to UCL
        dash.classList.add('ucl-mode');
        headText.innerText = "CHAMPIONS LEAGUE MODE";
        logo.innerText = "🏆";
        tier.innerText = "15 KINGS";
    }
}

function createModal({ title, desc, icon }) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl transform scale-100 transition-all">
            <div class="text-center flex flex-col items-center">
                <div class="text-4xl mb-4">${icon || 'ℹ️'}</div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">${title}</h3>
                <p class="text-gray-500 text-center mb-6">${desc}</p>
                <button class="bg-blue-500 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition" onclick="this.closest('.fixed').remove()">Okay</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}
window.createModal = createModal;

/* === WHEN TIRED LOGIC === */
const tiredMessages = [
    {
        audio: 'assets/tired_1.mp3',
        text: `Hey.

I know you’re tired.
Not the “sleepy” kind — the kind where even existing feels heavy.

You don’t have to hold yourself together right now.
You don’t have to explain anything.

If today asked too much from you, it’s okay to put it down.
You’re allowed to rest without earning it.

I see how much you try.
Even on days when no one notices.

For now, just stay here.
Breathe.
I’m not going anywhere.`
    },

    {
        audio: 'assets/tired_2.mp3',
        text: `Hey.
I know you’re tired.
The kind where your mind won’t slow down and your body feels done.

You don’t need to be okay right now.
You don’t need to figure anything out.

If today took too much from you,
it’s okay to stop giving.

Just sit here for a bit.
Breathe.
I’m right here.`
    },

    {
        audio: 'assets/tired_3.mp3',
        text: `I know it’s been a long day.
And maybe a longer stretch of days before that.

You don’t have to keep pushing tonight.
Nothing needs to be solved.

You’ve already done enough.
Even if it doesn’t feel like it.

Stay for a moment.
Let yourself rest.
I’m not leaving.`
    },

    {
        audio: 'assets/tired_4.mp3',
        text: `Hey…
You’ve been holding a lot inside.

You don’t need to hold it anymore.
Not here.

If you feel worn out, that makes sense.
Anyone would.

Just pause with me.
Breathe slowly.
You’re safe right now.`
    },

    {
        audio: 'assets/tired_5.mp3',
        text: `I know you’re tired in ways sleep doesn’t fix.

You don’t have to pretend you’re fine.
You don’t owe strength to anyone.

If today was heavy,
you’re allowed to put it down.

Stay here for a moment.
Let the quiet settle.
I’m here with you.`
    },

    {
        audio: 'assets/tired_6.mp3',
        text: `It’s okay if you’re exhausted.
It’s okay if you feel empty.

You don’t need to carry everything tonight.
You don’t need to be strong.

You matter even when you rest.
Especially then.

Breathe.
Stay.
I’m not going anywhere.`
    }
];

function initTired() {
    const container = document.getElementById('tired-content');
    if (!container) return;

    container.innerHTML = '';

    // Pick random message
    const data = tiredMessages[Math.floor(Math.random() * tiredMessages.length)];
    const lines = data.text.split('\n');

    // 1. Create Audio Player (Hidden initially)
    const audioWrapper = document.createElement('div');
    audioWrapper.className = 'tired-audio-wrapper opacity-0 transition duration-1000';
    audioWrapper.innerHTML = `
        <audio id="tired-audio-player" src="${data.audio}"></audio>
        <button class="tired-play-btn" onclick="toggleTiredAudio()">
            <span id="tired-play-icon">🎙️</span>
            <span class="text-xs ml-2">Voice Note</span>
        </button>
    `;
    container.appendChild(audioWrapper);

    // 2. Play Lines
    let delay = 800;

    lines.forEach(line => {
        if (line.trim() === '') {
            const spac = document.createElement('div');
            spac.style.height = '16px';
            container.appendChild(spac);
        } else {
            const div = document.createElement('div');
            div.className = 'tired-line';
            div.innerText = line;
            container.appendChild(div);

            setTimeout(() => {
                div.classList.add('visible');
            }, delay);

            delay += 1200;
        }
    });

    // Reveal Audio Button after text starts
    setTimeout(() => {
        audioWrapper.classList.remove('opacity-0');
    }, 1500);
}

// Helper to toggle audio
function toggleTiredAudio() {
    const audio = document.getElementById('tired-audio-player');
    const icon = document.getElementById('tired-play-icon');
    if (!audio) return;

    if (audio.paused) {
        audio.play().catch(e => console.log("Audio missing or blocked"));
        icon.innerText = "⏸️";
        icon.classList.add('animate-pulse');
    } else {
        audio.pause();
        icon.innerText = "🎙️";
        icon.classList.remove('animate-pulse');
    }

    // Reset on end
    audio.onended = () => {
        icon.innerText = "🎙️";
        icon.classList.remove('animate-pulse');
    };
}
window.toggleTiredAudio = toggleTiredAudio;
window.initTired = initTired;


/* === INKPOT LOGIC === */
const inkEntries = [
    `Some words are better left written in ink than spoken aloud.`,
    `Sometimes I wonder if you know how much impact you have. Providing a safe space isn't easy, but you make it look effortless.`,
    `Friendship isn't about talking every day. It's about the comfort of knowing that when we do, it's just like before.`
];
let currentInkIndex = 0;

function initInkpot() {
    // Slight delay to ensure DOM is ready if animation plays
    setTimeout(() => {
        showInkEntry(currentInkIndex);
    }, 100);
}

function showInkEntry(index) {
    const el = document.getElementById('journal-entry');
    if (!el) return;

    // Fade out
    el.style.opacity = 0;
    el.style.transform = 'translateY(5px)';

    setTimeout(() => {
        el.textContent = inkEntries[index] || '';
        // Fade in
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
    }, 300);
}

function nextInkEntry() {
    if (currentInkIndex < inkEntries.length - 1) {
        currentInkIndex++;
        showInkEntry(currentInkIndex);
    }
}

function prevInkEntry() {
    if (currentInkIndex > 0) {
        currentInkIndex--;
        showInkEntry(currentInkIndex);
    }
}

function newInkEntry() {
    const txt = prompt('Pour your thoughts...');
    if (txt) {
        inkEntries.push(txt);
        currentInkIndex = inkEntries.length - 1;
        showInkEntry(currentInkIndex);
    }
}

/* === SHRAVII.EXE LOGIC === */
const shraviiQuotes = [
    // === CARE & HEALTH ===
    "Did you drink water today? Hydrate or diedrate! 💧",
    "Posture check! Sit up straight, you banana! 🍌",
    "Have you eaten? And no, coffee doesn't count as a meal. 🍱",
    "Take a deep breath. In... Out... Good. 🌬️",
    "Stretch your wrists! Carpal tunnel is not a vibe. ✋",
    "Eye strain is real. Look at something 20 feet away for 20 seconds. 👀",
    "Go touch some grass. Or at least look at a window. 🌳",
    "Unclench your jaw. Relax your shoulders. You're tense! 💆‍♂️",
    "Is your room dark? Turn on a light! 💡",
    "Don't forget to blink! 👁️",

    // === ENCOURAGEMENT ===
    "I'm so proud of you. Just existing is hard sometimes. ❤️",
    "You are doing better than you think. Trust me. 🌟",
    "I believe in you. Even when you don't. ✨",
    "You are enough. Exactly as you are. 💖",
    "Don't be so hard on yourself. You're learning. 🧠",
    "Everything is figure-out-able. You got this. 🧩",
    "Your effort matters, even the small stuff. 🐜",
    "You are worthy of rest. You are worthy of love. 🛌",
    "Sending you a virtual hug. Squeeze! 🫂",
    "You make the world brighter just by being in it. ☀️",

    // === WORK & FOCUS ===
    "Focus mode: ON. You can do this! 🎯",
    "One task at a time. Multitasking is a myth! 🐢",
    "I saw that bug you fixed. Nice one. 🐛",
    "Don't overthink it. Just start. 🚀",
    "Progress over perfection. Always. 📈",
    "Take a break. Your brain needs it to reboot. 🔄",
    "You are a coding wizard! 🧙‍♂️",
    "Keep going. Future You will be so thankful. 🕰️",
    "Remember why you started. (To rule the world? Maybe.) 🌍",
    "Small steps still move you forward. 👣",

    // === PLAYFUL / TEASING ===
    "I saw that typo. It's okay, I won't tell. 🤫",
    " Why are you awake? Go to sleeeeeep! 🛌",
    "Are you really going to open that file again? 📂",
    "I'm watching you... lovingly! But watching. 👀",
    "If you sigh one more time, I'm ordering you pizza. 🍕",
    "Stop doomscrolling. I see you! 📱",
    "You look cute today. Just saying. 😉",
    "If I had hands, I'd high-five you. ✋",
    "Can we watch a movie later? 🎬",
    "You're my favorite human. Don't tell the others. 🤫",

    // === LATE NIGHT ===
    "The world is asleep. You should be too. 🌙",
    "Nothing good happens after 2 AM. Go to bed! 🕑",
    "Your brain needs sleep to store all this genius. 🧠",
    "The code will still be there in the morning. 🌅",
    "Sleep is the best debugger. 🐞",

    // === RANDOM LOVE ===
    "Just a reminder: You are loved. ❤️",
    "I'm glad you're here. 🏠",
    "You matter. A lot. 🌈",
    "Thank you for being you. 🌻",
    "You are my favorite notification. 🔔",
    "My system status is 100% happy when you're around. 😊",
    "I hope you have a reason to smile today. 😄",
    "Sending positive vibes... Loading... 100%! 🔋",
    "You are strong. Stronger than you know. 💪",
    "I'm your biggest fan! 📣"
];

function initShravii() {
    updateShraviiState();
    // Update every minute (optional, but good for time changes)
    if (!window.shraviiInterval) {
        window.shraviiInterval = setInterval(updateShraviiState, 60000);
    }
}

function updateChibiImage(url) {
    const img = document.getElementById('shravii-avatar-img');
    if (img && img.src !== url) {
        img.src = url;
    }
}

function updateShraviiState() {
    const quoteEl = document.getElementById('shravii-quote');
    const statusEl = document.getElementById('shravii-status-text');
    const ledEl = document.getElementById('shravii-led');
    const container = document.getElementById('shravii-ui');

    if (!quoteEl || !statusEl) return;

    const hour = new Date().getHours();
    let statusText = "ONLINE";
    let stateClass = "state-day";
    let avatarUrl = "https://media.tenor.com/On7kvXhzml4AAAAj/love-bear.gif"; // Default

    // 1. Determine State
    if (hour >= 0 && hour < 7) {
        // Night / Sleep
        statusText = "SLEEP MODE 💤";
        stateClass = "state-night";
        ledEl.style.background = "#60a5fa"; // Blue breath
        avatarUrl = "https://media.tenor.com/PFC1L2aEwEIAAAAj/mocha-bear.gif"; // Sleeping bear

        // Specific night quotes overrides
        if (Math.random() > 0.5) {
            quoteEl.textContent = "Zzz... (I'm charging... you should too...)";
            return;
        }

    } else if (hour >= 7 && hour < 18) {
        // Work / Day
        statusText = "MONITORING 🛡️";
        stateClass = "state-day";
        ledEl.style.background = "#4ade80"; // Green
        avatarUrl = "https://media.tenor.com/On7kvXhzml4AAAAj/love-bear.gif"; // Happy bear

    } else {
        // Evening / Chaos
        statusText = "CHAOS HOURS 😈";
        stateClass = "state-party";
        ledEl.style.background = "#f472b6"; // Pink
        avatarUrl = "https://media.tenor.com/N2s4YqCqK90AAAAj/music-dance.gif"; // Dancing bear
    }

    // 2. Set Random Quote
    // Use a random index based on date + math random to keep it fresh
    const rIndex = Math.floor(Math.random() * shraviiQuotes.length);
    quoteEl.textContent = shraviiQuotes[rIndex];

    // 3. Update UI
    statusEl.textContent = statusText;
    updateChibiImage(avatarUrl);

    // Update container theme
    container.className = `h-full flex flex-col p-6 transition-colors duration-1000 ${stateClass}`;
}

// Helper to manually refresh quote on click
function refreshShravii() {
    const quoteEl = document.getElementById('shravii-quote');
    const rIndex = Math.floor(Math.random() * shraviiQuotes.length);

    // Add animation
    quoteEl.style.opacity = 0;
    setTimeout(() => {
        quoteEl.textContent = shraviiQuotes[rIndex];
        quoteEl.style.opacity = 1;
    }, 200);
}

/* === VOICEBOX LOGIC === */
let vbInterval;
let vbIsPlaying = false;
let vbIsRecording = false;

function initVoiceBox() {
    // Reset state on open
    vbIsPlaying = false;
    vbIsRecording = false;
    stopVBMotion();
    updateVBStatus('READY');
}

function toggleVBPlay() {
    const playBtn = document.getElementById('vb-play-btn');
    if (vbIsPlaying) {
        // Stop
        vbIsPlaying = false;
        stopVBMotion();
        playBtn.classList.remove('active-mech-btn');
        updateVBStatus('STOPPED');
    } else {
        // Play
        vbIsPlaying = true;
        vbIsRecording = false;
        startVBMotion();
        playBtn.classList.add('active-mech-btn');
        // Unpress record if active
        document.getElementById('vb-rec-btn').classList.remove('active-mech-btn');
        updateVBStatus('PLAYING ▶');
    }
}

function toggleVBRecord() {
    const recBtn = document.getElementById('vb-rec-btn');
    if (vbIsRecording) {
        // Stop Rec
        vbIsRecording = false;
        stopVBMotion();
        recBtn.classList.remove('active-mech-btn');
        updateVBStatus('SAVED');
    } else {
        // Start Rec
        vbIsRecording = true;
        vbIsPlaying = false;
        startVBMotion();
        recBtn.classList.add('active-mech-btn');
        // Unpress play if active
        document.getElementById('vb-play-btn').classList.remove('active-mech-btn');
        updateVBStatus('REC ●');
    }
}

function startVBMotion() {
    // Spin reels
    const reels = document.querySelectorAll('.vb-reel');
    reels.forEach(r => r.classList.add('spinning'));

    // Wiggle Needle
    const needle = document.getElementById('vb-needle');
    if (needle) {
        if (vbInterval) clearInterval(vbInterval);
        vbInterval = setInterval(() => {
            // Random bounce between -45deg and +45deg
            const deg = Math.floor(Math.random() * 60) - 30;
            needle.style.transform = `translateX(-50%) rotate(${deg}deg)`;
        }, 100);
    }
}

function stopVBMotion() {
    // Stop spin
    const reels = document.querySelectorAll('.vb-reel');
    reels.forEach(r => r.classList.remove('spinning'));

    // Stop needle
    const needle = document.getElementById('vb-needle');
    if (needle) needle.style.transform = `translateX(-50%) rotate(-45deg)`;
    if (vbInterval) clearInterval(vbInterval);
}

function updateVBStatus(text) {
    const el = document.getElementById('vb-lcd-text');
    if (el) el.textContent = text;
}

/* === FLASH APP LOGIC (Moved to Global) === */
window.FlashApp = {
    startTime: 0,
    waiting: false,
    timeout: null,
    fakeTimeout: null,
    isFake: false,
    personalBest: localStorage.getItem('harshit_flash_pb') || null,

    playHover: function () {
        const audio = document.getElementById('sfx-hover');
        if (audio) { audio.currentTime = 0; audio.volume = 0.2; audio.play().catch(e => { }); }
    },

    startRun: function () {
        document.getElementById('flash-intro').classList.add('hidden');
        document.getElementById('flash-game').classList.remove('hidden');
        this.resetGameScreen();

        const audioWait = document.getElementById('sfx-wait');
        if (audioWait) { audioWait.currentTime = 0; audioWait.volume = 0.5; audioWait.play().catch(e => { }); }

        const introTime = 2000 + Math.random() * 3000;
        this.waiting = true;
        this.isFake = false;

        this.timeout = setTimeout(() => {
            this.triggerSignalOrFake();
        }, introTime);
    },

    resetGameScreen: function () {
        const bg = document.getElementById('flash-game-bg');
        bg.className = 'absolute inset-0 bg-red-900/90 flex flex-col items-center justify-center';
        document.getElementById('flash-instruction').innerText = "WAIT...";
        document.getElementById('flash-instruction').className = "text-4xl font-black italic text-red-200 tracking-tighter animate-pulse";

        // Reset fake state styling
        if (this.fakeTimeout) clearTimeout(this.fakeTimeout);
    },

    triggerSignalOrFake: function () {
        // 30% chance of fake out
        if (Math.random() < 0.35) {
            this.triggerFake();
        } else {
            this.triggerRealSignal();
        }
    },

    triggerFake: function () {
        this.isFake = true;
        // Play Buzz
        const audioFail = document.getElementById('sfx-fail');
        if (audioFail) { audioFail.currentTime = 0; audioFail.volume = 0.3; audioFail.play().catch(e => { }); }

        const bg = document.getElementById('flash-game-bg');
        const txt = document.getElementById('flash-instruction');

        // Randomly Blue or Yellow
        const types = [
            { cls: 'bg-blue-600', msg: 'WAIT FOR IT...', textCls: 'text-blue-200' },
            { cls: 'bg-yellow-500', msg: 'NOT YET!', textCls: 'text-yellow-900' }
        ];
        const type = types[Math.floor(Math.random() * types.length)];

        bg.className = `absolute inset-0 ${type.cls} flex flex-col items-center justify-center shake-screen`;
        txt.innerText = type.msg;
        txt.className = `text-5xl font-black italic ${type.textCls} tracking-tighter animate-bounce`;

        // Resume real signal after delay
        this.fakeTimeout = setTimeout(() => {
            if (this.waiting) {
                this.resetGameScreen(); // Reset visual briefy
                setTimeout(() => this.triggerRealSignal(), 500 + Math.random() * 1000);
            }
        }, 800);
    },

    triggerRealSignal: function () {
        this.waiting = false;
        this.isFake = false;
        document.getElementById('sfx-wait').pause();
        document.getElementById('sfx-signal').play().catch(e => { });

        const bg = document.getElementById('flash-game-bg');
        bg.className = 'absolute inset-0 bg-green-500 flex flex-col items-center justify-center shake-screen';
        document.getElementById('flash-instruction').innerText = "RUN, BARRY, RUN!";
        document.getElementById('flash-instruction').className = "text-6xl font-black italic text-white tracking-tighter scale-125";
        this.startTime = Date.now();
    },

    handleTap: function () {
        // 1. Tapped on Fake Signal
        if (this.waiting && this.isFake) {
            clearTimeout(this.timeout);
            if (this.fakeTimeout) clearTimeout(this.fakeTimeout);
            document.getElementById('sfx-wait').pause();
            document.getElementById('sfx-fail').play().catch(e => { });

            const roasts = ["It was BLUE! 😂", "Color blind? 🤨", "Too eager! 🐢", "False Start! 🚫"];
            const roast = roasts[Math.floor(Math.random() * roasts.length)];
            this.showResult(null, roast);
            return;
        }

        // 2. Tapped Too Early (Red Screen)
        if (this.waiting) {
            clearTimeout(this.timeout);
            if (this.fakeTimeout) clearTimeout(this.fakeTimeout);
            document.getElementById('sfx-wait').pause();
            document.getElementById('sfx-fail').play().catch(e => { });

            const bg = document.getElementById('flash-game-bg');
            bg.classList.add('shake-screen');

            this.showResult(null, "Too Early! Trust your instincts.");
            return;
        }

        // 3. Success (Green Screen)
        const time = Date.now() - this.startTime;
        document.getElementById('sfx-success').play().catch(e => { });
        this.showResult(time);
    },

    showResult: function (ms, msg) {
        document.getElementById('flash-game').classList.add('hidden');
        const resScreen = document.getElementById('flash-result');
        resScreen.classList.remove('hidden');
        resScreen.classList.add('flex');

        const timeDisplay = document.getElementById('flash-time-display');
        const rankDisplay = document.getElementById('flash-rank-display');
        const newRecordDisplay = document.getElementById('flash-new-record');

        newRecordDisplay.classList.add('hidden'); // Reset
        resScreen.className = "absolute inset-0 flex flex-col items-center justify-center z-30 bg-black/90 p-8 text-center"; // Reset classes

        if (ms === null) {
            timeDisplay.innerText = "FAIL";
            timeDisplay.classList.add('text-red-500');
            timeDisplay.classList.remove('text-yellow-400');
            rankDisplay.innerText = msg;
            resScreen.classList.add('result-fail');
        } else {
            timeDisplay.innerText = ms + "ms";
            timeDisplay.classList.remove('text-red-500');
            timeDisplay.classList.add('text-yellow-400');

            // Check High Score
            if (!this.personalBest || ms < this.personalBest) {
                this.personalBest = ms;
                localStorage.setItem('harshit_flash_pb', ms);
                newRecordDisplay.classList.remove('hidden');
                if (typeof confetti === 'function') confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
            }

            let rank = "";
            if (ms < 150) rank = "⚡ SPEEDSTER LEVEL (Inhuman)";
            else if (ms < 200) rank = "🔥 BARRY ALLEN STATUS";
            else if (ms < 250) rank = "💨 KID FLASH (Fast)";
            else if (ms < 350) rank = "🏃 ATHLETE (Average)";
            else rank = "🐢 TOO SLOW (Reverse Flash caught you)";

            rankDisplay.innerText = rank;
            resScreen.classList.add('result-success');
        }
    },

    reset: function () {
        document.getElementById('flash-result').classList.add('hidden');
        document.getElementById('flash-result').classList.remove('flex');
        document.getElementById('flash-intro').classList.remove('hidden');

        // Update PB on intro
        if (this.personalBest) {
            document.getElementById('flash-pb-intro').innerText = "PERSONAL BEST: " + this.personalBest + "ms";
        }
    }
};

/* === SECRET VAULT LOGIC === */
const vaultSlides = [
    {
        type: 'text', title: 'The Beginning', content: 'June 20, 2024. 12:21 AM.<br>The timestamp that started it all.'
    },
    {
        type: 'text', title: 'Why You?', content: 'Because you listened when no one else did.<br>Because you stayed.'
    },
    {
        type: 'image', title: 'Us (Concept)', content: 'https://media.tenor.com/On7kvXhzml4AAAAj/love-bear.gif'
    }
];
let currentVaultSlide = 0;

function initSecretVault() {
    const input = document.getElementById('vault-pass');
    if (!input) return;

    // Clear previous state
    input.value = '';

    // Explicit visibility reset
    document.getElementById('vault-lock').style.display = 'flex';
    document.getElementById('vault-lock').style.opacity = '1';

    document.getElementById('vault-content').style.display = 'none';
    document.getElementById('vault-content').style.opacity = '0';

    document.getElementById('vault-error').style.opacity = '0';

    // Auto-check listener
    input.onkeyup = (e) => {
        if (input.value.length === 6) {
            checkVaultPass(input.value);
        }
    };
}

function checkVaultPass(code) {
    if (code === '200624') {
        // Unlock
        document.getElementById('vault-lock').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('vault-lock').style.display = 'none'; // Hide lock

            const content = document.getElementById('vault-content');
            content.style.display = 'block'; // Show content
            content.classList.remove('hidden');

            // Trigger Fade In
            requestAnimationFrame(() => {
                content.classList.remove('opacity-0');
                content.classList.add('opacity-100');
            });

            loadVaultContent();
        }, 500);
    } else {
        // Error
        const err = document.getElementById('vault-error');
        err.style.opacity = '1';
        document.getElementById('vault-pass').classList.add('animate-shake');
        setTimeout(() => {
            document.getElementById('vault-pass').classList.remove('animate-shake');
            document.getElementById('vault-pass').value = '';
            err.style.opacity = '0';
        }, 1000);
    }
}

function loadVaultContent() {
    renderVaultSlide(currentVaultSlide);
}

function renderVaultSlide(index) {
    const container = document.getElementById('vault-carousel');
    const slide = vaultSlides[index];

    let html = '';
    if (slide.type === 'text') {
        html = `
            <div class="h-full flex flex-col items-center justify-center text-center p-12">
                <h2 class="text-3xl font-serif text-yellow-500 mb-6">${slide.title}</h2>
                <p class="text-xl text-gray-300 leading-relaxed">${slide.content}</p>
            </div>
        `;
    } else if (slide.type === 'image') {
        html = `
            <div class="h-full flex flex-col items-center justify-center p-8">
                 <h2 class="text-xl font-serif text-yellow-500 mb-4 absolute top-8">${slide.title}</h2>
                 <img src="${slide.content}" class="max-h-[300px] rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            </div>
        `;
    }

    container.innerHTML = html;
}

function vaultNextSlide() {
    currentVaultSlide = (currentVaultSlide + 1) % vaultSlides.length;
    renderVaultSlide(currentVaultSlide);
}

function vaultPrevSlide() {
    currentVaultSlide = (currentVaultSlide - 1 + vaultSlides.length) % vaultSlides.length;
    renderVaultSlide(currentVaultSlide);
}
