This repository contains Covid-deaths per million population CSV data files by country obtained on June 11th 2020.
You can try data analysis with current data as well. 

You can join CSV data with first column being country using "join" command after sorting it:

$sort file1.csv > file1x.csv

$sort file2.csv > file2x.csv

$join -t"," file1x.csv file2x.csv > file3x.csv

(If you are MS Windows/Mac user then try to add these Unix command-line utilities.) 

Please install Weka from here:

https://waikato.github.io/weka-wiki/downloading_weka/#windows_1


The Vimeo video below describes how to analyse this data using Weka:

https://vimeo.com/433089942


