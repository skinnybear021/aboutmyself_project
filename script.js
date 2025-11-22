document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const mainGallery = document.getElementById("main-gallery");

    // Gallery data is now directly in the script to avoid fetch issues on local files.
    const galleryData = {};

    const hideLoader = () => {
        loader.classList.add("hidden");
    };

    const buildGallery = (data) => {
        if (!data || Object.keys(data).length === 0) {
            mainGallery.innerHTML = "<p>Gallery is empty.</p>";
            hideLoader();
            return;
        }

        const imageLoadPromises = [];

        Object.keys(data).forEach(folderName => {
            const section = document.createElement("div");
            section.classList.add("gallery-section");

            const title = document.createElement("h2");
            title.classList.add("gallery-title");
            title.textContent = folderName.replace(/_/g, " ");
            section.appendChild(title);

            const grid = document.createElement("div");
            grid.classList.add("image-grid");

            data[folderName].forEach(imgFile => {
                const item = document.createElement("div");
                item.classList.add("gallery-item");

                const img = document.createElement("img");
                img.src = `Gallery/${folderName}/${imgFile}`;
                img.alt = imgFile;

                const promise = new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = () => {
                        console.error(`Failed to load image: ${img.src}`);
                        resolve(); // Resolve even on error to not block the gallery
                    };
                });
                imageLoadPromises.push(promise);

                item.appendChild(img);
                grid.appendChild(item);
            });

            section.appendChild(grid);
            mainGallery.appendChild(section);
        });

        Promise.all(imageLoadPromises).then(hideLoader);
    };

    try {
        buildGallery(galleryData);
    } catch (err) {
        console.error("Error building gallery:", err);
        mainGallery.innerHTML = `<p style="color:red; text-align:center;">A critical error occurred while building the gallery.</p>`;
        hideLoader();
    }
});
