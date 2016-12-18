 //$('body').prepend('<div id="ex1" style="display:none;"><p>Thanks for clicking.  That felt good.  <a href="#" rel="modal:close">Close</a> or press ESC</p></div><p><a href="#ex1" rel="modal:open">Open Modal</a></p>');
 // $('body').css('background', '#f00 !important');

 // $('.entry.unvoted')
 //     .mouseover(function() {
 //         $(this).css('border', '1px solid red');
 //     }).click(function() {
 //         console.log($(this));
 //     })
 //     .mouseout(function() {
 //         $(this).css('border', '0px');
 //     });

 $('body').prepend(`<button id="myBtn">Open Modal</button>
<div id="myModal" class="modald">
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>
</div>`);

 // Get the modal
 var modal = document.getElementById('myModal');

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on the button, open the modal 
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 $('.entry.unvoted')
     .mouseover(function() {
         $(this).css('border', '1px solid red');
     }).click(function() {
         modal.style.display = "block";
         console.log($(this));
         $('.modal-content').html($(this)[0].innerHTML);

     })
     .mouseout(function() {
         $(this).css('border', '0px');
     });