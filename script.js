document.addEventListener('DOMContentLoaded', () => {
    // Example for setting progress bar width if not done inline
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        // You would get this percentage from data in a real application
        const percentage = 75; // Example: 75%
        progressBar.style.width = `${percentage}%`;
    }

    // You could add event listeners for sidebar items or buttons here
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active', 'current'));
            // Add active class to the clicked item
            item.classList.add('current'); // Or 'active' depending on your desired styling
            // Prevent default link behavior if you're handling routing with JS
            // e.preventDefault();
        });
    });

    // Handle checkbox interaction if needed
    const taskCheckboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                console.log(`${e.target.labels[0].textContent} completed!`);
                // Add logic for marking as complete, rewarding points, etc.
            } else {
                console.log(`${e.target.labels[0].textContent} unchecked.`);
            }
        });
    });
});