class ActionHelper {

  static async isVisible(locator){
    try {
      const element = await $(locator);
      return await element.isDisplayed();
    } catch (error){
      console.error('Error:', error);
      throw new Error(`element is not visible: ${err}`);
    }
  }

  static async maximizeWindow(){
    await browser.maximizeWindow();
  }
  
  static async setValue(locator, value){
    await browser.waitUntil(() => this.isVisible(locator))
    const element = await $(locator)
    await element.setValue(value)
    return element
  }
  
  static async pause(value){
    await browser.pause(value)
  }

  static async click(locator){
    await browser.waitUntil(() => this.isVisible(locator))
    const element = await $(locator);
    await element.click();
  }

  static async getText(locator){
    await browser.waitUntil(() => this.isVisible(locator))
    const item = await $(locator)
    const name = await item.getText()
    return name
  }

  static async getWindowHandles(){
    let windows = await driver.getWindowHandles();
    return windows
  }

  static async switchToWindow(indexItem){
    await browser.switchToWindow(indexItem)
  }

  static async clearValue(locator){
    await browser.waitUntil(() => this.isVisible(locator))
    
    const value = await $(locator)
    value.clearValue();
  }
}

module.exports = ActionHelper