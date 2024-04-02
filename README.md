<div align="center">
  <img src="https://raw.githubusercontent.com/htejera/publii-reading-time-plugin/87129acf8002f9753cd02bf492f3d9b984fccb8b/thumbnail.svg" width= "40%" height="40%" alt="Reading Time Plugin for Publii">
</div>

# Reading Time Plugin for Publii

The Reading Time plugin automatically calculates and displays the estimated reading time for each post in Publii websites. This plugin enhances user engagement by providing readers with an estimate of the time required to read a post, fostering a better user experience.

## Features

- **Automatic Calculation**: Dynamically calculates the reading time based on the word count of each post.
- **Customizable Display**: Allows customization of the text displayed alongside the reading time estimate through plugin settings.
- **Easy Integration**: Seamlessly integrates with Publii, offering a straightforward setup process.

## Installation

1. Download the plugin from the [Release page](#).
2. In Publii, go to "Plugins" > "Add new" and select the downloaded ZIP file
3. Go to the "Plugins" section in the Publii app and enable the "Reading Time" plugin.
4. Once installed, the plugin will automatically start calculating and displaying the reading time for your posts.

## Configuration

The plugin offers the following configuration options:

- **Text**: Customize the text displayed next to the reading time. 

Within the plugin's configuration, you can set a custom text that will be displayed alongside the estimated reading time. Use %s within this text to indicate where the calculated time (minutes and seconds) should be inserted. The plugin will automatically replace %s with the actual reading time.

For example, if you set the configuration text to **"Estimated reading time: %s minute(s) to read"**, the plugin will calculate the reading time and insert it in place of **%s**. This allows for full customization and support for different languages.

![Configuration](https://github.com/htejera/publii-reading-time-plugin/blob/main/configuration.jpg?raw=true)

## Usage

Once installed and configured, the Reading Time plugin automatically calculates the estimated reading time for each post and displays it according to your settings. No further action is required from the user.
The estimated reading time is automatically displayed below the title of each post, providing readers with immediate insight into the time commitment required for reading.

## Customization

To further customize the display of the reading time, users can override the CSS class used by the plugin:

- `.reading-time`: Customizes the appearance of the text displaying the reading time.

## Acknowledgments

- The calculation code for the estimated reading time is based on the project [reading-time](https://github.com/KocetoIvanov/reading-time) by Koceto Ivanov.

## License

This plugin is licensed under the MIT License.

Feel free to contribute to the development or suggest improvements by submitting a pull request or opening an issue on GitHub.
