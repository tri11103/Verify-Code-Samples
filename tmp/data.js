const json = [
    {
        "type": "convention",
        "module": "buildingoffsets",
        "obj": "",
        "line": 14,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\py\\defensemapping\\buildingoffsets.py",
        "symbol": "line-too-long",
        "message": "Line too long (449/240)",
        "message-id": "C0301"
    },
    {
        "type": "convention",
        "module": "buildingoffsets",
        "obj": "",
        "line": 12,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\py\\defensemapping\\buildingoffsets.py",
        "symbol": "invalid-name",
        "message": "Constant name \"productFile\" doesn't conform to UPPER_CASE naming style",
        "message-id": "C0103"
    },
    {
        "type": "convention",
        "module": "buildingoffsets",
        "obj": "",
        "line": 13,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\py\\defensemapping\\buildingoffsets.py",
        "symbol": "invalid-name",
        "message": "Constant name \"dataset\" doesn't conform to UPPER_CASE naming style",
        "message-id": "C0103"
    },
    {
        "type": "convention",
        "module": "buildingoffsets",
        "obj": "",
        "line": 14,
        "column": 0,
        "path": "C:\\Users\\tri11103\\OneDrive - Esri\\Desktop\\py\\defensemapping\\buildingoffsets.py",
        "symbol": "invalid-name",
        "message": "Constant name \"coordsys\" doesn't conform to UPPER_CASE naming style",
        "message-id": "C0103"
    }
]
const python = `# Name: BuildingOffsets_Example.py
# Description: Executes Building Offsets Defense Mapping tool using an input XML specification file.
# Requirements: ArcGIS Defense Mapping

import arcpy

# check out a defense license & set gp environment
arcpy.CheckOutExtension("defense")
arcpy.env.workspace = "c:/data/mgcp.gdb"

# variables for tool parameters
productFile = "c:/data/defense_carto_spec.xml"
dataset = "MGCP"
coordsys = "PROJCS['GCS WGS 1984 UTM Zone 11N (Calculated)',GEOGCS['GCS_WGS_1984',DATUM['D_WGS_1984',SPHEROID['WGS_1984',6378137.0,298.257223563]],PRIMEM['Greenwich',0.0],UNIT['Degree',0.0174532925199433]],PROJECTION['Transverse_Mercator'],PARAMETER['False_Easting',500000.0],PARAMETER['False_Northing',0.0],PARAMETER['Central_Meridian',-117.0],PARAMETER['Scale_Factor',0.9996],PARAMETER['Latitude_Of_Origin',0.0],UNIT['Meter',1.0]];IsHighPrecision"

# execute the tool
arcpy.BuildingOffsets_defense(productFile, dataset, coordsys)

# check in the defense license
arcpy.CheckInExtension("defense")
`