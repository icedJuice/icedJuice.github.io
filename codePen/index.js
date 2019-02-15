
var vConsole = new VConsole();


var btnClear = document.getElementById('btn-clear');
var btnBack = document.getElementById('btn-back');
var btnGo = document.getElementById('btn-go');
var btnRun = document.getElementById('btn-run');

var codeIpt = document.getElementById('code-ipt');

var historyArray = [];

var historyMax = 100;

var historyIdx = -1;


btnClear.onclick = clear;

btnBack.onclick = back;

btnGo.onclick = go;

btnRun.onclick = run;






function clear () {
	
	historyIdx = historyArray.push(codeIpt.innerHTML);
	
	codeIpt.innerHTML = '';
	
}

function back () {
	
	if (historyIdx <= 0) return;
	
	codeIpt.innerHTML = historyArray[ -- historyIdx];
	
}

function go () {
	
	if ( historyIdx >= historyArray.length - 1) return;
	
	codeIpt.innerHTML = historyArray[ ++ historyIdx]
}

function run () {
	
	var sourceCode = codeIpt.innerHTML;
	
	try {
		
		eval(  sourceCode.replace(/\n|<[a-z\s\/]+>|&nbsp;/g, ';').replace(/;\s+|\s+;/g, ';').replace(/;+/g, ';').replace('ff', 'function') )

	} catch (err) {
		
		console.log(err)
	}
}



//  dingy 全局函数

window.log = (val) => console.log(val)