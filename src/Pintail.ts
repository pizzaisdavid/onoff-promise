
import { Board, PinConfiguration, Pin } from './Board';
import { Pint } from './Pint';

import { Gpio } from 'onoff';

export class Pintail implements Board {

  createPin(pin: PinConfiguration): Pin {
    const gpio = new Gpio(pin.id, pin.direction);
    return new Pint(gpio);
  }

}