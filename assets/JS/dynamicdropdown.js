/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    function dynamicdropdown(listindex)
     {
         document.getElementById("subcategory").length = 0;
         document.getElementById("subcategory").options[0]=new Option("Please select option","");
         if (listindex) {
             var lookup = {};
             var j = 1;
             for (var i = 0, len = rowFrameworkResultInJs.length; i < len; i++) {
                 if (rowFrameworkResultInJs[i].lang_id == listindex) {
                     document.getElementById("klas").options[j]=new Option(rowFrameworkResultInJs[i].framework_name,rowFrameworkResultInJs[i].id);
                     j = j+1;
                 }
             }
         }

         return true;
     }