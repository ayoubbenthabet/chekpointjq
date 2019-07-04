function makeBold() {

    document.getElementById("myText").style.fontWeight="Bold";
    }

function makeUnderline(){
    
    document.getElementById("myText").style.textDecoration="underline";

    }
function makeitalic(){
    document.getElementById("myText").style.fontStyle="italic";
}
function aman() {
    document.getElementById("myText").style.fontSize=document.getElementById('ks').value
}
function family() {
    document.getElementById("myText").style.fontFamily=document.getElementById('rs').value;
}
$(document).ready(function(){
$("#box1").hover(function(){
    $("#a").show()},
    function(){
    $("#a").hide();} 
    );
    $("#box2").hover(function(){
        $("#b").show()},
        function(){
        $("#b").hide();} 
        );$("#box3").hover(function(){
            $("#c").show()},
            function(){
            $("#c").hide();} 
            );$("#box4").hover(function(){
                $("#d").show()},
                function(){
                $("#d").hide();} 
                );$("#box5").hover(function(){
                    $("#e").show()},
                    function(){
                    $("#e").hide();} 
                    );$("#box6").hover(function(){
                        $("#f").show()},
                        function(){
                        $("#f").hide();} 
                        );$("#box7").hover(function(){
                            $("#g").show()},
                            function(){
                            $("#g").hide();} 
                            );$("#box8").hover(function(){
                                $("#h").show()},
                                function(){
                                $("#h").hide();} 
                                );$("#box9").hover(function(){
                                    $("#i").show()},
                                    function(){
                                    $("#i").hide();} 
                                    );




});