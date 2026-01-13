/**
 * HarshitOS - The "Bestest" Gift Codebase
 * Populated with specific user memories and "Nakhre" logic.
 */

// --- 1. THE BRAIN (Your Content) ---
const HarshitData = {
    identity: {
        name: "Harshit",
        aliases: ["Mr. Ota", "Mr. Snow ❄️", "Rabbit 🐰", "World's Strongest"],
        traits: ["Sweet & Spicy 🌶️", "No Lies", "Problem Solver", "Protective"],
        likes: ["Sub Sandwiches", "Euros", "Siberian Huskies", "Snow", "Music", "Shoes"],
        dislikes: ["Rice", "Bhindi", "Dry Fruits"],
        movies: ["Peaky Blinders", "Big Hero 6", "Harry Potter", "Death Note"]
    },
    dates: {
        met: "June 20, 2024 at 12:21 AM",
        platform: "Discord"
    },
    // The Emotional Letter (Parsed into HTML)
    letter: `
        <h2>To My Best Friend, Harshit 🎂</h2>
        <p>You are a person with a <b>great heart</b>, a combination of Sweetness and Spicyness. 🌶️🍭</p>
        <p>You don't lie. You don't entertain lies. You try to understand, and you try to solve. You are the perfect person I ever saw.</p>
        <p>You handle me well, like a kid. You make me feel special, <b>like a queen</b>. 👑</p>
        <p>I feel safe and comfortable around you, a safety I've never felt with anyone else. Conversations with you feel smooth whether they are on the dumbest topics or serious ones.</p>
        <p>You are always there to rescue me from the thoughts that overcome me. Whether in happiness or sadness, you are there. You understand me deeply—sometimes more than I understand myself—which makes me feel overwhelmed and amazed.</p>
        <p><b>You are the world's strongest person, and the fastest person in this world.</b> 💪⚡</p>
        <p><i>Saari baate yaad rakhte ho, kitni memory hai!</i> You do 100% of everything: 100% care, 100% dedication to work. (Though sometimes you overdo it... take care of yourself, Mr. Harshit!).</p>
        <p>You know how to express your feelings at the right time in the right way. I’m amazed by how you handle situations—instinctively knowing when to act, speak, or just be there.</p>
        <p>And even if things change, or if silence exists now... what we had was genuine. <br><br><b>Happy 19th Birthday, Mr. Snow.</b> ❄️<br>- Shravii</p>
    `,
    nakhreMessages: [
        "Stop poking me!",
        "I said STOP!",
        "I will bite you!",
        "Shraviiiii help me!",
        "Do not disturb the bear!"
    ]
};

