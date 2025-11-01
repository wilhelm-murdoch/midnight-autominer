const version = "1.0.1";
console.log(`🛠️ Midnight Scavenger AutoMiner Script v${version} initialized.`);

async function pause(milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function findStartSessionButton() {
  return Array.from(document.querySelectorAll("button"))
    .filter((button) => button.textContent?.trim() === "Start session")
    .pop();
}

async function startMiningSession() {
  const startButton = findStartSessionButton();

  if (startButton) {
    console.log("Found start session button");
    startButton.click();
  } else {
    console.log("Start session button not found");
    throw new Error("Start session button not found");
  }
}

async function hasStartSessionButton() {
  const startButton = findStartSessionButton();
  console.log("Has start session button:", !!startButton);
  return !!startButton;
}

async function isFindingASolution() {
  const solutionElement = Array.from(document.querySelectorAll("*")).find(
    (element) => {
      const textNodes = Array.from(element.childNodes).filter(
        (node) => node.nodeType === Node.TEXT_NODE
      );
      return textNodes.some((node) =>
        node.textContent?.includes("Finding a solution...")
      );
    }
  );
  console.log("Finding a solution:", !!solutionElement);
  return !!solutionElement;
}

async function checkMinerStatus() {
  const isFindingSolutionFlag = await isFindingASolution();
  const hasStartSessionButtonFlag = await hasStartSessionButton();

  return {
    needsIntervention: hasStartSessionButtonFlag || !isFindingSolutionFlag,
    isFindingSolution: isFindingSolutionFlag,
    hasStartButton: hasStartSessionButtonFlag,
  };
}

async function handleMinerIntervention(isInitial = true) {
  if (isInitial) {
    console.log(
      `⚠️ [Fresh Tab Reload ${new Date().toISOString()}] Miner is inactive and not actively crunching numbers. Attempting to start the session...`
    );
    startMiningSession();
  } else {
    console.log(
      `⚠️ [Polling cycle ${new Date().toISOString()}] Miner is inactive and not actively crunching numbers. Attempting to reload the tab and start the session...`
    );
    window.location.reload();
  }
}

async function startAutoResume(intervalMs: number = 5000) {
  console.log("Auto-resume feature initialized...");
  const status = await checkMinerStatus();
  if (status.needsIntervention) {
    await handleMinerIntervention(true);
  }

  // Set up polling interval to check every 5 seconds
  const pollingIntervalHandle = setInterval(async function () {
    const status = await checkMinerStatus();
    if (status.needsIntervention) {
      await handleMinerIntervention(false);
    }
  }, intervalMs);
}

function handleException(error: any) {
  console.error("🚨🔴 Auto-resume failed to start:", error);

  // Play warning sound
  const audio = new Audio(
    "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBjuN0fLIeC0FJHfJ8N6QQgsUXrTp66hUEwxCm+D5smkbCj2T1/LKeS0GI3fJ8N+OQQoUXrTp66lUEg5Cm+D4smkbCj2R1/LKeS0GJHfH8N6OQQsUXrTp66hVEgxCnOD4smkbCj2R1/LKeS0GJHfH8N+OQQwTXrTp66hVEwxBnOD4smkbCTyS1/LKeS0GJHfH8N2OQQwTXrTp66hVEgxCnOD4smocCjyT1/LKeS0GJHfH8N2OQQwTXrTp66hVEgxCnOD4smocCzuS1/LKeS0GJHfH8N2OQQwTXrTp66hVEgxCnOD4smocCzuS1/LKeS0GJHfH8N2OQQwTXrTp66hVEgxCnOD4smocCzuS1/LKeS0GJHfH8N2OQQwTXrTp66hVEgxCnOD4smocCzuS1/LKeS0GJHfH8N2OQQwTXrTp66hVEgxCnOD4smocCzuS1/LKeS0GJHfH8N2OQQwTXrTp66hVEgxCnOD4smocCzuS1/LKeS0GJHfH8N2OQQwTXrTp66hVEgxCnOD4smocCzuS1/LKeS0GJHfH8N2OQQwT"
  );
  audio.play().catch(() => {
    console.warn("🔊 Could not play warning sound.");
  });
  window.location.reload();
}

// Catch unhandled promise rejections too
window.onunhandledrejection = function (event) {
  console.error("🚨🔴 Unhandled promise rejection:", event.reason);
  handleException(event);
};
// Global error handler
window.onerror = function (message, source, lineno, colno, error) {
  console.error("🚨🔴 Global error caught:", message, error);
  handleException(error);
};

(async () => {
  // The logic is:
  // 1. If miner is not actively finding a solution (aka blue box present), reload the browser all N seconds
  // 2. If miner is inactive, attempt to resume mining by clicking the "Start session" button
  if (document.readyState === "complete") {
    console.log(
      "🛠️ Document already loaded, starting auto-resume immediately."
    );
    await pause(1000);
    await startAutoResume(15000);
    await pause(1000);
  } else {
    window.addEventListener("load", async function () {
      console.log("🛠️ Document loaded, starting auto-resume.");
      await pause(1000);
      await startAutoResume(15000);
      await pause(1000);
    });
  }
})();
