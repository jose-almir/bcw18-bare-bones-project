import { CensorPipe } from './censor.pipe';

describe('CensorPipe', () => {
  it('create an instance', () => {
    const pipe = new CensorPipe();
    expect(pipe).toBeTruthy();
  });
});
