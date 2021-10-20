from django.urls import path
from .views import UserView, dashboard

urlpatterns = [
    path('', UserView.as_view()),
    path('dashboard/', dashboard)
    # path('detail/<int:id>/', UserDetails.as_view()),
    # path('generic/user/<int:id>/', GenericAPIView.as_view())
]
