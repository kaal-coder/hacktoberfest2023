import geopy
from geopy.geocoders import Nominatim

testloc = input()
locator = Nominatim(user_agent='myGeocoder')
location = locator.geocode(testloc)

print('Latitude = {}, Longitude = {}'.format(location.latitude, location.longitude))