(function(){
if(document.getElementById('__ea')){document.getElementById('__ea').remove();return}

var _sig=[116,104,117,114,46,95,108,97,103],_st=function(){return _sig.map(c=>String.fromCharCode(c)).join('')}
var _hk=function(s){for(var h=0,i=0;i<s.length;i++)h=((h<<5)-h)+s.charCodeAt(i),h|=0;return h}
var _fprint=_hk(Function.prototype.toString.call(arguments.callee).replace(/\s/g,''))

var sesskey=window.M&&window.M.cfg&&window.M.cfg.sesskey||''
if(!sesskey){var ma=document.querySelector('meta[name="sesskey"]');if(ma)sesskey=ma.content}
if(!sesskey){var mb=document.body.innerHTML.match(/"sesskey":"([^"]+)"/);if(mb)sesskey=mb[1]}
if(!sesskey){var mc=document.querySelector('input[name="sesskey"]');if(mc)sesskey=mc.value}

var BASE='https://educacaoprofissional.educacao.sp.gov.br'

var ui=document.createElement('div')
ui.id='__ea'
document.body.appendChild(ui)
ui.innerHTML='<style>@import url(\'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500&display=swap\');*{box-sizing:border-box;margin:0;padding:0}#__ea{position:fixed;bottom:20px;right:20px;z-index:999999;width:360px;background:#0c0c0c;border:1px solid rgba(168,85,247,0.2);border-radius:14px;font-family:\'Geist Mono\',monospace;color:#e8e8e8;box-shadow:0 0 0 1px rgba(168,85,247,0.05),0 24px 60px rgba(0,0,0,0.9)}#__h{padding:12px 16px 12px;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:space-between}#__ht{display:flex;align-items:center;gap:8px}#__accent{width:6px;height:6px;border-radius:50%;background:#a855f7;flex-shrink:0}#__accent.run{animation:__blink 1s infinite}#__accent.err{background:#ff4466}@keyframes __blink{0%,100%{opacity:1}50%{opacity:.3}}#__title{font-size:11px;font-weight:500;letter-spacing:.15em;color:rgba(255,255,255,0.45);text-transform:uppercase}#__cl{background:none;border:none;color:rgba(255,255,255,0.2);cursor:pointer;font-size:16px;padding:2px 6px;font-family:inherit;line-height:1}#__cl:hover{color:#ff4466}#__b{padding:14px 16px 16px}#__log{height:180px;overflow-y:auto;font-size:9.5px;line-height:1.9;color:rgba(255,255,255,0.25)}#__log::-webkit-scrollbar{width:2px}#__log::-webkit-scrollbar-thumb{background:rgba(168,85,247,0.2)}#__log span{display:block}.ok{color:#a855f7}.er{color:#ff4466}.in{color:rgba(255,255,255,0.55)}.wn{color:#ffaa00}.dm{color:rgba(255,255,255,0.18)}#__pg{height:1px;background:rgba(255,255,255,0.05);margin:10px 0;position:relative;overflow:hidden}#__pb{position:absolute;top:0;left:0;height:100%;width:0%;background:#a855f7;transition:width .4s ease}#__stats{display:flex;gap:1px;margin-bottom:10px}#__stats .s{flex:1;padding:8px 0;text-align:center;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05)}#__stats .s:first-child{border-radius:5px 0 0 5px}#__stats .s:last-child{border-radius:0 5px 5px 0}#__stats .sv{font-size:15px;font-weight:400;color:#e8e8e8;line-height:1}#__stats .sl{font-size:7.5px;color:rgba(255,255,255,0.18);margin-top:3px;letter-spacing:.08em;text-transform:uppercase}#__ac{display:flex;gap:6px}.btn{flex:1;padding:8px 0;border:1px solid rgba(255,255,255,0.07);border-radius:5px;font-family:\'Geist Mono\',monospace;font-size:9px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:all .15s;background:none;color:rgba(255,255,255,0.35)}.gob{border-color:rgba(168,85,247,0.35);color:#a855f7}.gob:hover{background:rgba(168,85,247,0.06)}.gob:disabled{opacity:.2;cursor:not-allowed}.spb:hover{border-color:rgba(255,68,102,0.3);color:#ff4466}#__foot{padding:10px 16px;border-top:1px solid rgba(255,255,255,0.05)}#__by{font-size:8.5px;color:rgba(255,255,255,0.15);letter-spacing:.04em}</style><div id="__h"><div id="__ht"><div id="__accent"></div><div id="__title">EduAuto</div></div><button id="__cl">&times;</button></div><div id="__b"><div id="__log"><span class="dm">// aguardando</span></div><div id="__pg"><div id="__pb"></div></div><div id="__stats"><div class="s"><div class="sv" id="__sc">--</div><div class="sl">Cursos</div></div><div class="s"><div class="sv" id="__sa">--</div><div class="sl">Ativ.</div></div><div class="s"><div class="sv" id="__so">0</div><div class="sl">OK</div></div></div><div id="__ac"><button class="btn gob" id="__go">Iniciar</button><button class="btn spb" id="__sp">Parar</button></div></div><div id="__foot"><div id="__by">made by thur. _lag and nejizzuki</div></div>'

document.getElementById('__cl').onclick=function(){ui.remove()}

/* o resto do JS continua igual: setInterval para checar créditos, funções log, pegarCursos, processar, rodar etc */

})();
