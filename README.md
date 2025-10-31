# Midnight Scavenger Mine Autoresume

[![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjYuMjY1NjQ0MDczNDg2MzMiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyMjYuMjY1NjQ0MDczNDg2MzMgMzUiPjxyZWN0IHdpZHRoPSIxNjYuMjgxMjY1MjU4Nzg5MDYiIGhlaWdodD0iMzUiIGZpbGw9IiMwMDAxZmYiLz48cmVjdCB4PSIxNjYuMjgxMjY1MjU4Nzg5MDYiIHdpZHRoPSI1OS45ODQzNzg4MTQ2OTcyNjYiIGhlaWdodD0iMzUiIGZpbGw9IiM4YjU3MmEiLz48dGV4dCB4PSI4My4xNDA2MzI2MjkzOTQ1MyIgeT0iMjEuNSIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9IidSb2JvdG8nLCBzYW5zLXNlcmlmIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMiI+UE9XRVJFRCBCWSBIT1NLWTwvdGV4dD48dGV4dCB4PSIxOTYuMjczNDU0NjY2MTM3NyIgeT0iMjEuNSIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9IidNb250c2VycmF0Jywgc2Fucy1zZXJpZiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjkwMCIgbGV0dGVyLXNwYWNpbmc9IjIiPlNISVQ8L3RleHQ+PC9zdmc+)](https://forthebadge.com)

#### 💰 Send HOSKY or ADA if this helps you cheat a bit.

```
addr1q92jgkr25xczpawkjjdu83k76c57tunu7tqrlyw0gdv77h876ye8z00z7kupccs3ege8l73eg06a6363dme4yga06h7sqzdy35
```

Unfortunately the [https://sm.midnight.gd/wizard/mine](https://sm.midnight.gd/wizard/mine) website is
a bit flaky and unreliable. Manual tab reload is often needed because the mining unexpectedly stops or the challanges do not show up.

This repo hosts the userscript that can be added to [OrangeMonkey](https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf?hl=en) or [TamperMonkey](https://www.tampermonkey.net/index.php) that will take care of the babysitting.

![In Action](images/om-userscript.png)

## Instructions [quick]

1. Install [OrangeMonkey](https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf?hl=en)
2. Create a Custom Script like shown in the picture, where you copy paste the `dist\userscript-autominer-loader.js` file.

![OrangeMonkey Userscript](images/mgdsm-om-userscript.png)

3. Configure OrangeMonkey

To make OrangeMonkey work in Chrome, do the following:

- Allow Userscripts
- Enable Developer mode toggle on the top right corner

![OrangeMonkey Settings](images/om-settings.png)
