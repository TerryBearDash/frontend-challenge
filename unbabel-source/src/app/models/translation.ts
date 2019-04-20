export class Translation {
  id: number;
  text: string;
  voice: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}