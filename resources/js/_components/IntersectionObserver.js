const inView = require('in-view');

export default function() {

    window.addEventListener('load', function () {

        // Handle States for Section InView 
        const sections = '.js-in-view';
        const themeDefault = 'white';
        const doc = document.querySelector('html');
        const sectionAnchors = document.querySelectorAll('.js-section-anchor');
        
        // Initialize InView
        inView.offset(400);

        inView(sections)
            .on('enter', section => {
                
                section.classList.add('in-view');

                // Handle Anchors
                // handleAnchorStates(section);

                // Handle Section Themes
                handleSectionThemes(section);

            }).on('exit', section => {

                section.classList.remove('in-view');

            })

        // Anchor Menus
        // Handle Active Anchors
        function handleAnchorStates(section){

            // Remove Active Anchors
            sectionAnchors.forEach(anchor => {
                anchor.classList.remove('section-active');
            });
            
            // Add Active Anchors
            let id = section.getAttribute('id');
            const activeAnchor = document.querySelector('.js-section-anchor[href*='+ id + ']');
            
            
            if( activeAnchor !== null ) 

                activeAnchor.classList.add('section-active');
        }

        // Section Themes
        function handleSectionThemes(section){
            const theme = section.getAttribute('data-theme');
            
            doc.classList.forEach(className => {
                if (className.startsWith('theme--')) {
                    doc.classList.remove(className);
                }
            });

            if( theme !== null ) 
                doc.classList.add('theme--' + theme);
        }
  
    });

}