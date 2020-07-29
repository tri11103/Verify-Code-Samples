const json = [
    {
        "type": "convention",
        "module": "ExportFAA18BToShapefile",
        "obj": "",
        "line": 1,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\ExportFAA18BToShapefile.py",
        "symbol": "invalid-name",
        "message": "Module name \"ExportFAA18BToShapefile\" doesn't conform to snake_case naming style",
        "message-id": "C0103"
    },
    {
        "type": "convention",
        "module": "ExportFAA18BToShapefile",
        "obj": "",
        "line": 1,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\ExportFAA18BToShapefile.py",
        "symbol": "missing-module-docstring",
        "message": "Missing module docstring",
        "message-id": "C0114"
    },
    {
        "type": "error",
        "module": "ExportFAA18BToShapefile",
        "obj": "",
        "line": 5,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\ExportFAA18BToShapefile.py",
        "symbol": "import-error",
        "message": "Unable to import 'arcpy'",
        "message-id": "E0401"
    },
    {
        "type": "convention",
        "module": "ExportFAA18BToShapefile",
        "obj": "",
        "line": 10,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\ExportFAA18BToShapefile.py",
        "symbol": "invalid-name",
        "message": "Constant name \"inWork\" doesn't conform to UPPER_CASE naming style",
        "message-id": "C0103"
    },
    {
        "type": "convention",
        "module": "ExportFAA18BToShapefile",
        "obj": "",
        "line": 11,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\ExportFAA18BToShapefile.py",
        "symbol": "invalid-name",
        "message": "Constant name \"outLocation\" doesn't conform to UPPER_CASE naming style",
        "message-id": "C0103"
    },
    {
        "type": "convention",
        "module": "MigrateProductLibraryInfo_example",
        "obj": "",
        "line": 2,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\MigrateProductLibraryInfo_example.py",
        "symbol": "line-too-long",
        "message": "Line too long (154/100)",
        "message-id": "C0301"
    },
    {
        "type": "convention",
        "module": "MigrateProductLibraryInfo_example",
        "obj": "",
        "line": 1,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\MigrateProductLibraryInfo_example.py",
        "symbol": "invalid-name",
        "message": "Module name \"MigrateProductLibraryInfo_example\" doesn't conform to snake_case naming style",
        "message-id": "C0103"
    },
    {
        "type": "convention",
        "module": "MigrateProductLibraryInfo_example",
        "obj": "",
        "line": 1,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\MigrateProductLibraryInfo_example.py",
        "symbol": "missing-module-docstring",
        "message": "Missing module docstring",
        "message-id": "C0114"
    },
    {
        "type": "error",
        "module": "MigrateProductLibraryInfo_example",
        "obj": "",
        "line": 5,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\MigrateProductLibraryInfo_example.py",
        "symbol": "import-error",
        "message": "Unable to import 'arcpy'",
        "message-id": "E0401"
    },
    {
        "type": "error",
        "module": "MigrateProductLibraryInfo_example",
        "obj": "",
        "line": 6,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\MigrateProductLibraryInfo_example.py",
        "symbol": "import-error",
        "message": "Unable to import 'arcpyproduction'",
        "message-id": "E0401"
    },
    {
        "type": "convention",
        "module": "MigrateProductLibraryInfo_example",
        "obj": "",
        "line": 12,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\MigrateProductLibraryInfo_example.py",
        "symbol": "invalid-name",
        "message": "Constant name \"Product_Library\" doesn't conform to UPPER_CASE naming style",
        "message-id": "C0103"
    },
    {
        "type": "convention",
        "module": "MigrateProductLibraryInfo_example",
        "obj": "",
        "line": 13,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\aero\\MigrateProductLibraryInfo_example.py",
        "symbol": "invalid-name",
        "message": "Constant name \"Target_Workspace\" doesn't conform to UPPER_CASE naming style",
        "message-id": "C0103"
    }
]
;
var python = [];
python.push(`# Name: ExportAirportsToFAA18BShapefile_Example.py
# Description: Exports 3 Airports feature classes to shapefiles.
# Requirements: ArcGIS Aviation Airports

import arcpy

arcpy.CheckOutExtension("Aeronautical")

# local variables for workspace and output parameters
inWork = "C:/data/Airports.sde"
outLocation = "C:/data"

# make three feature layers for export
arcpy.MakeFeatureLayer_management(
    "C:/data/Airports.sde/Airports.DBO.Airspace/Airports.DBO.Obstacle", "Obstacle")
arcpy.MakeFeatureLayer_management(
    "C:/data/Airports.sde/Airports.DBO.Airspace/Airports.DBO.ObstructionArea", "ObstructionArea")
arcpy.MakeFeatureLayer_management(
    "C:/data/Airports.sde/Airports.DBO.Airspace/Airports.DBO.LandmarkSegment", "LandmarkSegment")

# create a list of the input features to export
inFeatures = ["Obstacle", "ObstructionArea", "LandmarkSegment"]

# export to FAA 18B shapefile format
arcpy.ExportAirportsToFAA18BShapefile_aviationmanagement(
    inWork, outLocation, inFeatures)

arcpy.CheckInExtension("Aeronautical")
`);
python.push(`# Name: MigrateProductLibraryInfo_example.py
# Description: migrate AOI and extraction data from product library into a geodatabase with ArcGIS Aviation Charting in Pro based AOI and extraction table

# Import arcpyproduction
import arcpy
import arcpyproduction

# Check out Aviation license
arcpy.CheckOutExtension("Aeronautical")

# Set variables
Product_Library = r'c:\data\PL.sde'
Target_Workspace = r'c:\data\Database.sde'

# Execute MigrateProductLibrary
arcpyproduction.aviation.charting.MigrateProductLibraryInfo(
    Product_Library, Target_Workspace)

# Check in Aviation license
arcpy.CheckInExtension("Aeronautical")
`);
