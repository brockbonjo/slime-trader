const inventoryView = document.getElementById('inventoryView');
const fuseView = document.getElementById('fuseView');
const tradeView = document.getElementById('tradeView');
const inventoryBtn = document.getElementById('inventoryBtn');
const fuseBtn = document.getElementById('fuseBtn');
const tradeBtn = document.getElementById('tradeBtn');

function changeDisplay(view) {
  if (view === 'inventory') {
    inventoryView.style.display = 'grid';
    fuseView.style.display = 'none';
    tradeView.style.display = 'none';
    inventoryBtn.style.borderColor = '#ffffff';
    fuseBtn.style.borderColor = '#000000';
    tradeBtn.style.borderColor = '#000000';
  } else if (view === 'fuse') {
    inventoryView.style.display = 'none';
    fuseView.style.display = 'grid';
    tradeView.style.display = 'none';
    inventoryBtn.style.borderColor = '#000000';
    fuseBtn.style.borderColor = '#ffffff';
    tradeBtn.style.borderColor = '#000000';
  } else if (view === 'trade') {
    inventoryView.style.display = 'none';
    fuseView.style.display = 'none';
    tradeView.style.display = 'grid';
    inventoryBtn.style.borderColor = '#000000';
    fuseBtn.style.borderColor = '#000000';
    tradeBtn.style.borderColor = '#ffffff';
  }
}