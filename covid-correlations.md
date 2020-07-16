# Covid Correlations


Based on data for 134 countries provided in [covid-7x.csv](https://github.com/Sukii/Coronavirus-data/blob/master/covid-7x.csv):

**Linear regression analysis results with CovidDeaths (per million)**


Parameter        |Correlation |10-fold cross-validation |CovidDeaths = ...
-----------------|------------|-------------------|---------------------------
Over65percnt     |0.4655      |0.4355             |9.2845&ast;Over65percnt-30.11
HospitalBeds     |0.1283      |-0.072             |8.6634&ast;HospitalBeds+29.1854
GINI             |0.2180      |0.1821             |-3.5641&ast;GINI+195.3872
Obessity         |0.2417      |0.2078             |3.8393&ast;Obesity rate-11.3256
Latitude         |0.3407      |0.3180             |1.7699&ast;Latitude+22.244 
Foreign population<sup>1</sup>  |0.4556      |0.3771             |74.632&ast;Foreign population+20.3594
All parameters   |0.4962      |0.4414             |9.5886&ast;Over65percnt-11.8037&ast;HospitalBeds+0.8925&ast;GINI+0.2832&ast;Obesity rate+0.7995&ast;Latitude-49.376

<sup>1</sup>This is from a different data [covid-8x.csv](https://github.com/Sukii/Coronavirus-data/blob/master/covid-8x.csv); the rest are from [covid-7x.csv](https://github.com/Sukii/Coronavirus-data/blob/master/covid-7x.csv).

**Linear regression analysis results of Covid deaths (per million) vs BCG vaccination**

Parameter    |Correlation  |10-fold cross-validation    |CovidDeaths = 
-------------|-------------|----------------------------|--------------
BCG<sup>1</sup>  |0.5713       |0.3166                  |-82.4077&ast;BCG-Yes+81.5631&ast;BCG-No+104.5083
BCG<sup>2</sup>  |0.3239       |0.1932                  |-138.2084&ast;BCG+160.5588




<sup>1</sup>This is from [covid-bcg.csv](https://github.com/Sukii/Coronavirus-data/blob/master/covid-bcg.csv); <sup>2</sup>This is from [covid-9x.csv](https://github.com/Sukii/Coronavirus-data/blob/master/covid-9x.csv). They are from two different sources.


