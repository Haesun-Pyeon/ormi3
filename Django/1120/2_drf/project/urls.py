from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),
    # 웹브라우저에서 로그인이 되게 해줍니다.(Test용이)
    path('api-auth/', include('rest_framework.urls')),
]
