// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscodevscodevim-disabler" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let vscodevim = vscode.extensions.all.filter((ext) => {
        return ext.id === 'vscodevim.vim'
    });
    if (vscodevim.length !==1){
        console.log('There is no vscodevim installed');
        return;
    }
    let enabled = vscodevim[0].isActive;
    context.subscriptions.push(vscode.commands.registerCommand('vscodevim-disabler.disableVim', async function () {
        if (!vscode.workspace.getConfiguration('vim').disableExtension){
            vscode.commands.executeCommand('toggleVim');
        }
        enabled = true;
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscodevim-disabler.enableVim', async function () {
        if (vscode.workspace.getConfiguration('vim').disableExtension){
            vscode.commands.executeCommand('toggleVim');
        }
        enabled = true;
    }));
}
exports.activate = activate;
process.on('unhandledRejection', function(reason, p) {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;