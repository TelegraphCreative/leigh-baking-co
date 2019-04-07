export default function() {
    
    const Blocks = document.querySelectorAll('.js-blur--sibling-feature');

    if (Blocks.length) {
        Blocks.forEach(Block => {

            // Blur 
            Block.addEventListener('mouseenter', function(e){

                // Get 3rd sibling
                const Sibling = Block.nextSibling.nextSibling
                .nextSibling.nextSibling
                .nextSibling.nextSibling;

                Sibling.classList.add('-blur');

            })

            // Unblur
            Block.addEventListener('mouseleave', function(e){
                
                // Get 3rd sibling
                const Sibling = Block.nextSibling.nextSibling
                .nextSibling.nextSibling
                .nextSibling.nextSibling;

                Sibling.classList.remove('-blur');
                
            })
        });
    }
}