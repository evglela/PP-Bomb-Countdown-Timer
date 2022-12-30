//add buttons events
function addMeat() {
    countDownDate.setHours(countDownDate.getHours()+3)
    update();
  }

  function addDairy() {
    countDownDate.setMinutes(countDownDate.getMinutes()+15)
    update();
  }

  function addVeggies() {
    countDownDate.setHours(countDownDate.getHours()+2)
    update();
  }

  function addFruits() {
    countDownDate.setHours(countDownDate.getHours()+1)
    update();
  }

  function addSoup() {
    countDownDate.setMinutes(countDownDate.getMinutes()+35)
    update();
  }

  function addEgg() {
    countDownDate.setMinutes(countDownDate.getMinutes()+45)
    update();
  }

  function addGrains() {
    countDownDate.setHours(countDownDate.getHours()+1)
    update();
  }


  function addMarmalade(){
document.getElementById('paper-img').classList.add('add-spin');
setTimeout(() => {
  document.getElementById('paper-img').classList.remove('add-spin');
 }, 6000);
  }


  //substract time

  function subMeat() {
  countDownDate.setHours(countDownDate.getHours()-3)
    update();
  }

  function subDairy() {
    countDownDate.setMinutes(countDownDate.getMinutes()-15)
    update();
  }

  function subVeggies() {
    countDownDate.setHours(countDownDate.getHours()-2)
    update();
  }

  function subFruits() {
    countDownDate.setHours(countDownDate.getHours()-1)
    update();
  }

  function subSoup() {
    countDownDate.setMinutes(countDownDate.getMinutes()-35)
    update();
  }

  function subEgg() {
    countDownDate.setMinutes(countDownDate.getMinutes()-45)
    update();
  }

  function subGrains() {
    countDownDate.setHours(countDownDate.getHours()-1)
    update();
  }

  function subMarmalade() {
    countDownDate.setHours(countDownDate.getHours()-2)
    update();
  }