"""social_drf_auth URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from google import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('auth/', include('rest_framework_social_oauth2.urls')),
    path('hello/', views.HelloView.as_view(), name='hello'),
    path('google/', views.GoogleView.as_view(), name='google'),
]
