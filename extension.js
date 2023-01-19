
async function onload({extensionAPI}) {
  extensionAPI.ui.commandPalette.addCommand({label: 'Toggle Numbered List', 
               callback: () => {
                let block = window.roamAlphaAPI.ui.getFocusedBlock()
                
                // check if a block is focused
                if (block !=null) {
                  let uid = block['block-uid'];
                  let viewType = window.roamAlphaAPI.data.pull("[:children/view-type]", [":block/uid", uid])[':children/view-type']
                  if (viewType==':numbered') {
                    window.roamAlphaAPI.updateBlock(
                      {"block": 
                        {"uid": uid,
                        "children-view-type": "bullet"}})
                  } else {
                    window.roamAlphaAPI.updateBlock(
                      {"block": 
                        {"uid": uid,
                        "children-view-type": "numbered"}})
                  }
                }
                
                },
               "disable-hotkey": false,
               // this is the default hotkey, and can be customized by the user. 
               // in most cases, you DO NOT want to be setting a default hotkey
               "default-hotkey": "ctrl-shift-1"})
  // left justify
  extensionAPI.ui.commandPalette.addCommand({label: 'Justify Block - Left ', 
    callback: () => {
      let block = window.roamAlphaAPI.ui.getFocusedBlock()
      // check if a block is focused
      if (block !=null) {
        let uid = block['block-uid'];
        window.roamAlphaAPI.updateBlock(
          {"block": 
            {"uid": uid,
            "text-align": "left"}})}
    },
    "disable-hotkey": false,
  })
  // center justify
  extensionAPI.ui.commandPalette.addCommand({label: 'Justify Block - Center', 
    callback: () => {
      let block = window.roamAlphaAPI.ui.getFocusedBlock()
      // check if a block is focused
      if (block !=null) {
        let uid = block['block-uid'];
        window.roamAlphaAPI.updateBlock(
          {"block": 
            {"uid": uid,
            "text-align": "center"}})}
    },
  "disable-hotkey": false,
  })
  // left justify
  extensionAPI.ui.commandPalette.addCommand({label: 'Justify Block - Right', 
    callback: () => {
      let block = window.roamAlphaAPI.ui.getFocusedBlock()
      // check if a block is focused
      if (block !=null) {
        let uid = block['block-uid'];
        window.roamAlphaAPI.updateBlock(
          {"block": 
            {"uid": uid,
            "text-align": "right"}})}
    },
    "disable-hotkey": false,
  })

  //  justify
  extensionAPI.ui.commandPalette.addCommand({label: 'Justify Block', 
    callback: () => {
      let block = window.roamAlphaAPI.ui.getFocusedBlock()
      // check if a block is focused
      if (block !=null) {
        let uid = block['block-uid'];
        window.roamAlphaAPI.updateBlock(
          {"block": 
            {"uid": uid,
            "text-align": "justify"}})}
    },
    "disable-hotkey": false,
  })
}

function onunload() {
  console.log("unload example plugin");
}

export default {
onload,
onunload
};
