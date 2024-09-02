// JavaScript to handle tab switching
document.querySelectorAll('.skylite-analytic-tabs-navigation div').forEach(function(tab) {
    tab.addEventListener('click', function() {
        // Hide all tab contents
        document.querySelectorAll('[id^="analytic-tab-"][id$="-data"]').forEach(function(content) {
            content.style.display = 'none';
        });

        // Remove active class from all tabs
        document.querySelectorAll('.skylite-analytic-tabs-navigation div').forEach(function(tab) {
            tab.classList.remove('overview-active');
        });

        // Show the clicked tab content
        var tabContentId = this.id + '-data';
        document.getElementById(tabContentId).style.display = 'block';

        // Add active class to the clicked tab
        this.classList.add('overview-active');
    });
});

// Initially display the overview tab content
document.getElementById('analytic-tab-overview-data').style.display = 'block';











