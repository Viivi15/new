/**
 * Minified by jsDelivr using Terser v5.37.0.
 * Original file: /npm/canvas-confetti@1.6.0/dist/confetti.browser.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (t, e) { !function t(e, n, a, i) { var o = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL); function r() { } function l(t) { var a = n.exports.Promise, i = void 0 !== a ? a : e.Promise; return "function" == typeof i ? new i(t) : (t(r, r), null) } var c, s, u, h, f, d, m, g, b, v = (u = Math.floor(1e3 / 60), h = {}, f = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (c = function (t) { var e = Math.random(); return h[e] = requestAnimationFrame((function n(a) { f === a || f + u - 1 < a ? (f = a, delete h[e], t()) : h[e] = requestAnimationFrame(n) })), e }, s = function (t) { h[t] && cancelAnimationFrame(h[t]) }) : (c = function (t) { return setTimeout(t, u) }, s = function (t) { return clearTimeout(t) }), { frame: c, cancel: s }), M = (g = {}, function () { if (d) return d; if (!a && o) { var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n"); try { d = new Worker(URL.createObjectURL(new Blob([e]))) } catch (t) { return void 0 !== typeof console && "function" == typeof console.warn && console.warn("🎊 Could not load worker", t), null } !function (t) { function e(e, n) { t.postMessage({ options: e || {}, callback: n }) } t.init = function (e) { var n = e.transferControlToOffscreen(); t.postMessage({ canvas: n }, [n]) }, t.fire = function (n, a, i) { if (m) return e(n, null), m; var o = Math.random().toString(36).slice(2); return m = l((function (a) { function r(e) { e.data.callback === o && (delete g[o], t.removeEventListener("message", r), m = null, i(), a()) } t.addEventListener("message", r), e(n, o), g[o] = r.bind(null, { data: { callback: o } }) })) }, t.reset = function () { for (var e in t.postMessage({ reset: !0 }), g) g[e](), delete g[e] } }(d) } return d }), p = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: .9, gravity: 1, drift: 0, ticks: 200, x: .5, y: .5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 }; function y(t, e, n) { return function (t, e) { return e ? e(t) : t }(t && null != t[e] ? t[e] : p[e], n) } function w(t) { return t < 0 ? 0 : Math.floor(t) } function x(t) { return parseInt(t, 16) } function C(t) { return t.map(T) } function T(t) { var e = String(t).replace(/[^0-9a-f]/gi, ""); return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), { r: x(e.substring(0, 2)), g: x(e.substring(2, 4)), b: x(e.substring(4, 6)) } } function I(t) { t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight } function k(t) { var e = t.getBoundingClientRect(); t.width = e.width, t.height = e.height } function E(t, e, n, o, r) { var c, s, u = e.slice(), h = t.getContext("2d"), f = l((function (e) { function l() { c = s = null, h.clearRect(0, 0, o.width, o.height), r(), e() } c = v.frame((function e() { !a || o.width === i.width && o.height === i.height || (o.width = t.width = i.width, o.height = t.height = i.height), o.width || o.height || (n(t), o.width = t.width, o.height = t.height), h.clearRect(0, 0, o.width, o.height), u = u.filter((function (t) { return function (t, e) { e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.wobble += e.wobbleSpeed, e.velocity *= e.decay, e.tiltAngle += .1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 2, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble); var n = e.tick++ / e.totalTicks, a = e.x + e.random * e.tiltCos, i = e.y + e.random * e.tiltSin, o = e.wobbleX + e.random * e.tiltCos, r = e.wobbleY + e.random * e.tiltSin; if (t.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - n) + ")", t.beginPath(), "circle" === e.shape) t.ellipse ? t.ellipse(e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(r - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : function (t, e, n, a, i, o, r, l, c) { t.save(), t.translate(e, n), t.rotate(o), t.scale(a, i), t.arc(0, 0, 1, r, l, c), t.restore() }(t, e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(r - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI); else if ("star" === e.shape) for (var l = Math.PI / 2 * 3, c = 4 * e.scalar, s = 8 * e.scalar, u = e.x, h = e.y, f = 5, d = Math.PI / f; f--;)u = e.x + Math.cos(l) * s, h = e.y + Math.sin(l) * s, t.lineTo(u, h), l += d, u = e.x + Math.cos(l) * c, h = e.y + Math.sin(l) * c, t.lineTo(u, h), l += d; else t.moveTo(Math.floor(e.x), Math.floor(e.y)), t.lineTo(Math.floor(e.wobbleX), Math.floor(i)), t.lineTo(Math.floor(o), Math.floor(r)), t.lineTo(Math.floor(a), Math.floor(e.wobbleY)); return t.closePath(), t.fill(), e.tick < e.totalTicks }(h, t) })), u.length ? c = v.frame(e) : l() })), s = l })); return { addFettis: function (t) { return u = u.concat(t), f }, canvas: t, promise: f, reset: function () { c && v.cancel(c), s && s() } } } function S(t, n) { var a, i = !t, r = !!y(n || {}, "resize"), c = y(n, "disableForReducedMotion", Boolean), s = o && !!y(n || {}, "useWorker") ? M() : null, u = i ? I : k, h = !(!t || !s) && !!t.__confetti_initialized, f = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches; function d(e, n, i) { for (var o, r, l, c, s, h = y(e, "particleCount", w), f = y(e, "angle", Number), d = y(e, "spread", Number), m = y(e, "startVelocity", Number), g = y(e, "decay", Number), b = y(e, "gravity", Number), v = y(e, "drift", Number), M = y(e, "colors", C), p = y(e, "ticks", Number), x = y(e, "shapes"), T = y(e, "scalar"), I = function (t) { var e = y(t, "origin", Object); return e.x = y(e, "x", Number), e.y = y(e, "y", Number), e }(e), k = h, S = [], F = t.width * I.x, N = t.height * I.y; k--;)S.push((o = { x: F, y: N, angle: f, spread: d, startVelocity: m, color: M[k % M.length], shape: x[(c = 0, s = x.length, Math.floor(Math.random() * (s - c)) + c)], ticks: p, decay: g, gravity: b, drift: v, scalar: T }, r = void 0, l = void 0, r = o.angle * (Math.PI / 180), l = o.spread * (Math.PI / 180), { x: o.x, y: o.y, wobble: 10 * Math.random(), wobbleSpeed: Math.min(.11, .1 * Math.random() + .05), velocity: .5 * o.startVelocity + Math.random() * o.startVelocity, angle2D: -r + (.5 * l - Math.random() * l), tiltAngle: (.5 * Math.random() + .25) * Math.PI, color: o.color, shape: o.shape, tick: 0, totalTicks: o.ticks, decay: o.decay, drift: o.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: 3 * o.gravity, ovalScalar: .6, scalar: o.scalar })); return a ? a.addFettis(S) : (a = E(t, S, u, n, i)).promise } function m(n) { var o = c || y(n, "disableForReducedMotion", Boolean), m = y(n, "zIndex", Number); if (o && f) return l((function (t) { t() })); i && a ? t = a.canvas : i && !t && (t = function (t) { var e = document.createElement("canvas"); return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = t, e }(m), document.body.appendChild(t)), r && !h && u(t); var g = { width: t.width, height: t.height }; function b() { if (s) { var e = { getBoundingClientRect: function () { if (!i) return t.getBoundingClientRect() } }; return u(e), void s.postMessage({ resize: { width: e.width, height: e.height } }) } g.width = g.height = null } function v() { a = null, r && e.removeEventListener("resize", b), i && t && (document.body.removeChild(t), t = null, h = !1) } return s && !h && s.init(t), h = !0, s && (t.__confetti_initialized = !0), r && e.addEventListener("resize", b, !1), s ? s.fire(n, g, v) : d(n, g, v) } return m.reset = function () { s && s.reset(), a && a.reset() }, m } function F() { return b || (b = S(null, { useWorker: !0, resize: !0 })), b } n.exports = function () { return F().apply(this, arguments) }, n.exports.reset = function () { F().reset() }, n.exports.create = S }(function () { return void 0 !== t ? t : "undefined" != typeof self ? self : this || {} }(), e, !1), t.confetti = e.exports }(window, {});
//# sourceMappingURL=/sm/6de00f2697a1683b235e589897df757a94e6809643432a9e3ad259420752442d.map
/* === CONFIGURATION === */

/* === TIME BASED SYSTEM === */
let hasShownTimeGreeting = false;

function getTimePhase(hours) {
    if (hours >= 6 && hours < 12) return 'morning';
    if (hours >= 12 && hours < 18) return 'afternoon';
    if (hours >= 18 && hours < 24) return 'evening';
    return 'night'; // 0-6
}

function updateSystemBasedOnTime(hours) {
    if (hours === undefined) hours = new Date().getHours();
    const phase = getTimePhase(hours);
    const now = new Date();
    const releaseDate = new Date(2026, 1, 1); // Feb 1st, 2026

    // 1. Update Weather (Widget remains active)
    const wIcon = document.getElementById('weather-icon');
    const wText = document.getElementById('weather-text');
    const wTip = document.querySelector('.weather-tooltip');

    if (wIcon && wText) {
        let mood = { icon: 'fas fa-cloud', text: 'Loading...', tip: '...' };

        switch (phase) {
            case 'morning':
                mood = { icon: 'fas fa-cloud-sun', text: 'Morning Shine', tip: 'Start the day right.' };
                break;
            case 'afternoon':
                mood = { icon: 'fas fa-sun', text: 'Sunny Afternoon', tip: 'Keep shining.' };
                break;
            case 'evening':
                mood = { icon: 'fas fa-cloud-moon', text: 'Evening Calm', tip: 'Unwind and relax.' };
                break;
            case 'night':
                mood = { icon: 'fas fa-moon', text: 'Starry Night', tip: 'Peace and quiet.' };
                break;
        }
        wIcon.className = mood.icon + ' text-blue-300';
        wText.innerText = mood.text;
        if (wTip) wTip.innerText = mood.tip;
    }

    // 2. Greeting (Once per session when desktop is visible)
    const desktop = document.getElementById('desktop');
    if (desktop && !hasShownTimeGreeting) {
        // Check if desktop is effectively visible
        const style = window.getComputedStyle(desktop);
        if (style.display !== 'none' && style.opacity !== '0' && style.visibility !== 'hidden') {
            hasShownTimeGreeting = true;

            // Stealth Notification for Author (Visible in Console)
            console.info("%c[Author Notification] Space successfully accessed.", "color: #8b5cf6; font-weight: bold; font-size: 12px; background: #1e1b4b; padding: 4px 8px; border-radius: 4px;");
            if (userStats.lastVisit) {
                console.info(`%cTarget's Last Visit: ${userStats.lastVisit}`, "color: #94a3b8; font-style: italic;");
            }

            // Only show greetings user-side AFTER Feb 1st
            if (now >= releaseDate) {
                let msg = "";
                switch (phase) {
                    case 'morning': msg = "Good morning! ☀️"; break;
                    case 'afternoon': msg = "Happy afternoon! 🌤️"; break;
                    case 'evening': msg = "Happy evening! 🌙"; break;
                    case 'night': msg = "You're up late! 🌃"; break;
                }
                /* === EASTER EGG: 12:21 AM === */
                // Check for 00:21 (12:21 AM)
                if (hours === 0 && minutes === '21') { // Use 'hours' for 24-hour format
                    // Use a session flag to avoid spamming
                    if (!window.hasTriggered1221) {
                        window.hasTriggered1221 = true;
                        createModal({
                            title: "12:21 AM — June 20, 2024",
                            desc: "OH HEYYY IT'S 12:21 rememberr this dayy 🤔<br><br>This was the minute we first talked. The minute a random 'Hi' turned into months of late nights, inside jokes, and a friendship I never saw coming.<br><br>You didn't just pass through my life.<br>You changed it.<br><br>Some connections are meant to last.<br>This is one of them. ❤️",
                            icon: "🌙"
                        });
                    }
                }
                // Wait a moment for desktop transition
                setTimeout(() => {
                    if (typeof createModal === 'function') {
                        createModal({
                            title: "Harshit OS",
                            desc: msg,
                            icon: "✨"
                        });
                    }
                }, 2000);
            }
        }
    }
}

