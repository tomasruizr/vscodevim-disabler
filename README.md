# vscodevim-disabler README

Creates a wrapper that disables vscodevim when executing 'editor.action.addSelectionToNextFindMatch' command and enables it when executing 'removeSecondaryCursors'. You can map those to the keys Cmd+d and shift+escape for a seamless execution. Basically removes the multi cursor capabilities for vscodevim.

## Requirements

Works with [vscodevim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)

## Extension Settings

This extension contributes the following settings:

* `vscodevim-disabler.executionDelay`: Hackie property that delays the 'addSelectionToNextFindMatch' to wait for vscodevim to deactivate the first time you push Cmd+d. Ugly but works...

# Added Commands

* `vscodevim-disabler.disableVim`: Creates a wrapper that disables vscodevim and executes 'editor.action.addSelectionToNextFindMatch'. Default map to "ctrl+alt+d".
* `vscodevim-disabler.enableVim`: Creates a wrapper that enables vscodevim and executes 'removeSecondaryCursors'. Default map to "ctrl+alt+shift+d".

Remap keybindings as desire.

Have fun!