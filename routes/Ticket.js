exports.render = function (phoneNumber, body) {
  body = body.split(';');

  if(body.length == 3){
    location = body[0].trim();
    name = body[1].trim();
    allergiesTmp = body[2].split(',');
    allergies = [];
    for(x in allergiesTmp){
        allergies.push(x.trim());
    }

    return {'location': location, 'name': name, 'allergies': allergies};
  }
  else{
      return {};
//    return {'location': 'error', 'name': 'error', 'allergies': 'error'};
  }
};
