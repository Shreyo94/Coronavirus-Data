#Covid Correlations


Based on data for 134 countries provided in [covid-7x.csv](https://github.com/Sukii/Coronavirus-data/blob/master/covid-7x.csv):

Linear regression analysis results with CovidDeaths (per million):


Parameter        |Correlation |10-fold cross-validation |CovidDeaths = ...
-----------------|------------|-------------------|---------------------------
Over65percnt     |0.4655      |0.4355             |9.2845*Over65percnt-30.11
HospitalBeds     |0.1283      |-0.072             |8.6634*HospitalBeds+29.1854
GINI             |0.2180      |0.1821             |-3.5641*GINI+195.3872
Obessity         |0.2417      |0.2078             |3.8393*Obesity rate-11.3256
Latitude         |0.3407      |0.3064             |0.0656*CovidDeaths+16.4157
All parameters   |0.4962      |0.4414             |9.5886*Over65percnt
                 |            |                   |  -11.8037*HospitalBeds
		 |	      |		          |  +0.8925 * GINI
		 |	      |			  |  +0.2832 * Obesity rate
		 |	      |		          |  +0.7995*Latitude
		 |	      |			  |  -49.376
--------------------------------------------------------------------------------
