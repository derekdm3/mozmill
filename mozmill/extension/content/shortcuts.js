//Determines of the event is accel, meaning
//ctrl or cmd depending on your platform
//but none of the other modified keys
function isAccel(e){
  var plat = navigator.platform;
  var isMac = (plat.indexOf('Mac') != -1);
  var modifiers = e.altKey || e.shiftKey;
  
  if ((isMac) && (!modifiers) && (e.metaKey) && (!e.ctrlKey)){
    return true;
  }
  else if ((!isMac) && (!modifiers) && (e.ctrlKey) && (!e.metaKey)){
    return true;
  }
  return false;
};

//window onkeypress handler for various keyboard
//shortcuts
window.onkeypress = function(e){
  if (isAccel(e)){ 
    switch(String.fromCharCode(e.charCode)){
      case 'f':
        e.preventDefault();
        showFileDialog();
      break;
      case 't':
        e.preventDefault();
        showTestDialog();
      break;
      case 'k':
        e.preventDefault();
        showOptionDialog();
      break;
      case 'i':
        e.preventDefault();
        showInspectDialog();
      break;
      case 'e':
        e.preventDefault();
        showRecordDialog();
      break;
      case 'o':
        e.preventDefault();
        openFile();
      break;
      case 'r':
        e.preventDefault();
        runEditor();
      break;
      case 'v':
        e.preventDefault();
        saveAsFile();
      break;
      case 's':
        e.preventDefault();
        saveFile();
      break;
      case 'n':
        e.preventDefault();
        openNewWindow();
      break;
      case 'l':
        e.preventDefault();
        logicalClear();
      break;
      case 'm':
        e.preventDefault();
        genBoiler();
      break;
      case '1':
        e.preventDefault();
        $("#tabs").tabs().tabs("select", 0);
      break;
      case '2':
        e.preventDefault();
        $("#tabs").tabs().tabs("select", 1);
      break;
      case '3':
        e.preventDefault();
        $("#tabs").tabs().tabs("select", 2);
      break;
      case '4':
        e.preventDefault();
        $("#tabs").tabs().tabs("select", 3);
      break;
      default:
        return;
    }
  }
};

    <span style="cursor:pointer" onclick="showFileDialog();">File</span> | 
    <span style="cursor:pointer" onclick="showTestDialog();">Test</span> | 
    <span style="cursor:pointer" onclick="showOptionDialog();">Options</span> | 
    <span style="cursor:pointer" onclick="showInspectDialog();">Inspector</span> | 
    <span style="cursor:pointer" onclick="showRecordDialog();">Recorder</span>
    