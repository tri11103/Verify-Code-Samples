# Verify Code Samples
Tool to verify that code samples in Geoprocessing Tools documentation are valid.

# Summary
This tool is responsible for verifying that Python code samples included in Esri's Geoprocessing Tools documentation are correct, and are written in good style in accordance with [PEP-8](https://www.python.org/dev/peps/pep-0008/). Using this tool to verify code samples before a release ensures that our customers are receiving the best, highest quality resources we can provide. 

# Usage
This tool is able to detect the following issues in our code samples:
- Unclosed parantheses, quotation marks
- Inconsistent tab-spacing
- Infinite loops
- Unnecessary spacing (_i.e. correcting x=2 to x = 2_) 
- Camelcase variables
- ... and a whole lot more!

In addition to detecting these issues, this tool can also correct many issues automatically. 

# User Guide
## Installation
1. Clone or download this repository to your machine.
2. A .zip file appears in your **Downloads** folder. Extract the .zip folder to a folder of your choosing.
3. Open the folder you extracted. Browse to the **/bin** directory.
4. Right click the **Verify Code Sample** file and click **Create shortcut**.
5. Drag and drop the **Verify Code Sample - Shortcut** file to your Desktop.

## Check a code sample 
1. Open a file explorer window and browse to the code sample you want to verify.
2. Drag-and-drop the code sample file on to the **Verify Code Sample - Shortcut.lnk** on your Desktop.
- code sample file must be .py format.
3. A web browser window appears showing all issues with the code sample.
- You can fix issues with your code sample by clicking the **Fix now** button in the web browser. _Please note:_ this will overwrite the existing file. This action can not be undone. 

# Contributing Guide
If you're interested in helping out, please log an issue in this repository. You may also work on an issue that someone else has logged. Once you have an issue, feel free to fork this repository or create a new branch to work on the issue. When you feel like the issue has been resolved, submit a pull request.
