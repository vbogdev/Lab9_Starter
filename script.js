window.addEventListener('DOMContentLoaded', init);

function init(){
    const buttons = document.getElementsByTagName("button");
    
    const calculate = buttons[0];
    const log = buttons[1];
    log.addEventListener("click", logEvent);
    const error = buttons[2];
    error.addEventListener("click", errorEvent);
    const count = buttons[3];
    count.addEventListener("click", countEvent);
    const warn = buttons[4];
    warn.addEventListener("click", warnEvent);
    const assert = buttons[5];
    assert.addEventListener("click", assertEvent);
    const clear = buttons[6];
    clear.addEventListener("click", clearEvent);
    const dir = buttons[7];
    dir.addEventListener("click", dirEvent);
    const dirxmlO = buttons[8];
    dirxmlO.addEventListener("click", dirxmlEvent);
    const groupStart = buttons[9];
    groupStart.addEventListener("click", groupStartEvent);
    const groupEnd = buttons[10];
    groupEnd.addEventListener("click", groupEndEvent);
    const table = buttons[11];
    table.addEventListener("click", tableEvent);
    const startTimer = buttons[12];
    startTimer.addEventListener("click", startTimerEvent);
    const endTimer = buttons[13];
    endTimer.addEventListener("click", endTimerEvent);
    const trace = buttons[14];
    trace.addEventListener("click", traceEvent);
    const globalError = buttons[15];
    globalError.addEventListener("click", globalErrorEvent);

}

function calculateEvent(){

}

function logEvent(){
    console.log('log event test');
}

function errorEvent(){
    console.error('error has occured');
}

function countEvent(){
    console.count();
}

function warnEvent(){
    console.warn('warning has occurred');
}

function assertEvent(){
    let str = 'an assertion';
    console.assert(10 == (20 / 2), str);
}

function clearEvent(){
    console.clear();
}

function dirEvent(){
    console.dir(dir);
}

function dirxmlEvent(){
    console.dirxml(dirxmlO);
}

function groupStartEvent(){
    console.group();
}

function groupEndEvent(){
    console.groupEnd();
}

function tableEvent(){
    console.table(["1", "2", "3"]);
}

function startTimerEvent(){
    console.time();
}

function endTimerEvent(){
    console.timeEnd();
}

function traceEvent(){

}

function globalErrorEvent(){

}