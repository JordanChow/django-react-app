from django.urls import path, include
from .views import User as MyUser, UserDetails, GenericAPIView, UserViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('user', UserViewSet, basename='user')

urlpatterns = [
    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
    path('user/', MyUser.as_view()),
    path('detail/<int:id>/', UserDetails.as_view()),
    path('generic/user/<int:id>/', GenericAPIView.as_view())
]
