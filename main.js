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
        let text = this.config.text || 'Estimated reading time: %s minute(s) to read';
        let parentElementSelector = this.config.parentElementSelector || 'h1';

        let scriptContent = `
        document.addEventListener("DOMContentLoaded", function() {
            if (window.location.pathname !== '/') {
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
                    const timeString = readingTimeMinutes + (readingTimeSeconds > 0 ? '.' + readingTimeSeconds : '');
                    const finalText = '${text}'.replace('%s', timeString);

                    const readingTimeElement = document.createElement('div');
                    readingTimeElement.className = 'reading-time';                
                    readingTimeElement.textContent = finalText;
                    const targetElement = document.querySelector('${parentElementSelector}');
                    if (targetElement) {
                        targetElement.insertAdjacentElement('afterend', readingTimeElement);
                    }else {
                        console.error("Reading Time plugin. Error: element not found. Locator: '${parentElementSelector}'");
                    }
                }
                calculateReadingTime();
            }            
        });
    `;
        return `<script type="text/javascript">${scriptContent}</script>`;
    }

}

module.exports = ReadingTimePlugin;