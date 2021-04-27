from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from knox.models import AuthToken
from .models import Staff
from .serializer import UserSerializer, RegisterSerializer, LoginSerializer, StaffSerializer
from .permissions import HasGroupPermission

#Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user,
            context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
#Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user,
            context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
#Get USER API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

#Get Staff Members
class StaffAPI(generics.GenericAPIView):
    permission_classes = [HasGroupPermission]
    required_groups = {
         'GET': ['manager', 'order_admin'],
         'POST': ['manager', 'order_admin'],
     }
    staff = Staff.objects.all()
    serializer_class = StaffSerializer(staff, many=True)
   
    def get(self, request, *args, **kwargs):
        
        return Response({'rows':self.serializer_class.data, 'total':self.staff.count()})