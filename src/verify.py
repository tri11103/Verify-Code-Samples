import sys
from pylint.lint import Run

args = sys.argv
json = Run([
        args[1], 
        "--output-format=json"
    ],)

print(json)

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