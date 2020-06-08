import sys
import re

args = sys.argv
file = open(args[1], "r")
buffer = file.read()

pattern_file = open("../src/patterns/python patterns", "r")
pattern_buffer = pattern_file.read()

issues = 0

for pattern in pattern_buffer.split("\n"):        
    expression, warning = pattern.split(",")
    matches = re.findall(expression, buffer)

    if not (len(matches) == 0):
        print(warning + ", instances: " + str(len(matches)))
        issues += 1

print("Done verifying code sample. " + str(issues) + " issues found.")