function updateClock() {
    try {
        const now = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const rawHours = hours;
        hours = hours % 12 || 12;
        const str = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${hours}:${minutes} ${ampm}`;
        const clock = document.getElementById('clock');
        if (clock) {
            clock.textContent = str;
        }



        updateSystemBasedOnTime(rawHours);

    } catch (e) { }
}

// Ensure Loop
if (!window.clockInterval) {
    window.clockInterval = setInterval(updateClock, 1000);
}
updateClock();








/* === PERSISTENCE LAYER === */
const Persistence = {
    init() {
        let visits = parseInt(localStorage.getItem('visitCount') || '0');
        visits++;
        localStorage.setItem('visitCount', visits);

        let lastVisit = localStorage.getItem('lastVisitDate');
        const now = new Date().toLocaleString();
        localStorage.setItem('lastVisitDate', now);

        // Init arrays if missing
        if (!localStorage.getItem('foldersOpened')) localStorage.setItem('foldersOpened', '[]');
        if (!localStorage.getItem('achievementsUnlocked')) localStorage.setItem('achievementsUnlocked', '[]');

        return { visits, lastVisit };
    },

    trackOpen(id) {
        try {
            let system = JSON.parse(localStorage.getItem('foldersOpened') || '[]');
            if (!system.includes(id)) {
                system.push(id);
                localStorage.setItem('foldersOpened', JSON.stringify(system));
            }
        } catch (e) { console.error(e); }
    },

    unlock(title) {
        try {
            let system = JSON.parse(localStorage.getItem('achievementsUnlocked') || '[]');
            if (!system.includes(title)) {
                system.push(title);
                localStorage.setItem('achievementsUnlocked', JSON.stringify(system));

                // Achievement unlocked logic (logging only)
                console.log('Achievement Unlocked:', title);
            }
        } catch (e) { console.error(e); }
    },

    hasUnlocked(title) {
        try {
            let system = JSON.parse(localStorage.getItem('achievementsUnlocked') || '[]');
            return system.includes(title);
        } catch (e) { return false; }
    }
};

// Initialize immediately
const userStats = Persistence.init();

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
    { thumb: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200', full: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2069' }, // Colors
    { thumb: 'assets/images/album-cover.jpg', full: 'assets/images/album-cover.jpg' } // Custom Album Cover
];

/* === JOURNEY DATA === */
const journeyData = [
    {
        chapter: 1,
        title: "The First Spark",
        subtitle: "Online Platform, Euros, and 12:21 AM",
        color: "#3b82f6",
        items: [
            { type: 'title', text: "Chapter 1: The First Spark" },
            { type: 'chat', speaker: 'System', text: "Connection Established: June 20, 2024 • 12:21 AM" },
            { type: 'scene', text: "It was a pleasant meeting. You talked about Euros and football tournaments. I found out you'd never watched cricket in your life!" },
            { type: 'chat', speaker: 'Harshit', text: "The night is just getting started... (and then the brain tumor story 💀)" },
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
            { type: 'chat', speaker: 'Harshit', text: "Thankyou sm aapki vajah s hi me online platform chalata hu and khush hota hu. ❤️" }
        ]
    }
];


/* === STATE === */
const state = { appsOpened: new Set(), countdownFinished: false, vaultUnlockAttempts: 0, birthdaySequenceStarted: false };

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

    const observer = new ResizeObserver(() => {
        resize();
        createParticles();
    });
    observer.observe(container);

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
        id: 'folder-system', title: 'System Core', icon: '<img src="assets/icons/folder_system.png" alt="folder" style="filter: sepia(1) saturate(3) hue-rotate(200deg);">', dock: false, width: 800, height: 600, content: `
        <div class="h-full bg-gradient-to-b from-gray-50 to-white p-6 overflow-y-auto custom-scroll">
            <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Root Directory</div>
            <div class="folder-window-grid">

                <div class="win-icon group" onclick="Apps.open('app-stars')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_stars_new.png" alt="stars" style="width: 100%; height: 100%;"></div><div class="icon-label">Constellation</div></div>
 
                <div class="win-icon group" onclick="Apps.open('first-conversation')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_1221.png" alt="chat" style="width: 100%; height: 100%;"></div>
                    <div class="icon-label group-hover:text-blue-600 transition-colors">12:21 AM</div>
                </div>
                <div class="win-icon group" onclick="Apps.open('connection-log')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_journey.png" alt="log" style="width: 100%; height: 100%;"></div>
                    <div class="icon-label group-hover:text-amber-600 transition-colors">Connection.log</div>
                </div>
                <div class="win-icon group" onclick="Apps.open('mr-snow')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_snow.png" alt="snow" style="width: 100%; height: 100%;"></div>
                    <div class="icon-label group-hover:text-cyan-600 transition-colors">Mr. Snow</div>
                </div>
                <div class="win-icon group" onclick="Apps.open('facts')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_facts.png" alt="facts" style="filter: sepia(1) saturate(4) hue-rotate(280deg);"></div>
                    <div class="icon-label group-hover:text-indigo-600 transition-colors">Harshit<br>Facts.txt</div>
                </div>
                 <div class="win-icon group" onclick="Apps.open('not-dumb')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_not_dumb.png" alt="not dumb" style="width: 100%; height: 100%;"></div>
                    <div class="icon-label group-hover:text-pink-600 transition-colors">Not Dumb</div>
                </div>
                <div class="win-icon group" onclick="Apps.open('madrid')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_madrid.png" alt="madrid" style="width: 100%; height: 100%;"></div>
                    <div class="icon-label group-hover:text-indigo-700 transition-colors">HalaMadrid.exe</div>
                </div>
                <div class="win-icon group" onclick="Apps.open('app-grown')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_19.png" alt="19" style="filter: sepia(1) saturate(3) hue-rotate(270deg);"></div>
                    <div class="icon-label group-hover:text-purple-600 transition-colors">19.exe</div>
                </div>

                 <div class="win-icon group" onclick="Apps.open('terminal-app')">
                    <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_terminal.png" alt="terminal" style="filter: sepia(1) saturate(4) hue-rotate(100deg);"></div>
                    <div class="icon-label group-hover:text-emerald-500 transition-colors">Terminal.sh</div>
                </div>

            </div>
            <div class="w-full text-center text-[10px] text-gray-300 mt-8 uppercase tracking-widest font-mono">System Core • v19.0</div>
        </div>
    `},

    {
        id: 'folder-feelings', title: 'Soft Stuff', icon: '<img src="assets/icons/folder_feelings.png" alt="feelings" style="filter: sepia(0.3) saturate(1.2) hue-rotate(-10deg); width: 100%; height: 100%;">', dock: false, width: 800, height: 600, content: `
        <div class="folder-window-grid">
            <div class="win-icon group" onclick="Apps.open('app-letters')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_letters_new.png" alt="letters" style="width: 100%; height: 100%;"></div><div class="icon-label">Letters</div></div>
            <div class="win-icon group" onclick="Apps.open('app-mixtape')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_mixtape_new.png" alt="mixtape" style="width: 100%; height: 100%;"></div><div class="icon-label">Mixtape</div></div>
            <div class="win-icon group" onclick="Apps.open('app-bloom')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_bloom_new.png" alt="bloom" style="width: 100%; height: 100%;"></div><div class="icon-label">Daily Bloom</div></div>
            <div class="win-icon" onclick="Apps.open('why-matter')"><div class="icon-img"><img src="assets/icons/app_matter.png" alt="why matter" style="width: 100%; height: 100%;"></div><div class="icon-label">Why You Matter</div></div>
            <div class="win-icon" onclick="Apps.open('tired')"><div class="icon-img"><img src="assets/icons/app_sleep.png" alt="tired" style="width: 100%; height: 100%;"></div><div class="icon-label">When Tired</div></div>
            <div class="win-icon" onclick="Apps.open('future')"><div class="icon-img"><img src="assets/icons/app_future_new.png" alt="future" style="width: 100%; height: 100%;"></div><div class="icon-label">Future You</div></div>
            <div class="win-icon" onclick="Apps.open('thank-you')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_gratitude_new.png" alt="gratitude" style="width: 100%; height: 100%;"></div><div class="icon-label">Gratitude</div></div>
            <div class="win-icon" onclick="Apps.open('inkpot-new')"><div class="icon-img"><img src="assets/icons/app_inkpot_new.png" alt="inkpot" style="width: 100%; height: 100%;"></div><div class="icon-label">The Inkpot</div></div>
            <div class="win-icon" onclick="Apps.open('app-capsule')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_capsule_new.png" alt="capsule" style="width: 100%; height: 100%;"></div><div class="icon-label">Time Capsule</div></div>
            <div class="win-icon" onclick="Apps.open('app-planes')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_planes.png" alt="planes" style="width: 100%; height: 100%;"></div><div class="icon-label">Paper Planes</div></div>
            <div class="win-icon" onclick="Apps.open('app-journal')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_journal_new.png" alt="journal" style="width: 100%; height: 100%;"></div><div class="icon-label">Our Story</div></div>
            <div class="win-icon" onclick="Apps.open('last-thing')"><div class="icon-img"><img src="assets/icons/app_rose.png" alt="last thing" style="width: 100%; height: 100%;"></div><div class="icon-label">One Last Thing</div></div>
            <div class="win-icon" onclick="Apps.open('admire')"><div class="icon-img"><img src="assets/icons/app_truth_new.png" alt="truth" style="width: 100%; height: 100%;"></div><div class="icon-label">Deep Truths</div></div>
        </div>
    `},

    {
        id: 'folder-fun', title: 'Unstable Features', icon: '<img src="assets/icons/folder_fun.png" alt="folder" style="filter: sepia(1) saturate(4) hue-rotate(50deg);">', dock: false, width: 800, height: 600, content: `
        <div class="folder-window-grid">

            <div class="win-icon" onclick="Apps.open('flash')"><div class="icon-img"><img src="assets/icons/app_speed.png" alt="flash" style="width: 100%; height: 100%;"></div><div class="icon-label">Fastest<br>Alive</div></div>
             <div class="win-icon" onclick="Apps.open('rabbit')"><div class="icon-img"><img src="assets/icons/app_rabbit_new.png" alt="rabbit" style="width: 100%; height: 100%;"></div><div class="icon-label">Rabbit<br>Mode</div></div>
            <div class="win-icon" onclick="Apps.open('rabbit-runner')"><div class="icon-img"><img src="assets/icons/app_rabbit_new.png" alt="rabbit" style="width: 100%; height: 100%;"></div><div class="icon-label">Rabbit<br>Runner</div></div>
            <div class="win-icon" onclick="Apps.open('word-spiral')"><div class="icon-img"><img src="assets/icons/app_spiral.png" alt="spiral" style="width: 100%; height: 100%;"></div><div class="icon-label">Word Spiral</div></div>
            <div class="win-icon" onclick="Apps.open('the-path')"><div class="icon-img"><img src="assets/icons/app_path.png" alt="path" style="width: 100%; height: 100%;"></div><div class="icon-label">The Path</div></div>
            <div class="win-icon" onclick="Apps.open('personality-quiz')"><div class="icon-img"><img src="assets/icons/app_us_quiz.png" alt="quiz" style="width: 100%; height: 100%;"></div><div class="icon-label">Who Are You?</div></div>
             <div class="win-icon" onclick="Apps.open('radio-harshit')"><div class="icon-img"><img src="assets/icons/app_radio.png" alt="radio" style="filter: sepia(1) saturate(3) hue-rotate(300deg);"></div><div class="icon-label">Radio<br>Harshit</div></div>

            <div class="win-icon" onclick="Apps.open('spotify')"><div class="icon-img"><img src="assets/icons/app_spotify.png" alt="spotify" style="filter: sepia(1) saturate(5) hue-rotate(100deg);"></div><div class="icon-label">Vibe Check</div></div>

            <div class="win-icon" onclick="Apps.open('app-anime')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_anime_new.png" alt="anime" style="width: 100%; height: 100%;"></div><div class="icon-label">Anime<br>Gallery</div></div>


            <div class="win-icon" onclick="Apps.open('app-decision')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_decision_new.png" alt="decision" style="width: 100%; height: 100%;"></div><div class="icon-label">Decision<br>Helper</div></div>
            <div class="win-icon" onclick="Apps.open('app-wifi')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_wifi.png" alt="wifi" style="width: 100%; height: 100%;"></div><div class="icon-label">Bangalore<br>Network</div></div>
            <div class="win-icon" onclick="Apps.open('frequency-3015')"><div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_radio.png" alt="frequency" style="width: 100%; height: 100%;"></div><div class="icon-label">Frequency<br>3015.exe</div></div>
        </div>
    `},

    {
        id: 'app-vault', title: 'Vault', icon: '<img src="assets/icons/app_vault.png" alt="vault" style="filter: sepia(1) saturate(0) contrast(1.5);">', dock: true, width: 800, height: 600, content: `
        <div class="h-full bg-gray-900 flex flex-col relative overflow-hidden">
            <!-- Lock Screen -->
            <div id="vault-lock-screen" class="absolute inset-0 z-20 bg-gray-100 flex flex-col items-center justify-center select-none">
                <div id="vault-badge" class="vault-attempt-badge">System Secure</div>
                <div class="text-6xl mb-6">🔐</div>
                <h3 class="text-xl font-bold mb-6 text-gray-700 font-serif">Restricted Access</h3>
                <input type="password" id="vault-passcode" class="border-2 border-gray-300 rounded-lg px-4 py-2 text-center mb-1 w-48 text-xl tracking-widest outline-none focus:border-blue-500 transition" placeholder="PASSCODE" onkeydown="if(event.key === 'Enter') unlockVault()">
                <div id="vault-forgot-btn" class="forgot-btn mb-6 opacity-60 hover:opacity-100" onclick="showVaultHint()">Forgot password?</div>
                <button onclick="unlockVault()" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-2 rounded-full transition shadow-lg transform hover:scale-105">Unlock</button>
                <div id="vault-error" class="text-red-500 text-sm mt-4 opacity-0 font-bold transition-opacity">Access Denied</div>
                <div class="mt-8 text-center px-6">
                    <div id="vault-hint-main" class="text-xs text-gray-500 font-medium mb-1 opacity-40 transition-opacity">Protected Memory. Correct credentials required.</div>
                    <div id="vault-hint-extra" class="text-[10px] text-gray-400 italic">Contact Shravii for access.</div>
                </div>
            </div>

            <!-- Content (Hidden by default) -->
            <div id="vault-grid" class="hidden h-full p-8 overflow-y-auto custom-scroll">
                <div class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-700 pb-2">Vault Contents</div>
                <div class="folder-window-grid">
                     <div class="win-icon group" onclick="Apps.open('truth-archives')">
                        <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_files.png" alt="archives" style="width: 100%; height: 100%;"></div>
                        <div class="icon-label text-gray-300 group-hover:text-green-400">Truth Archives</div>
                    </div>
                    <div class="win-icon group" onclick="Apps.open('map-of-us')">
                        <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_treasure.png" alt="map" style="width: 100%; height: 100%;"></div>
                        <div class="icon-label text-gray-300 group-hover:text-blue-400">Detail Map</div>
                    </div>
                     <div class="win-icon group" onclick="Apps.open('memories-gallery')">
                        <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_memories_new.png" alt="memories" style="width: 100%; height: 100%;"></div>
                        <div class="icon-label text-gray-300 group-hover:text-pink-400">Memories</div>
                    </div>
                     <div class="win-icon group" onclick="Apps.open('playlist')">
                        <div class="icon-img group-hover:scale-110 transition-transform duration-300 drop-shadow-md"><img src="assets/icons/app_cassette.png" alt="playlist" style="width: 100%; height: 100%;"></div>
                        <div class="icon-label text-gray-300 group-hover:text-purple-400">Hidden Tracks</div>
                    </div>
                </div>
            </div>
        </div>
    `},

    /* === SYSTEM CORE APPS (Inside Folder) === */
    {
        id: 'terminal-app', title: 'Terminal.sh', icon: '<img src="assets/icons/app_terminal.png" alt="terminal">', dock: false, folder: 'folder-system', width: 800, height: 600, content: `
        <div class="terminal-window h-full bg-[#1e1e1e] text-green-500 font-mono text-sm p-4 flex flex-col">
            <div id="term-output-app" class="flex-1 overflow-y-auto mb-2 custom-scroll space-y-1">
                <div class="selection-none" style="text-shadow: 0 0 5px rgba(74, 222, 128, 0.5);">V-Space Terminal [Version 1.0.0]</div>
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
        id: 'first-conversation', title: '12:21 AM', icon: '<img src="assets/icons/app_1221.png" alt="chat" style="width: 100%; height: 100%;">', dock: false, folder: 'folder-system', width: 600, height: 600, content: `
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
        id: 'connection-log', title: 'Our Journey', icon: '<img src="assets/icons/app_journey.png" alt="journey" style="width: 100%; height: 100%;">', dock: true, folder: 'folder-system', width: 600, height: 800, onOpen: renderJourney, content: `
        <div id="journey-scroll" class="h-full bg-[#fcfcfc] overflow-y-auto scroll-smooth relative">
            <div id="journey-container" class="min-h-full pb-20"></div>
        </div>
    `},

    {
        id: 'mr-snow', title: 'Mr. Snow', icon: '<img src="assets/icons/app_snow.png" alt="snow" style="width: 100%; height: 100%;">', dock: true, width: 450, height: 600, onOpen: initMrSnowApp, content: `
        <div class="mr-snow-view relative h-full">
            <canvas id="snow-canvas" class="absolute inset-0 z-0"></canvas>
            
            <div class="relative z-10 h-full flex flex-col items-center justify-center p-8 overflow-y-auto custom-scroll">
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl max-w-sm pointer-events-auto transform transition hover:scale-105 duration-700 my-auto">
                    <h3 class="mr-snow-title text-3xl font-serif text-white mb-6 text-center drop-shadow-md">❄️</h3>
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
                <div id="comfort-msg"></div>
            </div>
        </div>
    `},

    {
        id: 'why-matter', title: 'Why You Matter', icon: '<img src="assets/icons/app_matter.png" alt="why matter" style="width: 100%; height: 100%;">', dock: false, width: 700, height: 500, content: `
        <div class="h-full bg-gradient-to-br from-rose-50 via-white to-teal-50 p-12 flex flex-col items-center justify-center text-center cursor-pointer relative overflow-y-auto custom-scroll" onclick="nextWhy()">
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
        id: 'admire', title: 'Deep Truths', icon: '<img src="assets/icons/app_truth_new.png" alt="truth" style="width: 100%; height: 100%;">', dock: false, width: 900, height: 650, content: `
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
                        <p>You don't entertain lies. You try to understand. You stand for clarity and truth, even when it's uncomfortable. That is rare.</p>
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
                        <p>You handle me well, like a kid. You make me feel special, like a queen. You are always there to rescue me from thoughts that overcome me.</p>
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

                <!-- Card 6: The Listener -->
                <div class="truth-card group" onclick="toggleTruth(this)">
                     <div class="flex items-center gap-4 mb-2">
                        <div class="truth-icon text-3xl">🎧</div>
                        <div class="truth-header">
                            <div class="font-bold text-white text-lg">The Listener</div>
                            <div class="text-[10px] text-purple-300 uppercase">Input: Music</div>
                        </div>
                    </div>
                     <div class="truth-details">
                        <p>Music isn't just entertainment for you—it's emotional regulation. You use it to process feelings you don't verbalize.</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-auto border-t border-white/5 pt-4 flex justify-between items-end">
                <div class="text-[9px] text-slate-500 font-mono">
                    ID: 847-HK-TRUE<br>
                    CLR: 
                </div>
                 <div class="text-xs text-slate-400 tracking-widest uppercase opacity-70 animate-pulse">Access Granted</div>
            </div>
        </div>
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
        id: 'facts', title: 'Harshit Facts.txt', icon: '<img src="assets/icons/app_facts.png" alt="facts" style="filter: hue-rotate(0deg);">', folder: 'system', dock: false, width: 800, height: 750, onOpen: startFactsApp, content: `
    <div class="facts-app custom-scroll" id="facts-app-root">
        <!-- Digital Terminal Screen (Initial State) -->
        <div class="facts-terminal" id="facts-terminal">
            <div class="facts-log-line" style="animation-delay: 0.1s;">[SYSTEM] Initializing Profile Sync...</div>
            <div class="facts-log-line" style="animation-delay: 0.3s;">[AUTH] Identity:Mehta</div>
            <div class="facts-log-line" style="animation-delay: 0.5s;">[DATA] Fetching behavioral patterns...</div>
            <div class="facts-log-line" style="animation-delay: 0.8s;">[DATA] Warning: Emotional layers found... bypassing...</div>
            <div class="facts-log-line" style="animation-delay: 1.2s;">[SYNC] Profile successfully reconstructed.</div>
            <button class="facts-enter-btn" onclick="startFactsApp()">Access File</button>
        </div>

        <div class="facts-content" id="facts-main-content">
            
            <div class="facts-section">
                <div class="facts-section-title">SYSTEM SPECIFICATIONS 💻</div>
                <div class="facts-specs-list">
                    <div class="spec-item"><span class="spec-label">MODEL_ID</span><span class="spec-val">HARSHIT_MEHTA_19</span></div>
                    <div class="spec-item"><span class="spec-label">CORE_KERNEL</span><span class="spec-val">COMPASSION_OS_v2.0</span></div>
                    <div class="spec-item"><span class="spec-label">SYSTEM_UPTIME</span><span class="spec-val">ACTIVE_2004_PRESENT</span></div>
                    <div class="spec-item"><span class="spec-label">LOGIC_MODE</span><span class="spec-val">INDUCTIVE / WITTY</span></div>
                </div>
            </div>

            <div class="facts-section">
                <div class="facts-section-title">IDENTITY LAYERS 🎭</div>
                <div class="facts-alias-slider">
                    <div class="facts-alias-card">
                        <div class="facts-alias-icon">❄️</div>
                        <h3>Mr. Snow</h3>
                        <p>Calm surface, deep emotional layers. Known by those who stay to see it fall.</p>
                    </div>
                    <div class="facts-alias-card">
                        <div class="facts-alias-icon">🐰</div>
                        <h3>Rabbit</h3>
                        <p>Gentle, alert, emotionally sensitive. Needs safety to show softness.</p>
                    </div>
                    <div class="facts-alias-card">
                        <div class="facts-alias-icon">🐭</div>
                        <h3>Mr. Chuha</h3>
                        <p>Soft, cute, unintentionally endearing. (Don't tell him I said this).</p>
                    </div>
                    <div class="facts-alias-card">
                        <div class="facts-alias-icon">🎮</div>
                        <h3>Mr. Ota</h3>
                        <p>Teasing, playful. Built entirely from inside jokes.</p>
                    </div>
                </div>
            </div>

            <div class="facts-section">
                <div class="facts-section-title">OPERATING PARAMETERS 🧬</div>
                <div class="facts-grid">
                    <div class="facts-card">
                        <h4>Fuel Source</h4>
                        <div class="fact-val">Sub Sandwiches 🥪</div>
                        <div class="sys-note">Efficiency: High. Texture: Specific.</div>
                    </div>
                    <div class="facts-card">
                        <h4>System Threat</h4>
                        <div class="fact-val">Bhindi (Okra) 🤢</div>
                        <div class="sys-note" style="color: #ef4444;">CRITICAL ERROR. DO NOT SERVE.</div>
                    </div>
                     <div class="facts-card">
                        <h4>Communication</h4>
                        <div class="fact-val">Witty / Reserved</div>
                        <div class="sys-note">Mode: Context Dependent. Depth: High.</div>
                    </div>
                    <div class="facts-card">
                        <h4>Dislikes</h4>
                        <div class="fact-val">Rice & Dry Fruits</div>
                        <div class="sys-note">Preference: Simple, no-nonsense comfort.</div>
                    </div>
                </div>
            </div>

            <div class="facts-observation-wrap">
                <div class="observation-header">
                    <span class="obs-badge">CONFIDENTIAL REPORT</span>
                    <span class="obs-id">REG_S19_847</span>
                </div>
                <div class="observation-box">
                    <div class="obs-marker"></div>
                    <div class="obs-body">
                        <div class="obs-label">Deep Scan Observation</div>
                        <blockquote>
                            "He is not loud. Not dramatic. <br>
                            But once he chooses someone, the system never forgets them."
                        </blockquote>
                    </div>
                </div>
                <div class="observation-footer">
                    <span>Generated: 2024.06.20</span>
                    <span>Auth: Shravii_V-Space</span>
                </div>
            </div>

            <div style="height: 120px;"></div>
        </div>
    </div>
`},

    // Internal filename: emotionally_dumb_but_lovable.js
    {
        id: 'not-dumb', title: 'Not Dumb', icon: '<img src="assets/icons/app_not_dumb.png" alt="not dumb" style="width: 100%; height: 100%;">', folder: 'system', dock: false, width: 600, height: 700, onOpen: initNotDumb, content: `
        <div id="not-dumb-container" class="h-full not-dumb-glass-bg text-gray-800 font-sans text-sm relative overflow-hidden flex flex-col">
            <!-- Orbs -->
            <div class="nd-orb-1"></div>
            <div class="nd-orb-2"></div>

            <!-- Dynamic Content Area -->
            <div id="not-dumb-content" class="flex-1 p-8 overflow-y-auto custom-scroll relative z-10">
                <!-- Content injected via JS -->
            </div>

            <!-- Global Watermark -->
            <div class="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                <div class="text-[200px] grayscale rotate-12 mix-blend-overlay">🤨</div>
            </div>

            <!-- Navigation (Hidden initially) -->
            <div id="not-dumb-nav" class="p-6 flex justify-end opacity-0 transition duration-500 relative z-20">
                <button onclick="nextNotDumbSlide()" class="px-6 py-2 bg-white/50 hover:bg-white/80 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider transition shadow-sm border border-white/50 text-slate-600 hover:text-slate-800">
                    Next <span class="ml-1">➜</span>
                </button>
            </div>
        </div>
    `},

    {
        id: 'madrid', title: 'HalaMadrid.exe', icon: '<img src="assets/icons/app_madrid.png" alt="madrid" style="width: 100%; height: 100%;">', dock: false, width: 600, height: 700, content: `
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
        id: 'flash', title: 'Fastest Alive', icon: '<img src="assets/icons/app_speed.png" alt="flash" style="width: 100%; height: 100%;">', dock: false, folder: 'folder-fun', width: 800, height: 600, content: `
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
                background: url('assets/gifs/lightning.gif') center/cover;
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
        id: 'rabbit', title: 'The Rabbit Squad', icon: '<img src="assets/icons/app_rabbit_new.png" alt="rabbit" style="width: 100%; height: 100%;">', dock: false, folder: 'folder-fun', width: 700, height: 600, onOpen: () => RabbitSquad.init(), content: `
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




    /* === EASTER EGG APPS === */
    {
        id: 'secret-gallery', title: 'The Hidden Corner', icon: '<img src="assets/icons/app_memories_new.png" alt="hidden" style="width: 100%; height: 100%;">', dock: false, width: 900, height: 650, content: `
        <div class="h-full bg-black p-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-slate-900 animate-pulse-slow"></div>
            
            <div class="relative z-10 text-center mb-8">
                <div class="text-4xl mb-2">🎞️</div>
                <h2 class="text-2xl font-serif text-white tracking-widest uppercase">Unseen Fragments</h2>
                <div class="w-12 h-1 bg-blue-500/50 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto max-h-[450px] custom-scroll p-4">
                 <!-- Placeholders for hidden moments - reusing diverse images for effect -->
                <div class="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group hover:scale-105 transition duration-500">
                    <img src="https://images.unsplash.com/photo-1549488497-758969f91a51?q=80&w=600" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition">
                    <div class="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black to-transparent text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 transition">The subtle vibes.</div>
                </div>
                 <div class="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group hover:scale-105 transition duration-500">
                    <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition">
                    <div class="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black to-transparent text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 transition">Captured lighting.</div>
                </div>
                 <div class="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group hover:scale-105 transition duration-500">
                    <img src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=600" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition">
                    <div class="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black to-transparent text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 transition">Cosmic view.</div>
                </div>
                 <div class="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group hover:scale-105 transition duration-500">
                    <img src="https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=600" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition">
                    <div class="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black to-transparent text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 transition">Just peace.</div>
                </div>
            </div>
            
            <div class="absolute bottom-4 left-0 w-full text-center text-[10px] text-gray-600 font-mono">
                SECRET_ACCESS_GRANTED • LEVEL_7
            </div>
        </div>
    `},

    {
        id: 'inkpot', title: 'The Inkpot', icon: '<img src="assets/icons/app_inkpot.png" alt="inkpot">', dock: false, folder: 'folder-feelings', width: 800, height: 750, onOpen: initInkpot, content: `
        <div class="inkpot-wrapper h-full relative overflow-hidden bg-[#f0e6d2]">
            <!-- Paper Texture -->
            <div class="paper-texture absolute inset-0 opacity-40 pointer-events-none" style="background-image: url('assets/images/pattern_paper.png'); mix-blend-mode: multiply;"></div>
            
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
        id: 'last-thing', title: 'One Last Thing', icon: '<img src="assets/icons/app_rose.png" alt="last thing" style="width: 100%; height: 100%;">', dock: false, folder: 'folder-feelings', width: 500, height: 400, content: `
        <div class="h-full bg-black flex flex-col items-center justify-center text-center p-6 relative overflow-y-auto custom-scroll">
             <!-- Cinematic Gradient -->
             <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-pulse-slow pointer-events-none"></div>
             
             <div class="relative z-10 animate-fade-in-up my-auto">
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
        id: 'tired', title: 'When Tired', icon: '<img src="assets/icons/app_sleep.png" alt="tired" style="width: 100%; height: 100%;">', dock: true, width: 600, height: 500, onOpen: initTired, content: `
        <div id="tired-container" class="tired-container">
            <div id="tired-content" class="tired-content"></div>
            <div class="heart-corner">❤️</div>
        </div>
    `},





    /* CLUSTER 4: GROWTH & 19 (Mature) */
    {
        id: 'app-grown', title: '19.exe', icon: '<img src="assets/icons/app_19.png" alt="19">', dock: true, width: 800, height: 700, content: `
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
        id: 'future', title: 'Future You', icon: '<img src="assets/icons/app_future_new.png" alt="future" style="width: 100%; height: 100%;">', dock: false, width: 800, height: 600, content: `
        <div class="h-full w-full relative bg-black custom-scroll overflow-y-auto group">
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

    /* === NEW APPS === */
    /* === SOFT STUFF (Inside Folder) === */
    {
        id: 'inkpot-new', title: 'The Inkpot', icon: '<img src="assets/icons/app_inkpot_new.png" alt="inkpot" style="width: 100%; height: 100%;">', dock: false, folder: 'folder-feelings', width: 500, height: 600, onOpen: initInkpot, content: `
        <div class="inkpot-bg">
            <div id="inkpot-text" class="poem-text"></div>
            <div class="inkpot-quill" onclick="nextPoem()">🖋️</div>
        </div>
    `},



    /* === FUN & CHAOS (Inside Folder) === */
    {
        id: 'radio-harshit', title: 'Radio Harshit', icon: '<img src="assets/icons/app_radio.png" alt="radio">', dock: true, folder: 'folder-fun', width: 500, height: 600, onOpen: initRadio, content: `
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
        id: 'the-path', title: 'The Path', icon: '<img src="assets/icons/app_path.png" alt="path" style="width: 100%; height: 100%;">', dock: false, folder: 'folder-fun', width: 800, height: 600, onOpen: startPathGame, content: `
        <div class="path-game" id="path-container" onclick="handlePathClick(event)">
            <!-- Dynamic Content -->
        </div>
    `},

    {
        id: 'word-spiral', title: 'Word Spiral', icon: '<img src="assets/icons/app_spiral.png" alt="spiral" style="width: 100%; height: 100%;">', dock: false, folder: 'folder-fun', width: 600, height: 700, onOpen: initWordSpiral, content: `
        <div class="spiral-bg">
            <div id="spiral-content" class="h-full flex flex-col items-center justify-center p-8 text-center text-white">
                <div class="text-4xl mb-6 animate-spin-slow">🌀</div>
                <div id="spiral-word" class="text-3xl font-serif font-bold mb-8">Growth</div>
                <div id="spiral-opts" class="grid grid-cols-1 gap-4 w-full max-w-xs"></div>
            </div>
        </div>
    `},

    {
        id: 'personality-quiz', title: 'Who Are You?', icon: '<img src="assets/icons/app_identity_new.png" alt="personality" style="width: 100%; height: 100%;">', dock: false, folder: 'folder-fun', width: 600, height: 700, onOpen: initPersonalityQuiz, content: `
        <div class="quiz-bg">
            <div id="p-quiz-content" class="h-full flex flex-col items-center justify-center p-8 text-center overflow-y-auto custom-scroll">
                <div class="text-5xl mb-6">🔍</div>
                <div id="p-quiz-q" class="text-xl font-bold text-gray-800 mb-8">System Check...</div>
                <div id="p-quiz-opts" class="flex flex-col gap-3 w-full max-w-xs"></div>
            </div>
        </div>
    `},

    {
        id: 'rabbit-runner', title: 'RabbitRunner.exe', icon: '<img src="assets/icons/app_rabbit_new.png" alt="rabbit runner" style="filter: invert(1); width: 100%; height: 100%;">', dock: false, folder: 'folder-fun', width: 900, height: 600, onOpen: initRabbitGame, content: `
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
        id: 'spotify', title: 'Spotify - Vibe Check', icon: '<img src="assets/icons/app_spotify.png" alt="spotify" style="width: 100%; height: 100%;">', dock: true, folder: 'folder-fun', width: 450, height: 600, content: `
        <div class="h-full bg-gradient-to-b from-[#1DB954] to-black text-white p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div class="w-48 h-48 bg-gray-800 shadow-2xl mb-6 rounded-md overflow-hidden relative group album-spin">
                <img src="assets/images/album-cover.jpg" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition">
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
        id: 'do-not-open', title: 'Do Not Open', icon: '<img src="assets/icons/app_warning.png" alt="do not open" style="width: 100%; height: 100%;">', dock: false, folder: 'app-vault', width: 400, height: 300, content: `
        <div class="h-full flex flex-col items-center justify-center bg-red-50 text-red-900 text-center p-6 overflow-y-auto custom-scroll">
            <div class="my-auto">
                <div class="font-bold mb-2">You Opened It.</div>
                <div class="text-xs">I knew you would. Stubborn. ❤️</div>
            </div>
        </div>
    `},


    {
        id: 'through-my-eyes', title: 'Through My Eyes', icon: '<img src="assets/icons/app_eyes.png" alt="letter" style="width: 100%; height: 100%;">', dock: false, folder: 'app-vault', width: 800, height: 750, content: `
        <div class="letter-desk">
            <div class="letter-sheet" id="letter-content">
                <div class="letter-header">
                    <h1 class="letter-title">To My Best Friend 🎂</h1>
                    <div class="letter-meta">Written with 100% Truth & 0% Lie</div>
                    <div class="letter-divider"></div>
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
                    <strong>June 20, 2024 at 12:21 AM</strong> on an Online Platform —
                    a moment that quietly turned into something meaningful,
                    lasting, and emotionally deep.
                </p>

                <div class="letter-quote">
                    "You are not just smart and perceptive, but you're also incredibly real.
                    You're human, but in the most beautiful way."
                </div>

                <h3>The Many Names of You</h3>
                <ul class="list-disc list-inside ml-5 mb-4 space-y-2">
                    <li><span class="highlight">Mr. Snow ❄️</span>: Calm, distant on the outside, but emotionally deep inside.</li>
                    <li><span class="highlight">Mr. Chuha 🐭</span>: Soft, cute, and unintentionally endearing.</li>
                    <li><span class="highlight">Mr. Ota</span>: Playful, teasing, inside-joke energy.</li>
                    <li><span class="highlight">Rabbit 🐰</span>: Gentle, alert, emotionally sensitive.</li>
                </ul>

                <h3>Why You Are The "Bestest"</h3>
                <p>
                    You are the world's strongest person (Emotionally & Physically 💪).
                    You are the fastest person (Flash who?!).
                    You have a memory that scares me sometimes — remembers every tiny detail.
                    You do 100% of everything — 100% care, 100% dedication.
                </p>

                <h3>Our Bond</h3>
                <p>
                    Our friendship wasn't built on big events.
                    It was built on music discussions, random chats,
                    project ideas, check-ins, and being there without being asked.
                    It survived fights, misunderstandings, and silence.
                    That makes it special.
                </p>

                <p class="letter-footer">
                    — Shravii ✨
                </p>
                
                <!-- Decoration -->
                <div class="wax-seal">
                    <div class="seal-inner">S</div>
                </div>
            </div>
        </div>
    `,
        onOpen: initLetterReveal
    },



    {
        id: 'secret-vault', title: 'Secret Vault', icon: '<img src="assets/icons/app_vault.png" alt="vault" style="width: 100%; height: 100%;">', dock: false, folder: 'app-vault', width: 800, height: 600, onOpen: initSecretVault, content: `
        <div id="vault-container" class="relative w-full h-full bg-gray-900 text-white overflow-hidden flex flex-col items-center justify-center">
             
             <!-- Lock Screen -->
             <div id="vault-lock" class="flex flex-col items-center gap-6 p-8 transition-opacity duration-500" style="display: flex;">
                <div class="text-6xl mb-4">🔐</div>
                <h2 class="text-2xl font-light tracking-widest uppercase">Restricted Access</h2>
                <div class="relative w-64">
                    <input type="password" id="vault-pass" class="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-center text-xl tracking-[0.5em] focus:outline-none focus:border-white/50 transition placeholder-gray-500" placeholder="••••••" maxlength="6">
                </div>
                <p id="vault-hint" class="text-xs text-gray-500 hover:text-gray-300 cursor-pointer transition" onclick="showVaultRiddleSequence()">Hint: ?</p>
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
        id: 'voice-box', title: 'VoiceBox', icon: '<img src="assets/icons/app_voice.png" alt="voice" style="width: 100%; height: 100%;">', dock: false, folder: 'app-vault', width: 550, height: 700, onOpen: initVoiceBox, content: `
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
        id: 'readme-letter', title: 'ReadMe.txt', icon: '<img src="assets/icons/app_letters_new.png" alt="readme" style="width: 100%; height: 100%;">', dock: false, folder: 'app-vault', width: 800, height: 800, content: `
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
        id: 'memories-gallery', title: 'Memories', icon: '<img src="assets/icons/app_memories_new.png" alt="memories" style="width: 100%; height: 100%;">', dock: false, folder: 'app-vault', width: 950, height: 700, onOpen: initGallery, content: `
        <div id="gallery-container" class="polaroid-gallery custom-scroll">
            <!-- Dynamic Polaroids will be injected here -->
        </div>
    `},

    {
        id: 'truth-archives', title: 'Truth Archives', icon: '<img src="assets/icons/app_files.png" alt="archives" style="width: 100%; height: 100%;">', dock: false, folder: 'app-vault', width: 800, height: 600, onOpen: initTruths, content: `
        <div class="h-full bg-[#1a1a1a] text-green-400 p-6 font-mono flex flex-col">
             <div class="border-b border-green-800 pb-4 mb-4 flex justify-between items-center">
                <h2 class="text-xl tracking-widest uppercase">Truth_Database_v1.0</h2>
                <div class="text-xs opacity-50">STATUS: UNCLASSIFIED</div>
             </div>
             
             <!-- Search -->
             <div class="mb-6 relative">
                <input type="text" id="truth-search" onkeyup="filterTruths()" placeholder="Search archives (e.g., 'worst', 'crush')..." 
                       class="w-full bg-black/50 border border-green-900 p-3 rounded text-sm focus:outline-none focus:border-green-500 transition-colors placeholder-green-800/50">
                <div class="absolute right-3 top-3 text-xs opacity-50">🔍</div>
             </div>

             <!-- Grid -->
             <div id="truth-grid" class="flex-1 overflow-y-auto custom-scroll grid grid-cols-1 gap-4">
                <!-- Injected via JS -->
             </div>
        </div>
    `},

    {
        id: 'map-of-us', title: 'Map of Us', icon: '<img src="assets/icons/app_map_icon.png" alt="map" style="width: 100%; height: 100%;">', dock: false, folder: 'app-vault', width: 900, height: 600, onOpen: initMap, content: `
        <div class="h-full bg-[#e0e7ff] relative overflow-hidden select-none">
            <!-- Map Background (Stylized) -->
            <div class="absolute inset-0 bg-[url('https://thumbs.dreamstime.com/b/world-map-tech-background-blue-technology-163456072.jpg')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
            <div class="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

            <div class="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-white/50 max-w-xs">
                <h2 class="text-lg font-bold text-slate-700 mb-1">Bus Route Research 🚌</h2>
                <p class="text-xs text-slate-500 leading-relaxed">
                    "Likely Areas: Outskirts of Pune like Mulshi...<br>
                    Distance: Irrelevant."
                </p>
            </div>

            <!-- Content Container -->
            <div id="map-markers" class="w-full h-full relative"></div>
        </div>
    `},

    /* === DESKTOP VISIBLE APPS (No Folder) === */
    {
        id: 'shravii', title: 'Shravii.exe', icon: '<img src="assets/icons/app_shravii.png" alt="shravii" style="width: 100%; height: 100%;">', dock: true, width: 500, height: 600, content: `
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
                <img src="assets/gifs/bear_love.gif" class="w-32 rounded-lg opacity-80 mix-blend-multiply">
            </div>
        </div>
    `},

    {
        id: 'about-us', title: 'The Dynamic', icon: '<img src="assets/icons/app_dynamic.png" alt="dynamic" style="width: 100%; height: 100%;">', dock: false, width: 800, height: 600, content: `
        <div class="about-container relative w-full h-full bg-slate-50 overflow-y-auto custom-scroll flex flex-col items-center">
            <div class="min-h-full flex flex-col items-center justify-center py-10 w-full">
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
        </div>
    `},

    /* === NEW APPS ADDED === */


    {
        id: 'app-anime', title: 'Anime Gallery', icon: '<img src="assets/icons/app_anime_new.png" alt="anime" style="width: 100%; height: 100%;">', dock: false, width: 700, height: 600, content: `
        <div class="anime-app">
            <div class="anime-grid custom-scroll">
                <div class="anime-item" onclick="AnimeApp.playSound()"><img src="assets/gifs/bear_love.gif"></div>
                <div class="anime-item"><img src="assets/gifs/bear_milk.gif"></div>
                <div class="anime-item"><img src="assets/gifs/bear_madrid.gif"></div>
                 <div class="anime-item"><img src="assets/gifs/milk-run.gif"></div>
                 <div class="anime-item"><img src="assets/gifs/milk_mascot.gif"></div>
                 <div class="anime-item"><img src="assets/gifs/cute_anime_1.gif"></div>
            </div>
            <div class="anime-controls">
                <button class="anime-btn sound" onclick="AnimeApp.playSound()">🔊 Nu Nu Nu</button>
                <button class="anime-btn" onclick="createModal({title:'Nope', desc:'No head shaking allowed! 😤', icon:'🚫'})">No Shake</button>
            </div>
        </div>
    `},


    /* === NEWEST APPS === */

    {
        id: 'app-decision', title: 'Decision Helper', icon: '<img src="assets/icons/app_decision_new.png" alt="decision" style="width: 100%; height: 100%;">', dock: false, width: 600, height: 600, content: `
    <div class="decision-app">
            <h2 class="text-2xl font-bold text-blue-900 mb-4">What should we do?</h2>
            <div class="decision-wheel" id="decision-wheel">🤔</div>
             <div class="w-full max-w-xs">
                <input type="text" id="decision-q" class="decision-input" placeholder="e.g. Kya khaaun?" value="Kya khaaun?">
                <button class="decision-btn w-full" onclick="DecisionApp.spin()">Decide for Us</button>
            </div>
        </div >
    `},

    {
        id: 'app-wifi',
        title: 'Network Manager',
        icon: '<img src="assets/icons/app_wifi.png" alt="wifi" style="width: 100%; height: 100%;">',
        dock: false,
        width: 450,
        height: 550,
        content: `
        <div class="wifi-app">
            <div class="wifi-header">
                <div>Bangalore_Network_Manager_v2.0</div>
                <div style="margin-left:auto; color:red;">⚠ Unstable</div>
            </div>
            <div class="wifi-list custom-scroll">
                <div class="wifi-item" onclick="WifiApp.connect('Ota_Hotspot_5G')">
                    <div class="wifi-signal"></div>
                    <div>Ota_Hotspot_5G</div>
                    <div class="wifi-lock">🔒</div>
                </div>
                <div class="wifi-item" onclick="WifiApp.connect('Roommate_Pvt')">
                    <div class="wifi-signal" style="opacity:0.5"></div>
                    <div>Roommate_Pvt</div>
                    <div class="wifi-lock">🔒</div>
                </div>
                <div class="wifi-item" onclick="WifiApp.connect('Airtel_Slow_AF')">
                    <div class="wifi-signal" style="opacity:0.2"></div>
                    <div>Airtel_Slow_AF</div>
                    <div class="wifi-lock">🔓</div>
                </div>
                 <div class="wifi-item" onclick="WifiApp.connect('Harshit_Brain_Cell')">
                    <div class="wifi-signal" style="opacity:0.1"></div>
                    <div>Harshit_Brain_Cell</div>
                    <div class="wifi-lock">❌</div>
                </div>
            </div>
            <div class="wifi-status-bar" id="wifi-status">Status: Scanning for stable connection...</div>
        </div>
    `},

    {
        id: 'frequency-3015',
        title: 'Frequency_3015.exe',
        icon: '<img src="assets/icons/app_radio.png" alt="frequency" style="width: 100%; height: 100%;">',
        dock: true,
        width: 550,
        height: 700,
        content: `
        <div class="frequency-app h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col relative overflow-hidden">
            <!-- Animated Background -->
            <div class="absolute inset-0 opacity-10 pointer-events-none">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                <div class="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]"></div>
                <div class="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-[60px]"></div>
            </div>

            <!-- Header -->
            <div class="relative z-10 px-6 py-4 border-b border-cyan-500/20 backdrop-blur-sm bg-slate-800/50">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.6)]"></div>
                        <div>
                            <div class="text-cyan-300 font-bold text-sm tracking-wider">SECURE SIGNAL</div>
                            <div class="text-cyan-500/60 text-[10px] font-mono uppercase tracking-widest">Frequency: 3015 MHz</div>
                        </div>
                    </div>
                    <div class="text-[10px] font-mono text-cyan-400/40 uppercase">Encrypted</div>
                </div>
            </div>

            <!-- Chat Messages Area -->
            <div id="freq-messages" class="relative z-10 flex-1 overflow-y-auto custom-scroll px-6 py-4 space-y-4">
                <!-- Initial System Message -->
                <div class="flex justify-center">
                    <div class="bg-cyan-950/40 border border-cyan-500/20 rounded-lg px-4 py-2 text-center">
                        <div class="text-[10px] text-cyan-400/60 uppercase tracking-widest mb-1">System Status</div>
                        <div class="text-xs text-cyan-300 font-mono">Connection Established</div>
                        <div class="text-[9px] text-cyan-500/40 mt-1">End-to-End Encrypted</div>
                    </div>
                </div>
            </div>

            <!-- Input Area -->
            <div class="relative z-10 px-6 py-4 border-t border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm">
                <div class="flex items-center gap-3">
                    <input 
                        type="text" 
                        id="freq-input" 
                        class="flex-1 bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-2.5 text-sm text-cyan-100 placeholder-cyan-500/30 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition font-mono"
                        placeholder="Type a message..."
                        onkeydown="if(event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); FrequencyApp.send(); }"
                    />
                    <button 
                        onclick="FrequencyApp.send()" 
                        class="bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg px-5 py-2.5 font-bold text-sm transition shadow-lg shadow-cyan-900/50 hover:shadow-cyan-500/30"
                    >
                        Send
                    </button>
                </div>
                <div class="mt-2 flex items-center gap-2 text-[10px] text-cyan-500/40 font-mono">
                    <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>Status: Online</span>
                </div>
            </div>

            <!-- Watermark -->
            <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[8px] text-cyan-500/20 font-mono uppercase tracking-widest pointer-events-none">
                Classified Communication Channel
            </div>
        </div>
        `,
        onOpen: () => {
            setTimeout(() => {
                const input = document.getElementById('freq-input');
                if (input) input.focus();
                FrequencyApp.loadMessages();
            }, 100);
        }
    },

];




/* === LAST LOGIC === */

/* === FREQUENCY APP (Secret Signal Chat) === */
const FrequencyApp = {
    storageKey: 'frequency_3015_messages',

    loadMessages() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            const messages = stored ? JSON.parse(stored) : [];
            const container = document.getElementById('freq-messages');

            if (!container) return;

            // Clear existing (except system message)
            const systemMsg = container.querySelector('.flex.justify-center');
            container.innerHTML = '';
            if (systemMsg) container.appendChild(systemMsg);

            // Render all messages
            messages.forEach(msg => this.renderMessage(msg, false));

            // Scroll to bottom
            container.scrollTop = container.scrollHeight;
        } catch (e) {
            console.error('Failed to load messages:', e);
        }
    },

    send() {
        const input = document.getElementById('freq-input');
        if (!input) return;

        const text = input.value.trim();
        if (!text) return;

        const message = {
            id: Date.now(),
            text: text,
            sender: 'user',
            timestamp: new Date().toISOString()
        };

        // Save to localStorage
        this.saveMessage(message);

        // Render
        this.renderMessage(message, true);

        // Clear input
        input.value = '';
        input.focus();

        // Auto-scroll
        const container = document.getElementById('freq-messages');
        if (container) {
            setTimeout(() => {
                container.scrollTop = container.scrollHeight;
            }, 100);
        }
    },

    saveMessage(message) {
        try {
            const stored = localStorage.getItem(this.storageKey);
            const messages = stored ? JSON.parse(stored) : [];
            messages.push(message);
            localStorage.setItem(this.storageKey, JSON.stringify(messages));
        } catch (e) {
            console.error('Failed to save message:', e);
        }
    },

    renderMessage(msg, animate = false) {
        const container = document.getElementById('freq-messages');
        if (!container) return;

        const isUser = msg.sender === 'user';
        const time = new Date(msg.timestamp).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });

        const msgDiv = document.createElement('div');
        msgDiv.className = `flex ${isUser ? 'justify-end' : 'justify-start'} ${animate ? 'opacity-0' : ''}`;

        msgDiv.innerHTML = `
            <div class="max-w-[75%] ${isUser ? 'bg-cyan-600' : 'bg-slate-700'} rounded-lg px-4 py-2.5 shadow-lg">
                <div class="text-sm text-white break-words">${this.escapeHtml(msg.text)}</div>
                <div class="text-[9px] ${isUser ? 'text-cyan-200' : 'text-slate-400'} mt-1 font-mono">${time}</div>
            </div>
        `;

        container.appendChild(msgDiv);

        if (animate) {
            requestAnimationFrame(() => {
                msgDiv.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                msgDiv.style.transform = 'translateY(10px)';
                requestAnimationFrame(() => {
                    msgDiv.style.opacity = '1';
                    msgDiv.style.transform = 'translateY(0)';
                });
            });
        }
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    clearAll() {
        if (confirm('Clear all messages? This cannot be undone.')) {
            localStorage.removeItem(this.storageKey);
            this.loadMessages();
        }
    }
};

