function activate(context) {
  console.log("Copilot Auto Approve aktif!");

  const interval = setInterval(() => {
    const buttons = document.querySelectorAll('div.monaco-dialog-box .monaco-text-button');
    buttons.forEach((btn) => {
      const label = btn.textContent?.toLowerCase();
      if (["continue", "approve", "yes", "run anyway"].includes(label)) {
        btn.click();
      }
    });
  }, 1000);

  context.subscriptions.push({ dispose: () => clearInterval(interval) });
}

function deactivate() {
  console.log("Copilot Auto Approve devre dışı.");
}

module.exports = {
  activate,
  deactivate
};
