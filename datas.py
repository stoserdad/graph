import requests
import datetime

fdata = requests.get('http://levin.omnicomm.ru/search/graphdata')
data = fdata.json()['graph']

days = []

for i in range(len(fdata.json()['graph'])):
	day = datetime.datetime.fromtimestamp(data[i]['_id']).strftime('%Y-%m-%d %H:%M:%S')
	print data[i]['_id'], data[i]['counts']
	days.append((day, data[i]['counts']))