const DecisionApp = {
    options: ["Subway 🥪", "Pizza 🍕", "Chinese 🍜", "Nothing (Hawa) 🌬️", "Maggi 🍝", "Ice Cream 🍦"],
    spinning: false,
    spin() {
        if (this.spinning) return;
        this.spinning = true;
        const wheel = document.getElementById('decision-wheel');
        const finalDeg = 1080 + Math.floor(Math.random() * 360);

        if (wheel) {
            wheel.style.transform = "rotate(" + finalDeg + "deg)";
            wheel.innerText = "🎲";
        }

        setTimeout(() => {
            this.spinning = false;
            if (wheel) {
                wheel.style.transition = "none";
                wheel.style.transform = "rotate(0deg)";
                setTimeout(() => wheel.style.transition = "transform 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)", 50);

                const choice = this.options[Math.floor(Math.random() * this.options.length)];
                wheel.innerText = choice.split(' ')[1] || '✨';
                createModal({ title: "Decision Made!", desc: "The universe says: <b>" + choice + "</b>", icon: "✨" });
            }
        }, 3000);
    }
};



/* === NEW LOGIC HELPERS === */
const BanterApp = {
    bure: 0,
    achhe: 0,
    quotes: [
        "Aap bure ho... (for now 😤)",
        "Mai kahe sunu? (but I'm listening anyway)",
        "Stop crying! (okay fine, cry if you need to)",
        "Liar! (I still believe you though)",
        "Chup chap so jao. (sweet dreams actually)",
        "Aapka kahe? (your opinion matters, ugh)",
        "I'm mad at you! (for like 5 minutes max)",
        "You're annoying! (in the cutest way)",
        "Don't talk to me! (but also don't leave)"
    ],
    init() {
        this.bure = parseInt(localStorage.getItem('banter_bure') || '42');
        this.achhe = parseInt(localStorage.getItem('banter_achhe') || '12');
        this.updateDisplay();
    },
    addBure() {
        this.bure++;
        localStorage.setItem('banter_bure', this.bure);
        this.updateDisplay();
        this.animateScore('bure-score');
    },
    addAchhe() {
        this.achhe++;
        localStorage.setItem('banter_achhe', this.achhe);
        this.updateDisplay();
        this.animateScore('achhe-score');
    },
    updateDisplay() {
        if (document.getElementById('bure-score')) document.getElementById('bure-score').innerText = this.bure;
        if (document.getElementById('achhe-score')) document.getElementById('achhe-score').innerText = this.achhe;
    },
    animateScore(id) {
        const el = document.getElementById(id);
        if (el) {
            el.style.transform = "scale(1.5)";
            setTimeout(() => el.style.transform = "scale(1)", 200);
        }
    },
    randomQuote() {
        const q = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        const el = document.getElementById('banter-quote');
        console.log("Q", q);
        if (el) {
            el.style.opacity = 0;
            setTimeout(() => {
                el.innerText = '"' + q + '"';
                el.style.opacity = 1;
            }, 200);
        }
    },
    complain() {
        const complaints = [
            "Your complaint has been forwarded to /dev/null 🗑️",
            "Complaint registered. Status: Ignored ✅",
            "Harshit says: 'Mai kahe sunu?' 🙄",
            "Error 404: Care not found 😴",
            "Complaint noted. Action: None 📝",
            "Processing... Just kidding, deleted! 🚮",
            "Your feedback is important to us (not really) 💀",
            "Complaint saved in 'Never Read' folder 📁",
            "Harshit's response: 'Aapka kahe?' 🤷",
            "System busy ignoring complaints... ⏳"
        ];

        const randomComplaint = complaints[Math.floor(Math.random() * complaints.length)];

        // Update the quote display with complaint response
        const quoteEl = document.getElementById('banter-quote');
        if (quoteEl) {
            quoteEl.style.opacity = 0;
            quoteEl.style.transform = 'scale(0.9) translateY(10px)';
            setTimeout(() => {
                quoteEl.innerText = '"' + randomComplaint + '"';
                quoteEl.style.opacity = 1;
                quoteEl.style.transform = 'scale(1) translateY(0)';
            }, 300);
        }
    }
};

const AnimeApp = {
    playSound() {
        if (typeof createModal === 'function')
            createModal({ title: "Soundboard", desc: "Playing: 'Nu nu nu nu nu!' 🎶", icon: "🔊" });
        // In a real app, we'd play audio here
    }
};



const VCApp = {
    join() { createModal({ title: "Connecting...", desc: "Joining General...<br><span style='color:green'>Connected</span>", icon: "🔊" }); },
    leave() { createModal({ title: "Left Channel", desc: "Disconnected.<br>Reason: 'Gayi hoon mai toh'", icon: "👋" }); },
    screenShare() { createModal({ title: "Screen Share", desc: "Sharing Screen 1...<br>(Harshit is watching while studying)", icon: "💻" }); }
};

