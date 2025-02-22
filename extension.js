async function onload({extensionAPI}) {
  extensionAPI.ui.commandPalette.addCommand({label: 'Toggle Numbered List', 
               callback: () => {
                let block = window.roamAlphaAPI.ui.getFocusedBlock()
                
                // check if a block is focused
                if (block !=null) {
                  let uid = block['block-uid'];
                  // default blocks don't always have view-type set if so assume bullet
                  try{
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
                  } catch(error){
                    window.roamAlphaAPI.updateBlock(
                        {"block": 
                          {"uid": uid,
                          "children-view-type": "numbered"}})
                  }
                }
                
                },
               "disable-hotkey": false,
})

  // Cycle block view type (bullet -> numbered -> document)
  extensionAPI.ui.commandPalette.addCommand({
    label: 'Cycle Block Children View Type',
    callback: () => {
      let block = window.roamAlphaAPI.ui.getFocusedBlock()
      // check if a block is focused
      if (block != null) {
        let uid = block['block-uid'];
        try {
          let viewType = window.roamAlphaAPI.data.pull("[:children/view-type]", [":block/uid", uid])[':children/view-type']
          
          // If viewType is null or not set, treat as bullet
          if (!viewType || viewType === ':bullet') {
            window.roamAlphaAPI.updateBlock({
              "block": {
                "uid": uid,
                "children-view-type": "numbered"
              }
            })
          } else if (viewType === ':numbered') {
            window.roamAlphaAPI.updateBlock({
              "block": {
                "uid": uid,
                "children-view-type": "document"
              }
            })
          } else if (viewType === ':document') {
            window.roamAlphaAPI.updateBlock({
              "block": {
                "uid": uid,
                "children-view-type": "bullet"
              }
            })
          }
        } catch(error) {
          // If there's an error, default to setting as bullet
          window.roamAlphaAPI.updateBlock({
            "block": {
              "uid": uid,
              "children-view-type": "bullet"
            }
          })
        }
      }
    },
    "disable-hotkey": false,
  })

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
  extensionAPI.ui.commandPalette.addCommand({label: 'Justify Block - Full', 
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
  console.log("load hotkey formatting plugin");
}

function onunload() {
  console.log("unload hotkey formatting plugin");
}

export default {
onload,
onunload
};