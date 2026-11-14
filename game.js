"use strict";

const prizes = ["50", "100", "150", "200", "250", "500", "1 000", "1 500", "2 000", "2 500", "5 000", "10 000", "20 000", "50 000", "100 000"];
const safeIndices = [4, 9, 14];

const questions = [
    {
        q: "Кои са двете основни групи фактори, от които зависи скоростта на химичните реакции според урока?",
        a: ["Природата на реагиращите вещества и условията на реакцията", "Цветът на веществата и формата на съда", "Масата на съда и атмосферното налягане", "Само температурата и осветлението"],
        aiReason: "Скоростта на химичните реакции се определя фундаментално от 'природата на реагиращите вещества' (техните химични връзки и строеж) и 'условия на реакцията' (концентрация, температура, налягане, катализатор)."
    },
    {
        q: "Защо калият реагира с вода по-бързо от натрия?",
        a: ["Поради различната природа на реагиращите вещества", "Защото водата е катализатор", "Защото калият има по-малка контактна повърхност", "Защото реакцията протича без сблъсъци"],
        aiReason: "Калият (K) е по-активен алкален метал от натрия (Na) поради по-големия си атомен радиус, което улеснява отдаването на валентния електрон. Това различие се класифицира като 'природа на реагиращите вещества'."
    },
    {
        q: "Как обикновено се променя скоростта на реакцията при увеличаване на концентрацията на реагиращите вещества?",
        a: ["Нараства", "Намалява", "Остава винаги постоянна", "Става равна на нула"],
        aiReason: "Според закона за действие на масите, скоростта е правопропорционална на произведението от моларните концентрации. По-висока концентрация означава повече градивни частици в единица обем и по-чести ефективни сблъсъци."
    },
    {
        q: "Каква е зависимостта между скоростта на хомогенна каталитична реакция и концентрацията на катализатора, посочена в урока?",
        a: ["Скоростта е правопропорционална на концентрацията на катализатора", "Скоростта е обратно пропорционална на концентрацията", "Концентрацията няма влияние", "Скоростта зависи само от цвета на катализатора"],
        aiReason: "В хомогенната катализа, катализаторът участва в междинните етапи на реакцията, образувайки активирани комплекси. Следователно, скоростта расте правопропорционално с увеличаване на неговата концентрация."
    },
    {
        q: "Какво се случва със скоростта на хетерогенна реакция, когато се увеличава контактната повърхност на твърдото вещество?",
        a: ["Нараства", "Намалява", "Не се променя", "Реакцията задължително спира"],
        aiReason: "При хетерогенните реакции (протичащи на границата между две фази), взаимодействието става само на повърхността. По-голямата контактна площ позволява на повече частици да реагират едновременно, ускорявайки процеса."
    },
    {
        q: "Защо раздробяването на твърд реагент често ускорява хетерогенната реакция?",
        a: ["Увеличава контактната площ между реагиращите вещества", "Намалява броя на частиците в системата", "Премахва необходимостта от активираща енергия", "Променя химичния състав на реагента"],
        aiReason: "Стриването на прах или раздробяването на твърдо вещество многократно увеличава неговата повърхнина, което директно увеличава броя на възможните места (контактна площ) за сблъсък с другите реагенти."
    },
    {
        q: "Как влияе повишаването на температурата върху скоростта на химичните реакции?",
        a: ["Обикновено я увеличава", "Винаги я намалява", "Не оказва влияние", "Превръща всички реакции в екзотермични"],
        aiReason: "Повишаването на температурата увеличава кинетичната енергия на частиците. Според правилото на Вант Хоф, това води до значително нарастване на броя на активните молекули, които могат да преодолеят активиращата бариера."
    },
    {
        q: "Какво представлява активиращата енергия?",
        a: ["Минималната енергия, необходима частиците да осъществят ефективен сблъсък", "Топлината, която се отделя при всяка реакция", "Енергията, съдържаща се само в катализатора", "Енергията на съда, в който протича реакцията"],
        aiReason: "Активиращата енергия е енергетичната 'бариера', която реагиращите молекули трябва да преодолеят. Само частиците с енергия, равна или по-голяма от тази минимална стойност (активни молекули), водят до химично превръщане при сблъсък."
    },
    {
        q: "Какво е кинетично уравнение на химична реакция?",
        a: ["Математична зависимост, която изразява връзката между скоростта и концентрациите на реагиращите вещества", "Уравнение, което показва само топлинния ефект", "Запис на агрегатните състояния на продуктите", "Уравнение за изчисляване на масата на съда"],
        aiReason: "Кинетичното уравнение (или законът за скоростта) описва математически как скоростта на химичната реакция (v) зависи от моларните концентрации на реагентите, повдигнати на съответните степени."
    },
    {
        q: "Какво е катализатор според урока?",
        a: ["Вещество, което променя скоростта на химичната реакция, без да се изразходва в края на процеса", "Вещество, което винаги увеличава добива на продукт", "Вещество, което променя топлинния ефект на реакцията", "Вещество, което се превръща изцяло в продукт"],
        aiReason: "Катализаторите участват активно в химичната реакция, образувайки междинни съединения, но до края на процеса те се възстановяват напълно химически и количествено."
    },
    {
        q: "Как катализаторът ускорява химичната реакция?",
        a: ["Предоставя алтернативен реакционен път с по-ниска енергетична бариера", "Повишава енергетичната бариера", "Променя началните и крайните вещества", "Отстранява всички частици от системата"],
        aiReason: "Основният механизъм на действие на положителните катализатори е насочване на реакцията по нов, алтернативен механизъм, който изисква значително по-ниска активираща енергия от некатализирания процес."
    },
    {
        q: "Как се нарича катализата, при която катализаторът и реагиращите вещества са в една и съща фаза?",
        a: ["Хомогенна катализа", "Хетерогенна катализа", "Автокатализа", "Биокатализа"],
        aiReason: "Думата 'хомогенна' означава еднородна. Когато реагентите и катализаторът образуват обща еднородна смес (например всички са газове или всички са в един разтвор), процесът е хомогенна катализа."
    },
    {
        q: "Как се нарича катализата, при която катализаторът и реагиращите вещества са в различни фази?",
        a: ["Хетерогенна катализа", "Хомогенна катализа", "Еднофазна катализа", "Обратима катализа"],
        aiReason: "При хетерогенната катализа (от гр. 'хетеро' - различен), катализаторът обикновено е твърдо вещество, а реагентите са газове или течности. Реакцията протича на контактната повърхност между фазите."
    },
    {
        q: "Какво е характерно за катализатора при обратими реакции?",
        a: ["Ускорява правата и обратната реакции, без да измества химичното равновесие", "Ускорява само правата реакция и измества равновесието", "Променя равновесната константа", "Спира обратната реакция"],
        aiReason: "Катализаторът понижава енергетичната бариера еднакво и в двете посоки. Следователно той ускорява достигането до равновесие, но не променя самите равновесни концентрации или топлинния ефект на процеса."
    },
    {
        q: "Какво представляват инхибиторите?",
        a: ["Вещества, които забавят химичните реакции", "Вещества, които винаги ускоряват реакциите", "Вещества, които повишават температурата", "Вещества, които променят равновесието чрез увеличаване на налягането"],
        aiReason: "Инхибиторите (отрицателните катализатори) са вещества, които повишават активиращата енергия или блокират активните центрове, като по този начин забавят скоростта на нежелани химични процеси (напр. корозия или разваляне на храна)."
    }
];