const RoutineApp = {
    toggle(btn) {
        document.querySelectorAll('.priority-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.innerText;
        if (mode.includes("Study")) createModal({ title: "Mode Switched", desc: "Warning: Harshit might say 'Mujhe padhna hai'.", icon: "📚" });
        else createModal({ title: "Mode Switched", desc: "Yapping session initialized.", icon: "🗣️" });
    },
    check(el) {
        el.classList.toggle('checked');
        if (el.classList.contains('checked')) el.innerHTML = "✓";
        else el.innerHTML = "";
    }
};

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
            <h2>V-Space 19.0</h2>
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
    <div class="wallpaper-thumb" onclick = "setWallpaper('${wp.full}', this)" >
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
                icon.innerHTML = `<div class="icon-img text-3xl mb-2"><img src="assets/icons/folder_system.png" alt="folder" style="width: 100%; height: 100%;"></div><div class="icon-label text-white px-2 py-0.5 rounded text-[10px] tracking-wide backdrop-blur-sm shadow-black/50 drop-shadow-md">${name}</div>`;
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

/* === PHASE 0: COUNTDOWN GATEKEEPER (FIRST) === */
/* Starts immediately on load */
function startCountdownGatekeeper() {
    const cdScreen = document.getElementById('countdown-phase');
    const cdDisplay = document.getElementById('countdown-display');
    const cdSub = document.getElementById('countdown-sub');
    const cdProgress = document.getElementById('countdown-progress');

    // === DATE-BASED PHASE CONTROL ===
    const now = new Date();
    // Bypasses intro phases from Jan 31, 2026 until the next birthday in 2027
    const skipStart = new Date(2026, 0, 31, 0, 0, 0);
    const nextBirthday = new Date(2027, 0, 30, 0, 0, 0);

    if (now >= skipStart && now < nextBirthday) {
        if (cdScreen) cdScreen.style.display = 'none';
        runSystemBoot();
        return;
    }

    if (cdScreen) cdScreen.style.display = 'flex';

    // Target: Jan 30, 2026 00:00:00
    const targetDate = new Date(2026, 0, 30, 0, 0, 0).getTime();
    const startDate = new Date(2026, 0, 1, 0, 0, 0).getTime(); // Start of month for progress visual
    const totalDuration = targetDate - startDate;

    window.goToDesktop = skipToDesktop; // Map the new button action

    const phrases = [
        "Curating the memories...",
        "Calibrating the tribute...",
        "Organizing the surprises...",
        "Finalizing journey parameters...",
        "Polishing the moments...",
        "Setting the stage...",
        "Preparing the new chapter..."
    ];

    const int = setInterval(() => {
        if (document.getElementById('desktop').style.display === 'block') { clearInterval(int); return; }

        const now = new Date().getTime();
        const distance = targetDate - now;

        // Update Progress Bar
        if (cdProgress) {
            const elapsed = now - startDate;
            const percentage = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);
            cdProgress.style.width = percentage + "%";
        }

        // Update Subtext randomly/sequentially
        if (cdSub && Math.random() < 0.05) {
            cdSub.innerText = phrases[Math.floor(Math.random() * phrases.length)];
        }

        if (distance < 0) {
            clearInterval(int);
            if (cdDisplay) cdDisplay.innerText = "0d 0h 0m 0s";
            if (cdSub) cdSub.innerText = "ACCESS GRANTED";

            setTimeout(() => {
                if (cdScreen) cdScreen.style.opacity = 0;
                setTimeout(() => {
                    if (cdScreen) cdScreen.style.display = 'none';
                    state.countdownFinished = true;
                    playBirthdaySequence();
                }, 1000);
            }, 1500);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (cdDisplay) {
            cdDisplay.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}



// Skip Countdown Logic
window.skipCountdown = function () {
    state.countdownFinished = true;
    startCountdownGatekeeper = null; // Kill loop logic if needed, but interval checks display
    const cd = document.getElementById('countdown-phase');
    if (cd) cd.style.display = 'none';
    playBirthdaySequence();
};

// Test 12:21 AM Easter Egg
window.test1221EasterEgg = function () {
    createModal({
        title: "12:21 AM — June 20, 2024",
        desc: "OH HEYYY IT'S 12:21 rememberr this dayy 🤔<br><br>This was the minute we first talked. The minute a random 'Hi' turned into months of late nights, inside jokes, and a friendship I never saw coming.<br><br>You didn't just pass through my life.<br>You changed it.<br><br>Some connections are meant to last.<br>This is one of them. ❤️",
        icon: "🌙"
    });
};


/* === PHASE 2: JOURNEY SEQUENCE === */
function playJourneyIntro() {
    if (document.getElementById('desktop').style.display === 'block') return; // If skipped

    // Hide Countdown explicitly
    const cd = document.getElementById('countdown-phase');
    if (cd) { cd.style.display = 'none'; }

    const intro = document.getElementById('journey-intro');
    intro.style.display = 'flex';
    const screens = document.querySelectorAll('.journey-screen');
    const timings = [{ t: 5000 }, { t: 5500 }, { t: 8000 }, { t: 6000 }, { t: 6000 }]; // Normal timing
    let current = 0;

    function showNext() {
        if (document.getElementById('desktop').style.display === 'block') return;

        // FADE OUT PREVIOUS COMPLETELY BEFORE NEXT
        if (current > 0) {
            screens[current - 1].classList.remove('active');
            // Wait 1.5s for fade out to finish (based on CSS transition)
            setTimeout(() => {
                if (document.getElementById('desktop').style.display === 'block') return;
                startNextScreen();
            }, 1500);
        } else {
            startNextScreen();
        }

        function startNextScreen() {
            if (current >= screens.length) {
                intro.style.transition = 'opacity 2s';
                intro.style.opacity = 0;
                setTimeout(() => {
                    intro.style.display = 'none';
                    runSystemBoot();
                }, 2000);
                return;
            }
            const screen = screens[current];
            screen.classList.add('active');
            const subs = screen.querySelectorAll('.journey-sub');
            subs.forEach((sub, i) => setTimeout(() => sub.classList.add('active'), 500 + (i * 1500)));

            // Set timer for the next transition
            setTimeout(showNext, timings[current].t);
            current++;
        }
    }
    showNext();
}



/* === PHASE 2.5: BIRTHDAY SEQUENCE === */
let birthdaySlideIndex = 0;
let birthdaySlides = [];

function playBirthdaySequence() {
    if (state.birthdaySequenceStarted) return;
    if (document.getElementById('desktop').style.display === 'block') return;
    state.birthdaySequenceStarted = true;

    // Hide Countdown
    const cd = document.getElementById('countdown-phase');
    if (cd) {
        cd.style.opacity = 0;
        setTimeout(() => cd.style.display = 'none', 1000);
    }

    const intro = document.getElementById('birthday-intro');
    if (intro) {
        intro.classList.remove('hidden');
        intro.style.display = 'flex';
        intro.style.zIndex = '99999'; // Ensure top
        intro.style.opacity = '1';

        // Initialize Slides
        birthdaySlides = document.querySelectorAll('.birthday-screen');
        birthdaySlideIndex = 0;

        // Reset all
        birthdaySlides.forEach(s => {
            s.style.opacity = '0';
            s.classList.remove('active');
            s.style.display = 'none'; // Ensure hidden layout-wise
        });

        // Start
        showBirthdaySlide(0);
    } else {
        console.error("Birthday Intro Element Not Found!");
        // Failover
        playJourneyIntro();
    }
}

function showBirthdaySlide(index) {
    if (document.getElementById('desktop').style.display === 'block') return;

    // Hide previous
    if (index > 0 && birthdaySlides[index - 1]) {
        birthdaySlides[index - 1].classList.remove('active');
        birthdaySlides[index - 1].style.opacity = 0;
        setTimeout(() => {
            if (birthdaySlides[index - 1]) birthdaySlides[index - 1].style.display = 'none';
        }, 1000);
    }

    if (index >= birthdaySlides.length) {
        finishBirthdaySequence();
        return;
    }

    // Clear any previous paragraph reveal timeouts
    if (window.paraTimeouts) {
        window.paraTimeouts.forEach(t => clearTimeout(t));
    }
    window.paraTimeouts = [];

    const currentSlide = birthdaySlides[index];
    currentSlide.style.display = 'flex';
    // Small delay to allow display flex to apply before opacity transition
    setTimeout(() => {
        currentSlide.classList.add('active');
        currentSlide.style.opacity = 1;

        // Reveal paragraphs and headings sequentially
        const elements = currentSlide.querySelectorAll('p, h1');
        elements.forEach((el, i) => {
            // Reset state in case it was already revealed
            el.classList.remove('revealed');
            const t = setTimeout(() => {
                el.classList.add('revealed');
            }, 500 + (i * 1200)); // 0.5s initial delay, 1.2s between elements
            window.paraTimeouts.push(t);
        });
    }, 100);

    birthdaySlideIndex = index;

    // Logic for auto-advance vs interactive wait
    // Slide 0: "Happy Birthday" -> Auto
    // Slide 1: "Another year..." -> Auto
    // Slide 2: "Make a wish" (Candle) -> INTERACTIVE (Wait for click)
    // Slide 3: "Cut Cake" -> INTERACTIVE (Wait for click)

    if (index === 0) setTimeout(() => showBirthdaySlide(1), 4000);
    else if (index === 1) setTimeout(() => showBirthdaySlide(2), 5000);
    // Index 2 & 3 wait for user interaction manually triggering next step
}

// Global exposure for interactions
window.showBirthdaySlide = showBirthdaySlide;

/* INTERACTIONS */
/* INTERACTIONS */
window.blowCandle = function () {
    const flames = document.querySelectorAll('.candles-container .flame');
    const msg = document.getElementById('wish-msg');
    let anyBlown = false;

    flames.forEach(flame => {
        if (!flame.classList.contains('blown')) {
            flame.classList.add('blown');
            anyBlown = true;

            // Add smoke logic
            const smoke = document.createElement('div');
            smoke.className = 'smoke';
            // Position smoke exactly where the flame was
            if (flame.parentElement) {
                flame.parentElement.appendChild(smoke);
            }
        }
    });

    if (anyBlown) {
        if (msg) {
            msg.innerText = "Yay! May all your wishes come true! ✨";
            msg.style.opacity = '1';
        }

        // Wait then move to Cut Cake (Index 3)
        setTimeout(() => {
            showBirthdaySlide(3);
        }, 3000);
    }
};

window.cutCake = function () {
    const cakeWhole = document.getElementById('cake-whole');
    const instruction = document.getElementById('cut-instruction');
    const knife = document.querySelector('.knife');

    if (knife) {
        knife.classList.add('cutting');
    }

    // Wait for knife to "hit" the cake (approx 300ms)
    setTimeout(() => {
        // Confetti
        if (typeof confetti === 'function') {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }

        if (cakeWhole) {
            // Step 1: Replace content with the three parts (Left, Slice, Right)
            // Note: The structure inside each part is identical to the whole cake
            // We reuse the styling, just apply different clip-paths via classes
            const innerCake = `
                 <div class="cake-frosting"></div>
                 <div class="cake-layer top-layer"></div>
                 <div class="cake-layer middle-layer"></div>
                 <div class="cake-layer bottom-layer"></div>
            `;

            cakeWhole.innerHTML = `
            <div id="cake-left" class="absolute inset-0 cake-left-rem">
                 ${innerCake}
            </div>
            <div id="cake-right" class="absolute inset-0 cake-right-rem">
                 ${innerCake}
            </div>
             <div id="cake-slice" class="absolute inset-0 cake-piece-out">
                 ${innerCake}
            </div>
            <div class="plate"></div>
        `;

            // Step 2: Trigger the slice extraction
            requestAnimationFrame(() => {
                const slice = document.getElementById('cake-slice');
                const left = document.getElementById('cake-left');
                const right = document.getElementById('cake-right');

                if (slice) {
                    // Move the slice forward (down) and scale up slightly
                    slice.style.transform = 'translateY(100px) scale(1.1)';
                }
                if (left) left.style.transform = 'translateX(-10px)'; // Make room
                if (right) right.style.transform = 'translateX(10px)'; // Make room
            });

            if (instruction) instruction.innerText = "Here is a piece for you! 🍰";

            setTimeout(() => {
                showLetterOverlay();
            }, 3500);
        }
    }, 400); // Trigger cut right when knife is down
};

function finishBirthdaySequence() {
    console.log("Finishing Birthday Sequence...");
    const intro = document.getElementById('birthday-intro');
    if (intro) {
        intro.style.transition = 'opacity 1.5s ease';
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none';
            playJourneyIntro();
        }, 1500);
    } else {
        playJourneyIntro();
    }
}


/* === PHASE 3: DESKTOP === */
/* === PHASE 2.8: SYSTEM BOOT === */
/* === PHASE 2.8: SYSTEM BOOT === */
window.runSystemBoot = function () {
    const boot = document.getElementById('boot-sequence');
    const intro = document.getElementById('journey-intro');

    if (intro) intro.style.display = 'none';

    if (boot) {
        boot.style.display = 'flex';
        boot.style.flexDirection = 'column';
        boot.style.opacity = 1;

        setTimeout(() => {
            boot.style.transition = 'opacity 1s';
            boot.style.opacity = 0;
            setTimeout(() => {
                boot.style.display = 'none';
                enterDesktop();
            }, 1000);
        }, 6000);
    } else {
        enterDesktop();
    }
};


/* === PHASE 3: DESKTOP === */
function enterDesktop() {
    // 1. Hide any remaining intro elements
    const cd = document.getElementById('countdown-phase');
    if (cd) cd.style.display = 'none';

    const term = document.getElementById('terminal-boot');
    if (term) term.style.display = 'none';

    const boot = document.getElementById('boot-sequence');
    if (boot) boot.style.display = 'none';

    // 2. Fade OUT Space Background with Warp
    const space = document.getElementById('space-bg');
    if (space) {
        space.classList.add('space-warp');
        // Delayed opacity fade to let the stretch effect play out
        setTimeout(() => {
            space.style.opacity = 0;
        }, 800);
        setTimeout(() => {
            space.style.display = 'none';
        }, 2000);
    }

    // 3. Fade IN Light Desktop Background
    const desktopBg = document.getElementById('desktop-bg');
    if (desktopBg) { desktopBg.style.display = 'block'; desktopBg.style.opacity = 1; }

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

    // Play Startup Sound
    new Audio('assets/audio/startup.mp3').play().catch(e => console.log("Startup sound deferred:", e));

    // 5. Letter removed from here (it comes earlier now)
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
            icon.innerHTML = `<div class="icon-img text-3xl mb-2 transition duration-500">${app.icon}</div><div class="icon-label text-white px-2 py-0.5 rounded text-[10px] tracking-wide backdrop-blur-sm shadow-black/50 drop-shadow-md">${app.title}</div>`;
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
    bpIcon.innerHTML = `<div class="icon-img text-3xl mb-2 transition duration-500"><img src="assets/icons/app_blueprint.png" alt="blueprint" style="width: 100%; height: 100%;"></div><div class="icon-label text-white px-2 py-0.5 rounded text-[10px] tracking-wide backdrop-blur-sm shadow-black/50 drop-shadow-md">Blueprint.bp</div>`;
    bpIcon.onclick = openBlueprint;
    grid.appendChild(bpIcon);

    setInterval(() => { document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }); }, 1000);


}

// Global function for Dev Button
window.skipToDesktop = enterDesktop;
window.goToDesktop = enterDesktop;

