let submitButton=document.getElementById("submit_button");
let story=document.getElementById("story_result");
let title=document.getElementById("main_title");
let adlib=document.querySelector("form");
submitButton.addEventListener("click",(event) =>{
    event.preventDefault();
    const inputtitle=document.getElementById("title_input");
    const inputNoun=document.getElementById("noun");
    const inputAdjective=document.getElementById("adjective");
    const inputVerb=document.getElementById("verb");
    const userTitle = inputtitle.value;
    const userNoun= inputNoun.value;
    const userAdjective=inputAdjective.value;
    const userVerb=inputVerb.value;
    inputtitle.value="";
    inputNoun.value="";
    inputAdjective.value="";
    inputVerb.value="";
    if (userAdjective==""||userNoun==""||userTitle==""||userVerb=="") {
        alert("Make sure to fill all forms")
    }
    else{
    story.innerHTML="“Last night I ate a "+userNoun+", and today I just had to "+userVerb+". What a "+userAdjective+ " day!”"
    title.innerHTML=userTitle;
    adlib.style.display="none";
    }
   
})
