var adblockModal = document.getElementById('adblock-modal');

if(window.canRunAds === undefined){
  console.log('Blocking Ads: Yes');
  adblockModal.style.display = 'inline';
}
else{
  console.log('Blocking Ads: No');
  adblockModal.style.display = 'none';
}

function close_adblock_modal() {
  adblockModal.style.display = 'none';
}