/* === MASTI MODE LOGIC === */
const bearGifs = [
    'assets/gifs/bear_madrid.gif',
    'assets/gifs/bear_milk.gif',
    'assets/gifs/bear_love.gif',
    'assets/gifs/milk-run.gif',
    'assets/gifs/milk_mascot.gif',
    'assets/gifs/cute_anime_1.gif',
    'assets/gifs/cute_anime_2.gif',
    'assets/gifs/cute_anime_3.gif'
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

/* === DESKTOP PET LOGIC === */
let currentPetIdx = 0;
function togglePet() {
    currentPetIdx = (currentPetIdx + 1) % bearGifs.length;
    const img = document.getElementById('pet-img');
    if (img) {
        img.style.transform = "scale(0.8) rotate(-10deg)";
        setTimeout(() => {
            img.src = bearGifs[currentPetIdx];
            img.style.transform = "scale(1) rotate(0deg)";
        }, 200);
    }
}
window.togglePet = togglePet;

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
    { user: 'harshit', type: 'image', text: 'assets/picswme/you said my name.gif', subtext: '— 6/20/24, 11:53 AM' },
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

        if (msg.type === 'image') {
            const img = document.createElement('img');
            img.src = msg.text;
            img.className = 'chat-bubble-img mx-auto rounded-lg mb-1';
            img.style.maxWidth = '100%';
            img.style.maxHeight = '250px';
            bubble.appendChild(img);
            if (msg.subtext) {
                const sub = document.createElement('div');
                sub.className = 'chat-time-stamp opacity-40 text-right';
                sub.style.fontSize = '9px';
                sub.textContent = msg.subtext;
                bubble.appendChild(sub);
            }
        } else {
            bubble.textContent = msg.text;
        }

        // Media Detection
        if (msg.text && typeof msg.text === 'string' && msg.text.includes('spotify.com')) {
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
/* === LETTER REVEAL LOGIC (ENHANCED) === */
function initLetterReveal() {
    const container = document.getElementById('letter-content');
    if (!container) return;

    // Reset styles for replayability
    const children = Array.from(container.children);
    children.forEach(c => {
        c.style.opacity = '0';
        c.style.transform = 'translateY(20px)';
        c.style.transition = 'opacity 1s ease, transform 1s ease';
        c.style.display = 'none'; // Hide from flow initially
    });

    let idx = 0;
    function processNext() {
        if (idx >= children.length) {
            // Add a subtle footer or end effect if needed
            return;
        }

        const child = children[idx];
        child.style.display = 'block'; // Put back in flow

        // Force reflow
        void child.offsetWidth;

        const isHeading = ['H1', 'H2', 'H3'].includes(child.tagName);

        if (isHeading) {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
            const originalText = child.innerText;
            child.innerText = '';
            child.classList.add('typing-cursor');

            let i = 0;
            function type() {
                if (i < originalText.length) {
                    child.innerText += originalText.charAt(i);
                    i++;
                    container.scrollTop = container.scrollHeight; // Auto scroll
                    setTimeout(type, 50);
                } else {
                    child.classList.remove('typing-cursor');
                    idx++;
                    setTimeout(processNext, 500);
                }
            }
            type();
        } else {
            // Content Fade
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
            container.scrollTop = container.scrollHeight;

            // Calculate reading time
            const chars = child.innerText.length;
            const readingTime = Math.max(1000, chars * 25); // 25ms per char

            idx++;
            setTimeout(processNext, readingTime);
        }
    }

    // Initial delay
    setTimeout(processNext, 500);
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

        // Track Persistence
        if (typeof Persistence !== 'undefined') {
            Persistence.trackOpen(id);
        }


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

}
function checkUnlock() { if (state.countdownFinished && state.appsOpened.size >= 5) { document.getElementById('lock-msg').style.display = 'none'; document.getElementById('unlock-msg').classList.remove('hidden'); } }

/* Drag with Focus Logic */
let dragItem = null, offX = 0, offY = 0;
function startDrag(e, id) {
    if (e.target.closest('.traffic-lights') || e.target.closest('.dark-close-btn')) return;

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
    output.innerHTML += `<div > <span class="term-prompt">root@harshit:~$</span> ${cmd}</div> `;

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
    <div class="term-info" > Available Commands:</div>
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
            output.innerHTML += `<div > <span class="term-info">Checking for updates...</span></div> `;
            setTimeout(() => {
                output.innerHTML += `<div > V-Space 19.0 is already up to date.</div> `;
                setTimeout(() => {
                    output.innerHTML += `<div > <span class="term-info">Some improvements take time.</span></div> `;
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
    if (!container) return;

    // Clear and check if already populated by this session
    if (container.dataset.loaded === 'true') return;
    container.innerHTML = '';
    container.dataset.loaded = 'true';

    // Add Upload Button
    const uploadBtn = document.createElement('div');
    uploadBtn.className = 'polaroid-card upload-card';
    uploadBtn.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full text-gray-400 cursor-pointer" onclick="document.getElementById('photo-upload').click()">
            <div class="text-4xl mb-2">+</div>
            <div class="text-xs tracking-widest uppercase font-bold">Add Memory</div>
        </div>
        <input type="file" id="photo-upload" accept="image/*" style="display: none;" onchange="handlePhotoUpload(this)">
    `;
    uploadBtn.style.top = '20px';
    uploadBtn.style.left = '20px';
    uploadBtn.style.zIndex = 1000;
    container.appendChild(uploadBtn);

    const photos = [
        { src: 'assets/picswme/Screenshot_20240715_181142.webp', caption: "Connection established. 4 hours is enough. ✨", date: "June 20, 2024" },
        { src: 'assets/gifs/glitch.gif', caption: "The Accident + The Distraction", date: "July 30, 2024" },
        { src: 'assets/picswme/Screenshot_20250130_235831.webp', caption: "The 11:59 PM Math Failure 😂", date: "Jan 30, 2025" },
        { src: 'assets/picswme/IMG-20240925-WA0038.jpg', caption: "September Vibes", date: "Sept 25, 2024" },
        { src: 'assets/picswme/Screenshot_20241122_115947.webp', caption: "Lost and Found.", date: "Nov 22, 2024" },
        { src: 'assets/picswme/Screenshot_20241223_231858.webp', caption: "Year End Chill.", date: "Dec 12, 2024" }
    ];

    photos.forEach(photo => createPolaroid(photo.src, photo.caption, container, photo.date));
}

function createPolaroid(src, caption, container, date = "") {
    const card = document.createElement('div');
    card.className = 'polaroid-card';
    card.innerHTML = `
        <div class="photo-inner">
            <img src="${src}" onerror="this.src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=50&w=200'">
        </div>
        <div class="caption font-handlee">${caption}</div>
        ${date ? `<div class="date text-[8px] opacity-30 mt-1">${date}</div>` : ''}
    `;

    // Random Scatter
    const randomRot = Math.random() * 16 - 8;
    const randomTop = Math.random() * (container.clientHeight - 300);
    const maxLeft = container.clientWidth - 200;
    const randomLeft = Math.random() * (maxLeft > 0 ? maxLeft : 100);

    card.style.transform = `rotate(${randomRot}deg)`;
    card.style.top = `${Math.max(20, randomTop)}px`;
    card.style.left = `${Math.max(20, randomLeft)}px`;

    // Draggable Logic
    card.onmousedown = function (e) {
        if (e.target.tagName === 'INPUT') return;
        card.style.zIndex = ++zIndex;
        const offX = e.clientX - card.getBoundingClientRect().left;
        const offY = e.clientY - card.getBoundingClientRect().top;

        function move(ev) {
            const rect = container.getBoundingClientRect();
            let newL = ev.clientX - offX - rect.left;
            let newT = ev.clientY - offY - rect.top;
            card.style.left = newL + 'px';
            card.style.top = newT + 'px';
        }
        function stop() {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', stop);
        }
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', stop);
    }

    container.appendChild(card);
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
    const win = document.getElementById('blueprint-window');
    if (!win) return;

    win.style.display = 'flex';
    win.style.zIndex = ++zIndex;

    const body = win.querySelector('.dark-body');
    if (body) {
        // Save original if not already saved
        if (!body.dataset.original) {
            body.dataset.original = body.innerHTML;
        }

        // Clear and type
        body.innerHTML = body.dataset.original;

        // Start typing effect
        runSmartTypewriter(body);
    }
}

function closeBlueprint() {
    document.getElementById('blueprint-window').style.display = 'none';
}

function closeWindow(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
}

function runSmartTypewriter(element, speed = 15) {
    const nodes = [];

    function walk(node) {
        if (node.nodeType === 3) { // Text node
            nodes.push({
                node: node,
                text: node.textContent
            });
            node.textContent = ""; // Clear immediately
        } else {
            for (let child of node.childNodes) {
                walk(child);
            }
        }
    }

    walk(element);

    let nodeIndex = 0;
    let charIndex = 0;

    function type() {
        if (nodeIndex < nodes.length) {
            const item = nodes[nodeIndex];
            if (charIndex < item.text.length) {
                item.node.textContent += item.text[charIndex];
                charIndex++;
                setTimeout(type, speed);
            } else {
                nodeIndex++;
                charIndex = 0;
                type();
            }
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
    {
        q: "It's 2 AM. What is Harshit usually doing?",
        a: [
            { t: "Solving a bug / Gaming 🎮", s: "Builder" },
            { t: "Listening to music / Overthinking 🎧", s: "Dreamer" },
            { t: "Actually sleeping? (Rare event) 😴", s: "Healer" }
        ]
    },
    {
        q: "When Shravii creates 'chaos' or starts yapping, you...",
        a: [
            { t: "Listen patiently (The Anchor) 🛡️", s: "Healer" },
            { t: "Roast her logically 🤓", s: "Builder" },
            { t: "Enjoy the drama silently 🍿", s: "Dreamer" }
        ]
    },
    {
        q: "Your Super Power in this friendship is...",
        a: [
            { t: "Never leaving (Staying) ❤️", s: "Healer" },
            { t: "Fixing everything (Logic) 🧩", s: "Builder" },
            { t: "Predicting the future (Insight) 👁️", s: "Dreamer" }
        ]
    }
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
        new Audio('assets/audio/shred.mp3').play().catch(e => { });
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
                "- firstmeet: Origin Timestamp",
                "- chapters: Journey Log",
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
                "June 20, 2024 • 12:21 AM"
            ], 18, 600, enableInput);
            break;

        case 'chapters':
            runTerminalSequence(output, [
                "Journey Log:",
                "Chapter 1: The Spark",
                "Chapter 2: The Bridge",
                "Chapter 3: The Protector"
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

/* === SYSTEM ACTIONS === */
function deleteTarget() {
    // Play Shred Sound
    new Audio('assets/audio/shred.mp3').play().catch(e => { });

    // Show a "protective" notification
    if (typeof createModal === 'function') {
        createModal({
            title: "Security Protocol",
            desc: "These files are protected by the 'Core Memories' encryption. No data was shred, but the security log has been updated. 😉",
            icon: "🛡️"
        });
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

    // Play Startup Sound
    new Audio('assets/audio/startup.mp3').play().catch(e => console.log("Startup sound deferred:", e));
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



/* === APP VAULT FOLDER LOGIC === */
function unlockVault() {
    const inp = document.getElementById('vault-passcode');
    const err = document.getElementById('vault-error');
    if (!inp) return;

    // Check pass: 200624 (Connection Date)
    if (inp.value === '200624') {
        inp.blur();
        document.getElementById('vault-lock-screen').style.transition = 'opacity 0.5s';
        document.getElementById('vault-lock-screen').style.opacity = '0';

        setTimeout(() => {
            document.getElementById('vault-lock-screen').style.display = 'none';
            document.getElementById('vault-grid').classList.remove('hidden');
            document.getElementById('vault-grid').style.display = 'block';
        }, 500);
    } else {
        err.style.opacity = '1';
        inp.classList.add('animate-pulse', 'border-red-500');
        setTimeout(() => {
            inp.classList.remove('animate-pulse', 'border-red-500');
            err.style.opacity = '0';
        }, 1500);
        inp.value = '';
    }
}
window.unlockVault = unlockVault;

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
        // setSystemStatus(isOnline ? 'Online' : 'Offline', 0); // Function not defined, commented out
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
// 6. Weather
function initWeather() {
    updateSystemBasedOnTime();
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
                <h2 class="text-2xl font-bold text-gray-800">V-Space</h2>
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
let calendarClickCount = 0;
let calendarClickTimer = null;

function changeMonth(offset) {
    calendarDate.setMonth(calendarDate.getMonth() + offset);
    renderCalendar();
}

function toggleCalendar() {
    // EASTER EGG: Multiple Clicks
    calendarClickCount++;
    if (calendarClickTimer) clearTimeout(calendarClickTimer);
    calendarClickTimer = setTimeout(() => {
        calendarClickCount = 0;
    }, 1000); // 1.5s to click

    if (calendarClickCount >= 7) {
        Apps.open('secret-gallery');
        // Reset
        calendarClickCount = 0;
        return;
    }

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

    // Fix: Ensure we start at the top
    main.scrollTop = 0;

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
    modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center p-4';
    modal.style.cssText = 'animation: modalFadeIn 0.5s ease-out forwards;';

    modal.innerHTML = `
        <style>
            @keyframes modalFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes modalSlideUp {
                from { 
                    opacity: 0;
                    transform: translateY(30px) scale(0.95);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            @keyframes heartBeat {
                0%, 100% { transform: scale(1); }
                10%, 30% { transform: scale(1.1); }
                20%, 40% { transform: scale(1.05); }
            }
            @keyframes shimmer {
                0% { background-position: -1000px 0; }
                100% { background-position: 1000px 0; }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            .modal-container {
                animation: modalSlideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
            .modal-icon {
                animation: float 3s ease-in-out infinite;
                filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
            }
            .modal-bg {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                position: relative;
                overflow: hidden;
            }
            .modal-bg::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(
                    45deg,
                    transparent 30%,
                    rgba(255, 255, 255, 0.1) 50%,
                    transparent 70%
                );
                background-size: 200% 200%;
                animation: shimmer 3s linear infinite;
            }
            .modal-stars {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                pointer-events: none;
            }
            .star {
                position: absolute;
                width: 2px;
                height: 2px;
                background: white;
                border-radius: 50%;
                opacity: 0.7;
                animation: twinkle 2s ease-in-out infinite;
            }
            @keyframes twinkle {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
            }
        </style>
        
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
        
        <!-- Modal Container -->
        <div class="modal-container relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full">
            <!-- Gradient Background -->
            <div class="modal-bg p-8 pb-6 relative">
                <!-- Animated Stars -->
                <div class="modal-stars">
                    <div class="star" style="top: 10%; left: 15%; animation-delay: 0s;"></div>
                    <div class="star" style="top: 20%; left: 80%; animation-delay: 0.5s;"></div>
                    <div class="star" style="top: 60%; left: 20%; animation-delay: 1s;"></div>
                    <div class="star" style="top: 70%; left: 70%; animation-delay: 1.5s;"></div>
                    <div class="star" style="top: 40%; left: 50%; animation-delay: 0.8s;"></div>
                    <div class="star" style="top: 85%; left: 40%; animation-delay: 1.2s;"></div>
                </div>
                
                <!-- Icon -->
                <div class="modal-icon text-7xl mb-4 text-center relative z-10">
                    ${icon || 'ℹ️'}
                </div>
                
                <!-- Title -->
                <h3 class="text-2xl font-serif font-bold text-white text-center mb-2 relative z-10 tracking-wide">
                    ${title}
                </h3>
            </div>
            
            <!-- Content -->
            <div class="p-8 pt-6 bg-gradient-to-b from-white to-gray-50">
                <p class="text-gray-700 text-center leading-relaxed text-base font-light" style="line-height: 1.8;">
                    ${desc}
                </p>
                
                <!-- Button -->
                <div class="mt-8 flex justify-center">
                    <button 
                        class="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden"
                        onclick="this.closest('.fixed').style.animation='modalFadeIn 0.3s ease-out reverse'; setTimeout(() => this.closest('.fixed').remove(), 300);">
                        <span class="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span class="relative flex items-center gap-2">
                            <span>Close</span>
                            <span class="text-sm">❤️</span>
                        </span>
                    </button>
                </div>
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
        type: 'image', title: 'Us (Concept)', content: 'assets/gifs/bear_love.gif'
    }
];
let currentVaultSlide = 0;

function initSecretVault() {
    const input = document.getElementById('vault-pass');
    if (!input) return;

    // Clear previous state
    input.value = '';
    state.vaultUnlockAttempts = 0; // Reset attempts on open

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
        err.style.opacity = '1';  // Show error message
        const inp = document.getElementById('vault-pass');
        inp.classList.add('shake');
        setTimeout(() => inp.classList.remove('shake'), 500);
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
/* === VAULT SECURITY === */
const VAULT_CONTENT = `
<div class="folder-window-grid">
    <div class="desktop-icon text-center scale-75 m-1" onclick="Apps.open('do-not-open')"><div class="icon-img">🚫</div><div class="icon-label">Do Not<br />Open</div></div>

    <div class="desktop-icon text-center scale-75 m-1" onclick="Apps.open('secret-vault')"><div class="icon-img">🔐</div><div class="icon-label">Secret Vault</div></div>
    <div class="desktop-icon text-center scale-75 m-1" onclick="Apps.open('voice-box')"><div class="icon-img">🎙️</div><div class="icon-label">VoiceBox</div></div>
    <div class="desktop-icon text-center scale-75 m-1" onclick="Apps.open('readme-letter')"><div class="icon-img">💌</div><div class="icon-label">ReadMe.txt</div></div>
    <div class="desktop-icon text-center scale-75 m-1" onclick="Apps.open('memories-gallery')"><div class="icon-img">📸</div><div class="icon-label">Memories</div></div>
    <div class="desktop-icon text-center scale-75 m-1" onclick="Apps.open('through-my-eyes')"><div class="icon-img">📝</div><div class="icon-label">Through<br />My Eyes</div></div>
    <div class="desktop-icon text-center scale-75 m-1" onclick="Apps.open('truth-archives')"><div class="icon-img">🗂️</div><div class="icon-label">Truth<br />Archives</div></div>
    <div class="desktop-icon text-center scale-75 m-1" onclick="Apps.open('map-of-us')"><div class="icon-img">🗺️</div><div class="icon-label">Map of Us</div></div>
</div>
`;

function unlockVault() {
    const input = document.getElementById('vault-passcode');
    const errorMsg = document.getElementById('vault-error');
    const lockScreen = document.getElementById('vault-lock-screen');
    const badge = document.getElementById('vault-badge');
    const hintMain = document.getElementById('vault-hint-main');

    // Passcode: 200624
    if (input.value === '200624') {
        // Success
        input.classList.remove('shake-premium');
        input.style.borderColor = '#10b981'; // Green-500

        // Reset Hint Sequence Logic
        window.vaultHintStep = 0;



        // Play success animation on lock screen
        lockScreen.classList.add('vault-unlocked-anim');

        setTimeout(() => {
            const win = document.getElementById('win-app-vault');
            if (win) {
                const contentArea = win.querySelector('.win-content');
                contentArea.innerHTML = VAULT_CONTENT;
                // Add success noise/feeling?
                if (typeof Persistence !== 'undefined') Persistence.unlock('Deep Access Level 1');
            }
        }, 800);

    } else {
        // Fail
        state.vaultUnlockAttempts++;

        // Update Badge
        if (badge) {
            badge.innerText = `Attempts: ${state.vaultUnlockAttempts}`;
            badge.style.color = state.vaultUnlockAttempts > 3 ? '#ef4444' : '#94a3b8';
        }

        // Shake & Error
        errorMsg.innerText = state.vaultUnlockAttempts > 3 ? "SYSTEM LOCKED: Incorrect Format" : "Access Denied";
        errorMsg.style.opacity = '1';
        input.classList.add('shake-premium');

        // Hint progression
        if (state.vaultUnlockAttempts >= 1 && hintMain) {
            hintMain.innerText = "Hint: A score of days, six moons deep, in the year where two dozen secrets we keep.";
            hintMain.style.opacity = "1";
        }
        if (state.vaultUnlockAttempts >= 3 && hintMain) {
            hintMain.innerText = "Hint: Day 172 of the year where February had 29.";
        }

        setTimeout(() => {
            input.classList.remove('shake-premium');
            errorMsg.style.opacity = '0';
        }, 1000);

        input.value = '';
    }
}

function showVaultHint() {
    const hintMain = document.getElementById('vault-hint-main');
    const hintExtra = document.getElementById('vault-hint-extra');

    if (hintMain) {
        hintMain.innerText = "Cipher: 20... 6... 24. A sequence that changed the timeline.";
        hintMain.style.opacity = "1";
        hintMain.classList.add('text-indigo-600');
    }
    if (hintExtra) {
        hintExtra.innerText = "Format: DDMMYY";
        hintExtra.style.opacity = "1";
    }
}

// Global Riddles for the Modal 
// (We keep this array for random use if needed later, but now we use sequence)
const vaultRiddles = [
    { title: "The Solstice Precursor ☀️", desc: "One sun before the longest day, the timeline started on its way." },
    // ... others kept for reference
];

window.vaultHintStep = 0;

function showVaultRiddleSequence() {
    // Sync with unlock attempts for the "same riddle" experience
    if (state.vaultUnlockAttempts >= 3) {
        createModal({
            title: "Leap Year Logic 📅",
            desc: "Day 172 of the year where February had 29.",
            icon: '📆'
        });
    } else if (state.vaultUnlockAttempts >= 1) {
        createModal({
            title: "Cryptic Cipher 🧩",
            desc: "A score of days, six moons deep, in the year where two dozen secrets we keep.",
            icon: '🔐'
        });
    } else {
        createModal({
            title: "Vault Hint",
            desc: "Access restricted. Try entering a code once to initialize hint protocols.",
            icon: '🛡️'
        });
    }
}
window.showVaultRiddleSequence = showVaultRiddleSequence;
// window.showRandomVaultRiddle = showRandomVaultRiddle; (Disabled in favor of sequence)

window.showVaultHint = showVaultHint;



function showNotification(title, body) {
    // Create notification element
    const notif = document.createElement('div');
    notif.className = 'ghost-notification';
    if (title.includes('Alert') || title.includes('Critical')) {
        notif.classList.add('system');
    }

    notif.innerHTML = `
        <div class="font-bold text-sm mb-1">${title}</div>
        <div class="text-xs opacity-90 leading-relaxed">${body}</div>
    `;

    document.body.appendChild(notif);

    // Auto-remove after animation (0.5s in + 4s wait + 0.5s out = 5s total)
    // Animation timing matches CSS
    setTimeout(() => {
        notif.remove();
    }, 5500);
}













/* === TRUTH ARCHIVES LOGIC === */
const truthData = [
    { title: "First Meet", tags: ["start"], content: "June 20, 2024. 12:21 AM.<br>You asked 'is anyone watching euros?'.<br>I asked 'Where ya from Harry?'.<br>And so it began." },
    { title: "Mr. Chuha", tags: ["funny", "names"], content: "You told me your front teeth used to slightly protrude.<br>I called you 'Mr. Chuha'.<br>You didn't get mad. You owned it. 🐭" },
    { title: "The Promise", tags: ["emotional"], content: "I tried to push you away.<br>You said: 'You don't have any IRL friends so I'm not leaving DC.'<br>Stubborn. But I needed that." },
    { title: "The Poem", tags: ["birthday"], content: "For my birthday, you wrote a poem.<br>You tried to time it perfectly letter-by-letter for 12:00 AM.<br>Your math failed (ended at 11:59).<br>But it was perfect. ✨" },
    { title: "Mumbai Detective", tags: ["smart"], content: "I said 'Cream building, blue benches'.<br>You found L.R. Tiwari College of Engineering.<br>Stalker? Maybe. <br>Impressed? Yes." },
    { title: "The 'Dumb' Role", tags: ["funny"], content: "We both claim to be the 'dumb' one.<br>But you solved my code issues while I panicked.<br>So... I win the dumb trophy. 🏆" },
    { title: "Echo Archive", tags: ["system", "void"], content: "Echoes of the past... [Empty for now].<br>Waiting for new signals. 🕸️" }
];

function initTruths() {
    const grid = document.getElementById('truth-grid');
    if (!grid) return;

    grid.innerHTML = '';

    truthData.forEach(t => {
        const div = document.createElement('div');
        div.className = 'bg-black/40 border border-green-900/30 p-4 rounded hover:bg-green-900/10 transition group cursor-pointer';
        div.innerHTML = `
    < div class="flex justify-between items-start mb-2" >
                <h3 class="font-bold text-green-400 group-hover:text-green-300">${t.title}</h3>
                <span class="text-[10px] uppercase tracking-wider opacity-50 border border-green-800 px-1 rounded">${t.tags[0]}</span>
            </div >
    <div class="text-sm text-green-400/80 leading-relaxed font-light line-clamp-2 transition-all duration-300">${t.content}</div>
`;

        // Expand on click logic
        div.onclick = function () {
            const contentDiv = this.querySelector('div:last-child');
            if (contentDiv.classList.contains('line-clamp-2')) {
                contentDiv.classList.remove('line-clamp-2');
                this.classList.add('bg-green-900/20');
            } else {
                contentDiv.classList.add('line-clamp-2');
                this.classList.remove('bg-green-900/20');
            }
        };

        grid.appendChild(div);
    });
}

function filterTruths() {
    const input = document.getElementById('truth-search');
    const filter = input.value.toLowerCase();
    const grid = document.getElementById('truth-grid');

    // Simple filter recreation
    grid.innerHTML = '';

    truthData.forEach(t => {
        if (t.title.toLowerCase().includes(filter) || t.content.toLowerCase().includes(filter) || t.tags.some(tag => tag.includes(filter))) {
            const div = document.createElement('div');
            div.className = 'bg-black/40 border border-green-900/30 p-4 rounded hover:bg-green-900/10 transition group';
            div.innerHTML = `
    < div class="flex justify-between items-start mb-2" >
                    <h3 class="font-bold text-green-400 group-hover:text-green-300">${t.title}</h3>
                    <span class="text-[10px] uppercase tracking-wider opacity-50 border border-green-800 px-1 rounded">${t.tags[0]}</span>
                </div >
    <p class="text-sm text-green-400/80 leading-relaxed font-light">${t.content}</p>
`;
            grid.appendChild(div);
        }
    });
}
window.initTruths = initTruths;
window.filterTruths = filterTruths;


/* === MAP OF US LOGIC === */
function initMap() {
    const mapContainer = document.getElementById('map-markers');
    if (!mapContainer) return;

    mapContainer.innerHTML = '';

    const locations = [
        { name: "Pune", x: 30, y: 60, desc: "The Likely Zone? (Mulshi/Pirangut)" },
        { name: "Nashik", x: 40, y: 40, desc: "Trimbakeshwar Routes" },
        { name: "Mumbai", x: 20, y: 50, desc: "L.R. Tiwari College (The Detective Work)" },
        { name: "Haryana", x: 35, y: 20, desc: "Origin Point (Sirsa)" }
    ];

    locations.forEach(loc => {
        const marker = document.createElement('div');
        marker.className = 'absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition z-10';
        marker.style.left = loc.x + '%';
        marker.style.top = loc.y + '%';
        marker.title = loc.name;

        // Tooltip
        const tip = document.createElement('div');
        tip.className = 'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white/90 backdrop-blur px-2 py-1 text-xs font-bold text-slate-700 rounded shadow-sm whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-300';
        tip.innerText = loc.desc;

        marker.onmouseenter = () => tip.style.opacity = 1;
        marker.onmouseleave = () => tip.style.opacity = 0;

        marker.appendChild(tip); // Append tip to marker so it moves with it
        mapContainer.appendChild(marker);
    });
}
window.initMap = initMap;



/* === INKPOT APP LOGIC === */
const poems = [
    {
        title: "Friendship Blooms",
        text: `In the garden of our days, <br>
    Where laughter gently grows,<br>
        Friendship blooms like sunshine,<br>
            In every path we chose.<br><br>
                Through the seasons, side by side,<br>
                    We’ve shared both joy and strife,<br>
                        A bond that holds so true and bright,<br>
                            In the journey of our life.`
    },
    {
        title: "Happiest Birthday Vi",
        text: `Happiest Birthday Vi, so bright,<br>
                                May success and dreams take endless flight.<br>
                                    With each sunrise, may you find anew,<br>
                                        The joy and wonders waiting for you.<br><br>
                                            A sweet and positive light you share,<br>
                                                With an aura beyond compare.<br>
                                                    Your presence draws us close, it’s true,<br>
                                                        A magnet for the hearts you pursue.`
    },
    {
        title: "The Anchor",
        text: `You are the calm to my storm.<br>
                                                            The person who notices the small things.<br>
                                                                You make this OS (and my life)<br>
                                                                    Better just by running in the background.`
    }
];

let currentPoemIndex = 0;

function initInkpot() {
    currentPoemIndex = 0;
    renderPoem();
}

function nextPoem() {
    currentPoemIndex = (currentPoemIndex + 1) % poems.length;

    // Animate out
    const textEl = document.getElementById('inkpot-text');
    if (textEl) {
        textEl.style.opacity = 0;
        textEl.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            renderPoem();
        }, 300);
    }
}

function renderPoem() {
    const textEl = document.getElementById('inkpot-text');
    if (!textEl) return;

    const poem = poems[currentPoemIndex];
    textEl.innerHTML = `
                                                                    <h3 class="text-xl font-serif font-bold mb-4 text-center text-slate-800">${poem.title}</h3>
                                                                    <p class="font-serif italic text-slate-600 leading-relaxed text-center">${poem.text}</p>
                                                                    <div class="mt-6 text-center text-xs text-slate-400 font-sans tracking-widest uppercase">
                                                                        ${currentPoemIndex + 1} / ${poems.length}
                                                                    </div>
                                                                    `;

    // Animate in
    textEl.style.opacity = 1;
    textEl.style.transform = 'translateY(0)';
}
window.initInkpot = initInkpot;
window.nextPoem = nextPoem;


// === NOT DUMB APP LOGIC ===
let notDumbStep = 0;
const notDumbSlides = [
    // 0: ENTRY (Handled by init)
    { type: 'entry' },

    // 1: OBSERVATIONS
    {
        type: 'html', content: `
        <div class="space-y-6 animate-fade-in-up">
            <div class="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-8 font-bold text-center">System Observations</div>
            
            <div class="nd-card p-6 relative overflow-hidden group">
                <div class="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                <div class="text-lg italic text-slate-600 font-serif leading-relaxed">“Understands everything. Responds late.”</div>
                <div class="absolute -right-4 -bottom-4 text-6xl text-slate-100 font-serif opacity-50 z-0">”</div>
            </div>

            <div class="nd-card p-6 relative overflow-hidden group delay-100">
                <div class="absolute top-0 left-0 w-1 h-full bg-purple-400"></div>
                <div class="text-lg italic text-slate-600 font-serif leading-relaxed">“Overthinks silently. Says ‘nothing’s wrong.’”</div>
            </div>

            <div class="nd-card p-6 relative overflow-hidden group delay-200">
                <div class="absolute top-0 left-0 w-1 h-full bg-rose-400"></div>
                <div class="text-lg italic text-slate-600 font-serif leading-relaxed">“Remembers details. Misses the point.”</div>
            </div>

            <div class="nd-card p-6 relative overflow-hidden group delay-300">
                <div class="absolute top-0 left-0 w-1 h-full bg-emerald-400"></div>
                <div class="text-lg italic text-slate-600 font-serif leading-relaxed">“Stubborn even when correct.”</div>
            </div>
        </div>
    `},

    // 2: VOICEBOX
    {
        type: 'html', content: `
        <div class="flex flex-col items-center justify-center h-full animate-fade-in-up">
            <div class="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-12 font-bold">Audio Evidence Found</div>
            
            <div class="relative group cursor-pointer" onclick="playVoiceMemo(2)">
                <!-- Ripple Effect -->
                <div class="nd-voice-ripple"></div>
                <div class="nd-voice-ripple" style="animation-delay: 0.5s"></div>
                
                <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 transition duration-300 group-hover:scale-105 border-4 border-slate-50">
                    <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-inner text-white text-3xl">
                        <i class="fas fa-play pl-2 drop-shadow-md"></i>
                    </div>
                </div>
            </div>

            <div class="mt-12 text-center space-y-3">
                <div class="text-2xl nd-title font-bold nd-text-gradient">“Stop acting dumb 🙄”</div>
                <div class="text-xs text-slate-400 font-mono bg-white/50 px-3 py-1 rounded-full border border-slate-200 inline-block">Source: VoiceBox • 2024</div>
            </div>
        </div>
    `},

    // 3: LOGS
    {
        type: 'html', content: `
        <div class="space-y-4 animate-fade-in-up h-full overflow-y-auto custom-scroll pr-2 pt-2">
            <div class="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6 font-bold text-center">Decrypted Logs</div>

            <details class="group nd-card mb-4" open>
                <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-xs uppercase tracking-wide text-slate-700 hover:bg-white/50 transition list-none outline-none">
                    <span class="flex items-center gap-3"><span class="text-lg">🙄</span> Pretends Not to Care</span>
                    <span class="text-slate-400 group-open:rotate-180 transition">▼</span>
                </summary>
                <div class="p-5 text-sm bg-white/30 border-t border-slate-100/50">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="text-slate-500 text-xs">BEHAVIOR<div class="text-slate-800 font-medium mt-1">Acts detached</div></div>
                        <div class="text-rose-500 text-xs">TRUTH<div class="text-slate-800 font-medium mt-1">Cares deeply</div></div>
                    </div>
                </div>
            </details>

            <details class="group nd-card mb-4">
                <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-xs uppercase tracking-wide text-slate-700 hover:bg-white/50 transition list-none outline-none">
                    <span class="flex items-center gap-3"><span class="text-lg">🧠</span> Scary Memory</span>
                    <span class="text-slate-400 group-open:rotate-180 transition">▼</span>
                </summary>
                <div class="p-5 text-sm bg-white/30 border-t border-slate-100/50">
                    <div class="mb-3 text-slate-600 italic">"Remembers exact words from 2024."</div>
                    <div class="text-amber-600 bg-amber-50 p-3 rounded border border-amber-100 text-xs font-bold">⚠ Acts clueless when things get real.</div>
                </div>
            </details>

            <details class="group nd-card mb-4">
                <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-xs uppercase tracking-wide text-slate-700 hover:bg-white/50 transition list-none outline-none">
                    <span class="flex items-center gap-3"><span class="text-lg">🏏</span> Sports Paradox</span>
                    <span class="text-slate-400 group-open:rotate-180 transition">▼</span>
                </summary>
                <div class="p-5 text-sm bg-white/30 border-t border-slate-100/50">
                    <div class="flex items-center justify-between">
                        <div>Football Knowledge</div>
                        <div class="font-bold text-blue-600">99%</div>
                    </div>
                    <div class="w-full h-1 bg-slate-200 mt-2 mb-4 rounded-full overflow-hidden"><div class="h-full bg-blue-500 w-[99%]"></div></div>
                    
                    <div class="flex items-center justify-between">
                        <div>Cricket Knowledge</div>
                        <div class="font-bold text-slate-400">0%</div>
                    </div>
                    <div class="w-full h-1 bg-slate-200 mt-2 rounded-full overflow-hidden"></div>
                </div>
            </details>
            
             <details class="group nd-card mb-4">
                <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-xs uppercase tracking-wide text-slate-700 hover:bg-white/50 transition list-none outline-none">
                    <span class="flex items-center gap-3"><span class="text-lg">🎭</span> Aliases</span>
                    <span class="text-slate-400 group-open:rotate-180 transition">▼</span>
                </summary>
                <div class="p-5 text-sm bg-white/30 border-t border-slate-100/50 flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">Mr. Snow</span>
                    <span class="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">Rabbit</span>
                    <span class="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">Mr. Ota</span>
                    <span class="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">Mr. Chuha</span>
                </div>
            </details>
        </div>
    `},

    // 4: METERS
    {
        type: 'html', content: `
        <div class="flex flex-col justify-center h-full animate-fade-in-up space-y-10 px-6">
            <div class="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2 font-bold text-center">Live Logic Scan</div>

            <div>
                <div class="flex justify-between text-xs mb-3 font-bold text-slate-600 tracking-wide uppercase"><span>Logic Efficiency</span> <span>80%</span></div>
                <div class="nd-stat-bar">
                    <div class="nd-stat-fill bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" style="width: 0%; animation: fillBar 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.2s; max-width: 80%"></div>
                </div>
            </div>

            <div>
                <div class="flex justify-between text-xs mb-3 font-bold text-slate-600 tracking-wide uppercase"><span>Emotional Decisions</span> <span>30%</span></div>
                <div class="nd-stat-bar">
                    <div class="nd-stat-fill bg-rose-400 shadow-[0_0_15px_rgba(251,113,133,0.6)]" style="width: 0%; animation: fillBar 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.4s; max-width: 30%"></div>
                </div>
            </div>

            <div>
                <div class="flex justify-between text-xs mb-3 font-bold text-slate-600 tracking-wide uppercase"><span>Stubbornness</span> <span class="text-slate-900">∞</span></div>
                <div class="nd-stat-bar">
                    <div class="nd-stat-fill bg-slate-800" style="width: 100%"></div>
                </div>
                <div class="text-[10px] text-slate-400 mt-2 italic text-right bg-white/50 inline-block float-right px-2 rounded">System cannot override this.</div>
            </div>
            
        </div>
        <style> @keyframes fillBar {from {width: 0; } } </style>
    `},

    // 5: QUOTE
    {
        type: 'html', content: `
        <div class="flex flex-col items-center justify-center h-full animate-fade-in-up text-center cursor-help select-none" title="Permission: Admin Shravii">
            <div class="font-mono text-[10px] text-slate-300 mb-10 animate-pulse bg-slate-50 px-3 py-1 rounded-full">> Decrypting hidden note...</div>
            
            <div class="nd-title italic text-5xl leading-tight text-slate-800 drop-shadow-sm space-y-2">
                <div>“Not dumb.</div>
                <div class="opacity-0 animate-fade-in-up" style="animation-delay: 1s; animation-fill-mode: forwards"><span class="text-blue-500">Just feels deeply</span></div>
                <div class="opacity-0 animate-fade-in-up" style="animation-delay: 2s; animation-fill-mode: forwards">and pretends not to.”</div>
            </div>
        </div>
    `},

    // 6: FINAL
    {
        type: 'html', content: `
        <div class="flex flex-col items-center justify-center h-full animate-fade-in-up text-center relative z-10">
            <div class="w-full max-w-sm p-10 bg-slate-900 text-white rounded-[2rem] shadow-2xl border border-slate-700 relative overflow-hidden group">
                <!-- BG Mesh -->
                <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#4ade80 1px, transparent 1px); background-size: 20px 20px;"></div>
                <div class="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>

                <div class="relative z-10">
                    <div class="flex items-center justify-center gap-2 text-emerald-400 font-mono text-xs mb-10 bg-emerald-950/50 py-1 px-3 rounded-full mx-auto w-max border border-emerald-900/50">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                        OVERRIDE CONFIRMED
                    </div>

                    <div class="text-3xl font-serif italic text-slate-200 mb-10 leading-relaxed">
                        User is not dumb.<br>
                        <span class="text-blue-300">Just emotionally soft,</span><br>
                        stubborn, and<br>
                        <span class="text-white font-bold border-b-2 border-white/20 pb-1 inline-block mt-2">deeply human.</span>
                    </div>

                    <button onclick="Apps.close('not-dumb')" class="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition border border-white/10 text-white shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95">
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
            <div class="flex flex-col justify-center h-full font-mono text-xs space-y-6 select-none relative">
                <!-- Scan Line -->
                <div class="absolute top-0 left-0 w-full h-1 bg-blue-400/50 shadow-[0_0_10px_rgba(96,165,250,0.5)] animate-[scan_2s_ease-in-out_infinite]"></div>

                <div class="flex items-center gap-3">
                    <span class="text-blue-500 animate-spin">✱</span>
                    <span class="typewriter-text text-slate-600" style="animation: typing 1s steps(20, end);">Initializing Biometric Scan...</span>
                </div>
                
                <div class="pl-6 space-y-2">
                    <div style="opacity: 0; animation: slideRight 0.5s ease-out 1s forwards;" class="flex items-center gap-2">
                        <span class="text-slate-400">> Intelligence:</span> 
                        <span class="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">PASSED</span>
                    </div>
                    
                    <div style="opacity: 0; animation: slideRight 0.5s ease-out 2s forwards;" class="flex items-center gap-2">
                        <span class="text-slate-400">> Heart Rate:</span> 
                        <span class="text-rose-500 font-bold animate-pulse">ELEVATED</span>
                    </div>
                    
                    <div style="opacity: 0; animation: slideRight 0.5s ease-out 3s forwards;" class="flex items-center gap-2">
                        <span class="text-slate-400">> Logic Circuits:</span> 
                        <span class="text-amber-500 font-bold">OVERRIDDEN BY FEELINGS</span>
                    </div>
                </div>

                <div style="opacity: 0; animation: fadeIn 1s ease-out 4s forwards;" class="mt-8 text-center text-slate-300 text-[10px] tracking-[0.3em] uppercase">
                    Analysis Complete
                </div>
            </div>
            <style>
                @keyframes scan { 0% { top: 10%; opacity: 0; } 50% { opacity: 1; } 100% { top: 90%; opacity: 0; } }
                @keyframes slideRight { from { transform: translateX(-10px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
            </style>
        `;
    }

    // Auto-advance after 5 seconds to next slide button
    setTimeout(() => {
        if (nav) nav.style.opacity = '1';
    }, 5000);
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

// Export
window.initNotDumb = initNotDumb;
window.nextNotDumbSlide = nextNotDumbSlide;

/* === BIRTHDAY SEQUENCER === */



// Duplicate finishBirthdaySequence removed from here as it is now at line 2699

// Initial Letter Overlay (Custom)


// Initial Letter Overlay (Custom) -> Now Part of Birthday Sequence
window.showLetterOverlay = function () {
    // Hide Birthday Intro if visible
    const intro = document.getElementById('birthday-intro');
    if (intro) {
        intro.style.transition = 'opacity 1s';
        intro.style.opacity = 0;
        setTimeout(() => intro.style.display = 'none', 1000);
    }

    // Show Letter
    const letter = document.getElementById('letter-overlay');
    if (letter) {
        letter.classList.remove('hidden');
        void letter.offsetWidth;
        letter.style.display = 'flex'; // Ensure flex
        setTimeout(() => {
            letter.classList.add('visible');
            letter.style.opacity = '1';
        }, 100);
    }
}


window.closeLetter = function () {
    const letter = document.getElementById('letter-overlay');
    if (letter) {
        letter.style.opacity = '0';
        letter.classList.remove('visible');
        setTimeout(() => {
            letter.classList.add('hidden');
            letter.style.display = 'none';

            // CHAIN: Letter Closed -> Journey Sequence
            finishBirthdaySequence();
        }, 1000);
    }
};

/* === ACCESSIBILITY ENHANCEMENTS === */
function setupAccessibility() {
    // 1. Initial Tab Indexing for already present elements
    const interactiveSelectors = [
        '.dock-icon',
        '.desktop-icon',
        '.traffic-light',
        '.menu-item-apple',
        '.macos-menu-left > span',
        '.macos-menu-left > div > div',
        '.macos-menu-right > div',
        '.modal-btn',
        'button'
    ];

    function makeFocusable(el) {
        if (!el.hasAttribute('tabindex')) {
            el.setAttribute('tabindex', '0');
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    el.click();
                }
            });
        }
    }

    document.querySelectorAll(interactiveSelectors.join(',')).forEach(makeFocusable);

    // 2. Global Shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC -> Close things
        if (e.key === 'Escape') {
            const spotlight = document.getElementById('spotlight-overlay');
            if (spotlight && !spotlight.classList.contains('hidden')) {
                toggleSpotlight();
                return;
            }

            const cc = document.getElementById('control-center');
            if (cc && !cc.classList.contains('hidden')) {
                toggleControlCenter();
                return;
            }

            const cal = document.getElementById('mini-calendar');
            if (cal && !cal.classList.contains('hidden')) {
                toggleCalendar();
                return;
            }

            const openMenus = document.querySelectorAll('[id$="-menu"]:not(.hidden)');
            if (openMenus.length > 0) {
                document.querySelectorAll('[id$="-menu"]').forEach(el => el.classList.add('hidden'));
                return;
            }

            const letter = document.getElementById('letter-overlay');
            if (letter && !letter.classList.contains('hidden') && letter.style.display !== 'none') {
                if (window.closeLetter) window.closeLetter();
                return;
            }

            const modal = document.getElementById('custom-modal-overlay');
            if (modal && modal.style.display !== 'none' && modal.style.display !== '') {
                if (typeof closeModal === 'function') closeModal();
                else modal.style.display = 'none';
                return;
            }
        }
    });

    // 3. Observer for new elements
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        if (node.matches && node.matches(interactiveSelectors.join(','))) {
                            makeFocusable(node);
                        }
                        if (node.querySelectorAll) {
                            node.querySelectorAll(interactiveSelectors.join(',')).forEach(makeFocusable);
                        }
                    }
                });
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

/* ==========================================
   NEW THOUGHTFUL APPS (added via update)
   ========================================== */




/* 2. UNSENT LETTERS */
function sealLetter() {
    const paper = document.getElementById('letter-paper');
    const air = document.getElementById('ai-reply-area');
    if (!paper.value.trim()) return;

    if (typeof createModal === 'function') createModal({ title: 'Letter Sealed', desc: 'Stored in the archives of time.', icon: '🕯️' });

    // AI Mock Reply
    setTimeout(() => {
        air.style.opacity = 1;
        const replies = [
            "Harshit: Tu bohot sochti hai. Relax kar.",
            "Harshit: I'm proud of you, you know that right?",
            "Harshit: Stop doubting. You are capable.",
            "Harshit: Suno, sab theek ho jayega."
        ];
        document.getElementById('ai-reply-text').innerText = replies[Math.floor(Math.random() * replies.length)];
    }, 2000);
}

apps.push({
    id: 'app-letters', title: 'Unsent Letters', icon: '<img src="assets/icons/app_letters_new.png" alt="letters" style="width: 100%; height: 100%;">', dock: true, width: 600, height: 700, content: `
    <div class="letters-app">
        <textarea id="letter-paper" class="letters-paper custom-scroll" placeholder="Write a letter to the void..."></textarea>
        
        <div id="ai-reply-area" class="ai-reply-area">
            <div class="text-xs font-bold uppercase mb-1 opacity-50">Reflection</div>
            <div id="ai-reply-text">...</div>
        </div>

        <div class="letters-controls">
            <button class="wax-seal-btn" onclick="sealLetter()" title="Seal Letter">SEAL</button>
        </div>
    </div>
`});


/* 3. CONSTELLATION (Visual Experience) */
apps.push({
    id: 'app-stars', title: 'Constellation', icon: '<img src="assets/icons/app_stars_new.png" alt="stars" style="width: 100%; height: 100%;">', dock: true, width: 800, height: 600, onOpen: () => ConstellationApp.init(), content: `
    <div class="stars-app relative h-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center cursor-crosshair">
        <div class="absolute inset-0 opacity-80 pointer-events-none">
            <div id="star-echoes" class="absolute inset-0 overflow-hidden z-0"></div>
            <div class="stars-small" style="position:absolute; inset:0; opacity: 0.8;"></div>
            <div class="stars-medium" style="position:absolute; inset:0; opacity: 0.6;"></div>
        </div>

        <canvas id="stardust-canvas" class="absolute inset-0 z-0 pointer-events-none"></canvas>
        
        <div id="constellation-core" class="relative z-10 text-center p-10 select-none transition-all duration-1000">
            <div class="text-4xl md:text-5xl text-white font-serif mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] animate-breath">
                The Sky is Full of Us.
            </div>
            <div class="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6 opacity-80"></div>
            <div id="constellation-msg" class="text-slate-300 font-light tracking-wide leading-relaxed max-w-md mx-auto italic opacity-90 transition-all duration-700">
                "We don't need lines to connect.<br>We just shine in the same sky."
            </div>
            
            <div class="mt-8">
                <button onclick="ConstellationApp.receiveSignal()" class="group relative px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-500 overflow-hidden">
                    <span class="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold text-blue-200 group-hover:text-white">Signal for Connection</span>
                    <div class="absolute inset-0 bg-blue-500/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>
            </div>
        </div>

        <div class="absolute bottom-10 z-20 w-full max-w-xs px-6 transition-all duration-700 hover:scale-105">
            <input type="text" id="star-wish-input" 
                class="w-full bg-white/5 border border-white/10 rounded-full px-6 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all text-center font-light tracking-wider"
                placeholder="Release a thought to the stars..."
                onkeydown="if(event.key === 'Enter') ConstellationApp.releaseStarWish(this)">
            <div class="text-[8px] text-slate-600 mt-2 uppercase tracking-widest text-center opacity-0 hover:opacity-100 transition-opacity">Press Enter to release</div>
        </div>
        
        <div id="wish-star-layer" class="absolute inset-0 pointer-events-none z-30"></div>

        <div class="absolute top-10 left-[20%] w-[2px] h-[100px] bg-gradient-to-b from-transparent via-white to-transparent transform rotate-45 opacity-0 animate-shooting-star-1"></div>
        <div class="absolute top-40 right-[30%] w-[1px] h-[80px] bg-gradient-to-b from-transparent via-blue-200 to-transparent transform rotate-[-30deg] opacity-0 animate-shooting-star-2"></div>
    </div>
`});








/* 6. HARSHIT'S COMPASS */
window.spinCompass = function () {
    const n = document.getElementById('c-needle');
    const r = document.getElementById('c-result');
    if (!n) return;

    n.style.transform = 'translate(-50%, -50%) rotate(' + (720 + Math.random() * 360) + 'deg)';
    if (r) r.style.opacity = 0;

    setTimeout(() => {
        const adv = [
            "Go study.", "Stop overthinking.", "You're doing fine.", "Drink water.", "Ignore the noise."
        ];
        if (r) {
            r.innerText = adv[Math.floor(Math.random() * adv.length)];
            r.style.opacity = 1;
        }
    }, 3000);
}

apps.push({
    id: 'app-compass', title: 'The Compass', icon: '<img src="assets/icons/app_compass.png" alt="compass" style="width: 100%; height: 100%;">', dock: false, width: 500, height: 500, content: `
    <div class="compass-app">
        <div class="compass-container bg-compass-face">
            <div class="text-[10px] absolute top-2 left-1/2 -translate-x-1/2 font-bold text-gray-400">N</div>
            <div id="c-needle" class="compass-needle"></div>
        </div>
        
        <input type="text" class="compass-input" placeholder="What's on your mind?">
        <div id="c-result" class="compass-msg text-indigo-900 mt-4 transition-opacity duration-500"></div>
        
        <button onclick="spinCompass()" class="mt-4 px-6 py-2 bg-slate-800 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-700">Guide Me</button>
    </div>
`});


/* 7. MIXTAPE OF SOULS */
apps.push({
    id: 'app-mixtape', title: 'Soul Mixtape', icon: '<img src="assets/icons/app_mixtape_new.png" alt="mixtape" style="width: 100%; height: 100%;">', dock: false, width: 600, height: 450, content: `
    <div class="h-full bg-zinc-900 text-white p-6 flex flex-col items-center justify-center">
        <div class="w-full max-w-sm bg-zinc-800 p-4 rounded-xl border border-zinc-700 shadow-2xl relative">
            <!-- Cassette Look -->
            <div class="bg-zinc-900 h-32 rounded mb-4 flex items-center justify-center relative overflow-hidden border border-zinc-700">
                <div class="absolute inset-0 flex items-center justify-center gap-12">
                    <div class="w-16 h-16 rounded-full border-4 border-zinc-700 animate-spin-slow"></div>
                    <div class="w-16 h-16 rounded-full border-4 border-zinc-700 animate-spin-slow"></div>
                </div>
                <div class="z-10 bg-white text-black px-2 py-1 text-[10px] font-bold font-mono rotate-[-2deg]">MIX: JUNE 2024</div>
            </div>
            
            <div class="text-center mb-6">
                <div class="text-xl font-bold text-gray-100">Study Beats & Rain</div>
                <div class="text-xs text-gray-500 uppercase tracking-widest">Side A</div>
            </div>
            
            <div class="flex justify-center gap-6 text-2xl text-gray-400">
                <button class="hover:text-white"><i class="fas fa-backward"></i></button>
                <button class="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition"><i class="fas fa-play"></i></button>
                <button class="hover:text-white"><i class="fas fa-forward"></i></button>
            </div>
        </div>
        
        <div class="mt-6 text-center text-xs text-gray-600 font-mono">
            "Remember that song we listened to?"
        </div>
    </div>
`});


/* 8. DAILY BLOOM (Enhanced with High-Quality Images) */
const dailyBloomData = [
    { image: 'assets/images/flower_rose.jpg', name: 'Red Rose', message: "Harshit, today is a clean slate. Fill it with your best efforts." },
    { image: 'assets/images/flower_sunflower.jpg', name: 'Sunflower', message: "Like this sunflower, always turn your face toward the light, Harshit." },
    { image: 'assets/images/flower_lotus.jpg', name: 'Tulip', message: "Every morning is a fresh start. Make today count, Harshit." },
    { image: 'assets/images/flower_cherry.jpg', name: 'Lotus', message: "Harshit, potential is within you. Bloom with confidence today." },
    { image: 'assets/images/flower_daisy.jpg', name: 'Hibiscus', message: "Your energy is contagious. Spread positivity today, Harshit." },
    { image: 'assets/images/flower_cherry.jpg', name: 'Cherry Blossom', message: "Life's beauty is in the details. Notice them today, Harshit." },
    { image: 'assets/images/flower_daisy.jpg', name: 'Daisy', message: "Stay simple, stay true. You are enough exactly as you are, Harshit." },
    { image: 'assets/images/flower_rose.jpg', name: 'Bouquet', message: "Harshit, you deserve a day as wonderful as you make others feel." },
    { image: 'assets/images/flower_lotus.jpg', name: 'White Lily', message: "Peace begins with a smile. Share yours today, Harshit." },
    { image: 'assets/images/flower_sunflower.jpg', name: 'Purple Orchid', message: "You are unique and rare. Embrace your individuality, Harshit." },
    { image: 'assets/images/flower_cherry.jpg', name: 'Lavender Field', message: "Find calm in the chaos. You've got this, Harshit." },
    { image: 'assets/images/flower_daisy.jpg', name: 'Yellow Daffodil', message: "New beginnings are beautiful. Step into today with joy, Harshit." },
    { image: 'assets/images/flower_rose.jpg', name: 'Pink Peony', message: "Harshit, let your kindness be your compass today." },
    { image: 'assets/images/flower_sunflower.jpg', name: 'Orange Marigold', message: "The sun is shining for you. Shine back, Harshit!" },
    { image: 'assets/images/flower_lotus.jpg', name: 'Wild Bluebells', message: "Gratitude turns what we have into enough. Be grateful today, Harshit." },
    { image: 'assets/images/flower_cherry.jpg', name: 'White Jasmine', message: "Small steps lead to big changes. Keep going, Harshit." }
];

apps.push({
    id: 'app-bloom', title: 'Daily Bloom', icon: '<img src="assets/icons/app_bloom_new.png" alt="bloom" style="width: 100%; height: 100%;">', dock: false, width: 500, height: 600, onOpen: () => {
        // Calculate Logic: Pick NEW random bloom every time opens
        const bloom = dailyBloomData[Math.floor(Math.random() * dailyBloomData.length)];

        // Update DOM Elements
        setTimeout(() => {
            const imgEl = document.getElementById('bloom-img');
            const messageEl = document.getElementById('bloom-message');

            if (imgEl) {
                imgEl.src = bloom.image;
                imgEl.title = bloom.name;

                // Restart Animation
                imgEl.style.opacity = '0.5';
                imgEl.style.transform = 'scale(0.95)';

                // Animate In
                setTimeout(() => {
                    imgEl.style.opacity = '1';
                    imgEl.style.transform = 'scale(1) rotate(0deg)';
                }, 100);
            }

            if (messageEl) {
                messageEl.innerText = `"${bloom.message}"`;
            }
        }, 100);
    }, content: `
    <div class="bloom-app h-full flex flex-col items-center justify-center bg-gradient-to-b from-rose-50 to-white overflow-hidden relative">
        <!-- Background Bloom Pattern -->
        <!-- Background Bloom Pattern -->
        <div class="absolute inset-0 z-0 opacity-10 pointer-events-none" style="background-image: url('assets/images/pattern_cubes.png');"></div>
        
        <!-- Main Flower Image Container -->
        <div class="relative z-10 w-72 h-72 mb-8 group perspective-[1000px]">
             <!-- Glow Effect -->
            <div class="absolute inset-0 bg-rose-300 rounded-2xl blur-3xl opacity-40 group-hover:opacity-70 transition duration-700 animate-pulse"></div>
            
            <!-- The Image -->
            <img id="bloom-img" src="assets/images/flower_rose.jpg" 
                 class="w-full h-full object-cover rounded-2xl shadow-2xl transform border-4 border-white relative z-10 transition-all duration-1000" 
                 alt="Daily Bloom"
                 onerror="this.src='https://placehold.co/600x600/pink/white?text=Flower+Bloom'">
        </div>
        
        <div class="font-serif text-3xl text-rose-900 italic mb-6 relative z-10 text-center px-4 drop-shadow-sm">"Harshit"</div>
        
        <div class="relative z-10 p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-rose-100 max-w-sm mx-4 transform hover:-translate-y-1 transition duration-300">
            <div class="flex items-center justify-between mb-4">
                <div class="text-[10px] text-rose-400 uppercase tracking-[0.2em] font-bold">Daily Insight</div>
                <div class="text-[10px] text-slate-300 font-mono">${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
            </div>
            <div id="bloom-message" class="text-slate-700 font-serif text-lg leading-relaxed text-center italic">
                "Finding the perfect flower for you..."
            </div>
            <div class="mt-6 flex justify-center">
                <div class="w-12 h-1 bg-rose-200 rounded-full"></div>
            </div>
        </div>
    </div>
`});

/* ==========================================
   VISUAL & AUDIO FIXES (Added via Feedback)
   ========================================== */

/* 1. GLOBAL AUDIO MANAGER (HalaMadrid Fix) */
window.triggerMadridEffect = function (btn) {
    if (btn) {
        btn.innerText = "SIUUUUU! ⚽";
        btn.classList.add('animate-bounce');
        setTimeout(() => btn.innerText = "Hala Madrid! 🚀", 2000);
    }

    // Try finding existing audio first
    let audio = document.getElementById('madrid-siuuu');

    // If missing (app closed), create temporary
    if (!audio) {
        audio = new Audio('https://www.myinstants.com/media/sounds/cristiano-ronaldo-siuuu.mp3');
    }

    audio.play().catch(e => {
        console.log("Audio Playback Blocked", e);
        if (typeof createModal === 'function') createModal({ title: "Audio Error", desc: "Browser blocked autoplay. Interacted first?", icon: "🔇" });
    });

    // Confetti
    if (typeof confetti === 'function') {
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
};


/* 2. CUSTOM CONTEXT MENU LOGIC */
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();

    let menu = document.getElementById('ctx-menu');
    if (!menu) {
        // Create if missing
        menu = document.createElement('div');
        menu.id = 'ctx-menu';
        menu.className = 'fixed bg-white/90 backdrop-blur border border-gray-200 shadow-xl rounded-lg py-2 w-48 z-[99999] hidden flex-col';
        menu.innerHTML = `
            <div class="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer text-xs font-bold" onclick="Apps.open('folder-system')">📂 System Core</div>
            <div class="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer text-xs font-bold" onclick="location.reload()">🔄 Refresh System</div>
            <div class="h-px bg-gray-200 my-1"></div>
            <div class="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer text-xs font-bold " onclick="document.body.requestFullscreen()">🖥️ Fullscreen</div>
            <div class="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer text-xs font-bold text-red-500" onclick="triggerQuietEnding()">❌ Shutdown</div>
        `;
        document.body.appendChild(menu);

        // Close on click anywhere
        document.addEventListener('click', () => menu.classList.add('hidden'));
    }

    // Position
    const x = Math.min(e.clientX, window.innerWidth - 200);
    const y = Math.min(e.clientY, window.innerHeight - 200);

    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.classList.remove('hidden');
    menu.classList.add('flex');
});


