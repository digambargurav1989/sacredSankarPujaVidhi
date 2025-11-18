
function openWhatsAppPopup(){ document.getElementById('waPopup').style.display='block'; }
function closeWhatsAppPopup(){ document.getElementById('waPopup').style.display='none'; }
function sendWhatsAppBooking(){ 
    var name=document.getElementById('bk_name').value || '';
    var mobile=document.getElementById('bk_mobile').value || '';
    var addr=document.getElementById('bk_addr').value || '';
    var service=document.getElementById('bk_service').value || '';
    var msg=document.getElementById('bk_msg').value || '';
    var text = 'नाव: '+name + '%0Aमोबाईल: '+ mobile + '%0Aपत्ता: '+ addr + '%0Aसेवा: '+ service + '%0Aसंदेश: ' + msg;
    window.open('https://wa.me/919172992871?text='+encodeURIComponent(text),'_blank');
}
