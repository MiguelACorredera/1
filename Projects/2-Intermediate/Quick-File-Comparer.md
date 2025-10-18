# Quick File Comparer

Tier : 2

Objective of the application. 

-   "This app should compare two excel, csv like files for exact data quickly. It should generate a report with the comparison whether pass or fail."
-   "It should list down all failure reasons."
-   "It should pick files from two different source folder and produce output in third folder."
-   "It should apply the regular expression like to get similar file by name and continue checking one by one for all the files in the folder"


## User Stories

    [ ] Read folders and retrieve a sorted list of files from both source folders.
    [ ] Match files from both folders using name-based patterns (e.g., regex or simple heuristics).
    [ ] Read files from the folders.
    [ ] Compare file sizes; mark as failure if they differ.
    [ ] Compare row and column counts between matched files.
    [ ] Check values for each row and column; mark as failure if values differ.
    [ ] Validate and compare data types of numeric columns between files.
    [ ] Validate and compare data types of date columns between files.
    [ ] Generate report in case of success stating files matched. Show number of rows compared.
    [ ] Generate report in case of failure. Add failure details including column name and row index.

  

## Bonus features

-   [ ] User can add comparison using binary comparison.
-   [ ] User can see the progress virtually of no of file to be compared, completed and remaining files.
-   [ ] Sorting the data before comparison will be advantage as sometimes sorting could be issue in comparison.

## Useful links and resources


## Example projects
