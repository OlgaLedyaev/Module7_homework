class ElectroDevice {
  constructor(name, pover, model) {
    (this.name = name),
      (this.pover = pover),
      (this.model = model),
      (this.enabled = true);
  }

  Switch() {
    return this.enabled
      ? console.log(`${this.name} is on.`)
      : console.log(`${this.name} is off.`);
  }

  getPover() {
    return this.enabled ? this.pover : 0;
  }

  powerConsumption(pover) {
    console.log(`${this.name} consumes ${this.pover} volt.`);
  }
}

class Mixer extends ElectroDevice {
  constructor(name, pover, model, weight) {
    super(name, pover, model);
    this.weight = weight;
  }

  Dimensions(weight) {
    this.enabled = false;
    return weight > 25
      ? console.log(`${this.name} is professional mixer`)
      : console.log(`${this.name} is a home mixer`);
  }
}

class Phone extends ElectroDevice {
  constructor(name, pover, model) {
    super(name, pover, model);
    this.touchScreen = true;
  }
}

const mixer = new ElectroDevice("mixer", 300, "KitchenAid");
const phone = new ElectroDevice("phone", 25, "apple");
const AidMixer = new Mixer("aid", 220, "KitchenAid", 10);
const iphone = new Phone("iphone", 25, "apple", true);

console.log(AidMixer);
console.log(mixer);
console.log(phone);
console.log(iphone);
phone.powerConsumption();
AidMixer.Dimensions();

function sumPover(arr) {
  let result = 0;
  arr.forEach((item) => {
    result += item.getPover();
  });
  return `Power consumption of all switched on devices ${result} volt`;
}

mixer.Switch();
phone.Switch();
AidMixer.Switch();
iphone.Switch();

console.log(sumPover([mixer, phone, AidMixer, iphone]));
