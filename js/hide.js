function toggleblock(blockId, selfId)
{
    var block = document.getElementById(blockId);
    var sblock = document.getElementById(selfId);
    if (block.style.display == 'none') {
	block.style.display = 'block' ;
	sblock.textContent = '---- show less ----';
    } else {
	block.style.display = 'none' ;
	sblock.textContent = '---- show more ----';
    }
}
