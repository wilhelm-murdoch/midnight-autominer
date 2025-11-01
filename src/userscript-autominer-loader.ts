(() => {
  const autominerUrl = `https://raw.githubusercontent.com/wilhelm-murdoch/midnight-autominer/refs/heads/main/dist/autominer.js?t=${Date.now()}`;
  return fetch(autominerUrl)
    .then((response) => response.text())
    .then((code) => {
      console.log(`Loaded ${autominerUrl}`);
      eval(code);
    })
    .catch((error) => {
      console.error(`Error loading ${autominerUrl} source:`, error);
    });
})();
