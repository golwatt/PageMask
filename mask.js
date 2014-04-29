var doc = document;
var maskDiv = doc.getElementById("mask");

function toggleMask() {
    if (maskDiv){
        // remove the mask
        doc.body.removeChild(maskDiv);
    } else {
        // add the mask
        maskDiv = doc.createElement("div");
        maskDiv.id = "mask";
        // directly set the style attribute to mask div can't work in ie7
        maskDiv.style.width = "100%";
        maskDiv.style.height = "100%";
        maskDiv.style.backgroundColor = "#3c3c3c";
        maskDiv.style.position = "fixed";
        maskDiv.style.left = "0px";
        maskDiv.style.top = "0px";
        //maskDiv.style.filter = "alpha(opacity=50)";
        maskDiv.style.opacity = "0.5";
        maskDiv.style.zIndex = "10000";
        doc.body.appendChild(maskDiv);
    }
}

toggleMask();
