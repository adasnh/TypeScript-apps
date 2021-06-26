//#region 
let boomSound: HTMLAudioElement
let clapSound: HTMLAudioElement
let hihatSound: HTMLAudioElement
let kickSound: HTMLAudioElement
let openhatSound: HTMLAudioElement
let rideSound: HTMLAudioElement
let aNoteSound: HTMLAudioElement
let asNoteSound: HTMLAudioElement
let bNoteSound: HTMLAudioElement
let bsNoteSound: HTMLAudioElement
let cNoteSound: HTMLAudioElement
let csNoteSound: HTMLAudioElement
let dNoteSound: HTMLAudioElement
let dsNoteSound: HTMLAudioElement
let eNoteSound: HTMLAudioElement
let fNoteSound: HTMLAudioElement
let fsNoteSound: HTMLAudioElement
let gNoteSound: HTMLAudioElement
let gsNoteSound: HTMLAudioElement
let snareSound: HTMLAudioElement
let tinkSound: HTMLAudioElement
let tomSound: HTMLAudioElement
//#endregion



let channel0: any[] = [];
let channel1: any[] = [];
let channel2: any[] = [];

const recordPlace: HTMLDivElement =  document.querySelector('#recordArea');
const playButton: HTMLButtonElement = document.querySelector("#play");
const clearButton: HTMLButtonElement = document.querySelector("#clear")
const recButton0: HTMLInputElement =  document.querySelector('#record0');
const recButton1: HTMLInputElement =  document.querySelector('#record1');
const recButton2: HTMLInputElement =  document.querySelector('#record2');




  const selectChannelBox: HTMLInputElement[] = [
    document.querySelector('#play0'),
    document.querySelector('#play1'),
    document.querySelector('#play2'),
  ];

  appStart();
  function appStart() {
      findSounds();
      recordPlace.addEventListener('click', setStartingTime);
      window.addEventListener('keypress', onKeyDown);
      playButton.addEventListener('click', playSelectedChannel);
      clearButton.addEventListener('click', clearChannels)
      recButton0.addEventListener('click', setCurrentTime);
      setCurrentTime();
  }

  function findSounds(){
    boomSound = document.querySelector('[data-sound="boom"]');
    clapSound = document.querySelector('[data-sound="clap"]');
    hihatSound = document.querySelector('[data-sound="hihat"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    aNoteSound = document.querySelector('[data-sound="noteA"]');
    asNoteSound = document.querySelector('[data-sound="noteAs"]');
    bNoteSound = document.querySelector('[data-sound="noteB"]');
    bsNoteSound = document.querySelector('[data-sound="noteBs"]');
    cNoteSound = document.querySelector('[data-sound="noteC"]');
    csNoteSound = document.querySelector('[data-sound="noteCs"]');
    dNoteSound = document.querySelector('[data-sound="noteD"]');
    dsNoteSound = document.querySelector('[data-sound="noteDs"]');
    eNoteSound = document.querySelector('[data-sound="noteE"]');
    fNoteSound = document.querySelector('[data-sound="noteF"]');
    fsNoteSound = document.querySelector('[data-sound="noteFs"]');
    gNoteSound = document.querySelector('[data-sound="noteG"]');
    gsNoteSound = document.querySelector('[data-sound="noteGs"]');
}

let startingTime = 0;

function setCurrentTime(){
    startingTime = Date.now();
}

let startingRecordTime = 0;

function setStartingTime(ev: MouseEvent) {
    startingRecordTime = ev.timeStamp;
}

function playSound(key: string){
    switch (key) {
        case '1':
            boomSound.currentTime = 0;
            boomSound.play();
    }
    switch (key) {
        case '2':
            clapSound.currentTime = 0;
            clapSound.play();
    }
    switch (key) {
        case '3':
            hihatSound.currentTime = 0;
            hihatSound.play();
    }
    switch (key) {
        case '4':
            kickSound.currentTime = 0;
            kickSound.play();
    }
    switch (key) {
        case '5':
            openhatSound.currentTime = 0;
            openhatSound.play();
    }
    switch (key) {
        case '6':
            rideSound.currentTime = 0;
            rideSound.play();
    }
    switch (key) {
        case '7':
            snareSound.currentTime = 0;
            snareSound.play();
    }
    switch (key) {
        case '8':
            tinkSound.currentTime = 0;
            tinkSound.play();
    }
    switch (key) {
        case '9':
            tomSound.currentTime = 0;
            tomSound.play();
    }
    switch (key) {
        case 'q':
            aNoteSound.currentTime = 0;
            aNoteSound.play();
    }
    switch (key) {
        case 'w':
            asNoteSound.currentTime = 0;
            asNoteSound.play();
    }
    switch (key) {
        case 'e':
            bNoteSound.currentTime = 0;
            bNoteSound.play();
    }
    switch (key) {
        case 'r':
            bsNoteSound.currentTime = 0;
            bsNoteSound.play();
    }
    switch (key) {
        case 't':
            cNoteSound.currentTime = 0;
            cNoteSound.play();
    }
    switch (key) {
        case 'y':
            csNoteSound.currentTime = 0;
            csNoteSound.play();
    }
    switch (key) {
        case 'u':
            dNoteSound.currentTime = 0;
            dNoteSound.play();
    }
    switch (key) {
        case 'i':
            dsNoteSound.currentTime = 0;
            dsNoteSound.play();
    }
    switch (key) {
        case 'o':
            eNoteSound.currentTime = 0;
            eNoteSound.play();
    }
    switch (key) {
        case 'p':
            gsNoteSound.currentTime = 0;
            gsNoteSound.play();
    }
    switch (key) {
        case '[':
            fNoteSound.currentTime = 0;
            fNoteSound.play();
    }
    switch (key) {
        case ']':
            fsNoteSound.currentTime = 0;
            fsNoteSound.play();
    }
    switch (key) {
        case 'g':
            gNoteSound.currentTime = 0;
            gNoteSound.play();
    }
}

function playSelectedChannel()
{
    if (selectChannelBox[0].checked) {
        playChannel0();}

       if (selectChannelBox[1].checked) {
        playChannel1();}

       if (selectChannelBox[2].checked) {
        playChannel2();}
}
function clearChannels(){
    channel0 = [];
    channel1 = [];
    channel2 = [];
}

function onKeyDown(ev: KeyboardEvent) {
    recordChannel(ev);
}

function clickToSelectChannel(ev: MouseEvent) {
    setStartingTime(ev);
}

function recordChannel(ev: KeyboardEvent){
    const key = ev.key;
    const time = ev.timeStamp - startingRecordTime;
    playSound(key);

    if (recButton0.checked) {

        channel0.push({key, time});
        
       } else if (recButton1.checked) {

        channel1.push({key, time});

       } else if (recButton2.checked) {

        channel2.push({key, time});
       } 
}



function playChannel0(){
    channel0.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}

function playChannel1(){
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}

function playChannel2(){
    channel2.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}



