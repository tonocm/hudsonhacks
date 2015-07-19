exports.render = function (phoneNumber, body) {
  body = body.split(';');

  if(body.length == 3){
    location = body[0].trim();
    name = body[1].trim();
    allergies = body[2].trim().split(',');
    return {'location': location, 'name': name, 'allergies': allergies};
  }
  else{
    return {'location': 'error', 'name': 'error', 'allergies': 'error'};
  }
};
