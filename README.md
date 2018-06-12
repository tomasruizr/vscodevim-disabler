# vscodevim-disabler README

Creates a switch to enable and disable the vscodevim extension. It will work as a Bypass of the extension functionality and it's main function is to bring back the right functionality of the Insert Mode multicursor with all the goodness of the Vim extension!.

## Requirements

Works with a spetial branch of [vscodevim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) which deactivates the plugin when it enters to insert mode.

You can **download the version 0.12 of vscodevim patched to manually install and work [HERE!](https://github.com/tomasruizr/Vim/raw/master/vim-0.12.0.vsix)**

After download just install manually in VSCode:

* Uninstall VSCodeVim
* Shift + [ Cmd | Ctrl ] + P
* Extensions: Install from VSIX...
* Search for the VSIX file just downloaded
* Set "extensions.autoUpdate" to false in the Settings.
* Have Fun

Is better and most usefull when used along with [multi-command](https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command)

# Added Commands

* `vscodevim-disabler.disableVim`: Disables Vim Extension
* `vscodevim-disabler.enableVim`: Enables Vim Extension


Example configuration with multi-map

## In the settings file
```
"multiCommand.commands": [
    {
        "command": "multiCommand.addSelectionToNextFindMatch",
        "interval": 100,
        "sequence": [
            "vscodevim-disabler.disableVim",
            "editor.action.addSelectionToNextFindMatch",
        ]
    },
    {
        "command": "multiCommand.NormalMode",
        "interval": 10,
        "sequence": [
            "vscodevim-disabler.enableVim",
        ]
    },
]
````
## In the Keyboard Mapping
```
//*******************************************
// Multicursor FUN
//*******************************************

{
    "key": "cmd+d",
    "command": "multiCommand.addSelectionToNextFindMatch",
    "when": "editorFocus"
},
// REMOVALS

{
    "key": "cmd+d",
    "command": "-editor.action.addSelectionToNextFindMatch",
    "when": "editorFocus"
},
{
    "key": "cmd+d",
    "command": "-extension.vim_cmd+d",
    "when": "editorTextFocus && vim.active && vim.use<D-d> && !inDebugRepl"
},
{
    "key":"escape",
    "command":"multiCommand.NormalMode",
    "when":"editorTextFocus && !vim.active"
},
```