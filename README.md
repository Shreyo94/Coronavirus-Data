This repository contains Covid-deaths per million population, as CSV data files, country by country obtained on June 11th 2020 (which happened to be my son's 20th birthday).

You can try the same data analysis with the updated current data as well, which is now available at many sources (e.g. https://covid19.who.int).

You can join CSV data with first column being country using "join" command after sorting it:

$sort file1.csv > file1x.csv

$sort file2.csv > file2x.csv

$join -t"," file1x.csv file2x.csv > file3x.csv

(If you are MS Windows user then try to add Unix command-line utilities from here:
https://sourceforge.net/projects/unxutils/files/unxutils/current/UnxUtils.zip).

Please install Weka from here:

https://waikato.github.io/weka-wiki/downloading_weka/#windows_1


The Vimeo video below describes how to analyse this data using Weka:

https://vimeo.com/433089942

Interesting new facts have arrived:
https://www.nature.com/articles/s41419-020-2720-9

We added [covid-9x.csv](https://github.com/Sukii/Coronavirus-data/blob/master/covid-9x.csv) file that has the BCG data as well.

We will be studying this as well as other data reported in the above article.


