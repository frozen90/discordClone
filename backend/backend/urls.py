"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.conf.urls import include
from rest_framework import routers
from django.contrib import admin
from django.urls import path
from frontendapp import urls as frontendapp_urls
from rest_framework.authtoken import views as rest_views
from rest_framework_jwt.views import obtain_jwt_token
from backendapp.views import current_user, UserList
from backendapp.api import RegisterAPI, LoginAPI, UserAPI, StaffAPI
from knox import views as knox_views

router = routers.DefaultRouter()
# router.register(r'users', backendapp_views.UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', UserList.as_view()),
    path('api/current_user/',current_user),
    
    #AUTH ENDPOINTS
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view() ),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),

    #FUNCTIONAL ENDPOINTS
    path('api/staff/', StaffAPI.as_view()),
    path('', include(frontendapp_urls)),
    

    
]
