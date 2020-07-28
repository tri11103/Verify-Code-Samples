const json = [
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
const python = `# Name: MigrateProductLibraryInfo_example.py
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
`