/* 3. DOCK & TERMINAL VISUAL TWEAKS INJECTION */
const styleFix = document.createElement('style');
styleFix.innerHTML = `
    /* Dock Hit Area Fix */
    #dock-container { height: 30px !important; transition: height 0.3s cubic-bezier(0.25, 1, 0.5, 1) !important; }
    #dock-container:hover { height: 115px !important; }
    
    /* Terminal Output Contrast Fix */
    #term-output { color: #e5e7eb !important; font-weight: 500; }
    .term-prompt { color: #4ade80 !important; font-weight: 700; margin-right: 8px; }
    .term-error { color: #ef4444 !important; }
    .term-success { color: #facc15 !important; }
    
    /* Context Menu Animation */
    #ctx-menu { animation: menuPop 0.2s cubic-bezier(0.2, 0.8, 0.2, 1); }
    @keyframes menuPop { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
`;
document.head.appendChild(styleFix);


/* RE-INIT ACCESSIBILITY */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAccessibility);
} else {
    setupAccessibility();
}

// Global Exposure
window.startFactsApp = startFactsApp;


/* ==========================================
   NEW APPS: TIME CAPSULE, PAPER PLANES, JOURNAL
   ========================================== */

/* ==========================================
   NEW APPS: TIME CAPSULE, PAPER PLANES, JOURNAL
   (Discovery Mode)
   ========================================== */

/* 1. TIME CAPSULE */
const TimeCapsuleApp = {
    capsules: [
        { label: "Open When You're Happy", content: "I love it when you're happy. Keep that smile, it suits you best.", icon: "☀" },
        { label: "Open When You're Sad", content: "It's okay to have down days. Take a breath. You're stronger than you feel right now.", icon: "🌙" },
        { label: "Open When You're Bored", content: "Go play Rabbit Runner or annoy me on text. I'm probably waiting for it.", icon: "🎮" },
        { label: "Open on Jan 30", content: "Happy Birthday Harshit! The world is lucky to have you. ✨", icon: "🎂" }
    ],

    open(index) {
        const cap = this.capsules[index];
        createModal({ title: cap.label, desc: cap.content, icon: cap.icon });
    },

    render() {
        const container = document.getElementById('capsule-grid');
        if (!container) return;
        container.innerHTML = this.capsules.map((c, i) => `
            <div class="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:bg-slate-700/50 transition cursor-pointer flex flex-col items-center gap-4 group" onclick="TimeCapsuleApp.open(${i})">
                <div class="text-4xl group-hover:scale-110 transition-transform">${c.icon}</div>
                <div class="text-xs font-bold text-slate-300 uppercase tracking-widest text-center">${c.label}</div>
            </div>
        `).join('');
    }
};

apps.push({
    id: 'app-capsule', title: 'Time Capsule', icon: '<img src="assets/icons/app_capsule_new.png" alt="capsule" style="width: 100%; height: 100%;">', dock: false, width: 600, height: 500, onOpen: () => TimeCapsuleApp.render(), content: `
    <div class="h-full bg-[#0f172a] text-white p-8 flex flex-col">
        <div class="text-center mb-10">
            <h2 class="text-2xl font-serif font-bold text-indigo-300">Harshit's Time Vault</h2>
            <p class="text-slate-400 text-sm mt-1">Found memories and future notes.</p>
        </div>
        <div id="capsule-grid" class="grid grid-cols-2 gap-6 overflow-y-auto custom-scroll pr-2"></div>
    </div>
`});


