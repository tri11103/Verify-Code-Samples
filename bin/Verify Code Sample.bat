@echo off

python -V | find /v "Python" >NUL 2>NUL && (goto :NOPYTHON)
python -V | find "Python" >NUL 2>NUL && (goto :PYTHON)

:NOPYTHON
echo "Error: No installation of Python detected. Please install Python 3.x before continuing."
start "" "https://python.org/downloads/windows"

:PYTHON
:: @todo(tdamron): Rather than install Pylint every time the program is run, it is better to check if it's installed once.
python -m pip install pylint 
python -m pip install autopep8
python "../src/verify.py" %1 
