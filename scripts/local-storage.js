$(function(){
    var date= $('#arrival')[0];
    var dep= $('#departure')[0];
    var room= $('#rooms')[0];
    var person= $('#person')[0];
    localStorage.clear();
    $('#sub').click(function(){
        localStorage.setItem("date",date.value);		
        localStorage.setItem("dep",dep.value);		
        localStorage.setItem("room",room.value);		
        localStorage.setItem("person",person.value);
    })
})