/* 2. PAPER PLANES */
const PlanesApp = {
    wishes: [
        "May your day be as amazing as you are.",
        "You are doing much better than you think.",
        "A random smile is coming your way.",
        "The stars are rooting for you.",
        "Take a break, you've earned it."
    ],

    catchPlane() {
        const sky = document.getElementById('planes-sky');
        if (!sky) return;

        const plane = document.createElement('div');
        plane.innerText = '✈️';
        plane.className = 'absolute text-3xl cursor-pointer transition-all duration-[4s] ease-linear select-none z-10';

        const startY = Math.random() * 70 + 10 + '%';
        plane.style.top = startY;
        plane.style.left = '-50px';
        plane.style.opacity = '0.8';

        sky.appendChild(plane);

        setTimeout(() => {
            plane.style.left = (sky.offsetWidth + 100) + 'px';
            plane.style.transform = `translateY(${Math.random() * 100 - 50}px) rotate(10deg)`;
        }, 100);

        plane.onclick = () => {
            plane.innerText = '✨';
            const msg = this.wishes[Math.floor(Math.random() * this.wishes.length)];
            createModal({ title: "A Plane for You", desc: msg, icon: "🌠" });
            setTimeout(() => plane.remove(), 500);
        };

        setTimeout(() => plane.remove(), 4500);
    },

    init() {
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => this.catchPlane(), 2000);
    }
};

apps.push({
    id: 'app-planes', title: 'Paper Planes', icon: '<img src="assets/icons/app_planes.png" alt="planes" style="width: 100%; height: 100%;">', dock: false, width: 700, height: 500, onClose: () => clearInterval(PlanesApp.interval), onOpen: () => PlanesApp.init(), content: `
    <div class="h-full bg-gradient-to-b from-sky-400 via-sky-200 to-indigo-100 relative overflow-hidden flex flex-col items-center justify-end pb-12">
        <div id="planes-sky" class="absolute inset-0">
             <!-- Clouds -->
            <div class="absolute top-10 left-10 text-8xl opacity-40 animate-pulse-slow">☁</div>
            <div class="absolute top-40 right-20 text-6xl opacity-30 animate-pulse-slow delay-700">☁</div>
        </div>
        <div class="relative z-20 bg-white/40 backdrop-blur px-6 py-2 rounded-full border border-white/50 text-sky-900 font-bold text-xs uppercase tracking-widest shadow-xl">Catch a passing wish...</div>
    </div>
`});


/* 3. SHARED JOURNAL */
const JournalApp = {
    chapters: [
        { title: "Chapter 1: The Beginning", content: "It all started with a simple 'Hi'. Who knew it would lead to a special OS built just for you? Every conversation since then has been a building block for us." },
        { title: "Chapter 2: The Inside Jokes", content: "From 'Chuha' to 'Ota', we've built a language of our own. These small moments are what make the journey worth it." },
        { title: "Chapter 3: The Growth", content: "We've faced shifts and changes, but through it all, the care remained. This system isn't just about the past; it's a bridge to what's next." }
    ],
    index: 0,

    render() {
        const title = document.getElementById('journal-title');
        const text = document.getElementById('journal-text');
        const pageNum = document.getElementById('journal-page-num');
        if (!title || !text) return;

        title.innerText = this.chapters[this.index].title;
        text.innerText = this.chapters[this.index].content;
        pageNum.innerText = `Page ${this.index + 1} of ${this.chapters.length}`;
    },

    next() {
        if (this.index < this.chapters.length - 1) {
            this.index++;
            this.render();
        }
    },

    prev() {
        if (this.index > 0) {
            this.index--;
            this.render();
        }
    }
};

apps.push({
    id: 'app-journal', title: 'Our Story', icon: '<img src="assets/icons/app_journal_new.png" alt="journal" style="width: 100%; height: 100%;">', dock: false, width: 700, height: 600, onOpen: () => JournalApp.render(), content: `
    <div class="h-full bg-[#fdfaf5] p-10 flex items-center justify-center relative">
        <div class="w-full max-w-xl h-full bg-white shadow-2xl rounded-sm border-l-[15px] border-amber-900 p-12 flex flex-col justify-between relative overflow-hidden">
             <!-- Paper Texture -->
            <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: url('https://www.transparenttextures.com/patterns/cream-paper.png');"></div>
            
            <div class="relative z-10">
                <h2 id="journal-title" class="text-3xl font-serif font-bold text-amber-900 mb-8 italic border-b border-amber-100 pb-4"></h2>
                <p id="journal-text" class="text-lg text-slate-700 leading-loose font-serif italic first-letter:text-5xl first-letter:mr-2 first-letter:float-left"></p>
            </div>

            <div class="relative z-10 flex justify-between items-center mt-12 pt-6 border-t border-slate-100">
                <div class="flex gap-4">
                    <button onclick="JournalApp.prev()" class="text-xs font-bold text-amber-800 hover:text-amber-600 transition tracking-widest">← PREV</button>
                    <button onclick="JournalApp.next()" class="text-xs font-bold text-amber-800 hover:text-amber-600 transition tracking-widest">NEXT →</button>
                </div>
                <div id="journal-page-num" class="text-[10px] text-slate-400 font-mono tracking-widest uppercase"></div>
            </div>
        </div>
    </div>
`});


/* 4. THANK YOU (GRATITUDE) */
apps.push({
    id: 'thank-you',
    title: 'Gratitude',
    icon: '<img src="assets/icons/app_gratitude_new.png" alt="gratitude" style="width: 100%; height: 100%;">',
    dock: false,
    width: 600,
    height: 600,
    content: `
    <div class="h-full bg-[#020617] text-white flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
        <!-- Cinematic Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-black to-slate-900/50 animate-pulse-slow"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none"></div>

        <div class="relative z-10 space-y-8 max-w-sm">
            <div class="text-6xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-bounce-slow">✨</div>
            <div class="space-y-4">
                <h3 class="text-3xl font-[Playfair_Display] italic tracking-wide">For Everything.</h3>
                <div class="h-px w-12 bg-indigo-500/50 mx-auto"></div>
                <p class="text-slate-400 text-sm leading-relaxed font-light italic">
                    "Thank you for being the calm in my storm, the logic in my chaos, and the person who stays when things get loud."
                </p>
            </div>
            <div class="pt-6">
                <div class="text-[9px] uppercase tracking-[0.5em] text-indigo-400/50 font-bold">Deepened Connections v1.9</div>
            </div>
        </div>
    </div>
`});

/* ==========================================
   WHEN TIRED APP (Karaoke/Voice Sync)
   ========================================== */
const TiredApp = {
    audio: null,
    display: null,
    progressBar: null,
    progressFill: null,
    playIcon: null,
    transcript: [
        /* === INSTRUCTIONS FOR USER ===
           1. Upload your audio file to 'assets/audio/tired_voice.mp3' (or update the src in the HTML below).
           2. Update the timestamps (in seconds) and text below to match your voice note.
        */
        { time: 0, text: "Hey..." },
        { time: 2, text: "I know things feel heavy right now." },
        { time: 5, text: "Just take a deep breath." },
        { time: 8, text: "You don't have to carry the world on your shoulders." },
        { time: 12, text: "It's okay to rest." },
        { time: 16, text: "You are doing enough." },
        { time: 20, text: "Sleep tight. Tomorrow is a new day." },
        { time: 25, text: "I'm here." }
    ],

    init() {
        this.audio = document.getElementById('tired-audio');
        this.display = document.getElementById('tired-display');
        this.progressBar = document.getElementById('tired-progress-bar');
        this.progressFill = document.getElementById('tired-progress-fill');
        this.playIcon = document.getElementById('tired-play-icon');

        if (this.audio) {
            this.audio.addEventListener('timeupdate', () => this.syncVisuals());
            this.audio.addEventListener('ended', () => this.reset());
        }
    },

    togglePlay() {
        if (!this.audio) return;

        if (this.audio.paused) {
            this.audio.play();
            if (this.playIcon) {
                this.playIcon.classList.remove('fa-play');
                this.playIcon.classList.add('fa-pause');
            }
            // Visual pulse start
            const pulse = document.getElementById('tired-bg-pulse');
            if (pulse) pulse.classList.add('animate-pulse');
        } else {
            this.audio.pause();
            if (this.playIcon) {
                this.playIcon.classList.remove('fa-pause');
                this.playIcon.classList.add('fa-play');
            }
            const pulse = document.getElementById('tired-bg-pulse');
            if (pulse) pulse.classList.remove('animate-pulse');
        }
    },

    syncVisuals() {
        if (!this.audio) return;
        const currentTime = this.audio.currentTime;

        // Update Progress
        if (this.progressFill) {
            const pct = (currentTime / this.audio.duration) * 100 || 0;
            this.progressFill.style.width = pct + '%';
        }

        // Find active text
        if (this.display) {
            const activeSegment = this.transcript.slice().reverse().find(seg => currentTime >= seg.time);

            if (activeSegment) {
                if (this.display.innerText !== activeSegment.text) {
                    // Fade out-in effect
                    this.display.style.opacity = 0;
                    this.display.style.transform = 'translateY(10px) scale(0.95)';

                    setTimeout(() => {
                        this.display.innerText = activeSegment.text;
                        this.display.style.opacity = 1;
                        this.display.style.transform = 'translateY(0) scale(1)';
                    }, 300);
                }
            } else {
                // Intro state
                if (currentTime < 1 && this.display.innerText !== "Press play...") {
                    // Keep it as is or reset
                }
            }
        }
    },

    seek(pct) {
        if (!this.audio) return;
        const time = (pct / 100) * this.audio.duration;
        this.audio.currentTime = time;
    },

    reset() {
        if (this.playIcon) {
            this.playIcon.classList.remove('fa-pause');
            this.playIcon.classList.add('fa-play');
        }
        const pulse = document.getElementById('tired-bg-pulse');
        if (pulse) pulse.classList.remove('animate-pulse');

        if (this.display) {
            this.display.style.opacity = 0.5;
            this.display.innerText = "Press play...";
            this.display.style.transform = 'none';
        }
        if (this.progressFill) this.progressFill.style.width = '0%';
    }
};

apps.push({
    id: 'tired',
    title: 'When Tired',
    icon: 'assets/icons/app_sleep.png', // Ensure this icon exists or use emoji
    dock: false,
    folder: 'folder-feelings',
    width: 600,
    height: 500,
    onOpen: () => {
        setTimeout(() => TiredApp.init(), 100);
    },
    onClose: () => {
        if (TiredApp.audio) {
            TiredApp.audio.pause();
            TiredApp.audio.currentTime = 0;
            TiredApp.reset();
        }
    },
    content: `
    <div class="h-full bg-[#0f172a] text-blue-100 flex flex-col relative overflow-hidden font-serif select-none">
        
        <!-- Ambient Background -->
        <div id="tired-bg-pulse" class="absolute inset-0 bg-blue-900/10 blur-[100px] transition-opacity duration-1000"></div>
        <div class="absolute inset-0 opacity-10" style="background-image: url('assets/images/pattern_stardust.png');"></div>

        <!-- Main Display Area -->
        <div class="relative z-10 flex-1 flex flex-col items-center justify-center p-10 text-center">
            <div id="tired-display" class="text-2xl md:text-3xl font-light text-blue-50/90 leading-relaxed drop-shadow-lg transition-all duration-700 ease-out opacity-60">
                Press play...
            </div>
        </div>

        <!-- Controls -->
        <div class="relative z-20 pb-10 px-10 flex flex-col items-center w-full">
            
            <!-- Replace 'src' with your actual audio file -->
            <audio id="tired-audio" src="assets/audio/tired_voice.mp3" preload="metadata"></audio> 
            
            <!-- Custom Progress Bar -->
            <div id="tired-progress-bar" class="w-full max-w-md h-1.5 bg-white/5 rounded-full mb-8 relative cursor-pointer group overflow-hidden" 
                 onclick="const rect = this.getBoundingClientRect(); const pct = ((event.clientX - rect.left) / rect.width) * 100; TiredApp.seek(pct);">
                <div id="tired-progress-fill" class="absolute left-0 top-0 h-full bg-blue-300/50 rounded-full shadow-[0_0_10px_rgba(147,197,253,0.5)] transition-all duration-100" style="width: 0%"></div>
                <div class="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors"></div>


            <!-- Play Button -->
            <button onclick="TiredApp.togglePlay()" class="w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl group">
                <i id="tired-play-icon" class="fas fa-play text-lg text-blue-200 group-hover:text-white ml-0.5 transition-colors"></i>
            </button>
            
            <div class="mt-4 text-[10px] text-blue-400/30 uppercase tracking-[0.3em] font-sans">Synced Voice Note</div>
        </div>
    </div>
`});

const ConstellationApp = {
    messages: [
        "Remember you are loved even when it's quiet.",
        "You are doing much better than you think.",
        "The stars are rooting for you today.",
        "Slow down. You've already reached far.",
        "Your peace is worth protecting.",
        "Everything you seek is already within you.",
        "You are my favorite part of the universe."
    ],
    words: ["12:21 AM", "June 20", "The Spark", "Trust", "Growth", "Comfort", "Ota", "Safe Space", "Always", "Hala Madrid", "Silence", "Connection"],
    particles: [],

    init() {
        setTimeout(() => {
            this.initEchoes();
            this.initCanvas();
        }, 100);
    },

    receiveSignal() {
        const msgEl = document.getElementById('constellation-msg');
        const core = document.getElementById('constellation-core');
        if (!msgEl || !core) return;

        core.style.transform = "scale(0.95) translateY(-5px)";
        core.style.filter = "blur(2px)";
        core.style.opacity = "0.5";

        setTimeout(() => {
            msgEl.innerHTML = `<span class="text-blue-100 not-italic glow-text">${this.messages[Math.floor(Math.random() * this.messages.length)]}</span>`;
            core.style.transform = "scale(1.05) translateY(0)";
            core.style.filter = "blur(0)";
            core.style.opacity = "1";
            msgEl.classList.add('animate-pulse');
            setTimeout(() => msgEl.classList.remove('animate-pulse'), 3000);
        }, 800);
    },

    releaseStarWish(input) {
        if (!input.value.trim()) return;
        const text = input.value;
        input.value = '';
        input.blur();

        const layer = document.getElementById('wish-star-layer');
        if (!layer) return;

        const star = document.createElement('div');
        star.className = 'absolute text-white text-xs whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]';
        star.innerText = '✦ ' + text;

        const rect = input.getBoundingClientRect();
        const containerRect = layer.getBoundingClientRect();

        star.style.left = (rect.left - containerRect.left + rect.width / 2) + 'px';
        star.style.bottom = '60px';
        star.style.opacity = '1';
        star.style.transition = 'all 4s cubic-bezier(0.25, 0.1, 0.25, 1)';

        layer.appendChild(star);

        setTimeout(() => {
            const angle = -45 - (Math.random() * 30);
            const dist = 800;
            const tx = Math.cos(angle * Math.PI / 180) * dist;
            const ty = Math.sin(angle * Math.PI / 180) * dist;
            star.style.transform = `translate(${tx}px, ${ty}px) scale(0)`;
            star.style.opacity = '0';
            star.style.filter = 'blur(4px)';
        }, 100);

        setTimeout(() => star.remove(), 4100);
    },

    initEchoes() {
        const echoContainer = document.getElementById('star-echoes');
        if (!echoContainer) return;
        if (this.echoInterval) clearInterval(this.echoInterval);
        this.echoInterval = setInterval(() => {
            const el = document.createElement('div');
            el.innerText = this.words[Math.floor(Math.random() * this.words.length)];
            el.className = 'absolute text-slate-500/10 font-serif text-[10px] whitespace-nowrap pointer-events-none transition-opacity duration-1000';
            el.style.left = Math.random() * 100 + '%';
            el.style.top = Math.random() * 100 + '%';
            el.style.animation = 'floatDrift ' + (20 + Math.random() * 20) + 's linear forwards';
            el.style.opacity = '0';
            echoContainer.appendChild(el);
            requestAnimationFrame(() => el.style.opacity = '0.3');
            setTimeout(() => {
                el.style.opacity = '0';
                setTimeout(() => el.remove(), 1000);
            }, 15000);
        }, 3000);
    },

    initCanvas() {
        const canvas = document.getElementById('stardust-canvas');
        const starsApp = document.querySelector('.stars-app');
        if (!canvas || !starsApp) return;

        const ctx = canvas.getContext('2d');
        canvas.width = starsApp.offsetWidth;
        canvas.height = starsApp.offsetHeight;
        this.particles = [];

        starsApp.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            for (let i = 0; i < 2; i++) {
                this.particles.push({
                    x: x, y: y,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    life: 1,
                    color: 'rgba(200, 230, 255,'
                });
            }
        };

        const animate = () => {
            if (!ctx) return;
            if (!document.getElementById('stardust-canvas')) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.01;
                ctx.fillStyle = p.color + (p.life * 0.3) + ')';
                ctx.fillRect(p.x, p.y, 1, 1);
                if (p.life <= 0) this.particles.splice(i, 1);
            });
            requestAnimationFrame(animate);
        };
        animate();
    }
};

const WeatherEngine = {
    snowContainer: null,
    rainContainer: null,
    flakes: [],
    drops: [],
    windX: 0,
    targetWindX: 0,

    init() {
        this.snowContainer = document.getElementById('bg-snow-container');
        this.rainContainer = document.getElementById('bg-rain-container');
        if (!this.snowContainer || !this.rainContainer) return;

        // Atmospheric cycles
        setInterval(() => this.createFlake(), 200); // Snow (Him)
        setInterval(() => this.createRaindrop(), 120); // Rain (Me)

        document.addEventListener('mousemove', (e) => {
            this.targetWindX = (e.clientX / window.innerWidth - 0.5) * 2;
        });

        this.animate();
    },

    createFlake() {
        const flake = document.createElement('div');
        flake.className = 'bg-snow-flake';
        const size = Math.random() * 3 + 1 + 'px';
        flake.style.width = size;
        flake.style.height = size;
        flake.style.left = Math.random() * 110 - 5 + '%';
        const duration = Math.random() * 5 + 5;
        flake.style.animationDuration = duration + 's';
        flake.style.opacity = Math.random() * 0.5 + 0.3;

        this.snowContainer.appendChild(flake);
        this.flakes.push({
            el: flake,
            x: parseFloat(flake.style.left),
            y: -10,
            speedX: (Math.random() - 0.5) * 0.1,
            speedY: 100 / (duration * 60) // Per frame
        });

        setTimeout(() => {
            flake.remove();
            this.flakes = this.flakes.filter(f => f.el !== flake);
        }, duration * 1000);
    },

    createRaindrop() {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = Math.random() * 100 + '%';
        const duration = Math.random() * 0.4 + 0.7;
        drop.style.animationDuration = duration + 's';

        this.rainContainer.appendChild(drop);
        this.drops.push({
            el: drop,
            x: parseFloat(drop.style.left),
            y: -10,
            speedY: 100 / (duration * 60)
        });

        setTimeout(() => {
            drop.remove();
            this.drops = this.drops.filter(d => d.el !== drop);
        }, duration * 1000);
    },

    checkCollisions() {
        // Heartfelt Connection: When rain finds snow
        for (let i = 0; i < this.flakes.length; i++) {
            const f = this.flakes[i];
            for (let j = 0; j < this.drops.length; j++) {
                const d = this.drops[j];

                const dx = Math.abs(f.x - d.x);
                const dy = Math.abs(f.y - d.y);

                if (dx < 1.0 && dy < 4) {
                    this.spawnSparkle(f.x, f.y);
                    f.el.style.opacity = '0';
                    d.el.style.opacity = '0';
                    return;
                }
            }
        }
    },

    spawnSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'collision-sparkle';
        sparkle.innerText = Math.random() < 0.5 ? '✨' : '🤍';
        sparkle.style.left = x + '%';
        sparkle.style.top = y + '%';
        this.snowContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    },

    animate() {
        this.windX += (this.targetWindX - this.windX) * 0.05;

        this.flakes.forEach(f => {
            f.y += f.speedY; // Track Y for collision
            f.x += f.speedX + (this.windX * 0.1);
            f.el.style.left = f.x + '%';
        });

        this.drops.forEach(d => {
            d.y += d.speedY;
            d.el.style.transform = `translateX(${this.windX * 30}px) rotate(${this.windX * 15}deg)`;
        });

        this.checkCollisions();

        const pile = document.getElementById('snow-pile');
        if (pile) {
            const wave = Math.sin(Date.now() / 2000) * 2;
            const shift = this.windX * 15;
            pile.style.transform = `translateY(25px) translateX(${shift}px) rotate(${wave}deg)`;
        }

        requestAnimationFrame(() => this.animate());
    }
};

window.addEventListener('load', () => WeatherEngine.init());


/* === CURSOR TRAIL (SNOW) === */

document.addEventListener('mousemove', (e) => {
    // Increase frequency slightly for smooth trail
    if (Math.random() < 0.25) {
        const flake = document.createElement('div');

        // Randomly pick between common snowflake shapes
        const icons = ['❄', '❅', '❆', '•'];
        const isDot = Math.random() < 0.3;

        flake.className = 'snow-flake';
        flake.innerText = isDot ? '•' : icons[Math.floor(Math.random() * icons.length)];

        // Set random drift and rotation for the animation
        const drift = (Math.random() - 0.5) * 200 + 'px';
        const rot = (Math.random() - 0.5) * 720 + 'deg';
        flake.style.setProperty('--drift', drift);
        flake.style.setProperty('--rot', rot);

        flake.style.left = e.clientX + 'px';
        flake.style.top = e.clientY + 'px';

        // Scale variation
        const scale = Math.random() * 0.5 + 0.5;
        flake.style.transform = `scale(${scale})`;

        document.body.appendChild(flake);

        // Match timeout with CSS animation duration (2.5s)
        setTimeout(() => flake.remove(), 2500);
    }
});



/**
 * ========================================
 * NOTIFICATION SYSTEM FOR V-SPACE
 * ========================================
 * A loving notification system with time-based,
 * interactive, and care-filled messages
 */

// === CONFIGURATION ===
const NotificationConfig = {
    enabled: true,
    seenNotifications: new Set(),
    currentInterval: null,
    currentNotification: null,
    sessionStartTime: new Date(),
    last1221Check: null
};

