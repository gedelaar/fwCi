/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function toggle2(showHideDiv, switchTextDiv) {
        var ele = document.getElementById(showHideDiv);
        if (ele.style.display == "block") {
            ele.style.display = "none";
        } else {
            ele.style.display = "block";
        }
    }
