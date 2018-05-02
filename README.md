# vscodevim-disabler README

Creates a switch to enable and disable the vscodevim extension. It will work as a Bypass of the extension functionality and it's main function is to bring back the right functionality of the Insert Mode multicursor with all the goodness of the Vim extension!.

## Requirements

Works with [vscodevim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)

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
        "command": "multiCommand.removeSecondaryCursors",
        "interval": 10,
        "sequence": [
            "vscodevim-disabler.enableVim", 
            "removeSecondaryCursors"
        ]
    },
    {
        "command": "multiCommand.cancelSelection",
        "interval": 10,
        "sequence": [
            "vscodevim-disabler.enableVim",
            "cancelSelection"
        ]
    }
]
````
## In the Keyboard Mapping
```
{
    "key": "cmd+d",
    "command": "multiCommand.addSelectionToNextFindMatch",
    "when": "editorFocus"
},
{
    "key": "shift+escape",
    "command": "multiCommand.cancelSelection",
    "when": "editorHasSelection && textInputFocus"
},
{
    "key": "shift+escape",
    "command": "multiCommand.removeSecondaryCursors",
    "when": "editorHasMultipleSelections && editorTextFocus"
}
```