from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('post', views.PostViewSet)

urlpatterns = [
    # path('post/', views.post_list), # 2개가 생성된 것과 같습니다.
    # path('post/<int:pk>/', views.post_detail), # 2개가 생성된 것과 같습니다.
    path('', include(router.urls)),
]
