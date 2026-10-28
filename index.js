


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

require('datejs');

function combineUsers(...args) {
  const combineObject = {
    users: []
  };

  for (const arr of args) {
    combined0bject.users = [...combinedObject.users, ...arr];
  }

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combined0bject;
}

module.exports = combinedUsers;