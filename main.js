class ReadingTimePlugin {
    constructor(API, name, config) {
        this.API = API;
        this.name = name;
        this.config = config;
    }

    addInsertions() {
        this.API.addInsertion('publiiFooter', this.injectReadingTime.bind(this), 1, this);
    }

    injectReadingTime() {
        let text = this.config.text || 'Estimated reading time:';
        let scriptContent = `
        document.addEventListener("DOMContentLoaded", function() {
            function calculateReadingTime() {
                const textElements = document.querySelectorAll('.post__entry p');
                let totalWords = 0;
                textElements.forEach(element => {
                    totalWords += element.innerText.split(' ').filter(Boolean).length;
                });
                const wordsPerMinute = 200;
                const readingTimeDecimal = totalWords / wordsPerMinute;
                const readingTimeMinutes = Math.floor(readingTimeDecimal);
                const fractionalMinute = readingTimeDecimal - readingTimeMinutes;
                const readingTimeSeconds = Math.round(fractionalMinute * 60);
                const readingTimeElement = document.createElement('div');
                readingTimeElement.className = 'reading-time';                
                readingTimeElement.textContent = '${text}' + ' ' + readingTimeMinutes + '.' + readingTimeSeconds + ' minute(s) to read';
                const postTitle = document.querySelector('h1');
                if (postTitle) {
                    postTitle.insertAdjacentElement('afterend', readingTimeElement);
                }
            }

            if (window.location.pathname !== '/') {
                calculateReadingTime();
            }            
        });
    `;
        return `<script type="text/javascript">${scriptContent}</script>`;
    }

}

module.exports = ReadingTimePlugin;