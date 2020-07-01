function raidImage (theHW) {
    if (document.getElementById) {
        document.getElementById('bandIntro').src = thHW.href;
        if (theHW.title) {
            document.getElementById('bandIntro').innerHTML = theHW.title;
        } else {
            document.getElementById('bandIntro').innerHTML = theHW.value;
        }
        return false;
    } else {
        return true;
    }
}