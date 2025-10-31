(() => {
  const autominerUrl = `http://localhost:3000/autominer.js?t=${Date.now()}`;
  // const autominerUrl = `https://raw.githubusercontent.com/ggcaponetto/midnight-autominer/refs/heads/main/dist/autominer.js?t=${Date.now()}`;
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