// --- 2. APP DEFINITIONS ---
const Apps = [
    {
        id: "profile",
        name: "Who is Harshit?",
        icon: "👤",
        content: `
            <div class="profile-header">
                <img src="https://ui-avatars.com/api/?name=Harshit+S&background=0D8ABC&color=fff&size=256" class="profile-pic">
                <div>
                    <h2 style="margin:0;">${HarshitData.identity.name}</h2>
                    <div style="font-size:12px; opacity:0.7;">${HarshitData.identity.aliases.join(" • ")}</div>
                </div>
            </div>
            <div style="background:white; padding:10px; border-radius:10px; margin-bottom:10px;">
                <strong>🎂 Connected:</strong> ${HarshitData.dates.met} (${HarshitData.dates.platform})
            </div>
            <div>
                <strong>❤️ Likes:</strong><br>
                ${HarshitData.identity.likes.map(l => `<span class="tag">${l}</span>`).join('')}
            </div>
            <div style="margin-top:10px;">
                <strong>🚫 Dislikes:</strong><br>
                ${HarshitData.identity.dislikes.map(d => `<span class="tag dislike-tag">${d}</span>`).join('')}
            </div>
        `
    },
    {
        id: "letter",
        name: "To_Harshit.txt",
        icon: "💌",
        content: `
            <div class="note-paper">
                ${HarshitData.letter}
            </div>
        `
    },
    {
        id: "vscode",
        name: "birthday_script.py",
        icon: "👨‍💻",
        content: `
            <div style="background:#1e1e1e; color:#ccc; height:100%; font-family:monospace; padding:10px; display:flex; flex-direction:column;">
                <div style="flex:1;">
                    <span style="color:#569cd6">def</span> <span style="color:#dcdcaa">celebrate_harshit</span>():<br>
                    &nbsp;&nbsp;age = 19<br>
                    &nbsp;&nbsp;status = <span style="color:#ce9178">"World's Strongest"</span><br>
                    &nbsp;&nbsp;<span style="color:#c586c0">while</span> True:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(<span style="color:#ce9178">"Happy Birthday Mr. Snow!"</span>)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;eat(<span style="color:#ce9178">"Sub Sandwich"</span>)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;avoid(<span style="color:#ce9178">"Bhindi"</span>)<br>
                </div>
                <div>(c) 2024 Shravii Corp. All rights reserved.</div>
                <br>
                <div id="term-output">
                    <span>user@harshit-pc:~$</span> <span id="typing-effect"></span>
                </div>
            </div>
        `,
        onOpen: () => {
            const text = " initiating birthday_protocol --force";
            let i = 0;
            const target = document.getElementById('typing-effect');
            target.innerHTML = "";
            const interval = setInterval(() => {
                target.innerHTML += text.charAt(i);
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        const out = document.getElementById('term-output');
                        out.innerHTML += "<br><span style='color:yellow'>ACCESS GRANTED. HAPPY BIRTHDAY HARSHIT!</span><br><span>user@harshit-pc:~$</span>";
                        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
                    }, 500);
                }
            }, 50);
        }
    },
    {
        id: "gym",
        name: "Gym Stats",
        icon: "🏋️",
        content: `
            <div style="text-align:center; padding:20px;">
                <img src="assets/gifs/milk-kick.gif" style="width:100%; border-radius:10px; margin-bottom: 20px;">
                <h2>World's Strongest 💪</h2>
                <button onclick="this.innerHTML='Strength: ∞ (Error)'; confetti();" style="padding:10px 20px; font-size:16px; margin-top:10px; background:#27c93f; color:white; border:none; border-radius:5px; cursor:pointer;">
                    Calculate Power Level
                </button>
            </div>
        `
    },
    {
        id: "music",
        name: "Vibes",
        icon: "🎧",
        content: `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%;">
                <div style="width:120px; height:120px; background:#333; border-radius:50%; display:flex; align-items:center; justify-content:center; animation:spin 4s linear infinite;">
                    <span style="font-size:40px;">🎵</span>
                </div>
                <h3 style="margin:15px 0 5px;">Tu Hai Kahan / Peaky Blinders</h3>
                <p style="font-size:12px; color:#666;">Harshit's Playlist</p>
                <div style="display:flex; gap:10px; margin-top:10px;">
                    <button onclick="document.getElementById('bg-music').play()" style="cursor:pointer; padding:5px 15px;">▶ Play</button>
                    <button onclick="document.getElementById('bg-music').pause()" style="cursor:pointer; padding:5px 15px;">⏸ Pause</button>
                </div>
            </div>
            <style>@keyframes spin { 100% { transform: rotate(360deg); } }</style>
        `
    },
    {
        id: "complaints",
        name: "Complaint Box",
        icon: "⚠️",
        content: `
            <div style="padding: 20px; text-align: center;">
                <h3>Submit Complaint</h3>
                <textarea placeholder="Type here..." style="width: 100%; height: 80px; margin-bottom: 10px;"></textarea>
                <div id="comp-gif" style="display:none; margin-bottom:10px;"><img src="assets/gifs/milk-bite.gif" width="100"></div>
                <button onclick="Nakhre.showBiteAlert(); document.getElementById('comp-gif').style.display='block';" style="background: red; color: white; border: none; padding: 10px; border-radius: 5px; cursor:pointer;">Submit</button>
            </div>
        `
    }
];

