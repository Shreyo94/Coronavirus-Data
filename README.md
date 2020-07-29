This repository contains Covid-deaths per million population, as CSV data files, country by country obtained on June 11th 2020 (which happened to be my son's 20th birthday).

You can try the same data analysis with the updated current data as well, which is now available at many sources (e.g. [WHO](https://covid19.who.int) or [OWID](https://github.com/owid/covid-19-data/tree/master/public/data)).

You can join CSV data with first column being country using "join" command after sorting it:

<code>$sort file1.csv > file1x.csv</code>

<code>$sort file2.csv > file2x.csv</code>

<code>$join -t"," file1x.csv file2x.csv > file3x.csv</code>

(If you are MS Windows user then try to add Unix command-line utilities from [here](https://sourceforge.net/projects/unxutils/files/unxutils/current/UnxUtils.zip)).

Please install Weka from [here](https://waikato.github.io/weka-wiki/downloading_weka/#windows_1).


The Vimeo video below describes how to analyse this data using Weka:

[Video tutorial](https://vimeo.com/433089942).

To get a better perspective of these techniques you can look at non-linear regression modelling explained [here](https://github.com/Sukii/Coronavirus-data/blob/master/machine-learning.md)

We used "simplescreenrecorder" for recording these videos.

Interesting new facts (and for us more data):
[BCG vaccination policy and preventive chloroquine usage: do they have an impact on COVID-19 pandemic?](https://www.nature.com/articles/s41419-020-2720-9)

Unfortunately the supplementary files in this article is in the form of images inside a MS Word DocX [file](https://static-content.springer.com/esm/art%3A10.1038%2Fs41419-020-2720-9/MediaObjects/41419_2020_2720_MOESM1_ESM.docx).
So we extracted the images by unzipping the DocX file (which is actually a Zipped XML dataset) and OCRed the images first by cropping the tables (multiple tables have been merged into one image) and converting to image.pnm files using [gimp](https://www.gimp.org/). We use [gocr](http://jocr.sourceforge.net/):

<code>$gocr image.pnm > data.csv</code>

During the OCR some "o" inside the text became "0", some "1" inside numbers became "l" or "I" (these were easy to get rid-off using "sed" regular expressions), but some "4" became "0" inside the numbers (this had to be fixed manually, as there was no regexp pattern).
Anyhow, we managed to get it into shape and here it is [covid-bcg.csv](https://github.com/Sukii/Coronavirus-data/blob/master/data/covid-bcg.csv).
We also merged (using "join" command mentioned above) this with [covid-7x.csv](https://github.com/Sukii/Coronavirus-data/blob/master/data/covid-7x.csv) and produced [covid-7x-bcg.csv](https://github.com/Sukii/Coronavirus-data/blob/master/data/covid-7x-bcg.csv)

We earlier added [covid-9x.csv](https://github.com/Sukii/Coronavirus-data/blob/master/data/covid-9x.csv) file that has the BCG data as well from another source.

We also have added chloroquine usage data from Africa [chloroquine-africa.csv](https://github.com/Sukii/Coronavirus-data/blob/master/data/chloroquine-africa.csv) from the above [paper](https://www.nature.com/articles/s41419-020-2720-9/figures/4).

We are now ready to plunge into this interesting (deadly) discussion about covid:
[to be or not to be](
https://github.com/Sukii/Coronavirus-data/wiki)
