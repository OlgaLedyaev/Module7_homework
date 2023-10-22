function ElectroDevice(name, pover, model) {
  (this.name = name),
    (this.pover = pover),
    (this.model = model),
    (this.enabled = true);
}

ElectroDevice.prototype.Switch = function () {
  return this.enabled
    ? console.log(`${this.name} is on.`)
    : console.log(`${this.name} is off.`);
};

ElectroDevice.prototype.getPover = function () {
  return this.enabled ? this.pover : 0;
};

ElectroDevice.prototype.powerConsumption = function () {
  console.log(`${this.name} consumes ${this.pover} volt.`);
};

function Mixer(name, pover, model, weight) {
  (this.name = name),
    (this.pover = pover),
    (this.model = model),
    (this.weight = weight);
}

Mixer.prototype = new ElectroDevice();
Mixer.prototype.Dimensions = function (weight) {
  this.enabled = false;
  return weight > 25
    ? console.log(`${this.name} is professional mixer`)
    : console.log(`${this.name} is a home mixer`);
};

function Phone(name, pover, model) {
  (this.name = name),
    (this.pover = pover),
    (this.model = model),
    (this.touchScreen = true);
}

Phone.prototype = new ElectroDevice();

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
