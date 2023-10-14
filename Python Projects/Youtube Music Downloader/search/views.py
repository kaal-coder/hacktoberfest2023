import requests
from django.conf import settings
from django.shortcuts import render, redirect

def index(request):
    videos = []

    if request.method == 'POST':
        search_url = 'https://www.googleapis.com/youtube/v3/search'
        video_url = 'https://www.googleapis.com/youtube/v3/videos'

        search_params = {
            'part' : 'snippet',
            'q' : request.POST["search"],
            'key' : settings.YOUTUBE_DATA_API_KEY,
            'maxResults' : 9,
            'type' : 'video'
        }



        r = requests.get(search_url, params=search_params)

        results = r.json()['items']

        video_ids = []
        for result in results:
            video_ids.append(result['id']['videoId'])

        video_params = {
            'key' : settings.YOUTUBE_DATA_API_KEY,
            'part' : 'snippet',
            'id' : ','.join(video_ids),
            'maxResults' : 9
        }

        r = requests.get(video_url, params=video_params)



        results = r.json()['items']

# connect ytmp3 to the  youtube api id
        for result in results:
            video_data = {
                'title' : result['snippet']['title'],
                'id' : result['id'],
                'url' : f'https://ytmp3cut.com/{ result["id"] }',
                'thumbnail' : result['snippet']['thumbnails']['high']['url']
            }

            videos.append(video_data)
    context = {
        'videos' : videos
    }

    return render(request,'search/index.html',context)
