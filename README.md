# Verify-Code-Samples
Tool to verify that code samples in Geoprocessing Tools documentation are valid.

# Summary
This tool is responsible for verifying that code samples included in Esri's Geoprocessing Tools documentation are correct, and are written in good style in accordance with [PEP-8](https://www.python.org/dev/peps/pep-0008/). Using this tool to verify code samples before a release ensures that our customers are receiving the best, highest quality resources we can provide. 

# Usage
This tool is able to detect the following issues in our code samples:
- Unclosed parantheses, quotation marks
- Inconsistent tab-spacing
- Infinite loops
- Unnecessary spacing (_i.e. correcting x=2 to x = 2_) 
- Incorrect usage of string literals (_i.e. correcting r"Hello World!" to r'Hello World!'_)
- File paths which do not use string litterals
- Camelcase variables

# Contributing Guide
If you're interested in helping out, please log an issue in this repository. You may also work on an issue that someone else has logged. Once you have an issue, feel free to fork this repository or create a new branch to work on the issue. When you feel like the issue has been resolved, submit a pull request.
