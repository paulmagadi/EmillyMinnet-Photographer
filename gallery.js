document.addEventListener('DOMContentLoaded', function() {
    const photos = [
        { id: 1, src: 'images/collection/e1.jpg', category: 'events', title: 'Wedding' },
        { id: 2, src: 'images/collection/e2.jpg', category: 'events', title: 'events' },
        { id: 3, src: 'images/collection/e3.jpg', category: 'events', title: 'birthday' },
        { id: 4, src: 'images/collection/e4.jpg', category: 'events', title: 'events' },
        { id: 5, src: 'images/collection/m1.jpg', category: 'model', title: 'model' },
        { id: 6, src: 'images/collection/m2.jpg', category: 'model', title: 'model' },
        { id: 7, src: 'images/collection/m3.jpg', category: 'model', title: 'model' },
        { id: 8, src: 'images/collection/m4.jpg', category: 'model', title: 'model' },
        { id: 9, src: 'images/collection/p1.jpg', category: 'portrait', title: 'Portrait' },
        { id: 10, src: 'images/collection/p2.jpg', category: 'portrait', title: 'Portrait' },
        { id: 11, src: 'images/collection/p3.jpg', category: 'portrait', title: 'Portrait' },
        { id: 12, src: 'images/collection/p4.jpg', category: 'portrait', title: 'Portrait' },
        { id: 13, src: 'images/collection/t1.jpg', category: 'travel', title: 'Travel' },
        { id: 14, src: 'images/collection/t2.jpg', category: 'travel', title: 'Travel' },
        { id: 15, src: 'images/collection/t3.jpg', category: 'travel', title: 'Travel' },
        { id: 16, src: 'images/collection/t4.jpg', category: 'travel', title: 'Travel' },
        { id: 17, src: 'images/emilly/1.jpg', category: 'emilly', title: 'Emilly' },
        { id: 18, src: 'images/emilly/2.jpg', category: 'emilly', title: 'Emilly' },
        { id: 19, src: 'images/emilly/3.jpg', category: 'emilly', title: 'Emilly' },
        { id: 20, src: 'images/emilly/4.jpg', category: 'emilly', title: 'Emilly' },
    ];

    // DOM Elements
    const gallery = document.getElementById('gallery');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const prevPageBtn = document.getElementById('prev-btn');
    const nextPageBtn = document.getElementById('next-btn');
    const pageNumbers = document.getElementById('page-numbers');

    // Pagination variables
    const itemsPerPage = 8;
    let currentPage = 1;
    let filteredPhotos = [...photos];
    let activeFilter = 'all';

    // Initialize the gallery
    function initGallery() {
        renderGallery();
        renderPagination();
        setupEventListeners();
    }

    // Render gallery items
    function renderGallery() {
        gallery.innerHTML = '';
        
        // Calculate pagination
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const photosToShow = filteredPhotos.slice(startIndex, endIndex);
        
        if (photosToShow.length === 0) {
            gallery.innerHTML = '<p class="no-results">No photos found matching your criteria.</p>';
            return;
        }
        
        photosToShow.forEach(photo => {
            const galleryItem = document.createElement('div');
            galleryItem.className = `gallery-item ${photo.category}`;
            galleryItem.dataset.category = photo.category;
            
            galleryItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}">
                <span class="category">${photo.category}</span>
            `;
            
            gallery.appendChild(galleryItem);
        });
    }

    // Render pagination controls
    function renderPagination() {
        pageNumbers.innerHTML = '';
        const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
        
        if (totalPages <= 1) {
            pageNumbers.style.display = 'none';
            prevPageBtn.disabled = true;
            nextPageBtn.disabled = true;
            return;
        }
        
        pageNumbers.style.display = 'flex';
        
        // Previous button state
        prevPageBtn.disabled = currentPage === 1;
        
        // Next button state
        nextPageBtn.disabled = currentPage === totalPages;
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageNumber = document.createElement('span');
            pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
            pageNumber.textContent = i;
            pageNumber.addEventListener('click', () => {
                currentPage = i;
                renderGallery();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pageNumbers.appendChild(pageNumber);
        }
    }

    // Filter photos by category
    function filterPhotos(category) {
        activeFilter = category;
        currentPage = 1;
        
        if (category === 'all') {
            filteredPhotos = [...photos];
        } else {
            filteredPhotos = photos.filter(photo => photo.category === category);
        }
        
        renderGallery();
        renderPagination();
    }

    // Set up event listeners
    function setupEventListeners() {
        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                filterPhotos(button.dataset.filter);
            });
        });
        
        // Previous button
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderGallery();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        
        // Next button
        nextPageBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderGallery();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Initialize the gallery
    initGallery();
});