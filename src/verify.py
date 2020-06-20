import sys
import pathlib
import webbrowser
import subprocess
import shlex
from pylint.lint import Run

args = sys.argv
try:
    json = subprocess.check_output('python -m pylint "%s" --output-format=json'%args[1], stderr=subprocess.STDOUT, shell=True)
except subprocess.CalledProcessError as e:
    json = e.output.decode()

file = open("../tmp/data.js", "w")
file.write("const json = " + json)

webbrowser.open_new(str(pathlib.Path(__file__).parent.absolute().as_uri()) + str("/index.html"))




'''

import re

args = sys.argv

buffer = file.read()

pattern_file = open("../src/patterns/python patterns", "r")
pattern_buffer = pattern_file.read()

issues = 0

# Regex Pattern Check
for pattern in pattern_buffer.split("\n"):        
    expression, warning = pattern.split(",")
    matches = re.findall(expression, buffer)

    if not (len(matches) == 0):
        print(warning + ", instances: " + str(len(matches)) + " " + str(matches))        
        issues += 1

print("Done verifying code sample. " + str(issues) + " issues found.")
'''