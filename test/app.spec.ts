import app from '../src/app';

describe('App', () => {
  it('should listen to port 3000', () => {
    expect(app.get('port')).toEqual('3000');
  });
});
