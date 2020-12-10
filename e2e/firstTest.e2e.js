describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Hello World Text', async () => {
    await expect(element(by.id('hello'))).toBeVisible();
  });

  it('should show Press Button Text after tap', async () => {
    await element(by.id('pressButton')).tap();
    await expect(element(by.text('Press Button Text'))).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