// --- 3. SYSTEM CORE (Drag, Resize, Window Management) ---
const Desktop = {
    zIndex: 100,

    init: () => {
        Desktop.renderDock();
        Desktop.bootSequence();

        // Right click menu
        document.addEventListener('contextmenu', e => {
            e.preventDefault();
            const menu = document.getElementById('context-menu');
            menu.style.display = 'flex';
            menu.style.left = e.pageX + 'px';
            menu.style.top = e.pageY + 'px';
        });
        document.addEventListener('click', () => document.getElementById('context-menu').style.display = 'none');

        // Nakhre Loop (The Naughty Part)
        setInterval(Nakhre.randomEvent, 60000); // Every 60s something naughty happens
    },

    bootSequence: () => {
        const log = document.getElementById('boot-log');
        const msgs = ["Initializing Muscles...", "Loading Socks...", "Checking Bhindi levels (0%)...", "Starting HarshitOS..."];
        let i = 0;

        const interval = setInterval(() => {
            if (i < msgs.length) {
                log.innerText = msgs[i];
                document.querySelector('.progress-fill').style.width = (i + 1) * 25 + "%";
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    const boot = document.getElementById('boot-sequence');
                    boot.style.opacity = 0;
                    setTimeout(() => boot.remove(), 1000);
                    Desktop.playStartupSound();
                    AppsManager.open('profile'); // Auto open profile
                    setTimeout(() => AppsManager.open('letter'), 1000); // Auto open letter
                }, 1000);
            }
        }, 800);
    },

    renderDock: () => {
        const dock = document.getElementById('dock-container');
        Apps.forEach(app => {
            const icon = document.createElement('div');
            icon.className = 'app-icon';
            icon.innerText = app.icon;
            icon.setAttribute('data-name', app.name);
            icon.onclick = () => AppsManager.open(app.id);
            dock.appendChild(icon);
        });
    },

    playStartupSound: () => {
        // Attempt to play sound (browser requires interaction usually, but we try)
        const audio = document.getElementById('sfx-pop'); // Reusing pop for startup
        if (audio) audio.play().catch(() => console.log("Audio waiting for interaction"));
    }
};

const AppsManager = {
    open: (appId) => {
        const app = Apps.find(a => a.id === appId);
        if (!app) return;

        // Check if exists
        if (document.getElementById(`win-${appId}`)) {
            const win = document.getElementById(`win-${appId}`);
            win.style.display = 'flex'; // unminimize
            AppsManager.bringToFront(win);
            return;
        }

        // Create Window
        const win = document.createElement('div');
        win.className = 'window active';
        win.id = `win-${appId}`;
        win.style.left = (100 + (Math.random() * 50)) + 'px';
        win.style.top = (50 + (Math.random() * 50)) + 'px';
        win.style.zIndex = ++Desktop.zIndex;

        win.innerHTML = `
            <div class="title-bar" onmousedown="Drag.start(event, '${win.id}')">
                <div class="controls">
                    <div class="dot close" onclick="AppsManager.close('${win.id}')"></div>
                    <div class="dot min" onclick="AppsManager.minimize('${win.id}')"></div>
                    <div class="dot max" onclick="AppsManager.maximize('${win.id}')"></div>
                </div>
                <div class="win-title">${app.name}</div>
            </div>
            <div class="content">${app.content}</div>
        `;

        document.getElementById('desktop').appendChild(win);

        // Window Click to front
        win.addEventListener('mousedown', () => AppsManager.bringToFront(win));

        // Specific App Init Logic
        if (app.onOpen) app.onOpen();
    },

    close: (id) => document.getElementById(id).remove(),

    minimize: (id) => {
        const win = document.getElementById(id);
        win.style.transform = "scale(0.8) translateY(500px)";
        win.style.opacity = "0";
        setTimeout(() => win.style.display = "none", 300);
    },

    maximize: (id) => {
        const win = document.getElementById(id);
        if (win.style.width === '100%') {
            win.style.width = 'auto'; win.style.height = 'auto'; win.style.top = '100px'; win.style.left = '100px';
        } else {
            win.style.width = '100%'; win.style.height = 'calc(100% - 35px)'; win.style.top = '0'; win.style.left = '0';
        }
    },

    bringToFront: (el) => {
        el.style.zIndex = ++Desktop.zIndex;
        document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
        el.classList.add('active');
    }
};

