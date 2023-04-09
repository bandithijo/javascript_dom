const youWin = 'MENANG!',
      youLose = 'KALAH!';

let playerScore = 0,
    compScore = 0;

function getScore(hasil) {
    if (hasil == youWin) return playerScore += 1;
    if (hasil == youLose) return compScore += 1;
}

function getResult(comp, hero) {
    return comp == hero ? youWin : youLose;
}

function getPilihanComputer() {
    // menangkap pilihan computer (mengenerate bilangan random)
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'semut';
    return 'orang';
}

function getHasil(comp, player) {
    // menentukan rules
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return getResult(comp, 'orang');
    if (player == 'semut') return getResult(comp, 'gajah');
    if (player == 'orang') return getResult(comp, 'semut');
}

function generateComputerImage() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut']
    let i = 0;
    const timeStart = new Date().getTime();

    setInterval(function() {
        if(new Date().getTime() - timeStart > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', `img/${gambar[i++]}.png`);
        if(i == gambar.length) i = 0;
    }, 100);
}

const daftarPilihan = document.querySelectorAll('li img');

daftarPilihan.forEach(function(pilihan) {
    pilihan.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pilihan.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        getScore(hasil);

        generateComputerImage();

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', `img/${pilihanComputer}.png`);

            const infoHasil = document.querySelector('.info');
            infoHasil.innerHTML = hasil;

            const infoScoreComputer = document.querySelector('.score-komputer');
            infoScoreComputer.innerHTML = `Score: ${compScore}`;

            const infoScorePlayer = document.querySelector('.score-player');
            infoScorePlayer.innerHTML = `Score: ${playerScore}`;
        }, 1000);

        console.log(`Hasil: ${hasil}, Computer(${compScore}): ${pilihanComputer}, Player(${playerScore}): ${pilihanPlayer}`)
    })
})

