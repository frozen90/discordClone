from django.urls import path
from django.conf.urls import url

from . import consumers

websocket_urlpatterns = [
    path('ws/chat/<str:RoomName>/', consumers.ChatConsumer.as_asgi()),
]