function login() {
    const id = document.getElementById('userId').value;
    const pass = document.getElementById('userPass').value;

    if (id && pass) {
        alert(`ようこそ、${id}さん！`);
        showInsects();
    } else {
        alert("IDとパスワードを入力してください。");
    }
}

function showInsects() {
    const insects = [
        { name: "アブラゼミ", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Aburazemi.jpg/320px-Aburazemi.jpg" },
        { name: "ミンミンゼミ", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Minnminzemi.jpg/320px-Minnminzemi.jpg" },
        { name: "ツクツクボウシ", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tsukutsukuboushi.jpg/320px-Tsukutsukuboushi.jpg" }
    ];

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    insects.forEach(insect => {
        const card = document.createElement('div');
        card.className = 'insect-card';
        card.innerHTML = `<img src="${insect.img}" alt="${insect.name}"><p>${insect.name}</p>`;
        gallery.appendChild(card);
    });
}
