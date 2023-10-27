from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class TemplateView(TemplateView):
    template_name = "social_app/index.html"
