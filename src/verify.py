import sys
import pathlib
import webbrowser
import subprocess
import shlex
from pylint.lint import Run

args = sys.argv
try:
    json = subprocess.check_output('python -m pylint "%s" --rcfile=../src/pylint.config --output-format=json'%args[1], stderr=subprocess.STDOUT, shell=True).decode()
except subprocess.CalledProcessError as e:
    json = e.output.decode()



data_file = open("../tmp/data.js", "w")
data_file.write("const json = " + json)
data_file.close()

data_file = open("../tmp/data.js", "a+")
python_file = open(args[1], "r")
python_buffer = python_file.read()
data_file.write("const python = `" + python_buffer + "`")
data_file.close()

# webbrowser.open_new(str(pathlib.Path(__file__).parent.absolute().as_uri()) + str("/index.html"))