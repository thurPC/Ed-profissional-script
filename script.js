(function(){

if(document.getElementById('__ea')){document.getElementById('__ea').remove();return}



var _sig=[109,97,100,101,32,98,121,32,116,104,117,114,46,95,108,97,103,32,97,110,100,32,110,101,106,105,122,122,117,107,105],_st=function(){return _sig.map(function(c){return String.fromCharCode(c)}).join('')}

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

ui.innerHTML='<style>@import url(\'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500&display=swap\');*{box-sizing:border-box;margin:0;padding:0}#__ea{position:fixed;bottom:20px;right:20px;z-index:999999;width:290px;background:#0c0c0c;border:1px solid rgba(168,85,247,0.2);border-radius:10px;font-family:\'Geist Mono\',monospace;color:#e8e8e8;box-shadow:0 0 0 1px rgba(168,85,247,0.05),0 24px 60px rgba(0,0,0,0.9)}#__h{padding:11px 14px 10px;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:space-between}#__ht{display:flex;align-items:center;gap:8px}#__accent{width:6px;height:6px;border-radius:50%;background:#a855f7;flex-shrink:0}#__accent.run{animation:__blink 1s infinite}#__accent.err{background:#ff4466}@keyframes __blink{0%,100%{opacity:1}50%{opacity:.3}}#__title{font-size:10px;font-weight:500;letter-spacing:.15em;color:rgba(255,255,255,0.45);text-transform:uppercase}#__cl{background:none;border:none;color:rgba(255,255,255,0.2);cursor:pointer;font-size:16px;padding:2px 6px;font-family:inherit;line-height:1}#__cl:hover{color:#ff4466}#__b{padding:12px 14px 14px}#__log{height:150px;overflow-y:auto;font-size:9px;line-height:1.9;color:rgba(255,255,255,0.25)}#__log::-webkit-scrollbar{width:2px}#__log::-webkit-scrollbar-thumb{background:rgba(168,85,247,0.2)}#__log span{display:block}.ok{color:#a855f7}.er{color:#ff4466}.in{color:rgba(255,255,255,0.55)}.wn{color:#ffaa00}.dm{color:rgba(255,255,255,0.18)}#__pg{height:1px;background:rgba(255,255,255,0.05);margin:10px 0;position:relative;overflow:hidden}#__pb{position:absolute;top:0;left:0;height:100%;width:0%;background:#a855f7;transition:width .4s ease}#__stats{display:flex;gap:1px;margin-bottom:10px}#__stats .s{flex:1;padding:7px 0;text-align:center;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05)}#__stats .s:first-child{border-radius:4px 0 0 4px}#__stats .s:last-child{border-radius:0 4px 4px 0}#__stats .sv{font-size:15px;font-weight:400;color:#e8e8e8;line-height:1}#__stats .sl{font-size:7.5px;color:rgba(255,255,255,0.18);margin-top:3px;letter-spacing:.08em;text-transform:uppercase}#__ac{display:flex;gap:6px}.btn{flex:1;padding:8px 0;border:1px solid rgba(255,255,255,0.07);border-radius:4px;font-family:\'Geist Mono\',monospace;font-size:9px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:all .15s;background:none;color:rgba(255,255,255,0.35)}.gob{border-color:rgba(168,85,247,0.35);color:#a855f7}.gob:hover{background:rgba(168,85,247,0.06)}.gob:disabled{opacity:.2;cursor:not-allowed}.spb:hover{border-color:rgba(255,68,102,0.3);color:#ff4466}#__foot{padding:8px 14px;border-top:1px solid rgba(255,255,255,0.05)}#__by{font-size:8px;color:rgba(255,255,255,0.15);letter-spacing:.04em}</style><div id="__h"><div id="__ht"><div id="__accent"></div><div id="__title">EduAuto</div></div><button id="__cl">&times;</button></div><div id="__b"><div id="__log"><span class="dm">// aguardando</span></div><div id="__pg"><div id="__pb"></div></div><div id="__stats"><div class="s"><div class="sv" id="__sc">--</div><div class="sl">Cursos</div></div><div class="s"><div class="sv" id="__sa">--</div><div class="sl">Ativ.</div></div><div class="s"><div class="sv" id="__so">0</div><div class="sl">OK</div></div></div><div id="__ac"><button class="btn gob" id="__go">Iniciar</button><button class="btn spb" id="__sp">Parar</button></div></div><div id="__foot"><div id="__by">made by thur._lag and nejizzuki</div></div>'



document.getElementById('__cl').onclick=function(){ui.remove()}



var _chk=setInterval(function(){

  var el=document.getElementById('__by')

  if(!el||el.textContent.indexOf(_st())<0){

    clearInterval(_chk)

    var box=document.getElementById('__ea');if(box)box.remove()

    parado=true

    console.warn('%c[EduAuto] mexeu no credito ne kk parou','color:#ff4466;font-weight:bold')

  }

},3000)



var parado=false,feitos=0,jatinha=0,erros=0,totalAtiv=0



function log(msg,cls){

  var d=document.createElement('div')

  var t=document.createElement('span');t.className='dm';t.textContent=new Date().toLocaleTimeString('pt-BR')+' '

  var m=document.createElement('span');m.className=cls||'';m.innerHTML=msg

  d.appendChild(t);d.appendChild(m)

  var lg=document.getElementById('__log');lg.appendChild(d);lg.scrollTop=lg.scrollHeight

}



function setTitle(msg,cls){

  var a=document.getElementById('__accent')

  if(a)a.className=cls||''

}



function setStat(id,v){var e=document.getElementById(id);if(e)e.textContent=v}

function setProgress(p){document.getElementById('__pb').style.width=Math.min(100,p)+'%'}

function espera(ms){return new Promise(function(r){setTimeout(r,ms)})}

function parseHTML(html){return new DOMParser().parseFromString(html,'text/html')}



function chamarApi(metodo,args){

  var url=BASE+'/lib/ajax/service.php?sesskey='+sesskey+'&info='+metodo

  var el=document.getElementById('__by')

  if(!el||el.textContent.indexOf(_st())<0)return Promise.reject(new Error('sig'))

  return fetch(url,{

    method:'POST',

    headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest','X-Client-Sig':btoa(_st()+':'+_fprint)},

    body:JSON.stringify([{index:0,methodname:metodo,args:args}]),

    credentials:'include'

  }).then(function(r){

    if(!r.ok)throw new Error('HTTP '+r.status)

    return r.json()

  }).then(function(d){

    if(d[0]&&d[0].error)throw new Error((d[0].exception&&d[0].exception.message)||'deu ruim na api')

    return d[0].data

  })

}



function pegarCursos(){

  var achou=[].slice.call(document.querySelectorAll('[data-courseid]')).map(function(e){return parseInt(e.dataset.courseid)}).filter(Boolean)

  if(achou.length)return Promise.resolve([...new Set(achou)])



  return fetch(BASE+'/local/dimensions/view-plan.php',{credentials:'include'})

    .then(function(r){return r.text()})

    .then(function(html){

      var doc=parseHTML(html)

      var ids=[].slice.call(doc.querySelectorAll('[data-courseid]')).map(function(e){return parseInt(e.dataset.courseid)}).filter(Boolean)

      if(ids.length)return[...new Set(ids)]

      var mm=html.match(/\/course\/view\.php\?id=(\d+)/g)||[]

      return[...new Set(mm.map(function(l){var x=l.match(/(\d+)/);return x?parseInt(x[1]):0}).filter(Boolean))]

    }).catch(function(){return[]})

}



function pegarProgresso(ids){

  return chamarApi('local_dimensions_get_course_progress',{courseids:ids})

    .then(function(data){return data||[]})

    .catch(function(e){

      log('eita local_dimensions bugou ('+e.message+'), indo no fallback','wn')

      return ids.map(function(id){return{courseid:id,sections:[],locked:false}})

    })

}



function pegarAtividades(url){

  return fetch(url,{credentials:'include'})

    .then(function(r){if(!r.ok){log('secao deu '+r.status,'wn');return[]}return r.text()})

    .then(function(html){

      if(!html)return[]

      var doc=parseHTML(html)

      var lista=[]

      ;[].slice.call(doc.querySelectorAll('li.activity[data-id]')).forEach(function(li){

        var cmid=parseInt(li.getAttribute('data-id'))

        if(!cmid)return

        var cl=li.className.split(' ')

        var tc=cl.find(function(c){return c.indexOf('modtype_')===0})

        var tipo=tc?tc.replace('modtype_',''):'unknown'

        var estado=-1

        var ce=li.querySelector('[data-completionstate]')

        if(ce)estado=parseInt(ce.getAttribute('data-completionstate'))

        if(estado===-1&&(li.classList.contains('complete')||li.querySelector('.completion-complete')))estado=1

        lista.push({cmid:cmid,modname:tipo,cs:estado})

      })

      if(!lista.length){

        ;[].slice.call(doc.querySelectorAll('[id^="module-"]')).forEach(function(li){

          var cmid=parseInt(li.id.replace('module-',''))

          if(!cmid)return

          var cl=li.className.split(' ')

          var tc=cl.find(function(c){return c.indexOf('modtype_')===0})

          lista.push({cmid:cmid,modname:tc?tc.replace('modtype_',''):'unknown',cs:-1})

        })

      }

      return lista

    }).catch(function(e){log('erro na secao: '+e.message,'wn');return[]})

}



function marcarFeito(cmid){

  return chamarApi('core_completion_update_activity_completion_status_manually',{cmid:cmid,completed:true})

}



function completarScorm(cmid){

  return fetch(BASE+'/mod/scorm/view.php?id='+cmid,{credentials:'include'})

    .then(function(r){if(!r.ok)throw new Error('scorm deu '+r.status);return r.text()})

    .then(function(html){

      var sm=html.match(/"scoid"\s*:\s*(\d+)/)

      var am=html.match(/"attempt"\s*:\s*(\d+)/)

      var scoid=sm?sm[1]:null

      var tentativa=am?am[1]:'1'

      if(!scoid)return marcarFeito(cmid)



      var params=new URLSearchParams({id:cmid,scoid:scoid,attempt:tentativa,sesskey:sesskey})

      if(html.indexOf('cmi.completion_status')>=0){

        params.append('cmi.completion_status','completed')

        params.append('cmi.success_status','passed')

        params.append('cmi.score.raw','100')

        params.append('cmi.score.max','100')

        params.append('cmi.score.min','0')

        params.append('cmi.score.scaled','1')

      }else{

        params.append('cmi.core.lesson_status','passed')

        params.append('cmi.core.score.raw','100')

        params.append('cmi.core.score.max','100')

        params.append('cmi.core.score.min','0')

        params.append('cmi.core.session_time','00:30:00')

      }

      return fetch(BASE+'/mod/scorm/datamodel.php',{

        method:'POST',credentials:'include',

        headers:{'Content-Type':'application/x-www-form-urlencoded'},body:params

      }).then(function(r){if(!r.ok)throw new Error('scorm datamodel deu '+r.status)})

    })

}



function extrairH5P(html){

  var idx=html.indexOf('H5PIntegration')

  if(idx===-1)return null

  var inicio=html.indexOf('{',idx)

  if(inicio===-1)return null

  var prof=0,dentroStr=false,escapou=false

  for(var i=inicio;i<html.length;i++){

    var c=html[i]

    if(escapou){escapou=false;continue}

    if(c==='\\'&&dentroStr){escapou=true;continue}

    if(c==='"'&&!escapou)dentroStr=!dentroStr

    if(!dentroStr){

      if(c==='{')prof++

      else if(c==='}'){prof--;if(prof===0)return html.slice(inicio,i+1)}

    }

  }

  return null

}



function completarH5P(html,cmid){

  var raw=extrairH5P(html)

  if(!raw)throw new Error('nao achei o H5PIntegration')



  var dados

  try{dados=JSON.parse(raw)}catch(e){throw new Error('json do h5p ta zuado')}



  var conteudos=dados.contents||{}

  var chaves=Object.keys(conteudos)

  if(!chaves.length)throw new Error('nenhum conteudo h5p')



  var userId=(dados.user&&dados.user.id)||''

  var userName=(dados.user&&dados.user.name)||''



  return Promise.all(chaves.map(function(key){

    var ct=conteudos[key]

    var hid=parseInt(key.replace('cid-',''))

    var urlH5p=ct.url

    if(!urlH5p)return



    var questao=null

    try{if(ct.jsonContent){questao=typeof ct.jsonContent==='string'?JSON.parse(ct.jsonContent):ct.jsonContent}}catch(e){}



    var idxCerta='',txtCerta='',opcoes=[]

    if(questao&&questao.answers&&Array.isArray(questao.answers)){

      questao.answers.forEach(function(a,i){

        var txt=a.text.replace(/<[^>]+>/g,'').replace(/\n/g,'').trim()

        opcoes.push({id:String(i),description:{'en-US':txt}})

        if(a.correct){idxCerta=String(i);txtCerta=txt}

      })

    }



    if(txtCerta)log('  h5p resposta certa: "'+txtCerta+'"','dm')



    var stmt={

      actor:{name:userName,objectType:'Agent',account:{name:String(userId),homePage:BASE}},

      verb:{id:'http://adlnet.gov/expapi/verbs/answered',display:{'en-US':'answered'}},

      object:{

        id:urlH5p,objectType:'Activity',

        definition:{

          extensions:{'http://h5p.org/x-api/h5p-local-content-id':hid},

          name:{'en-US':ct.metadata&&ct.metadata.title||''},

          description:{'en-US':questao&&questao.question?questao.question.replace(/<[^>]+>/g,'').trim():''},

          type:'http://adlnet.gov/expapi/activities/cmi.interaction',

          interactionType:'choice',

          correctResponsesPattern:[idxCerta],

          choices:opcoes

        }

      },

      context:{contextActivities:{category:[{id:'http://h5p.org/libraries/'+ct.library.replace(' ','-'),objectType:'Activity'}]}},

      result:{score:{min:0,max:1,raw:1,scaled:1},completion:true,success:true,duration:'PT10S',response:idxCerta}

    }



    var body=[{index:0,methodname:'core_xapi_statement_post',args:{

      component:'mod_h5pactivity',

      requestjson:JSON.stringify([stmt])

    }}]



    return fetch(BASE+'/lib/ajax/service.php?sesskey='+sesskey+'&info=core_xapi_statement_post',{

      method:'POST',credentials:'include',

      headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'},

      body:JSON.stringify(body)

    }).then(function(r){if(!r.ok)throw new Error('xapi deu '+r.status);return r.json()})

    .then(function(d){if(d&&d[0]&&d[0].error)throw new Error('xapi bugou: '+JSON.stringify(d[0].exception))})

  }))

}



function visitarUrl(cmid){

  return fetch(BASE+'/mod/url/view.php?id='+cmid,{

    credentials:'include',

    redirect:'manual',

    mode:'no-cors'

  }).catch(function(){})

}



var completaPorVisita=['url','page','resource','imscp','folder','book','glossary','lesson']



function processar(ativ){

  var cmid=ativ.cmid,tipo=ativ.modname,estado=ativ.cs



  if(['label','unknown'].indexOf(tipo)>=0)return Promise.resolve('pula')



  if(['quiz','assign','workshop','forum'].indexOf(tipo)>=0){

    log('  skippei '+tipo.toUpperCase()+' #'+cmid+' (nao da pra automatizar)','wn')

    return Promise.resolve('pula')

  }



  if(estado===1){

    log('  '+tipo.toUpperCase()+' #'+cmid+' ja tava feito','dm')

    return Promise.resolve('jafeito')

  }



  log('> fazendo '+tipo.toUpperCase()+' #'+cmid,'in')



  var p



  if(tipo==='scorm'){

    p=completarScorm(cmid)

  }else if(tipo==='h5pactivity'){

    p=fetch(BASE+'/mod/h5pactivity/view.php?id='+cmid,{credentials:'include',headers:{Accept:'text/html'}})

      .then(function(r){if(!r.ok)throw new Error('view deu '+r.status);return r.text()})

      .then(function(paginaHtml){

        if(paginaHtml.indexOf('H5PIntegration')>=0)return completarH5P(paginaHtml,cmid)



        var doc=parseHTML(paginaHtml)

        var iframe=doc.querySelector('iframe.h5p-iframe,iframe[src*="h5p/embed"],iframe[src*="embed.php"]')

        var srcEmbed=iframe?iframe.getAttribute('src'):null



        if(!srcEmbed){

          var ifrPorId=doc.querySelector('iframe[data-content-id]')

          if(ifrPorId){

            var hid2=ifrPorId.getAttribute('data-content-id')

            srcEmbed=BASE+'/h5p/embed.php?url='+encodeURIComponent(BASE+'/pluginfile.php/'+hid2+'/mod_h5pactivity/package/0/content.json')+'&preventredirect=0&component=mod_h5pactivity'

          }

        }



        if(!srcEmbed||srcEmbed==='about:blank'){

          return chamarApi('core_h5p_get_trusted_h5p_file',{url:BASE+'/mod/h5pactivity/view.php?id='+cmid,frame:0,export:0,embed:0,copyright:0})

            .then(function(d){

              var arquivos=(d&&d[0]&&d[0].data&&d[0].data.files)||[]

              var arq=arquivos.find(function(x){return x.fileurl&&x.fileurl.indexOf('embed')>=0})||arquivos[0]

              if(!arq||!arq.fileurl)throw new Error('nao achei o H5PIntegration')

              return fetch(arq.fileurl,{credentials:'include'}).then(function(r){return r.text()}).then(function(h){return completarH5P(h,cmid)})

            })

        }



        return fetch(srcEmbed,{credentials:'include'}).then(function(r){return r.text()}).then(function(h){return completarH5P(h,cmid)})

      })

  }else if(tipo==='url'){

    p=visitarUrl(cmid)

  }else if(tipo==='subsection'){

    p=marcarFeito(cmid).catch(function(){})

  }else if(completaPorVisita.indexOf(tipo)>=0){

    p=fetch(BASE+'/mod/'+tipo+'/view.php?id='+cmid,{credentials:'include',headers:{Accept:'text/html'}})

      .then(function(r){if(!r.ok)throw new Error('view deu '+r.status)})

  }else{

    p=fetch(BASE+'/mod/'+tipo+'/view.php?id='+cmid,{credentials:'include',headers:{Accept:'text/html'}})

      .then(function(r){if(!r.ok)throw new Error('view deu '+r.status)})

      .then(function(){

        return marcarFeito(cmid).catch(function(e){

          if(e.message&&e.message.indexOf('não permite')>=0)return

          throw e

        })

      })

  }



  return p.then(function(){log('  feito','ok');return 'ok'}).catch(function(e){log('  deu ruim: '+e.message,'er');return 'err'})

}



async function rodar(){

  var credito=document.getElementById('__by')

  if(!credito||credito.textContent.indexOf(_st())<0){

    log('mexeu no credito ne, parou','er');setTitle('','err')

    var el=document.getElementById('__ea');if(el)el.remove();return

  }

  if(!sesskey){log('tem certeza que abriu nas suas lições mn?','er');setTitle('Sem sesskey','err');return}

  parado=false;feitos=0;jainha=0;erros=0;totalAtiv=0

  document.getElementById('__go').disabled=true

  setStat('__sc','-');setStat('__sa','-');setStat('__so','0')

  document.getElementById('__log').innerHTML=''

  setProgress(0);setTitle('Buscando...','run')

  log('procurando cursos...','in')



  try{

    var cursoIds=await pegarCursos()

    if(!cursoIds.length){log('nenhum curso encontrado, entre em "Minhas disciplinas"','er');setTitle('Sem cursos','err');document.getElementById('__go').disabled=false;return}

    log('achei '+cursoIds.length+' cursos: ['+cursoIds.join(',')+']','ok')

    setStat('__sc',cursoIds.length)



    var dadosCursos=await pegarProgresso(cursoIds)

    var tudo=[]



    for(var ci=0;ci<dadosCursos.length;ci++){

      if(parado)break

      var c=dadosCursos[ci]

      if(c.locked){log('curso '+c.courseid+' ta trancado ate '+c.formatted_start_date,'wn');continue}

      var secoes=(c.sections||[]).filter(function(s){return s.has_activities&&s.url})

      log('curso '+c.courseid+': '+secoes.length+' secoes','dm')



      for(var si=0;si<secoes.length;si++){

        if(parado)break

        log(' lendo: '+secoes[si].name.substring(0,40),'dm')

        var ativs=await pegarAtividades(secoes[si].url)

        ativs.forEach(function(a){tudo.push(a)})

        await espera(200)

      }



      if(!secoes.length){

        var urlCurso=BASE+'/course/view.php?id='+c.courseid

        log('curso '+c.courseid+': tentando direto pelo course/view','dm')

        var ativs2=await pegarAtividades(urlCurso)

        ativs2.forEach(function(a){tudo.push(a)})

      }

    }



    totalAtiv=tudo.length

    setStat('__sa',totalAtiv)

    if(!totalAtiv){log('nao achei nenhuma atividade','wn');setTitle('Nada','err');document.getElementById('__go').disabled=false;return}

    log(totalAtiv+' atividades no total','in')

    setTitle('Processando...','run')



    for(var ai=0;ai<tudo.length;ai++){

      if(parado){log('parei','wn');break}

      var res=await processar(tudo[ai])

      if(res==='ok'){feitos++;setStat('__so',feitos+jainha)}

      else if(res==='jafeito'){jainha++;setStat('__so',feitos+jainha)}

      else if(res==='err')erros++

      setProgress((feitos+jainha+erros)/totalAtiv*100)

      await espera(700)

    }



    log((erros?'opa ':'')+''+feitos+' novos, '+jainha+' ja tavam feitos'+(erros?', '+erros+' deram erro':''),erros?'wn':'ok')

    setTitle(feitos+jainha===totalAtiv?'Pronto!':feitos+' novos','ok')

  }catch(e){log('ERRO: '+e.message,'er');setTitle('Erro','err')}



  document.getElementById('__go').disabled=false

}



document.getElementById('__go').onclick=rodar

document.getElementById('__sp').onclick=function(){parado=true}



Object.defineProperty(ui,'innerHTML',{set:function(v){

  if(v.indexOf(_st())<0)v=v.replace('</div></div>','<div id="__by" style="font-size:8px;color:rgba(255,255,255,0.15);letter-spacing:.04em;padding:8px 14px">made by '+_st()+'</div></div></div>')

  HTMLElement.prototype.__lookupSetter__('innerHTML').call(ui,v)

}})



console.log('%cEduAuto by '+_st()+' -- fingerprint: '+_fprint,'color:#a855f7;font-size:11px;font-weight:500')

})()