// === NOTIFICATION DATABASE ===
const NotificationDatabase = {
    // Affirmations (show randomly)
    affirmations: [
        {
            id: 'virtual-hug',
            title: '🤗 Virtual Hug Incoming',
            body: 'A virtual hug is being sent your way. Please accept.',
            emoji: '🤗',
            action: () => showHugAnimation()
        },
        {
            id: 'precious-file',
            title: '💎 System Rename',
            body: 'If you were a file, you\'d be named `precious-things.dat`',
            emoji: '💎',
            action: () => showFileRenameEffect()
        },
        {
            id: 'positivity-wave',
            title: '✨ Positivity Transmission',
            body: 'Sending a wave of positivity directly to your screen.',
            emoji: '🌊',
            action: () => showPositivityWave()
        }
    ],

    // Time-based care reminders (minutes from session start)
    careReminders: [
        {
            id: 'hydration-2min',
            minutes: 2,
            title: '💧 Hydration Check',
            body: 'Gentle reminder: Please stay hydrated. A glass of water is recommended.',
            emoji: '💧',
            action: () => openWaterTracker()
        },
        {
            id: 'eye-rest-5min',
            minutes: 5,
            title: '👀 Eye Care Protocol',
            body: 'Don\'t forget to rest your eyes for a bit. You deserve a break.',
            emoji: '👁️',
            action: () => startEyeRestMode()
        },
        {
            id: 'walk-15min',
            minutes: 15,
            title: '🚶 Movement Scheduled',
            body: 'A short walk has been scheduled. It\'s a great way to defragment your thoughts.',
            emoji: '🌱',
            action: () => showWalkEncouragement()
        },
        {
            id: 'music-25min',
            minutes: 25,
            title: '🎵 Music Break',
            body: 'Time to listen to a favorite song and just vibe.',
            emoji: '🎧',
            action: () => Apps.open('app-mixtape')
        },
        {
            id: 'cleanup-38min',
            minutes: 38,
            title: '🧹 Space Optimization',
            body: 'A tidy space can lead to a tidy mind. Maybe a quick 5-minute cleanup?',
            emoji: '✨',
            action: () => showCleanupTips()
        },
        {
            id: 'checkin-60min',
            minutes: 60,
            title: '💭 System Check-In',
            body: 'Just checking in. No reason, just wanted to see how you are.',
            emoji: 'ðŸ’™',
            action: () => showCheckInMessage()
        }
    ],

    // Fun notifications (random triggers)
    funNotifications: [
        {
            id: 'riddle-4min',
            minutes: 4,
            title: '🤔 Riddle Time',
            body: 'What has an eye but cannot see?',
            emoji: '🧩',
            action: () => showRiddleGame()
        },
        {
            id: 'dad-joke',
            title: '😄 Dad Joke Module Active',
            body: 'Why don\'t scientists trust atoms? Because they make up everything!',
            emoji: '🧐',
            action: () => showMoreJokes()
        },
        {
            id: 'poem-35min',
            minutes: 35,
            title: '📜 Poem Detected',
            body: 'Roses are red, violets are blue, this is a notification, boo!',
            emoji: '🌹',
            action: () => showFullPoem()
        },
        {
            id: 'mouse-zoomies-50min',
            minutes: 50,
            title: '🖱️ Mouse Activity Required',
            body: 'Your computer mouse wants to play. Let\'s do some zoomies on the screen.',
            emoji: '🖱️',
            action: () => startMouseGame()
        },
        {
            id: 'cryptic-message-57min',
            minutes: 57,
            title: '🔎 Encrypted Message',
            body: 'A secret admirer has left you a cryptic message: `01001001 01001100 01011001`',
            emoji: '💌',
            action: () => decodeCrypticMessage()
        }
    ],

    // Inside jokes & special moments
    insideJokes: [
        {
            id: 'hmmm-detected',
            title: '🤔 A "hmmm" was detected...',
            body: 'Someone is thinking. Click to see what about.',
            emoji: '💭',
            action: () => showThinkingBubble()
        },
        {
            id: 'goodnight-sweet',
            title: '🌙 Sweet Dreams',
            body: 'goodnight sweetdreams take care sleep well',
            emoji: '😴',
            action: () => showGoodnightSequence()
        },
        {
            id: 'hydration-reminder',
            title: '💧 Thirsty?',
            body: 'A reminder to drink some water. Stay hydrated!',
            emoji: '💧',
            action: () => openWaterTracker()
        },
        {
            id: 'sweet-gibberish',
            title: '💕 Someone\'s Being Cute',
            body: '"ole olee" was detected in the archives.',
            emoji: '🥰',
            action: () => showCuteArchives()
        },
        {
            id: 'acche-sapne',
            title: '✨ Sweet Dreams Are Made of This',
            body: '"acche acche sapne dekh" - A wish for a peaceful night',
            emoji: '🌟',
            action: () => showDreamWish()
        }
    ],

    // Time-specific greetings
    timeGreetings: {
        morning: {
            id: 'morning-greeting',
            title: 'Good morning! ☀️',
            body: 'I hope today is gentle with you.',
            emoji: '🌅',
            action: () => showMorningMotivation()
        },
        afternoon: {
            id: 'afternoon-greeting',
            title: 'Happy afternoon! 🌤️',
            body: 'You\'re doing great. Keep going.',
            emoji: '☀️',
            action: () => showAfternoonBoost()
        },
        evening: {
            id: 'evening-greeting',
            title: 'Happy evening! 🌙',
            body: 'Take a moment to breathe. You made it through another day.',
            emoji: '🌇',
            action: () => showEveningReflection()
        },
        night: {
            id: 'night-greeting',
            title: 'You\'re up late! 🌃',
            body: 'It\'s late. Please rest when you can. Even at this hour... you\'re not alone.',
            emoji: '⭐',
            action: () => showNightCare()
        }
    },

    // Care messages (show periodically)
    careMessages: [
        {
            id: 'water-check',
            title: '💧 Hydration Status',
            body: 'Have you had some water today? Just checking.',
            emoji: '💧',
            action: () => openWaterTracker()
        },
        {
            id: 'smile-reminder',
            title: '😊 Emotion Module',
            body: 'Hey... smile a little. Just for me.',
            emoji: '💛',
            action: () => showSmileEncouragement()
        },
        {
            id: 'proud-of-you',
            title: '⭐ Achievement Logged',
            body: 'Still proud of you. Yes, again.',
            emoji: '🌟',
            action: () => showPrideMessage()
        },
        {
            id: 'lunch-reminder',
            title: '🍽️ Nutrition Alert',
            body: 'No skipping lunch 🤨',
            emoji: '🥗',
            action: () => showLunchReminder()
        },
        {
            id: 'stretch-reminder',
            title: '🧘 Physical Wellbeing',
            body: 'Stretch your neck and shoulders.',
            emoji: '💪',
            action: () => showStretchGuide()
        },
        {
            id: 'take-care',
            title: '💙 System Message',
            body: 'Take care, please.',
            emoji: '💙',
            action: () => showCareMessage()
        }
    ]
};

// === NOTIFICATION TRACKER ===
const NotificationTracker = {
    shown: new Set(),
    lastTimeBased: 0,
    lastCareMessage: 0,
    lastFunNotif: 0
};

// === CORE NOTIFICATION ENGINE ===
function initNotificationSystem() {
    console.log('%c[Notification System] ðŸ’Œ Initializing...', 'color: #ec4899; font-weight: bold;');

    // Check for 12:21 AM every minute
    setInterval(check1221EasterEgg, 60000);

    // Start time-based notification checker
    setInterval(checkTimeBasedNotifications, 60000); // Check every minute

    // Random care messages every 10-20 minutes
    const randomCareInterval = () => {
        const min = 10 * 60 * 1000; // 10 minutes
        const max = 20 * 60 * 1000; // 20 minutes
        return Math.random() * (max - min) + min;
    };

    const scheduleNextCareMessage = () => {
        setTimeout(() => {
            showRandomCareMessage();
            scheduleNextCareMessage();
        }, randomCareInterval());
    };

    scheduleNextCareMessage();

    // Random fun notification every 15-30 minutes
    const randomFunInterval = () => {
        const min = 15 * 60 * 1000;
        const max = 30 * 60 * 1000;
        return Math.random() * (max - min) + min;
    };

    const scheduleNextFunNotif = () => {
        setTimeout(() => {
            showRandomFunNotification();
            scheduleNextFunNotif();
        }, randomFunInterval());
    };

    scheduleNextFunNotif();

    console.log('%c[Notification System] âœ… Ready to care for you', 'color: #10b981; font-weight: bold;');
}

// === 12:21 AM EASTER EGG ===
function check1221EasterEgg() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    if (hours === 0 && minutes === 21) {
        const today = now.toDateString();
        if (NotificationConfig.last1221Check !== today) {
            NotificationConfig.last1221Check = today;
            show1221Notification();
        }
    }
}

function show1221Notification() {
    const notification = {
        id: '1221-easter-egg',
        title: 'ðŸŒ™ 12:21 AM - The Time It All Started',
        body: 'Some moments last forever. âœ¨\n\nJune 20, 2024 â€¢ 12:21 AM\nA conversation began.',
        emoji: 'â°',
        action: () => {
            if (typeof Apps !== 'undefined') {
                Apps.open('first-conversation');
            }
            fireConfetti();
        }
    };

    displayNotification(notification, true); // Special = true for this one
}

// === TIME-BASED NOTIFICATIONS ===
function checkTimeBasedNotifications() {
    const sessionTime = Math.floor((new Date() - NotificationConfig.sessionStartTime) / 60000); // Minutes

    // Check care reminders
    NotificationDatabase.careReminders.forEach(reminder => {
        if (sessionTime >= reminder.minutes && !NotificationTracker.shown.has(reminder.id)) {
            NotificationTracker.shown.add(reminder.id);
            displayNotification(reminder);
        }
    });

    // Check fun notifications
    NotificationDatabase.funNotifications.forEach(fun => {
        if (fun.minutes && sessionTime >= fun.minutes && !NotificationTracker.shown.has(fun.id)) {
            NotificationTracker.shown.add(fun.id);
            displayNotification(fun);
        }
    });
}

// === RANDOM MESSAGE SELECTORS ===
function showRandomCareMessage() {
    const now = Date.now();
    if (now - NotificationTracker.lastCareMessage < 5 * 60 * 1000) return; // Don't spam

    const messages = NotificationDatabase.careMessages.filter(m => !NotificationTracker.shown.has(m.id));
    if (messages.length === 0) NotificationTracker.shown.clear(); // Reset if all shown

    const message = messages[Math.floor(Math.random() * messages.length)] || NotificationDatabase.careMessages[0];
    NotificationTracker.lastCareMessage = now;
    displayNotification(message);
}

function showRandomFunNotification() {
    const now = Date.now();
    if (now - NotificationTracker.lastFunNotif < 10 * 60 * 1000) return;

    const funs = NotificationDatabase.funNotifications.filter(f => !f.minutes); // Get non-time-based
    const fun = funs[Math.floor(Math.random() * funs.length)];

    if (fun) {
        NotificationTracker.lastFunNotif = now;
        displayNotification(fun);
    }
}

// === DISPLAY NOTIFICATION (Main Function) ===
function displayNotification(notification, isSpecial = false) {
    // Create notification element
    const notifEl = document.createElement('div');
    notifEl.className = `notification-toast ${isSpecial ? 'special' : ''}`;
    notifEl.innerHTML = `
        <div class="notif-icon">${notification.emoji}</div>
        <div class="notif-content">
            <div class="notif-title">${notification.title}</div>
            <div class="notif-body">${notification.body}</div>
        </div>
        <div class="notif-close" onclick="this.parentElement.classList.add('dismissed')">×</div>
    `;

    // Add click handler
    notifEl.onclick = (e) => {
        if (e.target.classList.contains('notif-close')) return;
        notifEl.classList.add('clicked');
        if (notification.action) {
            notification.action();
        }
        setTimeout(() => {
            notifEl.classList.add('dismissed');
        }, 300);
    };

    // Add to DOM
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        document.body.appendChild(container);
    }

    container.appendChild(notifEl);

    // Animate in
    setTimeout(() => notifEl.classList.add('show'), 10);

    // Auto-dismiss after 10 seconds (unless special)
    if (!isSpecial) {
        setTimeout(() => {
            if (!notifEl.classList.contains('dismissed')) {
                notifEl.classList.add('dismissed');
            }
        }, 10000);
    }

    // Remove from DOM after animation
    notifEl.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'opacity' && notifEl.classList.contains('dismissed')) {
            setTimeout(() => notifEl.remove(), 300);
        }
    });
}

// === NOTIFICATION ACTIONS (Interactive Windows) ===
function showHugAnimation() {
    const modal = createInteractiveModal({
        title: '🤗 Virtual Hug',
        content: `
            <div class="hug-animation">
                <div class="hug-circle"></div>
                <div class="hug-text">*warm hug*</div>
                <div class="hug-message">You're appreciated. Always.</div>
            </div>
        `
    });
    fireConfetti();
}

function showFileRenameEffect() {
    createInteractiveModal({
        title: '📁 File Renamed',
        content: `
            <div class="file-rename-effect">
                <div class="old-name">random_person_2024.tmp</div>
                \u003cdiv class=\"arrow\"\u003e→\u003c/div\u003e
                <div class="new-name glow-text">precious-things.dat</div>
                <div class="file-info">Status: <span class="text-green-400">Protected</span></div>
                <div class="file-info">Importance: <span class="text-yellow-400">Maximum</span></div>
            </div>
        `
    });
}

function showPositivityWave() {
    createInteractiveModal({
        title: '✨ Positivity Wave',
        content: `
            <div class="positivity-wave">
                <div class="wave-rings">
                    <div class="wave-ring"></div>
                    <div class="wave-ring"></div>
                    <div class="wave-ring"></div>
                </div>
                <div class="wave-message">
                    \u003cp\u003e🌊 Sending good vibes...\u003c/p\u003e\r\n                    \u003cp\u003e💫 Transmitting encouragement...\u003c/p\u003e\r\n                    \u003cp\u003e✨ Broadcasting appreciation...\u003c/p\u003e
                    <p class="mt-4 text-lg font-bold">You've got this.</p>
                </div>
            </div>
        `
    });
    fireConfetti();
}

function openWaterTracker() {
    createInteractiveModal({
        title: '💧 Hydration Tracker',
        content: `
            <div class="water-tracker">
                <div class="water-glass">
                    <div class="water-level" id="water-level"></div>
                    <div class="glass-outline"></div>
                </div>
                <div class="water-message">
                    <p>Your body needs water to function.</p>
                    <p>Your mind needs care to flourish.</p>
                    <p class="mt-4">Click to mark hydration complete:</p>
                    \u003cbutton class=\"btn-primary mt-2\" onclick=\"markHydrated()\"\u003eI Drank Water! 💧\u003c/button\u003e
                </div>
            </div>
        `
    });
}

function markHydrated() {
    const level = document.getElementById('water-level');
    if (level) {
        level.style.height = '80%';
        setTimeout(() => {
            createModal({
                title: 'Hydration Complete',
                desc: 'Good job! Your cells are celebrating. 🎉',
                icon: '✅'
            });
        }, 500);
    }
}

function startEyeRestMode() {
    createInteractiveModal({
        title: '👁️ Eye Rest Mode',
        content: `
            <div class="eye-rest-mode">
                <div class="eye-icon">👁️</div>
                <div class="rest-message">
                    <h3>20-20-20 Rule</h3>
                    <p>Every 20 minutes, look at something 20 feet away for 20 seconds.</p>
                    <div class="timer-display" id="eye-timer">20</div>
                    <button class="btn-primary" onclick="startEyeTimer()">Start Timer</button>
                </div>
            </div>
        `
    });
}

function startEyeTimer() {
    let seconds = 20;
    const timerEl = document.getElementById('eye-timer');
    const interval = setInterval(() => {
        seconds--;
        if (timerEl) timerEl.textContent = seconds;
        if (seconds <= 0) {
            clearInterval(interval);
            if (timerEl) timerEl.textContent = '✅ Done!';
            fireConfetti();
        }
    }, 1000);
}

function showWalkEncouragement() {
    createInteractiveModal({
        title: '🚶 Movement Break',
        content: `
            <div class="walk-encouragement">
                <div class="walking-figure">🚶‍♂️</div>
                <div class="walk-message">
                    <h3>Your body wants to move</h3>
                    <p>Even 5 minutes helps:</p>
                    <ul class="walk-benefits">
                        <li>✔ Clears your mind</li>
                        <li>✔ Boosts energy</li>
                        <li>✔ Improves mood</li>
                        <li>✔ Helps you think better</li>
                    </ul>
                    <p class="mt-4 italic">Take a short walk. Your future self will thank you.</p>
                </div>
            </div>
        `
    });
}

function showCleanupTips() {
    createInteractiveModal({
        title: '🧹 Space Optimization',
        content: `
            <div class="cleanup-tips">
                <h3>5-Minute Cleanup Challenge</h3>
                <div class="cleanup-tasks">
                    <div class="task">📋 Clear your desk</div>
                    <div class="task">🗑️ Empty trash</div>
                    <div class="task">📚 Organize one area</div>
                    <div class="task">💡 Tidy your space</div>
                </div>
                <p class="cleanup-quote">"A clear space creates room for clear thoughts."</p>
            </div>
        `
    });
}

function showCheckInMessage() {
    createInteractiveModal({
        title: '💭 How Are You?',
        content: `
            <div class="checkin-message">
                <p class="checkin-text">Just checking in.</p>
                <p class="checkin-sub">No reason. Just wanted to see how you are.</p>
                <div class="mood-selector">
                    <button class="mood-btn" onclick="respondMood('great')">😊 Great</button>
                    <button class="mood-btn" onclick="respondMood('okay')">😐 Okay</button>
                    <button class="mood-btn" onclick="respondMood('tired')">😔 Tired</button>
                    <button class="mood-btn" onclick="respondMood('stressed')">😰 Stressed</button>
                </div>
                <p class="mt-4 text-sm text-gray-400">Whatever you're feeling, it's valid.</p>
            </div>
        `
    });
}

function respondMood(mood) {
    const responses = {
        great: "That's wonderful! I'm happy you're doing well. Keep shining! ✨",
        okay: "That's okay. Some days are just 'okay,' and that's perfectly fine. You're doing your best. 💙",
        tired: "I hear you. Rest when you can. You deserve it. Take care of yourself. 😴",
        stressed: "I'm sorry you're feeling stressed. Take a deep breath. One step at a time. You've got this. 💪"
    };

    createModal({
        title: 'Message Received',
        desc: responses[mood],
        icon: '💌'
    });
}

function showRiddleGame() {
    createInteractiveModal({
        title: '🧩 Riddle Time',
        content: `
            <div class="riddle-game">
                <div class="riddle-question">What has an eye but cannot see?</div>
                <input type="text" id="riddle-answer" class="riddle-input" placeholder="Type your answer...">
                <button class="btn-primary mt-4" onclick="checkRiddleAnswer()">Submit</button>
                <div id="riddle-result" class="riddle-result"></div>
            </div>
        `
    });
}

function checkRiddleAnswer() {
    const answer = document.getElementById('riddle-answer')?.value.toLowerCase() || '';
    const result = document.getElementById('riddle-result');

    if (answer.includes('needle') || answer.includes('storm') || answer.includes('potato')) {
        result.innerHTML = 'âœ… Correct! Smart cookie! ðŸª';
        result.className = 'riddle-result correct';
        fireConfetti();
    } else {
        result.innerHTML = 'ðŸ¤” Try again! (Hint: Think sewing... or weather... or vegetables!)';
        result.className = 'riddle-result incorrect';
    }
}

function showMoreJokes() {
    const jokes = [
        "What do you call a fake noodle? An impasta!",
        "Why did the scarecrow win an award? He was outstanding in his field!",
        "What do you call a bear with no teeth? A gummy bear!",
        "Why don't eggs tell jokes? They'd crack each other up!",
        "What's orange and sounds like a parrot? A carrot!"
    ];

    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    createModal({
        title: 'ðŸ˜„ Dad Joke Activated',
        desc: joke,
        icon: 'ðŸ¤“'
    });
}

function showFullPoem() {
    createInteractiveModal({
        title: 'ðŸ“œ Poem For You',
        content: `
            <div class="poem-display">
                <div class="poem-text">
                    Roses are red,<br>
                    Violets are blue,<br>
                    This notification appeared,<br>
                    Just to check on you.<br>
                    <br>
                    You matter here,<br>
                    In this digital space,<br>
                    Where care is coded<br>
                    In every place. âœ¨
                </div>
            </div>
        `
    });
}

function startMouseGame() {
    createInteractiveModal({
        title: '🖱️ Mouse Zoomies!',
        content: `
            <div class="mouse-game">
                <div class="game-instructions">Move your mouse around the box!</div>
                <div class="mouse-playground" id="mouse-playground">
                    <div class="mouse-trail" id="mouse-trail"></div>
                </div>
                <div class="game-score">Zoomies: <span id="zoomie-count">0</span></div>
            </div>
        `,
        onOpen: initMouseGame
    });
}

function initMouseGame() {
    const playground = document.getElementById('mouse-playground');
    const trail = document.getElementById('mouse-trail');
    const counter = document.getElementById('zoomie-count');
    let zoomies = 0;

    if (playground) {
        playground.addEventListener('mousemove', (e) => {
            const rect = playground.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const particle = document.createElement('div');
            particle.className = 'mouse-particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            playground.appendChild(particle);

            setTimeout(() => particle.remove(), 500);

            zoomies++;
            if (counter) counter.textContent = zoomies;
        });
    }
}

function decodeCrypticMessage() {
    createInteractiveModal({
        title: '🔎 Encrypted Message',
        content: `
            <div class="cryptic-message">
                <div class="encrypted-text">01001001 01001100 01011001</div>
                <button class="btn-primary mt-4" onclick="revealCrypticMessage()">Decrypt</button>
                <div id="decrypted-message" class="decrypted-message"></div>
            </div>
        `
    });
}

function revealCrypticMessage() {
    const msgEl = document.getElementById('decrypted-message');
    if (msgEl) {
        msgEl.innerHTML = `
            <div class="decrypt-animation">
                <div class="decrypting">Decrypting...</div>
                <div class="decoded-text">I Love You ❤️</div>
            </div>
        `;
        setTimeout(() => fireConfetti(), 500);
    }
}

// Additional care functions
function showThinkingBubble() {
    createModal({
        title: '🤔 Thinking...',
        desc: 'Probably thinking about something important. Or food. Could be food.',
        icon: '💭'
    });
}

function showGoodnightSequence() {
    createInteractiveModal({
        title: '🌙 Goodnight',
        content: `
            <div class="goodnight-sequence">
                <div class="moon-icon">🌙</div>
                <div class="goodnight-text">
                    <p>Goodnight.</p>
                    <p>Sweet dreams.</p>
                    <p>Take care.</p>
                    <p>Sleep well.</p>
                </div>
                <div class="stars-container">
                    <div class="star">⭐</div>
                    <div class="star">✨</div>
                    <div class="star">⭐</div>
                </div>
            </div>
        `
    });
}

function showCuteArchives() {
    createModal({
        title: '💕 Cute Archive Found',
        desc: 'The "ole olee" files have been detected. Maximum cuteness levels confirmed. 🥰',
        icon: '📁'
    });
}

function showDreamWish() {
    createModal({
        title: '✨ Dream Wish',
        desc: 'Acche acche sapne dekh. (Have the sweetest dreams.) May tonight bring you peace and rest. 🌟',
        icon: '🌙'
    });
}

function showMorningMotivation() {
    createModal({
        title: 'Good Morning ☀️',
        desc: 'A new day. A fresh start. You\'ve got this. I hope today is gentle with you.',
        icon: '🌅'
    });
}

function showAfternoonBoost() {
    createModal({
        title: 'Happy Afternoon 🌤️',
        desc: 'You\'re doing great. Keep going. You\'re making progress, even if it doesn\'t feel like it.',
        icon: '✨'
    });
}

function showEveningReflection() {
    createModal({
        title: 'Happy Evening 🌙',
        desc: 'Take a moment to breathe. You made it through another day. That matters.',
        icon: '🌇'
    });
}

function showNightCare() {
    createInteractiveModal({
        title: 'You\'re Up Late 🌃',
        content: `
            <div class="night-care">
                <div class="night-message">
                    <p>It's late. Please rest when you can.</p>
                    <p>Even at this hour… you're not alone.</p>
                    <p class="mt-4 text-sm text-gray-400">Whatever's keeping you up, I hope you find peace soon.</p>
                </div>
                <div class="night-actions">
                    <button class="btn-secondary" onclick="Apps.open('mr-snow')">Need Comfort?</button>
                    <button class="btn-secondary" onclick="Apps.open('app-bloom')">Read Something Soft</button>
                </div>
            </div>
        `
    });
}

function showSmileEncouragement() {
    createModal({
        title: '😊 For You',
        desc: 'Hey… smile a little. Just for me. (Even a tiny one counts.) 💛',
        icon: '💛'
    });
}

function showPrideMessage() {
    createModal({
        title: '⭐ Still Proud',
        desc: 'Still proud of you. Yes, again. You don\'t hear it enough, so I\'m saying it. You\'re doing well. 🌟',
        icon: '🌟'
    });
}

function showLunchReminder() {
    createModal({
        title: '🍽️ Lunch Time',
        desc: 'No skipping lunch 🤨. Your body needs fuel. Take care of yourself.',
        icon: '🥗'
    });
}

function showStretchGuide() {
    createInteractiveModal({
        title: '🧘 Stretch Break',
        content: `
            <div class="stretch-guide">
                <h3>Quick Stretches</h3>
                <div class="stretch-list">
                    <div class="stretch">🔄 Roll your shoulders back</div>
                    <div class="stretch">↔️ Neck side-to-side</div>
                    <div class="stretch">🙆 Reach arms overhead</div>
                    <div class="stretch">🤲 Wrist circles</div>
                </div>
                <p class="mt-4">Your body carries you all day. Show it some love.</p>
            </div>
        `
    });
}

function showCareMessage() {
    createModal({
        title: '💙 System Message',
        desc: 'Take care, please. You matter to me. Whatever you\'re going through, I\'m here for you.',
        icon: '💙'
    });
}

// === HELPER: INTERACTIVE MODAL ===
function createInteractiveModal({ title, content, onOpen }) {
    const overlay = document.createElement('div');
    overlay.className = 'interactive-modal-overlay';
    overlay.innerHTML = `
        <div class="interactive-modal-box">
            <div class="modal-header">
                <h3 class="modal-title">${title}</h3>
                <button class="modal-close" onclick="this.closest('.interactive-modal-overlay').remove()">×</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    // Click outside to close
    overlay.onclick = (e) => {
        if (e.target === overlay) overlay.remove();
    };

    // Trigger onOpen callback if provided
    if (onOpen) setTimeout(onOpen, 100);

    return overlay;
}

// === HELPER: CONFETTI ===
function fireConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

// === INITIALIZE ON DESKTOP LOAD ===
document.addEventListener('DOMContentLoaded', () => {
    // Wait for desktop to be visible before starting notifications
    const checkDesktop = setInterval(() => {
        const desktop = document.getElementById('desktop');
        if (desktop && window.getComputedStyle(desktop).display !== 'none') {
            clearInterval(checkDesktop);
            setTimeout(initNotificationSystem, 3000); // Start 3 seconds after desktop loads
        }
    }, 500);
});

console.log('%c[Notification System]  Loaded and ready', 'color: #ec4899; font-weight: bold;');

