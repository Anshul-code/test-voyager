function changeAddress(eventType, data) {
    console.log('data', data);
    console.log('eventType', eventType);
    console.log('data.lat', data.lat);
    console.log('data.lng', data.lng);
    console.log('data.place', data.place);
}

$('#places-autocomplete').on('change input click',  function(event,ui){
    $('input[name="address"]').val($('#places-autocomplete').val());
});

$(document).on('placeChanged','.places-autocomplete', function(){
    $('input[name="address"]').val($('#places-autocomplete').val());
});