let level = 0, current = null, locked = false, finished = false, audioCtx = null;
const $ = id => document.getElementById(id);
const buttons = [0, 1, 2, 3].map(i => $("btn-" + i));
const jokerIds = ["joker-50", "joker-friend", "joker-audience", "joker-ai"];
const used = new Set();
const ladder = $("ladder");

prizes.forEach((p, i) => {
    const li = document.createElement("li");
    li.id = "ladder-" + i;
    li.innerHTML = `<span class="num">${i + 1}</span><span>${p} лв.</span>`;
    if (safeIndices.includes(i)) li.classList.add("safe");
    ladder.append(li);
});

function tone(freq, duration = .22, type = "sine") {
    try {
        const C = window.AudioContext || window.webkitAudioContext;
        if (!C) return;
        if (!audioCtx) audioCtx = new C();
        if (audioCtx.state === "suspended") audioCtx.resume();
        const o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = type;
        o.frequency.value = freq;
        g.gain.setValueAtTime(.07, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(.001, audioCtx.currentTime + duration);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start();
        o.stop(audioCtx.currentTime + duration);
    } catch (e) {}
}

function playCorrect() {
    [523, 659, 784].forEach((f, i) => setTimeout(() => tone(f, .25, "triangle"), i * 110));
}

function playWrong() {
    tone(240, .4, "sawtooth");
    setTimeout(() => tone(180, .45, "sawtooth"), 180);
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function renderQuestion() {
    if (level >= questions.length) {
        endGame(true);
        return;
    }
    const source = questions[level], answers = shuffle(source.a);
    current = {
        q: source.q,
        answers,
        correctIndex: answers.indexOf(source.a[0]),
        aiReason: source.aiReason
    };
    $("question-text").textContent = current.q;
    $("question-count").textContent = `Въпрос ${level + 1} от ${questions.length}`;
    $("current-prize").textContent = `${prizes[level]} лв.`;
    $("mobile-prize").textContent = `Въпрос ${level + 1} за ${prizes[level]} лв.`;
    document.querySelectorAll(".ladder li").forEach(el => el.classList.remove("active"));
    $("ladder-" + level).classList.add("active");
    buttons.forEach((b, i) => {
        b.disabled = false;
        b.className = "answer";
        $("text-" + i).textContent = current.answers[i];
    });
    locked = false;
    updateControls();
    $("status").textContent = `Зареден е въпрос ${level + 1}.`;
}

function updateControls() {
    $("give-up-btn").disabled = locked || finished;
    jokerIds.forEach(id => $(id).disabled = locked || finished || used.has(id));
}

function selectAnswer(index) {
    if (locked || finished || !current || buttons[index].classList.contains("hidden-50")) return;
    locked = true;
    updateControls();
    buttons.forEach(b => b.disabled = true);
    const chosen = buttons[index];
    chosen.classList.add("selected");
    $("status").textContent = "Отговорът е заключен.";
    setTimeout(() => {
        if (index === current.correctIndex) {
            chosen.classList.remove("selected");
            chosen.classList.add("correct");
            playCorrect();
            $("status").textContent = "Правилен отговор!";
            setTimeout(() => {
                level++;
                renderQuestion();
            }, 850);
        } else {
            chosen.classList.remove("selected");
            chosen.classList.add("wrong");
            buttons[current.correctIndex].classList.add("correct");
            playWrong();
            $("status").textContent = "Грешен отговор.";
            setTimeout(() => endGame(false), 1100);
        }
    }, 650);
}

function safePrize() {
    let value = "0";
    for (const i of safeIndices) {
        if (level > i) value = prizes[i];
    }
    return value;
}

function earnedIfQuit() {
    return level > 0 ? prizes[level - 1] : "0";
}

function endGame(win = false, giveUp = false) {
    if (finished) return;
    finished = true;
    locked = true;
    updateControls();
    buttons.forEach(b => b.disabled = true);
    const amount = win ? prizes[14] : (giveUp ? earnedIfQuit() : safePrize());
    $("modal-title").textContent = win ? "ГРАНДИОЗНА ПОБЕДА!" : giveUp ? "Играта приключи" : "Край на играта";
    $("modal-title").style.color = win || giveUp ? "var(--green)" : "var(--red)";
    $("modal-text").innerHTML = `${win ? "Отговори правилно на всички въпроси!" : giveUp ? "Реши да се откажеш и да запазиш натрупаната сума." : "Този отговор не е верен."}<br><br><span class="result-prize">Спечелени: ${amount} лв.</span>`;
    $("ai-box").classList.remove("active");
    $("modal-actions").innerHTML = '<button class="action" id="play-again" type="button">Играй отново</button>';
    $("play-again").addEventListener("click", restart);
    showDialog();
}

function showDialog() {
    $("modal").classList.add("show");
    $("play-again")?.focus();
    $("modal-ok")?.focus();
}

function closeDialog() {
    $("modal").classList.remove("show");
    $("ai-box").classList.remove("active");
    $("modal-actions").style.display = "flex";
}

function message(title, text) {
    $("modal-title").textContent = title;
    $("modal-title").style.color = "var(--gold)";
    $("modal-text").textContent = text;
    $("ai-box").classList.remove("active");
    $("modal-actions").innerHTML = '<button class="action" id="modal-close" type="button">Добре</button>';
    $("modal-close").addEventListener("click", closeDialog);
    showDialog();
}

function useJoker(id, fn) {
    if (locked || finished || used.has(id) || !current) return;
    used.add(id);
    $(id).disabled = true;
    fn();
    updateControls();
}

function use5050() {
    useJoker("joker-50", () => {
        const wrong = shuffle([0, 1, 2, 3].filter(i => i !== current.correctIndex && !buttons[i].classList.contains("hidden-50"))).slice(0, 2);
        wrong.forEach(i => {
            buttons[i].classList.add("hidden-50");
            buttons[i].disabled = true;
        });
        $("status").textContent = "Жокер 50 на 50 е използван.";
    });
}

function useFriend() {
    useJoker("joker-friend", () => {
        const visible = [0, 1, 2, 3].filter(i => !buttons[i].classList.contains("hidden-50"));
        let guess = current.correctIndex;
        if (Math.random() < .22) {
            const wrong = visible.filter(i => i !== current.correctIndex);
            if (wrong.length) guess = wrong[Math.floor(Math.random() * wrong.length)];
        }
        const confidence = guess === current.correctIndex ? "Доста съм уверен." : "Не съм напълно сигурен.";
        message("Обади се на приятел", `Приятелят ти предполага отговор ${"ABCD"[guess]}. ${confidence}`);
    });
}

function useAudience() {
    useJoker("joker-audience", () => {
        const visible = [0, 1, 2, 3].filter(i => !buttons[i].classList.contains("hidden-50"));
        let correct = Math.floor(Math.random() * 26) + 55;
        if (visible.length === 2) correct = Math.floor(Math.random() * 16) + 70;
        const rest = 100 - correct;
        const weights = visible.filter(i => i !== current.correctIndex).map(() => Math.random() + .2);
        const total = weights.reduce((a, b) => a + b, 0);
        let remaining = rest;
        const results = {};
        results[current.correctIndex] = correct;
        visible.filter(i => i !== current.correctIndex).forEach((i, n, arr) => {
            const part = n === arr.length - 1 ? remaining : Math.round(rest * weights[n] / total);
            results[i] = part;
            remaining -= part;
        });
        let text = "Резултати от публиката:\n\n";
        visible.forEach(i => text += `Отговор ${"ABCD"[i]}: ${results[i]}%\n`);
        message("Помощ от публиката", text);
    });
}

// Логика за AI Жокера с ефект на печатане
function useAI() {
    useJoker("joker-ai", () => {
        $("modal-title").textContent = "Връзка с ИИ...";
        $("modal-title").style.color = "var(--ai-cyan)";
        $("modal-text").textContent = "";
        $("modal-actions").style.display = "none";

        const aiBox = $("ai-box");
        const aiText = $("ai-text");
        aiBox.classList.add("active");
        aiText.textContent = "";
        showDialog();

        const correctLetter = "ABCD"[current.correctIndex];
        const fullResponse = `Анализирам данните...\n\nНай-логичният избор е отговор ${correctLetter}.\n\nОбосновка:\n${current.aiReason}`;

        let i = 0;
        function typeWriter() {
            if (i < fullResponse.length) {
                aiText.textContent += fullResponse.charAt(i);
                i++;
                setTimeout(typeWriter, 15);
            } else {
                $("modal-actions").style.display = "flex";
                $("modal-actions").innerHTML = '<button class="action" id="modal-close-ai" type="button" style="border-color:var(--ai-cyan)">Разбрах</button>';
                $("modal-close-ai").addEventListener("click", closeDialog);
            }
        }
        setTimeout(typeWriter, 500);
    });
}

function giveUp() {
    if (locked || finished) return;
    message("Потвърди отказването", `Ако се откажеш сега, ще запазиш ${earnedIfQuit()} лв. Сигурен ли си?`);
    $("modal-actions").innerHTML = '<button class="action danger" id="confirm-quit">Откажи се</button><button class="action" id="cancel-quit">Продължи</button>';
    $("confirm-quit").addEventListener("click", () => {
        closeDialog();
        endGame(false, true);
    });
    $("cancel-quit").addEventListener("click", closeDialog);
}

function restart() {
    closeDialog();
    level = 0;
    locked = false;
    finished = false;
    used.clear();
    jokerIds.forEach(id => $(id).disabled = false);
    renderQuestion();
}

buttons.forEach((b, i) => b.addEventListener("click", () => selectAnswer(i)));
$("joker-50").addEventListener("click", use5050);
$("joker-friend").addEventListener("click", useFriend);
$("joker-audience").addEventListener("click", useAudience);
$("joker-ai").addEventListener("click", useAI);
$("give-up-btn").addEventListener("click", giveUp);
$("restart-btn").addEventListener("click", () => {
    if (confirm("Сигурен ли си, че искаш да започнеш играта отначало?")) restart();
});

document.addEventListener("keydown", e => {
    if ($("modal").classList.contains("show")) {
        if (e.key === "Escape" && $("modal-actions").style.display !== "none") closeDialog();
        return;
    }
    if (locked || finished) return;
    const map = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 };
    const key = e.key.toLowerCase();
    if (Object.prototype.hasOwnProperty.call(map, key)) {
        e.preventDefault();
        selectAnswer(map[key]);
    }
});

renderQuestion();