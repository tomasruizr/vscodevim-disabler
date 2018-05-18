// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    
    let vscodevim = vscode.extensions.all.filter((ext) => {
        return ext.id === 'vscodevim.vim'
    });
    if (vscodevim.length !== 1) {
        console.log('There is no vscodevim installed');
        return;
    }
    // we assume that if extension is enabled then we are in some vim mode.
    let vimEnabled = vscodevim[0].isActive;
    context.subscriptions.push(vscode.commands.registerCommand('vscodevim-disabler.disableVim', async function () {
        if (!vscode.workspace.getConfiguration('vim').disableExtension) {
            vscode.commands.executeCommand('toggleVim');
        }
        vscode.window.showInformationMessage('desactive Vim');
        vimEnabled = false;
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscodevim-disabler.enableVim', async function () {
        if (vscode.workspace.getConfiguration('vim').disableExtension) {
            vscode.commands.executeCommand('toggleVim');
        }
        vscode.window.showInformationMessage('active Vim');
        vimEnabled = true;
    }));
    let lastChar ='';
    vscode.workspace.onDidChangeTextDocument(event => {
        // if we are in vim mode, return.
        if (vimEnabled) return;
        const editor = vscode.window.activeTextEditor;
        const { document, selections } = vscode.window.activeTextEditor;
        if (editor.selection.isEmpty) {
            if (lastChar === 'j' && event.contentChanges[0].text === 'j' && editor.selection.isEmpty){
                console.log('entre');
                // vscode.commands.executeCommand('deleteLeft');
                const newSelections = selections.map(selection => {
                    console.log(selection.start.character);
                    // let start = selection.start.character - 2 < 0 ? 0 : selection.start.character - 2;
                    return new vscode.Selection(
                        new vscode.Position(selection.start.line, selection.start.character - 1),
                        new vscode.Position(selection.start.line, selection.start.character + 1)
                    );
                    // return selection;
                });
                console.log(newSelections);
                vscode.window.activeTextEditor.selections = newSelections;
                vscode.commands.executeCommand('deleteLeft');
                if (vscode.workspace.getConfiguration('vim').disableExtension) {
                    vscode.commands.executeCommand('toggleVim');
                }
                lastChar = '';
            } else{
                lastChar = event.contentChanges[0].text; 
            }
        }
    })
}
exports.activate = activate;
process.on('unhandledRejection', function (reason, p) {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;