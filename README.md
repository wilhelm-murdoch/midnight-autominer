# Midnight Scavenger Mine Autoresume

[![forthebadge](./images/powered-by-hosky-shit.svg)](https://forthebadge.com)

#### 💰 Send HOSKY or ADA if this helps you cheat a bit or need support.

```
addr1q92jgkr25xczpawkjjdu83k76c57tunu7tqrlyw0gdv77h876ye8z00z7kupccs3ege8l73eg06a6363dme4yga06h7sqzdy35
```

Unfortunately the [https://sm.midnight.gd/wizard/mine](https://sm.midnight.gd/wizard/mine) website is
a bit flaky and unreliable. Manual tab reload is often needed because the mining unexpectedly stops or the challanges do not show up.

This repo hosts the userscript that can be added to [OrangeMonkey](https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf?hl=en) or [TamperMonkey](https://www.tampermonkey.net/index.php) that will take care of the babysitting.

![In Action](images/om-userscript.png)

### How it works

The OrangeMonkey Userscript is loaded when opening the tab and checks if you can start the mining session. If it detects that you are actively mining a challange, it will do nothing. In every other case the tab will be reloaded all 5 seconds.

## Instructions [quick]

1. Install [OrangeMonkey](https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf?hl=en)
2. Create a Custom Script like shown in the picture, where you copy paste the `dist\userscript-autominer-loader.js` file. Make it load on document-end by clicking the blue Meta button in the script editor.

![OrangeMonkey Userscript](images/mgdsm-om-userscript.png)

3. Configure OrangeMonkey

To make OrangeMonkey work in Chrome, do the following:

- Allow Userscripts
- Enable Developer mode toggle on the top right corner

![OrangeMonkey Settings](images/om-settings.png)
