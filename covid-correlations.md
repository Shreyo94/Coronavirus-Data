# Covid Correlations


Based on data for 134 countries provided in [covid-7x.csv](https://github.com/Sukii/Coronavirus-data/blob/master/covid-7x.csv):

**Linear regression analysis results with CovidDeaths (per million)**


Parameter        |Correlation |10-fold cross-validation |CovidDeaths = ...
-----------------|------------|-------------------|---------------------------
Over65percnt     |0.4655      |0.4355             |9.2845&ast;Over65percnt-30.11
HospitalBeds     |0.1283      |-0.072             |8.6634&ast;HospitalBeds+29.1854
GINI             |0.2180      |0.1821             |-3.5641&ast;GINI+195.3872
Obessity         |0.2417      |0.2078             |3.8393&ast;Obesity rate-11.3256
Latitude         |0.3407      |0.3064             |0.0656&ast;CovidDeaths+16.4157
All parameters   |0.4962      |0.4414             |9.5886&ast;Over65percnt-11.8037&ast;HospitalBeds+0.8925&ast;GINI+0.2832&ast;Obesity rate+0.7995&ast;Latitude-49.376


