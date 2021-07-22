from django.urls import path
from django.conf.urls import url

from . import consumers

websocket_urlpatterns = [
    path('ws/chat/<str:room_name>/<str:channel_name>/', consumers.ChatConsumer.as_asgi()),
]