console.log('quest.js loaded')

quest=function(){
    // ini
    quest.surveyjsDiv=document.getElementById('surveyjsDiv')
    quest.qualticsDiv=document.getElementById('qualticsDiv')
    quest.voxcoDiv=document.getElementById('voxcoDiv')
    quest.monkeyDiv=document.getElementById('monkeyDiv')

    quest.surveyjsBt=document.getElementById('surveyjsBt')
    quest.qualticsBt=document.getElementById('qualticsBt')
    quest.voxcoBt=document.getElementById('voxcoBt')
    quest.monkeyBt=document.getElementById('monkeyBt')

    if(quest.surveyjsBt){quest.surveyjsBt.onclick=quest.surveyjs}
    if(quest.qualticsBt){quest.qualticsBt.onclick=quest.qualtics}
    if(quest.voxcoBt){quest.voxcoBt.onclick=quest.voxco}
    if(quest.monkeyBt){quest.monkeyBt.onclick=quest.monkey}
    //debugger
}

quest.surveyjs=function(){
    if(typeof(Survey)=='undefined'){ // load dependency
        console.log('loading surveyjs')
        $.getScript('https://surveyjs.azureedge.net/1.0.46/survey.jquery.js').then(quest.surveyjs)
        //$('head').append( $('<script src="https://surveyjs.azureedge.net/1.0.46/survey.jquery.js"></script>'))
        //$('head').append($('<script src="https://unpkg.com/jquery"></script><script src="https://surveyjs.azureedge.net/1.0.46/survey.jquery.js"></script><link href="https://surveyjs.azureedge.net/1.0.46/survey.css" type="text/css" rel="stylesheet"/>'))
    }else{
        var h='<h4>Testing <a href="https://surveyjs.io" target="_blank">surveyJS</a></h4>'
        h +='<p>1. <span id="showSurveyjsTemplate" style="color:blue;cursor:hand">Show</span> JSON template</p>'
        h +='<pre id="showSurveyjsTemplatePre" hidden=true></pre>'
        h +='<p>2. <span id="showSurveyjsAssembly" style="color:orange;cursor:hand">Hide</span> Form assembly</p>'
        h +='<div id="surveyjsAssemblyDiv">...</div>'
        quest.surveyjsDiv.innerHTML=h
        showSurveyjsTemplate.onclick=quest.surveyjs.showTemplate
        showSurveyjsAssembly.onclick=quest.surveyjs.showAssembly
        $.getJSON('DCEGbase.json').then(function(x){
            showSurveyjsTemplatePre.textContent=JSON.stringify(x,null,3)
            // assemble form
            quest.surveyjs.survey=new Survey.Model(x,surveyjsAssemblyDiv)
            //quest.surveyjs.survey.onComplete.fire=function(a,b){
            //    x
            //    debugger
            //}
            //quest.surveyjs.survey.onComplete.add=function(x){
            //    debugger
            //}
            
        })
        
    }
}

quest.surveyjs.showTemplate=function(){
    if(this.textContent=='Show'){
        this.textContent='Hide'
        this.style.color='orange'
        showSurveyjsTemplatePre.hidden=false
    }else{
        this.textContent='Show'
        this.style.color='blue'
        showSurveyjsTemplatePre.hidden=true
    }
}
quest.surveyjs.showAssembly=function(){
    if(surveyjsAssemblyDiv.hidden){
        surveyjsAssemblyDiv.hidden=false
        this.textContent="Hide"
        this.style.color="orange"
    }else{
        surveyjsAssemblyDiv.hidden=true
        this.textContent="Show"
        this.style.color="blue"
    }
}



quest.qualtics=()=>{
    $.getJSON('Qualtrics_Survey.json').then(function(x){
        var h = '<h4>Testing <a href="https://www.qualtrics.com/research-core/survey-software/" target="_blank">Qualtrics</a></h4>'
        h += '<p> <span id="showQualtricsPre" style="color:blue;cursor:hand">Show</span> JSON form, embeding <a href="https://www.qualtrics.com/community/discussion/483/qualtrics-client-side-javascript-api-or-embedded-data" target="_blank">not supported</a></p>'
        h += '<pre id="qualtricsPre" hidden=true></pre>'
        h += '<p> <span id="showQualtricsDataPre" style="color:blue;cursor:hand">Show</span> JSON data</p>'
        h += '<pre id="qualtricsDataPre" hidden=true></pre>'
        quest.qualticsDiv.innerHTML=h
        qualtricsPre.textContent=JSON.stringify(x,null,3)
        showQualtricsPre.onclick=quest.qualtics.showPre
        $.getJSON('03012018 DEMO.JSON').then(function(x){
            qualtricsDataPre.textContent=JSON.stringify(x,null,3)
            showQualtricsDataPre.onclick=quest.qualtics.showQualtricsDataPre
        })
    })

}

quest.qualtics.showPre=function(){
    if(qualtricsPre.hidden){
        qualtricsPre.hidden=false
        showQualtricsPre.textContent="Hide"
        showQualtricsPre.style.color="orange"
    }else{
        qualtricsPre.hidden=true
        showQualtricsPre.textContent="Show"
        showQualtricsPre.style.color="blue"
    }
    //debugger
}

quest.qualtics.showQualtricsDataPre=function(){
    if(qualtricsDataPre.hidden){
        qualtricsDataPre.hidden=false
        showQualtricsDataPre.textContent='Hide'
        showQualtricsDataPre.style.color="orange"
    }else{
        qualtricsDataPre.hidden=true
        showQualtricsDataPre.textContent='Show'
        showQualtricsDataPre.style.color="blue"
    }
    //debugger
}

quest.voxco=()=>{
    $.getJSON('Voxco_SurveyResponses.json').then(function(x){
        var h = '<h4>Testing <a href="https://na2.voxco.com/api/help" target="_blank">Voxco</a></h4>'
        h += '<p>No JSON description of form structure :-( </p>'
        h += '<p><span id="showVoxcoPre" style="color:blue;cursor:hand">Show</span> example of respose data.</p>'
        h += '<pre id="voxcoPre" hidden=true></pre>'
        quest.voxcoDiv.innerHTML=h
        showVoxcoPre.onclick=quest.voxco.showVoxcoPre
        voxcoPre.textContent=JSON.stringify(x,null,3)
        //debugger
    })
    //debugger
}
quest.voxco.showVoxcoPre=function(){
    if(voxcoPre.hidden){
        voxcoPre.hidden=false
        showVoxcoPre.textContent="Hide"
        showVoxcoPre.style.color="orange"
    }else{
        voxcoPre.hidden=true
        showVoxcoPre.textContent="Show"
        showVoxcoPre.style.color="blue"
    }
}

//https://www.surveymonkey.com/r/RMS2NJB

quest.monkey=()=>{
    showMonkeyDiv.hidden=!showMonkeyDiv.hidden
    //debugger
}


window.onload=quest