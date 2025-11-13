Get the new csv files from medicare website.

on the rural one, Delete the first 6 or so unnecessary rows. keep all columns as it is filtering out the unneeded ones in the html

on the cba one, delete the first however many rows, and also delete all unneeded columns. Keep HCPCS, MOD, MOD2, CATG, Dallas, TX, Description. 
Rename Dallas, TX to DFW as the comma causes issues. Replace all commas in the description column with dashes.

save file as csv. Upload to github. Make sure it is the same name as old file.

Code on the website should not need to be updated - just the titles to reflect the current quarter

ZIP CODES
I just combined it into one csv file, using State, ZIp Code, Year/Qtr and Location. I removed the comma's and added "CBA" to the end of the CBA names.