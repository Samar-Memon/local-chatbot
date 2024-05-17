let inputBox = document.getElementById('input');
let messages = document.querySelector('.messages');
let autoSpan;
let userSpan;

let key = document.querySelector('.fa-key');

key.addEventListener('click', () => {
    document.querySelector('.keywords').classList.toggle('display');
});
let buttons = document.querySelectorAll('button');
buttons.forEach((e) => {
    e.addEventListener('click', () => {
        inputBox.value = e.value;
    })
})

function getInputValue() {
    return inputBox.value.toLowerCase().trim();
}

function userMessage() {
    const messageText = getInputValue();
    if (messageText !== '') {
        document.querySelector('.fa-paper-plane').style.display = 'block';
        userSpan = document.createElement('span');
        userSpan.className = 'userText';
        userSpan.innerHTML = `<span><p>${messageText}</p></span>`;
        messages.appendChild(userSpan);
        saveMessages();
        setTimeout(() => autoMessage(messageText), 1000);
        inputBox.value = ''; // Clear the input box after sending the message
    }
}

function textChange(messageText) {
    if (messageText === 'hi' || messageText === 'hello' || messageText === 'hey' || messageText == 'salam') {
        autoSpan.innerHTML = `<img src="./auto.png"> <span> <p>${messageText.toUpperCase()}! kese ho Aap?</p> </span>`;
    } else if (messageText === 'me theek hu aap kese ho?' || messageText === 'me thik hu ap kese ho?') {
        autoSpan.innerHTML = `<img src="./auto.png"> <span> <p><strong>Allah</strong> ka shukar hain me bhi theek hun.</p> </span>`;
    } else if (messageText === 'mujhe saylani me addmision karwana hain') {
        autoSpan.innerHTML = `<img src="./auto.png"> <span> <p>Acha apko <strong>Saylani</strong> me <strong>Addmission</strong> karwana hain toh Aapko kon se <strong>Course</strong> me <strong>Addmission</strong> karwana hain?</p> </span>`;
    } else if (messageText === 'aap mujhe course ki list send kardien') {
        autoSpan.innerHTML = `<img src="./auto.png"> <span> <p><strong>Web and Mobile App Development <br> Python <br> AI Chatbot <br> Graphic Designing</strong></p> </span>`;
    } else if (messageText === 'aap mujhe registration ki details bata dein') {
        autoSpan.innerHTML = `<img src="./auto.png"> <span> <p>Aap is link per <strong>Click</strong> karey or <strong>Registration</strong> ker lein <a href='https://smitformbysamar.vercel.app' target='blank'>Restration.form</a> or haan <strong>Registration</strong> karney ke baad mujhe zaroor <strong>Inform</strong> ker dijiyega</p> </span>`;
    } else if (messageText === 'jee mene registration karli hai') {
        autoSpan.innerHTML = `<img src="./auto.png"> <span> <p><strong>OK</strong> theek hain ab Aap <strong>Saylani</strong> ke main Campus BAHADURABAD aa jaye wahin aapki <strong>Orientation</strong> class hogi jisme apko class Timing or class Details bata di jayengi!</p> </span>`;
    } else if (messageText === 'theek hai me saylani main campus jaa kar maloom kar lunga' || messageText === 'theek hai me saylani main campus jaa kar maloom kar lungi') {
        autoSpan.innerHTML = `<img src="./auto.png"> <span> <p>Jee <strong>Shukriya</strong> ab mere pass Mazeed <strong>Keywords</strong> nahi hai jiski madad se me aapsey baat kar saku <br> <strong>BYE! BYE!</strong></p> </span>`;
    } else {
        autoSpan.innerHTML = `<img src="./auto.png"> <span> <p>Mere pass kuch hi <strong>Keywords</strong> Store hain jiski madad se me aapse baat kar sakunga<br> or aapko ye sarey <strong>Keywords</strong> Top per <strong>Icon</strong> ko <strong>Click</strong> karne se <strong>Show</strong> Hongey!</p> </span>`;
    }
    saveMessages();
}

function autoMessage(messageText) {
    autoSpan = document.createElement('span');
    autoSpan.className = 'autoText';
    autoSpan.innerHTML = `<img src="./auto.png"> <span> <p>...</p> </span>`;
    messages.appendChild(autoSpan);
    textChange(messageText); // Pass the user message text to textChange
}

function saveMessages() {
    localStorage.setItem('messages', messages.innerHTML);
}

function loadMessages() {
    const savedMessages = localStorage.getItem('messages');
    if (savedMessages) {
        messages.innerHTML = savedMessages;
    }
}

document.addEventListener('keydown', (e) => {
    inputBox.focus();
    if (e.key === 'Enter') {
        userMessage();
    }
});

loadMessages(); // Load messages when the page loads
