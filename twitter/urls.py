"""Twitter URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.views.generic import TemplateView
from django.conf import settings
from django.contrib import admin
from django.contrib.auth import views as auth_views
from rest_framework import routers
from post import views as post_views
from blog import views as blog_views
from core import views as core_views
from category import views as category_views
from submission import views as submission_views
from like import views as like_views
from comment import views as comment_views
from event import views as event_views
from chat import views as chat_views
from message import views as message_views
from core import views as user_views
from twitter import index

router = routers.DefaultRouter()
router.register(r'posts', post_views.PostViewSet)
router.register(r'submissions', submission_views.SubmissionViewSet)
router.register(r'blogs', blog_views.BlogViewSet)
router.register(r'categories', category_views.CategoryViewSet)
router.register(r'likes', like_views.LikeViewSet)
router.register(r'comments', comment_views.CommentViewSet)
router.register(r'events', event_views.EventViewSet)
router.register(r'chats', chat_views.ChatViewSet)
router.register(r'messages', message_views.MessageViewSet)
router.register(r'users', user_views.UserViewSet)
router.register(r'me', core_views.SessionUserViewSet, base_name='me')


urlpatterns = [
    #url(r'^$', core_views.home, name='home'),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^login/$', auth_views.login, name='login'),
    url(r'^logout/$', auth_views.logout, name='logout'),
    url(r'^oauth/', include('social_django.urls', namespace='social')),
   # url(r'^$', TemplateView.as_view(template_name='index.html'), name='home'),
   #  url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    url(r'^$', index.index, name='index_page'),
    url(r'^.*?/$', index.index),

]
if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns