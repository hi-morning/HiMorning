let firebase = null;

let setFirebase = (value) => {
  firebase = value;
}

let getFirebase = () => {
  return firebase;
}

export default {
  setFirebase,
  getFirebase
}