const Drag = {
    elem: null,
    startX: 0, startY: 0,
    initLeft: 0, initTop: 0,

    start: (e, winId) => {
        Drag.elem = document.getElementById(winId);
        AppsManager.bringToFront(Drag.elem);
        Drag.startX = e.clientX;
        Drag.startY = e.clientY;
        Drag.initLeft = Drag.elem.offsetLeft;
        Drag.initTop = Drag.elem.offsetTop;
        document.addEventListener('mousemove', Drag.move);
        document.addEventListener('mouseup', Drag.stop);
    },

    move: (e) => {
        if (!Drag.elem) return;
        const dx = e.clientX - Drag.startX;
        const dy = e.clientY - Drag.startY;
        Drag.elem.style.left = (Drag.initLeft + dx) + 'px';
        Drag.elem.style.top = (Drag.initTop + dy) + 'px';
    },

    stop: () => {
        Drag.elem = null;
        document.removeEventListener('mousemove', Drag.move);
        document.removeEventListener('mouseup', Drag.stop);
    }
};

// --- 4. THE NAKHRE ENGINE (Mischief) ---
const Nakhre = {
    randomEvent: () => {
        const eventType = Math.floor(Math.random() * 3);
        if (eventType === 0) Nakhre.showBiteAlert();
        if (eventType === 1) Nakhre.spawnRunningBear();
    },

    showBiteAlert: () => {
        const msgs = HarshitData.nakhreMessages;
        const msg = msgs[Math.floor(Math.random() * msgs.length)];
        const alertBox = document.createElement('div');
        alertBox.style = `position:absolute; top:20px; right:-300px; background:#fff; padding:15px; border-left: 5px solid #c62828; box-shadow: 0 5px 15px rgba(0,0,0,0.2); transition: right 0.5s; z-index:99999; font-family:'Inter'; border-radius:4px; display:flex; gap:10px; align-items:center;`;
        alertBox.innerHTML = `
            <img src="assets/gifs/milk-bite.gif" style="width:50px;">
            <div>
                <strong>⚠️ Attention!</strong><br>${msg}
            </div>
        `;
        document.body.appendChild(alertBox);

        setTimeout(() => alertBox.style.right = "20px", 100);
        // document.getElementById('sfx-bite').play().catch(()=>{});
        setTimeout(() => {
            alertBox.style.right = "-300px";
            setTimeout(() => alertBox.remove(), 500);
        }, 4000);
    },

    spawnRunningBear: () => {
        const bear = document.createElement('img');
        bear.src = "assets/gifs/milk-run.gif"; // Needs to be a running gif
        bear.style = "position:fixed; bottom:0; left:-100px; width:150px; z-index:9998; transition: left 3s linear;";
        document.body.appendChild(bear);
        setTimeout(() => bear.style.left = "110vw", 100);
        setTimeout(() => bear.remove(), 3100);
    },

    hitMascot: () => {
        const bubble = document.getElementById('mascot-speech');
        bubble.style.opacity = 1;
        bubble.innerText = "Hehe! Can't catch me! 😛";
        setTimeout(() => bubble.style.opacity = 0, 2000);
    }
};

// Map Global Managers for HTML access
window.Apps = AppsManager; // To fix the 'Apps.open' in HTML
window.AppsManager = AppsManager;
window.Drag = Drag;
window.Nakhre = Nakhre;

// Start
Desktop.init();
