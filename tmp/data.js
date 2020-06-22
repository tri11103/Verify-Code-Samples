const json = [
    {
        "type": "convention",
        "module": "export_f_a_a18_b_to_shapefile-9",
        "obj": "",
        "line": 1,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\export_f_a_a18_b_to_shapefile-9.py",
        "symbol": "invalid-name",
        "message": "Module name \"export_f_a_a18_b_to_shapefile-9\" doesn't conform to snake_case naming style",
        "message-id": "C0103"
    },
    {
        "type": "convention",
        "module": "export_f_a_a18_b_to_shapefile-9",
        "obj": "",
        "line": 10,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\export_f_a_a18_b_to_shapefile-9.py",
        "symbol": "invalid-name",
        "message": "Constant name \"inWork\" doesn't conform to UPPER_CASE naming style",
        "message-id": "C0103"
    },
    {
        "type": "convention",
        "module": "export_f_a_a18_b_to_shapefile-9",
        "obj": "",
        "line": 11,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\export_f_a_a18_b_to_shapefile-9.py",
        "symbol": "invalid-name",
        "message": "Constant name \"outLocation\" doesn't conform to UPPER_CASE naming style",
        "message-id": "C0103"
    }
]
const python = `# Name: ExportAirportsToFAA18BShapefile_Example.py
# Description: Exports 3 Airports feature classes to shapefiles.
# Requirements: ArcGIS Aviation Airports

import arcpy

arcpy.CheckOutExtension("Aeronautical")

# local variables for workspace and output parameters
inWork = "C:/data/Airports.sde"
outLocation = "C:/data"

# make three feature layers for export
arcpy.MakeFeatureLayer_management("C, /data/Airports.sde/Airports.DBO.Airspace/Airports.DBO.Obstacle", "Obstacle")
arcpy.MakeFeatureLayer_management("C, /data/Airports.sde/Airports.DBO.Airspace/Airports.DBO.ObstructionArea", "ObstructionArea")
arcpy.MakeFeatureLayer_management("C, /data/Airports.sde/Airports.DBO.Airspace/Airports.DBO.LandmarkSegment", "LandmarkSegment")

# create a list of the input features to export
inFeatures = ["Obstacle", "ObstructionArea", "LandmarkSegment"]

# export to FAA 18B shapefile format
arcpy.ExportAirportsToFAA18BShapefile_aviationmanagement(inWork, outLocation, inFeatures)

arcpy.CheckInExtension("Aeronautical")
`